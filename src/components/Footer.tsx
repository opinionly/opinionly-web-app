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
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-4 border-t border-line px-5 pt-8 pb-16 text-[13px] text-ink-faint sm:px-8">
        <span className="font-serif text-[20px] text-ink italic">
          Opinionly
        </span>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <NextLink
              key={l.href.toString()}
              className="text-ink-soft no-underline transition-colors duration-150 hover:text-ink"
              {...l}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
