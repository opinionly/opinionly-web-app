const rows = [
  {
    bad: "Quarterly surveys ask people to perform.",
    good: "Opinionly doesn’t ask anything extra.",
    body: "Your team is already in the app — asking their own questions, replying to their friends, tending their goals. The signal you see in the dashboard is a byproduct of them using it for themselves. There’s no survey to ignore.",
  },
  {
    bad: "Dashboards measure what’s easy to measure.",
    good: "We surface what people actually care about.",
    body: "Engagement scores are easy. They’re also nearly meaningless. The dashboard surfaces the themes your team is genuinely circling — what they’re asking about, what they keep returning to, what’s shifting — because those are the things they chose to bring up.",
  },
  {
    bad: "Annual reviews arrive too late to act on.",
    good: "The picture updates as it changes.",
    body: "Concerns rise and fade in weeks, not quarters. By the time a yearly survey catches a problem, half the people who flagged it have already left. Opinionly’s signal moves at the speed of the team — which is the only speed that lets you do anything about it.",
  },
];

export default function WhyItWorksSection() {
  return (
    <section
      className="teams-why"
      style={{ background: "var(--cream)", padding: "120px 32px" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          className="teams-why-head"
          style={{ maxWidth: 720, margin: "0 auto 64px", textAlign: "center" }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--blue)",
              marginBottom: 18,
            }}
          >
            Why this works
          </div>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 16,
              color: "var(--ink)",
            }}
          >
            Three things most tools get wrong.
          </h2>
          <p style={{ fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.55 }}>
            We didn&apos;t build Opinionly to be another engagement platform. We built it because the existing approach quietly stopped working a decade ago.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {rows.map((r, i, arr) => (
            <div
              key={r.bad}
              className="teams-why-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "center",
                padding: "32px 8px",
                borderTop: "1px solid var(--line)",
                borderBottom:
                  i === arr.length - 1 ? "1px solid var(--line)" : undefined,
              }}
            >
              <div
                className="teams-why-bad"
                style={{
                  color: "var(--ink-faint)",
                  textDecoration: "line-through",
                  textDecorationColor: "var(--rose)",
                  textDecorationThickness: "2px",
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                {r.bad}
              </div>
              <div
                className="teams-why-good"
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "var(--ink)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.3,
                }}
              >
                <span style={{ color: "var(--blue)", fontWeight: 700, marginRight: 8 }}>→</span>
                {r.good}
              </div>
              <p
                style={{
                  gridColumn: "1 / -1",
                  fontSize: 15,
                  color: "var(--ink-soft)",
                  lineHeight: 1.55,
                  marginTop: 6,
                  maxWidth: 760,
                }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
