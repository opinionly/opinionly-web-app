"use client";

import { PropsWithChildren } from "react";
import NextLink, { type LinkProps } from "next/link";
import { trackEvent } from "@/lib/analytics";
import { APP_LIVE } from "@/lib/app-links";
import { socialProfiles } from "@/lib/socials";

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

        <div className="flex items-center gap-4">
          {socialProfiles.map((s) => (
            <a
              key={s.name}
              aria-label={`Opinionly on ${s.name}`}
              className="text-ink-soft transition-colors duration-150 hover:text-ink"
              href={s.href}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() =>
                trackEvent("social_follow_click", {
                  platform: s.name.toLowerCase(),
                  location: "footer",
                })
              }
            >
              <s.Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Apple requires this credit exactly once per site, wherever the site
          puts its legal notices, for any page showing the App Store badge.
          Appears with the badge and retires with it. */}
      {APP_LIVE && (
        <div className="mx-auto max-w-[1140px] px-5 pb-10 text-[11px] leading-relaxed text-ink-faint sm:px-8">
          Apple and the Apple logo are trademarks of Apple Inc., registered in
          the U.S. and other countries. App Store is a service mark of Apple
          Inc.
        </div>
      )}
    </footer>
  );
}
