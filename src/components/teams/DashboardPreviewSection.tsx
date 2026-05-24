export default function DashboardPreviewSection() {
  return (
    <section
      className="teams-preview"
      style={{ background: "var(--paper)", padding: "120px 32px" }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          className="teams-preview-head"
          style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 64px" }}
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
            What&apos;s in the dashboard
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
            Built around the questions you&apos;d actually ask.
          </h2>
          <p style={{ fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.55 }}>
            Not vanity metrics. Not engagement scores no one trusts. The patterns under the surface, in plain words.
          </p>
        </div>

        <div
          className="teams-preview-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {/* Big sentiment card */}
          <div className="teams-pcard-lg" style={{ ...pcardBase, gridColumn: "span 3" }}>
            <div style={pcardLabel}>Headline</div>
            <div style={pcardTitle}>Team sentiment is trending up.</div>
            <div style={{ ...pcardSub, marginBottom: 0 }}>
              +0.08 over the last 30 days, driven by the engineering org.
            </div>
            <div style={{ marginTop: 8 }}>
              <svg
                viewBox="0 0 600 140"
                preserveAspectRatio="none"
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <defs>
                  <linearGradient id="pg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2b7ef5" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#2b7ef5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="100" x2="600" y2="100" stroke="#e8e4db" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="0" y1="60" x2="600" y2="60" stroke="#e8e4db" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="0" y1="20" x2="600" y2="20" stroke="#e8e4db" strokeWidth="1" strokeDasharray="3 4" />
                <path
                  d="M0 90 L40 85 L80 92 L120 78 L160 70 L200 76 L240 64 L280 58 L320 62 L360 54 L400 46 L440 50 L480 42 L520 36 L560 30 L600 24 L600 140 L0 140 Z"
                  fill="url(#pg1)"
                />
                <path
                  d="M0 90 L40 85 L80 92 L120 78 L160 70 L200 76 L240 64 L280 58 L320 62 L360 54 L400 46 L440 50 L480 42 L520 36 L560 30 L600 24"
                  stroke="#2b7ef5"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="600" cy="24" r="4" fill="#2b7ef5" />
                <circle cx="600" cy="24" r="8" fill="#2b7ef5" opacity="0.2" />
              </svg>
            </div>
          </div>

          {/* Themes card */}
          <div className="teams-pcard-md" style={{ ...pcardBase, gridColumn: "span 2" }}>
            <div style={pcardLabel}>Top themes this month</div>
            <div style={{ ...pcardTitle, marginBottom: 14 }}>What people are talking about.</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { label: "meeting load", count: "+42%", rising: true },
                { label: "growth", count: "128", rising: false },
                { label: "recognition", count: "94", rising: false },
                { label: "1:1 quality", count: "71", rising: false },
                { label: "project clarity", count: "63", rising: false },
                { label: "workload", count: "58", rising: false },
              ].map((t) => (
                <span
                  key={t.label}
                  style={{
                    background: t.rising ? "#fde9c8" : "var(--cream)",
                    padding: "7px 12px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 500,
                    color: t.rising ? "#6a4310" : "var(--ink-soft)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {t.label}
                  <span
                    style={{
                      color: t.rising ? "#a06a10" : "var(--ink-faint)",
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    {t.count}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Coverage */}
          <div className="teams-pcard-sm" style={{ ...pcardBase, gridColumn: "span 1" }}>
            <div style={pcardLabel}>Coverage</div>
            <div style={pcardValue}>
              87
              <span style={{ fontSize: 18, color: "var(--ink-faint)", fontWeight: 500 }}>%</span>
            </div>
            <div style={{ ...pcardSub, marginBottom: 14 }}>Active employees, last 30d</div>
            <div
              style={{
                height: 6,
                background: "var(--cream)",
                borderRadius: 3,
                overflow: "hidden",
                marginTop: 6,
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "var(--blue)",
                  borderRadius: 3,
                  width: "87%",
                }}
              />
            </div>
          </div>

          {/* Rising concern */}
          <div className="teams-pcard-md" style={{ ...pcardBase, gridColumn: "span 2" }}>
            <div style={pcardLabel}>Watch this</div>
            <div style={pcardTitle}>Meeting load is the rising concern.</div>
            <div style={{ ...pcardSub, marginBottom: 18 }}>
              Up 42% in the last two weeks. Most of the signal is from product and design.
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ ...pcardValue, fontSize: 28 }}>42%</div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--rose)",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10">
                  <path
                    d="M2 3 L5 7 L8 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                vs. last 30 days
              </div>
            </div>
          </div>

          {/* Org breakdown */}
          <div className="teams-pcard-sm" style={{ ...pcardBase, gridColumn: "span 1" }}>
            <div style={pcardLabel}>By team</div>
            <div style={{ ...pcardTitle, marginBottom: 12 }}>Sentiment</div>
            {[
              { name: "Engineering", v: "+0.41", color: "var(--green)" },
              { name: "Product", v: "+0.22", color: "var(--ink)" },
              { name: "Sales", v: "+0.12", color: "var(--ink-soft)" },
              { name: "Operations", v: "−0.08", color: "var(--rose)" },
            ].map((row, i) => (
              <div
                key={row.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  fontSize: 14,
                  borderTop: i === 0 ? "none" : "1px solid var(--line)",
                }}
              >
                <span style={{ color: "var(--ink)", fontWeight: 500 }}>{row.name}</span>
                <span style={{ color: row.color, fontWeight: 600, fontSize: 12 }}>{row.v}</span>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 13,
            color: "var(--ink-faint)",
            fontStyle: "italic",
          }}
        >
          An early sketch. We&apos;re building the real thing with our pilot partners — what you see here will change.
        </p>
      </div>
    </section>
  );
}

const pcardBase: React.CSSProperties = {
  background: "var(--card)",
  borderRadius: 20,
  padding: "26px 26px 28px",
  boxShadow: "var(--shadow-sm)",
  border: "1px solid var(--line)",
};

const pcardLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--ink-faint)",
  marginBottom: 10,
};

const pcardTitle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 600,
  color: "var(--ink)",
  marginBottom: 4,
  letterSpacing: "-0.01em",
};

const pcardSub: React.CSSProperties = {
  fontSize: 13,
  color: "var(--ink-faint)",
  marginBottom: 18,
};

const pcardValue: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 700,
  color: "var(--ink)",
  letterSpacing: "-0.025em",
  lineHeight: 1,
  marginBottom: 8,
};
