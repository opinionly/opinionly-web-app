import Image from "next/image";

export default function HonestRepliesSection() {
  return (
    <section
      id="how"
      style={{
        background: "var(--blue-soft)",
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
            Honest replies, every time
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
            You ask. They reply, anonymously.
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "var(--ink-soft)",
              maxWidth: 460,
            }}
          >
            Post a question to the people who actually know you. They see your
            name. You don&apos;t see theirs. That asymmetry is the whole trick —
            it&apos;s what makes the feedback honest enough to actually use.
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
            You hear what they really think. Not the polite version they&apos;d
            tell you to your face.
          </p>
        </div>

        {/* Phone */}
        <Image
          src="/screens/screen_01_feed.png"
          alt="The Opinionly feed"
          width={340}
          height={694}
          style={{
            width: "100%",
            maxWidth: 340,
            height: "auto",
            borderRadius: 36,
            boxShadow: "var(--shadow-md)",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
}
