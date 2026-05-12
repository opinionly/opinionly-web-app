"use client";

import { useState } from "react";

export default function PilotSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="pilot"
      style={{
        background: "var(--cream)",
        padding: "112px 32px",
      }}
      className="section-padding"
    >
      <div
        className="pilot-card"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          background: "var(--ink)",
          color: "white",
          borderRadius: 36,
          padding: "80px 64px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 56,
          alignItems: "center",
        }}
      >
        {/* Copy */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 16,
            }}
          >
            For teams
          </div>
          <h2
            className="pilot-h2"
            style={{
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: 18,
              color: "white",
            }}
          >
            For organizations who want their people to grow, not just be
            reviewed.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.55,
              maxWidth: 520,
            }}
          >
            Opinionly is piloting with a small number of teams. If continuous,
            peer-to-peer feedback sounds closer to how your culture actually
            works than another annual survey — let&apos;s talk.
          </p>
        </div>

        {/* CTA button */}
        <a
          href="mailto:info@theshareon.com?subject=Pilot inquiry"
          style={{
            background: "white",
            color: "var(--ink)",
            padding: "17px 30px",
            borderRadius: 999,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "transform 0.1s, background 0.15s",
            flexShrink: 0,
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#f5f1e8";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "white";
          }}
          onMouseDown={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(1px)";
          }}
          onMouseUp={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(0)";
          }}
        >
          Inquire about a pilot →
        </a>
      </div>

      {/* Modal (unused, kept as fallback) */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(28,27,24,0.5)",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: 24,
              padding: "40px 48px",
              maxWidth: 480,
              width: "90%",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 12,
                color: "var(--ink)",
              }}
            >
              Inquire about a pilot
            </h3>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", marginBottom: 24 }}>
              Email us at{" "}
              <a
                href="mailto:info@theshareon.com"
                style={{ color: "var(--blue)", textDecoration: "none" }}
              >
                info@theshareon.com
              </a>{" "}
              and we&apos;ll get back to you.
            </p>
            <button
              onClick={() => setShowModal(false)}
              style={{
                background: "var(--ink)",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
