import type { ReactNode } from "react";

interface IconProps {
  size?: number;
}

function InstagramIcon({ size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} height={size} aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.3" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} height={size} aria-hidden="true">
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} height={size} aria-hidden="true">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.3A6 6 0 0 1 16 8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="9"
        width="4"
        height="12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export interface SocialProfile {
  name: string;
  href: string;
  Icon: (props: IconProps) => ReactNode;
}

export const socialProfiles: SocialProfile[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/opinionlyapp/",
    Icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/OpinionlyApp",
    Icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/opinionly",
    Icon: LinkedInIcon,
  },
];
