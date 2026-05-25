"use client";

export default function Footer() {
  return (
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
          <FooterLink href="mailto:info@theshareon.com">
            info@theshareon.com
          </FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/cookies">Cookies</FooterLink>
          <FooterLink href="/eula">EULA</FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
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
      onMouseOver={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "var(--ink-soft)";
      }}
    >
      {children}
    </a>
  );
}
