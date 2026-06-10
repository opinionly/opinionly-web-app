"use client";

import { ComponentProps, CSSProperties } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const logoStyles: CSSProperties = {
    color: "var(--ink)",
    fontFamily: "var(--font-instrument-serif), Georgia, serif",
    fontSize: 26,
    fontStyle: "italic",
    fontWeight: 400,
    letterSpacing: "-0.01em",
  };

  return (
    <nav
      style={{
        display: "flex",
        fontSize: 14,
        justifyContent: "space-between",
        padding: "24px 32px",
        userSelect: "none",
      }}
    >
      {/* Logo */}
      {pathname === "/" ? (
        <span style={logoStyles}>Opinionly</span>
      ) : (
        <NextLink href="/" style={logoStyles}>
          Opinionly
        </NextLink>
      )}
      {/* Nav links */}
      {pathname === "/" && (
        <div style={{ alignItems: "center", display: "flex", gap: 28 }}>
          <NavLink href="#how">How it works</NavLink>
          <NavLink
            href="#waitlist"
            style={{
              background: "var(--ink)",
              borderRadius: 999,
              color: "white",
              lineHeight: 1,
              padding: "9px 18px",
              transition: "background 0.15s",
            }}
          >
            Join waitlist
          </NavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink(props: ComponentProps<typeof NextLink>) {
  const { style, ...restProps } = props;

  return (
    <NextLink
      style={{
        color: "var(--ink-soft)",
        fontWeight: 500,
        transition: "color 0.15s",
        ...style,
      }}
      {...restProps}
    />
  );
}
