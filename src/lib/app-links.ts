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
 * The iOS release is approved but sits on manual release, so the product page
 * 404s until someone presses the button in App Store Connect. Flip this on
 * launch day — *after* `apps.apple.com/app/id<id>` actually resolves, which
 * lags the button press by a few hours as Apple propagates to every
 * storefront. Shipping it early points the hero and the Smart App Banner at a
 * dead page.
 */
// Annotated `boolean` rather than left to infer the literal `false`, so the
// compiler checks the launch-day branches now instead of the first time
// someone flips it under time pressure.
export const APP_LIVE: boolean = true;

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
 * Apple only records campaign tokens when they arrive alongside the provider
 * token, which comes from App Store Connect → Analytics → Campaigns. Until
 * someone generates one there, appending `ct` alone would add query noise that
 * Apple silently discards, so `appStoreUrl()` leaves the URL clean instead.
 */
const APP_STORE_PROVIDER_TOKEN: string | null = null;

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

  return `${APP_STORE_BASE}?${params.toString()}`;
}
