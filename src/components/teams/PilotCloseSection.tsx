import TeamsCaptureForm from "./TeamsCaptureForm";

const checklist = [
  { bold: "8–12 weeks.", faint: "Long enough to see signal. Short enough to commit to." },
  { bold: "No cost.", faint: "No license, no per-seat fee, no commitment after." },
  {
    bold: "Your input shapes the product.",
    faint: "The dashboard, the privacy rules, the reports — all open.",
  },
  {
    bold: "Direct line to the founders.",
    faint: "You'll talk to the people building it, not to support.",
  },
];

function Checkmark() {
  return (
    <svg viewBox="0 0 18 18" fill="none" width={18} height={18} style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="9" cy="9" r="8" fill="#4c9a4a" opacity="0.15" />
      <path
        d="M5.5 9.5 L8 12 L13 7"
        stroke="#4c9a4a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function PilotCloseSection() {
  return (
    <section id="pilot" style={{ padding: "48px 32px 96px" }}>
      <div
        className="teams-pilot-card"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          background: `
            radial-gradient(ellipse 800px 400px at 80% 100%, rgba(249, 164, 138, 0.35) 0%, transparent 60%),
            linear-gradient(135deg, #fde4d0 0%, #fbd0b0 100%)
          `,
          borderRadius: 36,
          padding: "80px 64px",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 56,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#a04515",
              marginBottom: 16,
            }}
          >
            Pilot program
          </div>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 18,
              color: "var(--ink)",
            }}
          >
            Be one of our first companies.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--ink-soft)",
              lineHeight: 1.55,
              marginBottom: 28,
              maxWidth: 480,
            }}
          >
            We&apos;re running pilots with a small number of teams through 2026. Free. No commitment. We work alongside you for eight to twelve weeks and shape the dashboard around what your company actually needs.
          </p>
          <TeamsCaptureForm
            id="pilot-close"
            finePrint="We respond within two business days. If we’re not a fit, we’ll tell you fast."
          />
        </div>

        <div
          style={{
            background: "var(--card)",
            borderRadius: 20,
            padding: "28px 28px",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <h4
            style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--ink-faint)",
              marginBottom: 18,
            }}
          >
            What a pilot looks like
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              padding: 0,
              margin: 0,
            }}
          >
            {checklist.map((item) => (
              <li
                key={item.bold}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  fontSize: 15,
                  lineHeight: 1.45,
                  color: "var(--ink)",
                }}
              >
                <Checkmark />
                <div>
                  <b style={{ fontWeight: 600 }}>{item.bold}</b>{" "}
                  <span style={{ color: "var(--ink-soft)", fontWeight: 400 }}>{item.faint}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
