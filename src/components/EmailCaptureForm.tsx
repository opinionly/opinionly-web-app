"use client";

import { useState, FormEvent } from "react";
import { trackEvent, trackPixel } from "@/lib/analytics";

interface Props {
  id?: string;
  /**
   * Which funnel this submission belongs to. Reaches the notification email's
   * subject line so an "Android, tell me when it lands" signup can't be
   * mistaken for the pre-launch waitlist it shares a form with. Must be a
   * value the API's allow-list knows — see src/app/api/waitlist/route.ts.
   */
  source?: string;
  submitLabel?: string;
  successLabel?: string;
}

type Status = "idle" | "submitting" | "error" | "success";

export default function EmailCaptureForm({
  id,
  source = "waitlist",
  submitLabel = "Get early access",
  successLabel = "You're on the list ✓",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;

    trackEvent("email_form_submit", {
      form_id: id ?? "email_capture",
      email_length: trimmed.length,
      method: source,
    });

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        const msg = data?.error ?? "Something went wrong. Try again.";
        setStatus("error");
        setErrorMsg(msg);
        trackEvent("email_form_error", {
          form_id: id ?? "email_capture",
          status: res.status,
          method: source,
        });
        return;
      }

      setStatus("success");
      trackEvent("email_form_success", {
        form_id: id ?? "email_capture",
        method: source,
      });
      trackPixel("Lead");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
      trackEvent("email_form_error", {
        form_id: id ?? "email_capture",
        status: 0,
        method: source,
      });
    }
  };

  return (
    <>
      <form
        id={id}
        onSubmit={handleSubmit}
        className="flex max-w-[440px] flex-wrap gap-2"
      >
        {status !== "success" ? (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === "submitting"}
              className="min-w-[160px] flex-1 rounded-full border-none bg-white px-5 py-3.5 font-[inherit] text-base text-ink shadow-(--shadow-sm) outline-none transition-shadow duration-150 focus:[box-shadow:0_0_0_2px_var(--blue),var(--shadow-sm)] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="cursor-pointer rounded-full border-none bg-ink px-[26px] py-3.5 font-[inherit] text-base font-semibold whitespace-nowrap text-white shadow-[0_4px_12px_rgba(28,27,24,0.18)] transition-[background-color,transform] duration-150 hover:bg-[#3a3833] active:translate-y-px disabled:cursor-wait disabled:opacity-70 disabled:hover:bg-ink"
              onClick={() =>
                trackEvent("hero_cta_click", {
                  cta: id ?? source,
                })
              }
            >
              {status === "submitting" ? "Sending…" : submitLabel}
            </button>
          </>
        ) : (
          <div className="rounded-full bg-green px-[26px] py-3.5 text-base font-semibold text-white shadow-[0_4px_12px_rgba(76,154,74,0.25)]">
            {successLabel}
          </div>
        )}
      </form>
      {status === "error" && errorMsg && (
        <p role="alert" className="mt-2.5 max-w-[440px] text-[13px] text-[#c14a1f]">
          {errorMsg}
        </p>
      )}
    </>
  );
}
