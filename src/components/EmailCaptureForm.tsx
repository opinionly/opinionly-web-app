"use client";

import { useState, FormEvent } from "react";
import { trackEvent, trackPixel } from "@/lib/analytics";

interface Props {
  id?: string;
}

type Status = "idle" | "submitting" | "error" | "success";

export default function EmailCaptureForm({ id }: Props) {
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
      method: "hero_form",
    });

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
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
        });
        return;
      }

      setStatus("success");
      trackEvent("email_form_success", {
        form_id: id ?? "email_capture",
      });
      trackPixel("Lead");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
      trackEvent("email_form_error", {
        form_id: id ?? "email_capture",
        status: 0,
      });
    }
  };

  return (
    <>
      <form
        id={id}
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: 8, maxWidth: 440, flexWrap: "wrap" }}
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
              style={{
                flex: 1,
                minWidth: 160,
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
                opacity: status === "submitting" ? 0.6 : 1,
              }}
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
              disabled={status === "submitting"}
              style={{
                background: "var(--ink)",
                color: "white",
                border: "none",
                padding: "15px 26px",
                borderRadius: 999,
                fontFamily: "inherit",
                fontSize: 15,
                fontWeight: 600,
                cursor: status === "submitting" ? "wait" : "pointer",
                transition: "background 0.15s, transform 0.1s",
                boxShadow: "0 4px 12px rgba(28,27,24,0.18)",
                whiteSpace: "nowrap",
                opacity: status === "submitting" ? 0.7 : 1,
              }}
              onClick={() =>
                trackEvent("hero_cta_click", {
                  cta: "hero_get_early_access",
                })
              }
              onMouseOver={(e) => {
                if (status !== "submitting") {
                  e.currentTarget.style.background = "#3a3833";
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "var(--ink)";
              }}
              onMouseDown={(e) => {
                if (status !== "submitting") {
                  e.currentTarget.style.transform = "translateY(1px)";
                }
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {status === "submitting" ? "Sending…" : "Get early access"}
            </button>
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
            marginTop: 10,
            fontSize: 13,
            color: "#c14a1f",
            maxWidth: 440,
          }}
        >
          {errorMsg}
        </p>
      )}
    </>
  );
}
