"use client";

import { PropsWithChildren } from "react";
import NextLink, { type LinkProps } from "next/link";

export default function Footer() {
  const footerLinks: Required<PropsWithChildren<Pick<LinkProps, "href">>>[] = [
    { children: "hello@opinionly.io", href: "mailto:hello@opinionly.io" },
    { children: "Privacy", href: "/privacy" },
    { children: "Terms", href: "/terms-service" },
    { children: "Guidelines", href: "/guidelines" },
    { children: "Cookies", href: "/cookies" },
    { children: "EULA", href: "/eula" },
  ];

  return (
    <footer className="bg-[var(--cream)]">
      <div className="items-center border-t border-[var(--line)] text-[var(--ink-faint)] flex flex-wrap text-[13px] gap-4 justify-between mx-auto max-w-[1140px] px-8 pt-8 pb-16">
        <span
          className="text-[var(--ink)] [font-family:var(--font-instrument-serif),Georgia,'Times_New_Roman',serif] text-[20px] italic"
        >
          Opinionly
        </span>

        <div className="items-center flex flex-wrap gap-1">
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
