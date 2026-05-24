import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM;

  if (!apiKey || !notifyEmail || !fromEmail) {
    console.error("waitlist: missing env vars", {
      hasKey: Boolean(apiKey),
      hasNotify: Boolean(notifyEmail),
      hasFrom: Boolean(fromEmail),
    });
    return NextResponse.json(
      { error: "Server not configured." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const email = typeof (body as { email?: unknown })?.email === "string"
    ? (body as { email: string }).email.trim()
    : "";

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const subject = "[Opinionly] New waitlist signup";
  const html = `
    <h2>New waitlist signup</h2>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p style="color:#888;font-size:12px;">Sent from opinionly.io waitlist form.</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: notifyEmail,
      subject,
      html,
      replyTo: email,
    });

    if (error) {
      console.error("waitlist: resend error", error);
      return NextResponse.json(
        { error: "Failed to send. Try again." },
        { status: 502 },
      );
    }

    console.log("waitlist: signup", { email });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("waitlist: unexpected error", err);
    return NextResponse.json(
      { error: "Failed to send. Try again." },
      { status: 502 },
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
