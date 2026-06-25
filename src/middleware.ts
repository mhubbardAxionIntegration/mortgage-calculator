import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Canonical public origin — never use request.nextUrl.clone() for redirects on Hostinger (leaks :3000). */
const CANONICAL = "https://www.smartmortgagecalc.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];

  // Apex → www, preserving path and query (e.g. Facebook fbclid).
  if (host === "smartmortgagecalc.com") {
    const path = request.nextUrl.pathname + request.nextUrl.search;
    return NextResponse.redirect(new URL(path || "/", CANONICAL), 308);
  }

  // Hostinger CDN may normalize "/?fbclid=…" to "?fbclid=…" (empty pathname). Rewrite internally.
  if (request.nextUrl.pathname === "" && request.nextUrl.search) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Skip static/SEO files — let Next.js serve them directly (ads.txt route handler).
  matcher: [
    "/((?!ads\\.txt|robots\\.txt|sitemap\\.xml|favicon\\.ico|icon\\.svg|icon\\.svg$).*)",
  ],
};
