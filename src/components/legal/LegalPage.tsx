import { PropsWithChildren } from "react";

interface LegalPage {
  lastUpdated: string;
  title: string;
}

export default function LegalPage(props: PropsWithChildren<LegalPage>) {
  const { children, lastUpdated, title } = props;

  return (
    <div
      className="legal-page"
      style={{
        background: "var(--cream)",
        color: "var(--ink-soft)",
        fontSize: 15,
        lineHeight: 1.7,
        margin: "0 auto",
        maxWidth: 760,
        minHeight: "100vh",
        padding: "48px 32px 96px",
      }}
    >
      <h1
        style={{
          color: "var(--ink)",
          fontSize: 36,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 8px",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          color: "var(--ink-faint)",
          fontSize: 14,
          margin: "0 0 40px",
        }}
      >
        Last updated {lastUpdated}
      </p>
      {children}
    </div>
  );
}
