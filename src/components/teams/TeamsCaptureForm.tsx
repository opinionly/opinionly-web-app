"use client";

import { useState, FormEvent } from "react";
import { trackEvent, trackPixel } from "@/lib/analytics";

interface Props {
  id: string;
  buttonLabel?: string;
  finePrint?: string;
}

type Status = "idle" | "submitting" | "error" | "success";

const inputClasses =
  "rounded-full border-none bg-white px-5 py-3.5 font-[inherit] text-base text-ink shadow-(--shadow-sm) outline-none transition-shadow duration-150 focus:[box-shadow:0_0_0_2px_var(--blue),var(--shadow-sm)] disabled:opacity-60";

export default function TeamsCaptureForm({
  id,
  buttonLabel = "Request pilot access",
  finePrint,
}: Props) {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedCompany = company.trim();
    const trimmedEmail = email.trim();
    if (!trimmedCompany || !trimmedEmail) return;

    trackEvent("pilot_form_submit", {
      form_id: id,
      company_length: trimmedCompany.length,
      email_length: trimmedEmail.length,
    });

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          company: trimmedCompany,
          formId: id,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setStatus("error");
        setErrorMsg(data?.error ?? "Something went wrong. Try again.");
        trackEvent("pilot_form_error", { form_id: id, status: res.status });
        return;
      }

      setStatus("success");
      trackEvent("pilot_form_success", { form_id: id });
      trackPixel("Lead");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
      trackEvent("pilot_form_error", { form_id: id, status: 0 });
    }
  };

  const submitting = status === "submitting";

  return (
    <>
      <form
        id={id}
        onSubmit={handleSubmit}
        className="mb-2.5 flex max-w-[460px] flex-col gap-2"
      >
        {status !== "success" ? (
          <>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Your company"
              required
              disabled={submitting}
              className={`w-full ${inputClasses}`}
            />
            <div className="flex flex-wrap gap-2">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                disabled={submitting}
                className={`min-w-0 flex-1 ${inputClasses}`}
              />
              <button
                type="submit"
                disabled={submitting}
                className="cursor-pointer rounded-full border-none bg-ink px-[26px] py-3.5 font-[inherit] text-base font-semibold whitespace-nowrap text-white shadow-[0_4px_12px_rgba(28,27,24,0.18)] transition-[background-color,transform] duration-150 hover:bg-[#3a3833] active:translate-y-px disabled:cursor-wait disabled:opacity-70 disabled:hover:bg-ink"
                onClick={() => trackEvent("pilot_cta_click", { cta: id })}
              >
                {submitting ? "Sending…" : buttonLabel}
              </button>
            </div>
          </>
        ) : (
          <div className="rounded-full bg-green px-[26px] py-3.5 text-center text-base font-semibold text-white shadow-[0_4px_12px_rgba(76,154,74,0.25)]">
            You&apos;re on the list ✓
          </div>
        )}
      </form>
      {status === "error" && errorMsg && (
        <p role="alert" className="mt-0 mb-2.5 max-w-[460px] text-[13px] text-[#c14a1f]">
          {errorMsg}
        </p>
      )}
      {finePrint && status !== "error" && (
        <p className="max-w-[460px] text-[13px] text-ink-faint">{finePrint}</p>
      )}
    </>
  );
}
