export default function TeamsNavbar() {
  return (
    <div style={{ position: "relative", zIndex: 10 }}>
      <nav
        className="teams-nav"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: 26,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            display: "inline-flex",
            alignItems: "baseline",
            gap: 10,
          }}
        >
          Opinionly
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontStyle: "normal",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--blue)",
              background: "var(--blue-soft)",
              padding: "3px 8px",
              borderRadius: 6,
              position: "relative",
              top: -3,
            }}
          >
            For teams
          </span>
        </div>

        <div
          className="teams-nav-links"
          style={{ display: "flex", gap: 28, alignItems: "center" }}
        >
          <a
            href="#how"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink-soft)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            How it works
          </a>
          <a
            href="#privacy"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink-soft)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            Privacy
          </a>
          <a
            href="https://opinionly.io"
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink-soft)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
          >
            For people
          </a>
          <a
            href="#pilot"
            className="teams-nav-cta"
            style={{
              background: "var(--ink)",
              color: "white",
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.15s",
            }}
          >
            Request access
          </a>
        </div>
      </nav>
    </div>
  );
}
