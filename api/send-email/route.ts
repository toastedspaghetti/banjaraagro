import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, message,recaptchaToken } = data;

    // 1. ✅ Verify reCAPTCHA v3 token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${recaptchaToken}`,
    });

    const verificationData = await verificationRes.json();

    if (!verificationData.success || verificationData.score < 0.5) {
      console.warn("reCAPTCHA failed:", verificationData);
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed", data: verificationData },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Message',
      text: message,
      html: `<p><strong>From:</strong> ${firstName} ${lastName} (${email})</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
