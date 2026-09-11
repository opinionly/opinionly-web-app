"use client";

import { ComponentProps } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { APP_LIVE } from "@/lib/app-links";

const logoClasses =
  "font-serif text-[26px] font-normal tracking-[-0.01em] text-ink italic";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between p-5 text-sm select-none sm:px-8 sm:py-6">
      {/* Logo */}
      {pathname === "/" ? (
        <span className={logoClasses}>Opinionly</span>
      ) : (
        <NextLink href="/" className={logoClasses}>
          Opinionly
        </NextLink>
      )}
      {/* Nav links */}
      {pathname === "/" && (
        <div className="flex items-center gap-7">
          <NavLink
            href="#how"
            className="hidden text-ink-soft hover:text-ink sm:inline"
          >
            How it works
          </NavLink>
          {/* Points at the closing section rather than the App Store directly:
              an Android visitor tapping "Get the app" needs the notify-me form
              that lives there, not a badge for a phone they don't have. */}
          <NavLink
            href={APP_LIVE ? "#get-the-app" : "#waitlist"}
            className="rounded-full bg-ink px-[18px] py-[9px] leading-none text-white hover:bg-[#3a3833]"
          >
            {APP_LIVE ? "Get the app" : "Join waitlist"}
          </NavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink(props: ComponentProps<typeof NextLink>) {
  const { className, ...restProps } = props;

  return (
    <NextLink
      className={`font-medium transition-colors duration-150 ${className ?? ""}`}
      {...restProps}
    />
  );
}
