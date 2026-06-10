"use client";

import { PropsWithChildren } from "react";
import NextLink, { type LinkProps } from "next/link";

export default function Footer() {
  const footerLinks: Required<PropsWithChildren<Pick<LinkProps, "href">>>[] = [
    { children: "hello@opinionly.io", href: "mailto:hello@opinionly.io" },
    { children: "Privacy", href: "/privacy" },
    { children: "Terms", href: "/terms" },
    { children: "Cookies", href: "/cookies" },
    { children: "EULA", href: "/eula" },
  ];

  return (
    <footer style={{ background: "var(--cream)" }}>
      <div
        style={{
          alignItems: "center",
          borderTop: "1px solid var(--line)",
          color: "var(--ink-faint)",
          display: "flex",
          flexWrap: "wrap",
          fontSize: 13,
          gap: 16,
          justifyContent: "space-between",
          margin: "0 auto",
          maxWidth: 1140,
          padding: "32px 32px 64px",
        }}
      >
        <span
          style={{
            color: "var(--ink)",
            fontFamily:
              "var(--font-instrument-serif), Georgia, 'Times New Roman', serif",
            fontSize: 20,
            fontStyle: "italic",
          }}
        >
          Opinionly
        </span>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {footerLinks.map((l) => (
            <NextLink
              key={l.href.toString()}
              className="ml-6 no-underline transition-colors duration-150 text-[var(--ink-soft)] hover:text-[var(--ink)]"
              {...l}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
