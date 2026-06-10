import Image from "next/image";

const phoneScreens = [
  { src: "/screens/screen_posts@2x.png", alt: "Opinionly feed" },
  { src: "/screens/screen_03_post_detail.png", alt: "A post with replies" },
  { src: "/screens/screen_04_garden.png", alt: "The Garden" },
  { src: "/screens/screen_05a_profile_self.png", alt: "Your profile" },
];

export default function MechanicFlipSection() {
  return (
    <section
      id="how"
      className="teams-mechanic"
      style={{ background: "var(--cream)", padding: "120px 32px" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          className="teams-mechanic-head"
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}
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
            How it works
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
            The data is real because the app is.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--ink-soft)",
              lineHeight: 1.55,
            }}
          >
            Your team isn&apos;t filling out surveys. They&apos;re using Opinionly to ask their own questions and grow. You see the aggregate — the patterns underneath, in plain words, without ever seeing who said what.
          </p>
        </div>

        <div
          className="teams-mechanic-flow"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          {/* Left: inside the company */}
          <div
            style={{
              background: "var(--card)",
              borderRadius: 24,
              padding: "36px 32px",
              boxShadow: "var(--shadow-md)",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-faint)",
                marginBottom: 16,
              }}
            >
              Inside the company
            </div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: 12,
                color: "var(--ink)",
              }}
            >
              Your team uses the app to grow.
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--ink-soft)",
                marginBottom: 20,
              }}
            >
              They ask their own questions of the people they actually trust. They give honest, anonymous replies to each other. They tend their own goals. It&apos;s their tool first.
            </p>
            <div style={{ marginTop: "auto" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                {phoneScreens.map((s, i) => (
                  <div
                    key={s.src}
                    style={{
                      flex: 1,
                      aspectRatio: "9 / 16",
                      background: "var(--cream)",
                      borderRadius: 14,
                      border: "1px solid var(--line)",
                      overflow: "hidden",
                      position: "relative",
                      maxWidth: 80,
                      transform:
                        i === 1
                          ? "translateY(-8px)"
                          : i === 3
                            ? "translateY(-4px)"
                            : undefined,
                    }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div
            className="teams-flow-arrow"
            style={{
              width: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              color: "var(--ink-faint)",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Aggregates
            </div>
            <svg viewBox="0 0 64 24" fill="none" style={{ width: 64, height: 24 }}>
              <path d="M2 12 L58 12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <path
                d="M52 6 L60 12 L52 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                opacity: 0.6,
              }}
            >
              Anonymously
            </div>
          </div>

          {/* Right: inside the dashboard */}
          <div
            style={{
              background: "var(--card)",
              borderRadius: 24,
              padding: "36px 32px",
              boxShadow: "var(--shadow-md)",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink-faint)",
                marginBottom: 16,
              }}
            >
              Inside the dashboard
            </div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: 12,
                color: "var(--ink)",
              }}
            >
              You see how the company is doing.
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--ink-soft)",
                marginBottom: 20,
              }}
            >
              Sentiment trends. The themes people are circling around. Where things are improving and where they&apos;re not. Always in aggregate. Never tied to anyone.
            </p>
            <div style={{ marginTop: "auto" }}>
              <div
                style={{
                  background: "linear-gradient(180deg, #fbfaf6 0%, var(--cream) 100%)",
                  borderRadius: 12,
                  padding: 14,
                  border: "1px solid var(--line)",
                }}
              >
                {[
                  { k: "Overall sentiment", v: "+0.34", pill: "↑", warn: false },
                  { k: "Engineering", v: "+0.41", pill: "↑", warn: false },
                  { k: "Product", v: "+0.22", pill: null, warn: false },
                  { k: "Rising theme", v: "meeting load", pill: "!", warn: true },
                  { k: "Coverage", v: "87% active", pill: null, warn: false },
                ].map((row, i, arr) => (
                  <div
                    key={row.k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "6px 0",
                      fontSize: 12,
                      borderBottom:
                        i === arr.length - 1 ? "none" : "1px solid var(--line)",
                    }}
                  >
                    <span style={{ color: "var(--ink-soft)" }}>{row.k}</span>
                    <span style={{ fontWeight: 600, color: "var(--ink)" }}>
                      {row.v}
                      {row.pill && (
                        <span
                          style={{
                            display: "inline-block",
                            background: row.warn ? "#fde9c8" : "var(--green-soft)",
                            color: row.warn ? "#8a5a10" : "var(--green)",
                            fontSize: 10,
                            padding: "2px 6px",
                            borderRadius: 4,
                            marginLeft: 4,
                            fontWeight: 700,
                          }}
                        >
                          {row.pill}
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
