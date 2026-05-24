"use client";

import { useState, FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  id: string;
  buttonLabel?: string;
  finePrint?: string;
}

type Status = "idle" | "submitting" | "error" | "success";

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
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
      trackEvent("pilot_form_error", { form_id: id, status: 0 });
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "white",
    border: "none",
    outline: "none",
    padding: "15px 20px",
    borderRadius: 999,
    fontFamily: "inherit",
    fontSize: 15,
    color: "var(--ink)",
    boxShadow: "var(--shadow-sm)",
    transition: "box-shadow 0.15s",
  };

  const submitting = status === "submitting";

  return (
    <>
      <form
        id={id}
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 460,
          marginBottom: 10,
        }}
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
              style={{ ...inputStyle, width: "100%", opacity: submitting ? 0.6 : 1 }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 2px var(--blue), var(--shadow-sm)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            />
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                disabled={submitting}
                style={{ ...inputStyle, flex: 1, minWidth: 0, opacity: submitting ? 0.6 : 1 }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px var(--blue), var(--shadow-sm)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
              />
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: "var(--ink)",
                  color: "white",
                  border: "none",
                  padding: "15px 26px",
                  borderRadius: 999,
                  fontFamily: "inherit",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: submitting ? "wait" : "pointer",
                  transition: "background 0.15s, transform 0.1s",
                  boxShadow: "0 4px 12px rgba(28,27,24,0.18)",
                  whiteSpace: "nowrap",
                  opacity: submitting ? 0.7 : 1,
                }}
                onClick={() =>
                  trackEvent("pilot_cta_click", { cta: id })
                }
                onMouseOver={(e) => {
                  if (!submitting) e.currentTarget.style.background = "#3a3833";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--ink)";
                }}
                onMouseDown={(e) => {
                  if (!submitting) e.currentTarget.style.transform = "translateY(1px)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {submitting ? "Sending…" : buttonLabel}
              </button>
            </div>
          </>
        ) : (
          <div
            style={{
              background: "var(--green)",
              color: "white",
              padding: "15px 26px",
              borderRadius: 999,
              fontSize: 15,
              fontWeight: 600,
              boxShadow: "0 4px 12px rgba(76,154,74,0.25)",
              textAlign: "center",
            }}
          >
            You&apos;re on the list ✓
          </div>
        )}
      </form>
      {status === "error" && errorMsg && (
        <p
          role="alert"
          style={{
            marginTop: 0,
            marginBottom: 10,
            fontSize: 13,
            color: "#c14a1f",
            maxWidth: 460,
          }}
        >
          {errorMsg}
        </p>
      )}
      {finePrint && status !== "error" && (
        <p
          style={{
            fontSize: 13,
            color: "var(--ink-faint)",
            maxWidth: 460,
          }}
        >
          {finePrint}
        </p>
      )}
    </>
  );
}
