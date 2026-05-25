import Link from "next/link";

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
        <nav
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "24px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-instrument-serif), Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 26,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              textDecoration: "none",
            }}
          >
            Opinionly
          </Link>
        </nav>
      </div>

      <main
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "48px 32px 96px",
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--ink-soft)",
        }}
        className="legal-page"
      >
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "var(--ink)",
            margin: "0 0 8px",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "var(--ink-faint)",
            margin: "0 0 40px",
          }}
        >
          Last updated {lastUpdated}
        </p>

        {children}
      </main>

      <footer style={{ background: "var(--cream)" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "32px 32px 64px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 13,
            color: "var(--ink-faint)",
          }}
        >
          <span
            style={{
              fontFamily:
                "var(--font-instrument-serif), Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: 20,
              color: "var(--ink)",
            }}
          >
            Opinionly
          </span>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
            <LegalFootLink href="mailto:info@theshareon.com">
              info@theshareon.com
            </LegalFootLink>
            <LegalFootLink href="/privacy">Privacy</LegalFootLink>
            <LegalFootLink href="/terms">Terms</LegalFootLink>
            <LegalFootLink href="/cookies">Cookies</LegalFootLink>
            <LegalFootLink href="/eula">EULA</LegalFootLink>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LegalFootLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{
        color: "var(--ink-soft)",
        textDecoration: "none",
        marginLeft: 24,
        transition: "color 0.15s",
      }}
    >
      {children}
    </a>
  );
}
