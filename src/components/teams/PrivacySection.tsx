const commitments = [
  {
    title: "Aggregate only.",
    body: "Nothing surfaces in your dashboard until enough people have contributed that no one can be identified by what they said. We're starting with a minimum of five per any visible metric, and we'll raise that with our pilot partners.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="6" cy="10" r="2" fill="#7ab3ff" />
        <circle cx="10" cy="10" r="2" fill="#7ab3ff" />
        <circle cx="14" cy="10" r="2" fill="#7ab3ff" />
        <path d="M3 4 L17 4" stroke="#7ab3ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 16 L17 16" stroke="#7ab3ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "No individual stories. Ever.",
    body: "The honest replies people give each other inside the app stay inside the app. Your dashboard never quotes anyone, never reveals who answered, never lets you drill from a theme into a person. There is no escape hatch.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect x="3" y="7" width="14" height="10" rx="2" stroke="#7ab3ff" strokeWidth="1.5" />
        <path d="M7 7 V5 a3 3 0 0 1 6 0 V7" stroke="#7ab3ff" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="12" r="1.5" fill="#7ab3ff" />
      </svg>
    ),
  },
  {
    title: "The team owns their participation.",
    body: "Premium features are default-on when the company pays, but every employee can opt out, change what's shared, or use Opinionly purely as a personal tool. Your dashboard reflects who's in — never who's out.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path
          d="M10 3 L4 7 V11 a6 6 0 0 0 6 6 a6 6 0 0 0 6 -6 V7 Z"
          stroke="#7ab3ff"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M7 10 L9 12 L13 8"
          stroke="#7ab3ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      className="teams-privacy"
      style={{ background: "var(--ink)", color: "white", padding: "128px 32px" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ maxWidth: 760, marginBottom: 64 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 22,
            }}
          >
            Privacy
          </div>
          <h2
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "white",
              marginBottom: 24,
            }}
          >
            You will{" "}
            <em
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#f9c8a8",
              }}
            >
              never
            </em>{" "}
            see what any one person said.
          </h2>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 620,
            }}
          >
            A dashboard like this only works if your team trusts it. If they suspect their manager is reading their replies, they stop being honest. So we don&apos;t let you read them. Not the manager, not the CEO, not the HR lead. No one.
          </p>
        </div>

        <div
          className="teams-commitments"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {commitments.map((c) => (
            <div
              key={c.title}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "28px 26px",
                borderRadius: 18,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <span style={{ width: 20, height: 20, display: "inline-flex" }}>{c.icon}</span>
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "white",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.6,
            maxWidth: 640,
            borderLeft: "2px solid rgba(255,255,255,0.15)",
            paddingLeft: 16,
          }}
        >
          <strong style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>
            Where we are honest:
          </strong>{" "}
          these are early commitments. We&apos;re working out the specific policies — minimum-N thresholds, opt-out flows, retention rules — alongside our pilot partners, because the people whose trust matters most are the ones who&apos;ll be living with it. If this matters to you, that&apos;s a feature, not a bug.
        </div>
      </div>
    </section>
  );
}
