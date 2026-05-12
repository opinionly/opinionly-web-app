"use client";

import { useState, FormEvent } from "react";

interface Props {
  id?: string;
}

export default function EmailCaptureForm({ id }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 8, maxWidth: 440, flexWrap: "wrap" }}
    >
      {!submitted ? (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
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
            style={{
              background: "var(--ink)",
              color: "white",
              border: "none",
              padding: "15px 26px",
              borderRadius: 999,
              fontFamily: "inherit",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 0.15s, transform 0.1s",
              boxShadow: "0 4px 12px rgba(28,27,24,0.18)",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#3a3833";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "var(--ink)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(1px)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get early access
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
  );
}
