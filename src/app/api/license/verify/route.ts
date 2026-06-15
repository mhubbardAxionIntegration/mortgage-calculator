import { NextResponse } from "next/server";
import { verifyLicense } from "@/lib/license";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Verifies a license key's signature (and expiry) server-side, so the signing
 * secret never reaches the client. Used both when a buyer returns from
 * checkout and when they paste a key on another device.
 */
export async function POST(req: Request) {
  let key = "";
  try {
    const body = await req.json();
    if (typeof body?.key === "string") key = body.key.trim();
  } catch {
    /* no/invalid body */
  }

  const result = verifyLicense(key);
  return NextResponse.json(
    { valid: result.valid, email: result.email ?? null },
    { status: result.valid ? 200 : 400 },
  );
}
