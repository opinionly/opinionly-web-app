const principles = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
        <circle cx="8" cy="9" r="3" fill="#2b7ef5" />
        <path
          d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5"
          stroke="#2b7ef5"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle
          cx="17"
          cy="9"
          r="3"
          stroke="#8e8b83"
          strokeWidth="2"
          strokeDasharray="2 2"
          fill="none"
        />
        <path
          d="M12 19c0-2.8 2.2-5 5-5s5 2.2 5 5"
          stroke="#8e8b83"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 2"
          fill="none"
        />
      </svg>
    ),
    title: "Honest by design",
    body: "You're named. They're anonymous. That asymmetry is what gives you answers you can actually act on.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
        <circle cx="11" cy="13" r="8" stroke="#1c1b18" strokeWidth="2" fill="none" />
        <path
          d="M11 9v4l2.5 2.5"
          stroke="#1c1b18"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="19" cy="5" r="2" fill="#f4a93a" />
      </svg>
    ),
    title: "In the moment",
    body: "Ask while the context is fresh. Reply while it matters. Not a quarterly survey, not a yearly review.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width={26} height={26}>
        <path d="M12 21V11" stroke="#4c9a4a" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M12 11C12 8 9 6 6 6c0 3 2 5 6 5z"
          fill="#4c9a4a"
        />
        <path
          d="M12 13C12 10 15 8 18 8c0 3-2 5-6 5z"
          fill="#7bbf6b"
        />
        <path
          d="M5 21h14"
          stroke="#1c1b18"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    ),
    title: "Growth, not performance",
    body: "Goals are plants. Feedback is water. No metrics, no leaderboards, no quarterly reviews to dread.",
  },
];

export default function PrinciplesSection() {
  return (
    <section
      style={{
        background: "var(--green-soft)",
        padding: "112px 32px",
      }}
      className="section-padding"
    >
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 680,
            margin: "0 auto 56px",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--green)",
              marginBottom: 14,
            }}
          >
            What makes it different
          </div>
          <h2
            className="section-h2"
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 16,
              color: "var(--ink)",
            }}
          >
            Built on three ideas.
          </h2>
          <p style={{ fontSize: 18, color: "var(--ink-soft)" }}>
            The simple commitments that shape how Opinionly works.
          </p>
        </div>

        {/* Cards */}
        <div
          className="principles-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {principles.map((p) => (
            <div
              key={p.title}
              style={{
                padding: "36px 32px",
                background: "var(--card)",
                borderRadius: 24,
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  background: "var(--green-soft)",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--ink-soft)",
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
