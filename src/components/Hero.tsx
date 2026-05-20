import Image from "next/image";
import EmailCaptureForm from "./EmailCaptureForm";

const repliers = [
  {
    alias: "Calm-Reed",
    bgColor: "#d6e6fb",
    iconColor: "#2b7ef5",
    delay: "0.5s",
  },
  {
    alias: "Brave-Lark",
    bgColor: "#fde9c8",
    iconColor: "#d4a247",
    delay: "1.1s",
  },
  {
    alias: "Wry-Oak",
    bgColor: "#d6ebe8",
    iconColor: "#4a9d96",
    delay: "1.7s",
  },
];

export default function Hero() {
  return (
    <section
      style={{
        background: `
          radial-gradient(ellipse 1200px 600px at 30% 0%, rgba(253, 228, 208, 0.6) 0%, transparent 60%),
          radial-gradient(ellipse 800px 500px at 80% 30%, rgba(249, 164, 138, 0.25) 0%, transparent 60%),
          var(--cream)
        `,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 32px 96px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
          minHeight: 580,
        }}
      >
        {/* ── Left: Copy ── */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              color: "var(--ink-soft)",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              padding: "7px 14px",
              borderRadius: 999,
              marginBottom: 28,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--coral)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Coming soon · iOS and Android
          </div>

          <h1
            style={{
              fontSize: "clamp(44px, 5.5vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "var(--ink)",
              marginBottom: 20,
              maxWidth: 540,
            }}
          >
            The honest feedback you&apos;ve been missing.
          </h1>

          <p
            style={{
              fontSize: 22,
              lineHeight: 1.4,
              color: "var(--ink-soft)",
              maxWidth: 460,
              marginBottom: 36,
              fontWeight: 400,
            }}
          >
            From the people who know you.
          </p>

          <EmailCaptureForm id="waitlist" />

          <p
            style={{
              fontSize: 13,
              color: "var(--ink-faint)",
              marginTop: 14,
            }}
          >
            We write infrequently. No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* ── Right: Visual ── */}
        <div
          className="hero-visual"
          style={{
            position: "relative",
            height: 540,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Asker (left of phone) */}
          <div
            className="hero-asker"
            style={{
              position: "absolute",
              left: -8,
              top: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              zIndex: 2,
              animation: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f9a48a, #f4754c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 600,
                fontSize: 22,
                boxShadow: "var(--shadow-md)",
              }}
            >
              A
            </div>
            <div
              style={{
                background: "var(--card)",
                padding: "5px 12px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                color: "var(--ink)",
                boxShadow: "var(--shadow-sm)",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  background: "rgba(249, 117, 76, 0.15)",
                  color: "#c14a1f",
                  padding: "1px 6px",
                  borderRadius: 4,
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                You
              </span>
              Alex
            </div>
          </div>

          {/* Phone screen */}
          <Image
            src="/screens/screen_03_post_details.png"
            alt="A question and anonymous replies in Opinionly"
            width={280}
            height={572}
            priority
            className="hero-phone-img"
            style={{
              borderRadius: 38,
              boxShadow: "var(--shadow-lg)",
              display: "block",
              position: "relative",
              zIndex: 3,
              width: 280,
              height: "auto",
            }}
          />

          {/* Repliers (right of phone) */}
          <div
            className="hero-repliers"
            style={{
              position: "absolute",
              right: -8,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              zIndex: 2,
            }}
          >
            {repliers.map((r) => (
              <div
                key={r.alias}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--card)",
                  padding: "8px 14px 8px 8px",
                  borderRadius: 999,
                  boxShadow: "var(--shadow-md)",
                  animation: `fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${r.delay} both`,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: r.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 20 20" fill="none" width={20} height={20}>
                    <path d="M4 4h12v9l-4-2-4 2-4-2V4z" fill={r.iconColor} />
                    <circle
                      cx="14"
                      cy="5"
                      r="2.5"
                      fill={r.iconColor}
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--ink)",
                      lineHeight: 1,
                    }}
                  >
                    {r.alias}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: "var(--ink-faint)",
                      lineHeight: 1,
                    }}
                  >
                    replied honestly
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
