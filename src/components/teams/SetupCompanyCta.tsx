"use client";

import { trackEvent, trackPixel } from "@/lib/analytics";

/**
 * The teams funnel's primary action since self-serve company setup [#819].
 * A company admin no longer waits for a reply from us: the button goes
 * straight to the dashboard, where a verified work email creates the company
 * and hands back the link their team joins from. The pilot form stays as the
 * "talk to us first" option below.
 *
 * `from=teams` is what the dashboard reads; the utm tags are for GA4 on the
 * dashboard's own property, so a sign-up traces back to the placement that
 * earned it rather than to "the website".
 */
const DASHBOARD_URL = "https://dashboard.opinionly.io/";

export const SETUP_PLACEMENTS = {
  hero: "teams_hero",
  nav: "teams_nav",
} as const;

export function setupCompanyUrl(placement: keyof typeof SETUP_PLACEMENTS): string {
  const params = new URLSearchParams({
    from: "teams",
    utm_source: "opinionly.io",
    utm_medium: "teams_page",
    utm_campaign: SETUP_PLACEMENTS[placement],
  });
  return `${DASHBOARD_URL}?${params.toString()}`;
}

interface LinkProps {
  placement: keyof typeof SETUP_PLACEMENTS;
  className?: string;
  children: React.ReactNode;
}

/** The bare link, for the navbar. Same tracking as the hero button. */
export function SetupCompanyLink({ placement, className, children }: LinkProps) {
  return (
    <a
      href={setupCompanyUrl(placement)}
      className={className}
      onClick={() => {
        trackEvent("company_setup_click", { location: placement });
        trackPixel("Lead", { content_name: "company_setup" });
      }}
    >
      {children}
    </a>
  );
}

interface Props {
  finePrint?: string;
}

/** The hero's button, with the "talk to us first" escape hatch beside it. */
export default function SetupCompanyCta({ finePrint }: Props) {
  return (
    <div className="flex max-w-[460px] flex-col gap-3">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <SetupCompanyLink
          placement="hero"
          className="inline-block rounded-full bg-ink px-7 py-3.5 text-base font-medium text-white shadow-(--shadow-sm) transition-colors duration-150 hover:bg-[#3a3833]"
        >
          Set up your company
        </SetupCompanyLink>
        <a
          href="#pilot"
          className="text-sm font-medium text-ink-soft transition-colors duration-150 hover:text-ink"
        >
          Prefer to talk to us first?
        </a>
      </div>
      {finePrint && <p className="text-[13px] text-ink-faint">{finePrint}</p>}
    </div>
  );
}
