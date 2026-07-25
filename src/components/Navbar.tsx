"use client";

import { ComponentProps } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

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
          <NavLink
            href="#waitlist"
            className="rounded-full bg-ink px-[18px] py-[9px] leading-none text-white hover:bg-[#3a3833]"
          >
            Join waitlist
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
