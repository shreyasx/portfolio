import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter with Gmail credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// The site is served from shreyasx.netlify.app. The previous list allowed only
// shreyas.studio, which has since lapsed and now redirects to a parking page —
// so every submission from the live site was being rejected with a 403.
// Extra hosts (a future custom domain) can be added via CONTACT_ALLOWED_HOSTS.
const ALLOWED_HOSTS = new Set(
  [
    "shreyasx.netlify.app",
    ...(process.env.CONTACT_ALLOWED_HOSTS?.split(",") ?? []),
    ...(process.env.NODE_ENV === "development"
      ? ["localhost:3000", "127.0.0.1:3000"]
      : []),
  ]
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean)
);

function isAllowedHost(host: string | null | undefined): boolean {
  if (!host) return false;

  const normalized = host.toLowerCase();

  // Netlify branch and deploy-preview builds are served as
  // <context>--shreyasx.netlify.app, so accept those too.
  return (
    ALLOWED_HOSTS.has(normalized) ||
    normalized.endsWith("--shreyasx.netlify.app")
  );
}

// Origin and Referer carry a full URL; compare on the parsed host so a value
// like "evil-shreyasx.netlify.app.attacker.com" cannot pass a substring test.
function hostFromUrl(value: string | null): string | null {
  if (!value) return null;

  try {
    return new URL(value).host;
  } catch {
    return null;
  }
}

// Interpolated into the HTML mail body below.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Helper function to get user's IP address
function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback to unknown if no IP found
  return "unknown";
}

// Helper function to fetch location from IP
async function getLocationFromIP(ip: string) {
  try {
    // Skip location fetch for local development IPs
    if (
      ip === "unknown" ||
      ip.startsWith("127.") ||
      ip.startsWith("192.168.") ||
      ip.startsWith("10.") ||
      ip === "::1"
    ) {
      return {
        city: "Local Development",
        regionName: "",
        country: "",
        timezone: "",
        isp: "",
      };
    }

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,zip,timezone,isp`,
      {
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Failed to fetch location");
    }

    const data = await response.json();

    if (data.status === "success") {
      return {
        city: data.city || "",
        regionName: data.regionName || "",
        country: data.country || "",
        zip: data.zip || "",
        timezone: data.timezone || "",
        isp: data.isp || "",
      };
    } else {
      throw new Error("Location API returned failure status");
    }
  } catch (error) {
    console.error("Error fetching location:", error);
    return {
      city: "Unknown",
      regionName: "",
      country: "",
      timezone: "",
      isp: "",
    };
  }
}

export async function POST(request: NextRequest) {
  // Check the request actually came from this site. Browsers send Origin on every
  // cross-site *and* same-site POST, so it is the real signal; Referer is the
  // fallback. The old code also accepted a matching Host header, which any direct
  // request to the site satisfies — that made the check trivially bypassable.
  const originHost = hostFromUrl(request.headers.get("origin"));
  const refererHost = hostFromUrl(request.headers.get("referer"));

  if (!isAllowedHost(originHost) && !isAllowedHost(refererHost)) {
    return NextResponse.json(
      { message: "Unauthorized request origin" },
      { status: 403 }
    );
  }

  try {
    // Parse the request body
    const { name, email, message } = await request.json();

    // Get user's IP and fetch location
    const clientIP = getClientIP(request);
    const location = await getLocationFromIP(clientIP);

    // Validate required fields. The type check matters: everything below calls
    // string methods on these, so a JSON number or object would throw a 500.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Format location string
    const locationString = [
      location.city,
      location.regionName,
      location.country,
    ]
      .filter(Boolean)
      .join(", ");

    const fullLocationInfo = locationString || "Unknown Location";
    const locationDetails = `${fullLocationInfo}${location.timezone ? ` (${location.timezone})` : ""}${location.isp ? ` - ${location.isp}` : ""}`;

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: `shreyasx@protonmail.ch`, // Send to yourself
      // Strip CR/LF so a crafted name cannot inject extra mail headers.
      subject: `Contact Form: Message from ${name.replace(/[\r\n]+/g, " ").slice(0, 120)}`,
      // Reply goes to whoever filled in the form — it used to point back at the
      // recipient, so hitting reply just mailed yourself.
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        Location: ${locationDetails}
        IP Address: ${clientIP}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Location:</strong> ${escapeHtml(locationDetails)}</p>
        <p><strong>IP Address:</strong> ${escapeHtml(clientIP)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
