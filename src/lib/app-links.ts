/**
 * Where the apps live, and whether the site is allowed to say so yet.
 *
 * Every download surface reads from here so that launching a platform is a
 * one-line change rather than a hunt through copy. Android ships later; until
 * it does, `ANDROID_URL` stays null and the UI offers a notify-me capture
 * instead of a dead badge.
 */

/** App Store "Apple ID" from App Store Connect → App Information. */
export const APP_STORE_ID = "6755163649";

/**
 * Null until Google Play review clears. Kept as a typed null rather than an
 * empty string so a forgotten `if` fails the build instead of rendering a
 * badge that links nowhere.
 */
export const ANDROID_URL: string | null = null;

/**
 * No country segment on purpose: Apple redirects a bare `/app/id<id>` to the
 * visitor's own storefront, where `/us/app/...` would strand everyone outside
 * the US on a "not available in your region" page.
 */
const APP_STORE_BASE = `https://apps.apple.com/app/id${APP_STORE_ID}`;

/**
 * From App Store Connect → Analytics → Campaigns. Identifies the developer
 * account and is constant across every campaign; only the `ct` below varies
 * per placement. Apple discards a `ct` that arrives without it, so the helper
 * returns a clean URL rather than query noise when this is null.
 *
 * Campaigns need roughly a day and a handful of taps before they appear in
 * Analytics — an empty Campaigns page right after adding this is expected, not
 * a sign it is wired up wrong.
 */
const APP_STORE_PROVIDER_TOKEN: string | null = "127271598";

/**
 * App Store link for a given placement. `campaign` is the `ct` token that
 * shows up in App Store Connect's campaign breakdown — pass a short, stable
 * slug per surface (`hero`, `closing`, `teams`) so the analytics answer
 * "which part of the site drives installs" rather than just "the site did".
 */
export function appStoreUrl(campaign?: string): string {
  if (!campaign || !APP_STORE_PROVIDER_TOKEN) {
    return APP_STORE_BASE;
  }

  const params = new URLSearchParams({
    pt: APP_STORE_PROVIDER_TOKEN,
    ct: campaign,
    mt: "8",
  });

  // Apple documents campaign links against the `/app/apple-store/id<id>` form
  // specifically. Both spellings resolve, but this is the one their analytics
  // help describes, so attribution isn't resting on an undocumented variant.
  return `https://apps.apple.com/app/apple-store/id${APP_STORE_ID}?${params.toString()}`;
}

/**
 * Campaign tokens are free text, and a typo just silently splits a campaign in
 * two. Placements pass these instead of string literals so the set stays
 * enumerable and greppable. The `website_` prefix keeps site-driven installs
 * separable from future ones (`instagram_bio`, `launch_email`) under the
 * single `website` campaign created in App Store Connect.
 */
export const CAMPAIGNS = {
  closing: "website_closing",
  hero: "website_hero",
  qr: "website_qr",
  shortLink: "website_download_link",
  teams: "website_teams",
  teamsNav: "website_teams_nav",
} as const;
