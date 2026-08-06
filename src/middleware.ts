import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAdsTxtBody } from "@/lib/adsTxt";

/** Canonical public origin — never use request.nextUrl.clone() for redirects on Hostinger (leaks :3000). */
const CANONICAL = "https://www.smartmortgagecalc.com";

const ADS_TXT_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
};

function isInsecureRequest(request: NextRequest): boolean {
  const proto = (
    request.headers.get("x-forwarded-proto") ||
    request.nextUrl.protocol.replace(":", "")
  ).toLowerCase();
  return proto === "http";
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Serve ads.txt on apex and www with consistent headers (before any redirect).
  if (pathname === "/ads.txt" || pathname === "/ads.txt/") {
    return new NextResponse(getAdsTxtBody(), {
      status: 200,
      headers: ADS_TXT_HEADERS,
    });
  }

  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const pathAndQuery = request.nextUrl.pathname + request.nextUrl.search;

  // Force HTTPS when the edge still forwards cleartext (Hostinger x-forwarded-proto).
  if (
    isInsecureRequest(request) &&
    (host === "www.smartmortgagecalc.com" || host === "smartmortgagecalc.com")
  ) {
    return NextResponse.redirect(new URL(pathAndQuery || "/", CANONICAL), 308);
  }

  // Apex → www, preserving path and query (e.g. Facebook fbclid).
  if (host === "smartmortgagecalc.com") {
    return NextResponse.redirect(new URL(pathAndQuery || "/", CANONICAL), 308);
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
  // Skip static assets so middleware doesn't add latency on cached files.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
