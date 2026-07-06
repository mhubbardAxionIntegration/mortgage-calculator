import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAdsTxtBody } from "@/lib/adsTxt";

/** Canonical public origin — never use request.nextUrl.clone() for redirects on Hostinger (leaks :3000). */
const CANONICAL = "https://www.smartmortgagecalc.com";

const ADS_TXT_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Serve ads.txt on apex and www with consistent headers (before any redirect).
  if (pathname === "/ads.txt" || pathname === "/ads.txt/") {
    return new NextResponse(getAdsTxtBody(), {
      status: 200,
      headers: ADS_TXT_HEADERS,
    });
  }

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
  matcher: "/:path*",
};
