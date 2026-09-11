import { NextResponse, userAgent, type NextRequest } from "next/server";
import {
  ANDROID_URL,
  APP_LIVE,
  appStoreUrl,
  CAMPAIGNS,
} from "@/lib/app-links";

export const runtime = "nodejs";

const SITE_URL = "https://www.opinionly.io";

/** Where a visitor with nothing to install lands: the closing section's CTA. */
const FALLBACK = `${SITE_URL}/#get-the-app`;

/**
 * Campaign tokens reach Apple's analytics, so a caller doesn't get to put
 * arbitrary text in one. Anything outside this shape falls back to the
 * short-link's own token rather than being passed through.
 */
const CT_RE = /^[a-z0-9_]{1,40}$/;

function isApplePhone(request: NextRequest): boolean {
  const { os } = userAgent(request);

  if (os.name === "iOS") return true;

  // An iPad on iPadOS 13+ requests desktop sites by default and identifies as
  // a Mac. There is no touch signal server-side, so match the raw string —
  // a real Mac never carries "iPad".
  return /iPad|iPhone|iPod/.test(request.headers.get("user-agent") ?? "");
}

/**
 * One address that survives a changing world: `opinionly.io/download` sends
 * each visitor wherever they can actually install the app today, so the link in
 * a bio, an ad, a printed QR or the launch email never needs reprinting. The
 * day Play approves, Android traffic starts routing there on its own.
 */
export async function GET(request: NextRequest) {
  const requested = request.nextUrl.searchParams.get("ct");
  const campaign =
    requested && CT_RE.test(requested) ? requested : CAMPAIGNS.shortLink;

  let destination = FALLBACK;

  if (APP_LIVE && isApplePhone(request)) {
    destination = appStoreUrl(campaign);
  } else if (ANDROID_URL && userAgent(request).os.name === "Android") {
    destination = ANDROID_URL;
  }

  // 302, not 308: which store a device belongs to is a fact about the request,
  // not about the URL, and a permanently-cached redirect would pin the first
  // visitor's platform onto everyone behind the same cache — and onto this
  // browser forever, long after Android ships.
  return NextResponse.redirect(destination, {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
