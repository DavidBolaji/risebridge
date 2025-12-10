// app/api/contact/route.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail/transporter";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const mailOptions = {
      from: `enquiries@risebridgeinitiative.com`,
      to: "enquiries@risebridgeinitiative.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
