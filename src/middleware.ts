import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Redirect bare domain to www, preserving path and query (e.g. Facebook fbclid). */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];
  if (host === "smartmortgagecalc.com") {
    const url = request.nextUrl.clone();
    url.hostname = "www.smartmortgagecalc.com";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
