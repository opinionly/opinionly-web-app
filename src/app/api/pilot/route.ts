import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const fromEmail = process.env.RESEND_FROM;

  if (!apiKey || !notifyEmail || !fromEmail) {
    console.error("pilot: missing env vars", {
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

  const data = body as { email?: unknown; company?: unknown; formId?: unknown };
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const company = typeof data.company === "string" ? data.company.trim() : "";
  const formId = typeof data.formId === "string" ? data.formId : "";

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  if (!company || company.length > 200) {
    return NextResponse.json({ error: "Invalid company." }, { status: 400 });
  }

  const resend = new Resend(apiKey);
  const subject = "[Opinionly Teams] New pilot inquiry";
  const html = `
    <h2>New pilot inquiry</h2>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${formId ? `<p style="color:#888;font-size:12px;">Form: ${escapeHtml(formId)}</p>` : ""}
    <p style="color:#888;font-size:12px;">Sent from teams.opinionly.io pilot form.</p>
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
      console.error("pilot: resend error", error);
      return NextResponse.json(
        { error: "Failed to send. Try again." },
        { status: 502 },
      );
    }

    console.log("pilot: signup", { company, formId });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("pilot: unexpected error", err);
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
