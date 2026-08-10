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

// The teams host matching a given main host, so this still works off-domain.
function teamsOrigin(host: string) {
  const bare = host.replace(/^www\./, "");
  return `${bare.startsWith("localhost") ? "http" : "https"}://teams.${bare}`;
}

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

    return NextResponse.redirect(`${teamsOrigin(host)}${path}${url.search}`, 308);
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
