import TeamsCaptureForm from "./TeamsCaptureForm";

export default function TeamsHero() {
  return (
    <section
      style={{
        background: `
          radial-gradient(ellipse 1200px 600px at 25% 0%, rgba(227, 237, 251, 0.85) 0%, transparent 60%),
          radial-gradient(ellipse 800px 500px at 85% 40%, rgba(43, 126, 245, 0.10) 0%, transparent 60%),
          var(--cream)
        `,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="teams-hero"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 32px 112px",
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: 56,
          alignItems: "center",
          minHeight: 600,
        }}
      >
        {/* Left: copy */}
        <div>
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
                background: "var(--blue)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Pilot program · 2026
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 5.5vw, 68px)",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "var(--ink)",
              marginBottom: 20,
              maxWidth: 560,
            }}
          >
            An honest read on your team.
          </h1>

          <p
            className="teams-hero-sub"
            style={{
              fontSize: 22,
              lineHeight: 1.4,
              color: "var(--ink-soft)",
              maxWidth: 480,
              marginBottom: 36,
              fontWeight: 400,
            }}
          >
            Surfaced from how they already work — not from another survey no one wants to fill out.
          </p>

          <TeamsCaptureForm
            id="pilot-hero"
            finePrint="Free pilot, no commitment. We respond within two business days."
          />
        </div>

        {/* Right: dashboard mock */}
        <div
          className="teams-dash-mock"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 520,
            marginLeft: "auto",
          }}
        >
          <div
            style={{
              background: "var(--card)",
              borderRadius: 18,
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
              border: "1px solid var(--line)",
            }}
          >
            {/* Chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "12px 16px",
                borderBottom: "1px solid var(--line)",
                background: "#fdfcfa",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "var(--line-strong)",
                  }}
                />
              ))}
              <div
                style={{
                  marginLeft: 14,
                  fontSize: 12,
                  color: "var(--ink-faint)",
                  fontFamily: "inherit",
                  background: "var(--cream)",
                  padding: "4px 12px",
                  borderRadius: 6,
                }}
              >
                teams.opinionly.io / your-company
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "22px 24px 24px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 18,
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>
                  Company pulse
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>
                  Last 30 days · 142 people · 4,820 signals
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.4fr 1fr",
                  gap: 12,
                }}
              >
                {/* Sentiment trend (tall, left) */}
                <div
                  style={{
                    background: "var(--cream)",
                    borderRadius: 12,
                    padding: "14px 16px 18px",
                    gridRow: "span 2",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "var(--ink-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 8,
                    }}
                  >
                    Sentiment, trailing 90d
                  </div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    +0.34
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "var(--ink-faint)",
                        marginLeft: 4,
                      }}
                    >
                      / 1.0
                    </span>
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 3,
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--green)",
                      marginTop: 4,
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path
                        d="M2 7 L5 3 L8 7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    +0.08 vs. prior 90d
                  </div>
                  <svg
                    viewBox="0 0 200 60"
                    preserveAspectRatio="none"
                    style={{ width: "100%", height: 56, marginTop: 8 }}
                  >
                    <defs>
                      <linearGradient id="sentGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2b7ef5" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#2b7ef5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 40 L20 38 L40 42 L60 36 L80 30 L100 34 L120 26 L140 22 L160 24 L180 18 L200 14 L200 60 L0 60 Z"
                      fill="url(#sentGrad)"
                    />
                    <path
                      d="M0 40 L20 38 L40 42 L60 36 L80 30 L100 34 L120 26 L140 22 L160 24 L180 18 L200 14"
                      stroke="#2b7ef5"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    style={{
                      background: "var(--card)",
                      borderLeft: "3px solid var(--amber)",
                      padding: "10px 12px",
                      borderRadius: 6,
                      marginTop: 10,
                      fontSize: 12,
                      color: "var(--ink-soft)",
                      lineHeight: 1.4,
                    }}
                  >
                    Sentiment has improved steadily since the new project rotation policy. Watch the engineering org — they&apos;re driving most of the lift.
                  </div>
                </div>

                {/* Themes (right top) */}
                <div
                  style={{
                    background: "var(--cream)",
                    borderRadius: 12,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "var(--ink-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 8,
                    }}
                  >
                    Top themes
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginTop: 4,
                    }}
                  >
                    {[
                      { label: "growth", hot: false },
                      { label: "meeting load", hot: true },
                      { label: "1:1 quality", hot: false },
                      { label: "recognition", hot: false },
                    ].map((t) => (
                      <span
                        key={t.label}
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          background: t.hot ? "#fde9c8" : "var(--card)",
                          color: t.hot ? "#8a5a10" : "var(--ink-soft)",
                          padding: "4px 9px",
                          borderRadius: 999,
                          border: t.hot ? "1px solid transparent" : "1px solid var(--line)",
                        }}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement (right bottom) */}
                <div
                  style={{
                    background: "var(--cream)",
                    borderRadius: 12,
                    padding: "14px 16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "var(--ink-faint)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: 8,
                    }}
                  >
                    Active employees
                  </div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    87
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "var(--ink-faint)",
                        marginLeft: 4,
                      }}
                    >
                      %
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 5,
                      alignItems: "flex-end",
                      height: 44,
                      marginTop: 8,
                    }}
                  >
                    {[
                      { h: 60, muted: false },
                      { h: 75, muted: false },
                      { h: 68, muted: false },
                      { h: 80, muted: false },
                      { h: 88, muted: false },
                      { h: 92, muted: true },
                    ].map((b, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          background: b.muted ? "var(--line-strong)" : "var(--blue)",
                          borderRadius: "3px 3px 0 0",
                          opacity: b.muted ? 1 : 0.85,
                          height: `${b.h}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: -14,
              right: 14,
              background: "var(--ink)",
              color: "white",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "6px 10px",
              borderRadius: 6,
              transform: "rotate(-2deg)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            Concept · Not real data
          </div>
        </div>
      </div>
    </section>
  );
}
