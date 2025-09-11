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
  // Check if request is from allowed domain
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const host = request.headers.get("host");

  const allowedDomains = ["shreyas.studio", "www.shreyas.studio"];
  const allowedHosts = [...allowedDomains];

  // For local development
  if (process.env.NODE_ENV === "development") {
    allowedHosts.push("localhost:3000");
  }

  const isAllowedOrigin = origin
    ? allowedDomains.some((domain) => origin.includes(domain))
    : false;

  const isAllowedReferer = referer
    ? allowedDomains.some((domain) => referer.includes(domain))
    : false;

  const isAllowedHost = host
    ? allowedHosts.some((allowedHost) => host.includes(allowedHost))
    : false;

  if (!isAllowedOrigin && !isAllowedReferer && !isAllowedHost) {
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

    // Validate required fields
    if (!name || !email || !message) {
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
      subject: `Contact Form: Message from ${name}`,
      replyTo: `shreyasx@protonmail.ch`,
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
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${locationDetails}</p>
        <p><strong>IP Address:</strong> ${clientIP}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
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
