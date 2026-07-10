import Image from "next/image";
import screenInsights from "../../public/screens/screen_insights.png";

export default function InsightsSection() {
  return (
    <section
      style={{
        background: "var(--blue-tint)",
        padding: "112px 32px",
      }}
      className="section-padding"
    >
      <div
        className="section-inner"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 80,
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
              color: "var(--blue)",
              marginBottom: 18,
            }}
          >
            Insights, private to you
          </div>
          <h2
            className="section-h2"
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 22,
              color: "var(--ink)",
            }}
          >
            See how you actually come across.
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "var(--ink-soft)",
              maxWidth: 460,
            }}
          >
            Every honest reply quietly adds up. Opinionly turns them into a
            private picture — sentiment over time, the themes people keep
            noticing, and how you show up when you give feedback back.
          </p>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "var(--ink-soft)",
              maxWidth: 460,
              marginTop: 14,
            }}
          >
            Only you ever see it. No scores to perform for — just a clearer sense
            of how you land.
          </p>
        </div>

        {/* Phone */}
        <div style={{ maxWidth: 340, margin: "0 auto" }}>
          <Image
            src={screenInsights}
            alt="A private view of how you're perceived over time in Opinionly"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 36,
              boxShadow: "var(--shadow-md)",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
