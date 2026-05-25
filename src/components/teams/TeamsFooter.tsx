export default function TeamsFooter() {
  return (
    <footer style={{ background: "var(--cream)" }}>
      <div
        className="teams-footer-inner"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "32px 32px 64px",
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 13,
          color: "var(--ink-faint)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontStyle: "italic",
            fontSize: 20,
            color: "var(--ink)",
          }}
        >
          Opinionly
        </span>
        <div>
          <a
            href="mailto:info@theshareon.com"
            style={{
              color: "var(--ink-soft)",
              textDecoration: "none",
              marginLeft: 24,
              transition: "color 0.15s",
            }}
          >
            info@theshareon.com
          </a>
          <a
            href="/privacy"
            style={{
              color: "var(--ink-soft)",
              textDecoration: "none",
              marginLeft: 24,
              transition: "color 0.15s",
            }}
          >
            Privacy
          </a>
          <a
            href="/terms"
            style={{
              color: "var(--ink-soft)",
              textDecoration: "none",
              marginLeft: 24,
              transition: "color 0.15s",
            }}
          >
            Terms
          </a>
          <a
            href="/cookies"
            style={{
              color: "var(--ink-soft)",
              textDecoration: "none",
              marginLeft: 24,
              transition: "color 0.15s",
            }}
          >
            Cookies
          </a>
          <a
            href="/eula"
            style={{
              color: "var(--ink-soft)",
              textDecoration: "none",
              marginLeft: 24,
              transition: "color 0.15s",
            }}
          >
            EULA
          </a>
        </div>
      </div>
    </footer>
  );
}
