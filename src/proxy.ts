import { NextResponse, type NextRequest } from "next/server";
import { LEGAL_DOCS } from "@/lib/legal";

const TEAMS_HOSTS = new Set([
  "teams.opinionly.io",
  "teams.localhost:3000",
]);

// Every legal doc renders on the teams host too — derived so a new doc can't
// be added to the site and 404 here.
const SHARED_PATHS = new Set(LEGAL_DOCS.map((slug) => `/${slug}`));

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const url = request.nextUrl.clone();

  if (
    TEAMS_HOSTS.has(host) &&
    !url.pathname.startsWith("/teams") &&
    !SHARED_PATHS.has(url.pathname)
  ) {
    url.pathname = `/teams${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon\\.ico|.*\\.[\\w]+$).*)"],
};
