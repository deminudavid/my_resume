import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

if (!process.env.RESEND_API_KEY) {
  console.error("❌ Missing RESEND_API_KEY environment variable.");
}

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, country, message } = await req.json();

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "deminudavid@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("❌ Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
