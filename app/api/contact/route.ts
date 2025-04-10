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

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: `shreyxs@gmail.com`, // Send to yourself
      subject: `Contact Form: Message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
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
