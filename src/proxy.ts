import { NextResponse, type NextRequest } from "next/server";
import { LEGAL_DOCS } from "@/lib/legal";

const TEAMS_HOSTS = new Set([
  "teams.opinionly.io",
  "teams.localhost:3000",
]);

// Every legal doc renders on the teams host too — derived so a new doc can't
// be added to the site and 404 here.
const SHARED_PATHS = new Set(LEGAL_DOCS.map((slug) => `/${slug}`));

// Slugs that were live long enough for Google to crawl them before being
// renamed. Kept so the old address still resolves instead of 404ing.
const RENAMED_PATHS = new Map([["/terms", "/terms-service"]]);

// Main hosts that have a teams host provisioned alongside them. Preview
// deploys don't, so they're absent here on purpose — see the redirect below.
const TEAMS_ORIGINS = new Map([
  ["opinionly.io", "https://teams.opinionly.io"],
  ["www.opinionly.io", "https://teams.opinionly.io"],
  ["localhost:3000", "http://teams.localhost:3000"],
]);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const url = request.nextUrl.clone();
  const isTeamsHost = TEAMS_HOSTS.has(host);

  // Runs before the teams rules so a renamed doc resolves on either host.
  const renamed = RENAMED_PATHS.get(url.pathname);
  if (renamed) {
    url.pathname = renamed;
    return NextResponse.redirect(url, 308);
  }

  // The teams page has one address: the teams host at its root. Both `/teams`
  // spellings serve identical bytes, so redirect them permanently instead of
  // leaving three URLs for a crawler to choose a canonical from.
  if (url.pathname === "/teams" || url.pathname.startsWith("/teams/")) {
    const path = url.pathname.slice("/teams".length) || "/";

    if (isTeamsHost) {
      url.pathname = path;
      return NextResponse.redirect(url, 308);
    }

    const origin = TEAMS_ORIGINS.get(host);
    if (origin) {
      return NextResponse.redirect(`${origin}${path}${url.search}`, 308);
    }

    // A host with no teams counterpart, i.e. a preview deploy. Fall through so
    // the page stays reachable at /teams rather than pointing at nothing.
  }

  if (isTeamsHost && !SHARED_PATHS.has(url.pathname)) {
    url.pathname = `/teams${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon\\.ico|.*\\.[\\w]+$).*)"],
};
