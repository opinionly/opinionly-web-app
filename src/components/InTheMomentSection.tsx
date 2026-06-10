import Image from "next/image";
import screen02Compose from "../../public/screens/screen_02_compose.png";

export default function InTheMomentSection() {
  return (
    <section
      style={{
        background: "var(--cream)",
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
          gridTemplateColumns: "420px 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Phone (left) */}
        <div style={{ maxWidth: 340, margin: "0 auto" }}>
          <Image
            src={screen02Compose}
            alt="Composing a post in Opinionly"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 36,
              boxShadow: "var(--shadow-md)",
              display: "block",
            }}
          />
        </div>

        {/* Copy (right) */}
        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#c14a1f",
              marginBottom: 18,
            }}
          >
            Continuous, not quarterly
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
            Ask in the moment. Hear back while it still matters.
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "var(--ink-soft)",
              maxWidth: 460,
            }}
          >
            Most feedback arrives too late, from the wrong people, in the wrong
            tone. Opinionly is built for the small moments — the meeting that
            felt off, the message you weren&apos;t sure about, the thing you
            can&apos;t stop thinking about on the walk home.
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
            Ask the question. Get real answers. Move on.
          </p>
        </div>
      </div>
    </section>
  );
}
