import { NextResponse, type NextRequest } from "next/server";

const TEAMS_HOSTS = new Set([
  "teams.opinionly.io",
  "teams.localhost:3000",
]);

const SHARED_PATHS = new Set([
  "/privacy",
  "/terms",
  "/cookies",
  "/eula",
]);

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
