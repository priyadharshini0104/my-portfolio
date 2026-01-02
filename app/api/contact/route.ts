import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields: name, email, message" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    let transporter;
    let to = process.env.TO_EMAIL ?? process.env.EMAIL_USER;

    if (process.env.NODE_ENV !== "production" && (!process.env.EMAIL_USER || !process.env.EMAIL_PASS)) {
      // Development fallback: use nodemailer test account (Ethereal)
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      to = to ?? testAccount.user;
      console.info("Using Nodemailer test account for local email delivery");
    } else {
      const user = process.env.EMAIL_USER;
      const pass = process.env.EMAIL_PASS;

      if (!user || !pass || !to) {
        console.error("Missing email configuration", { hasUser: !!user, hasPass: !!pass, hasTo: !!to });
        return NextResponse.json({ error: "Email configuration is incomplete: set EMAIL_USER and EMAIL_PASS (and optionally TO_EMAIL)" }, { status: 500 });
      }

      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ?? "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: { user, pass },
      });
    }

    const mail = {
      from: `"${name}" <${email}>`,
      to,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>`,
    };

    const info = await transporter.sendMail(mail);

    const previewUrl = nodemailer.getTestMessageUrl(info) ?? null;
    if (previewUrl) console.info("Email preview URL:", previewUrl);

    return NextResponse.json({ ok: true, message: "Email sent", previewUrl });
  } catch (err) {
    console.error("Contact route error", err);
    // Avoid leaking internal stack in production, but provide helpful message in development
    const devMessage = process.env.NODE_ENV !== "production" ? String(err) : undefined;
    return NextResponse.json({ error: "Internal server error", details: devMessage }, { status: 500 });
  }
}

export function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
