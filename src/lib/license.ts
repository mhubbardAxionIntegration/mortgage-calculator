import crypto from "crypto";

/**
 * Stateless, database-free license keys.
 *
 * A license is a signed token: base64url(JSON payload) + "." + HMAC-SHA256.
 * Because it's signed with a server-only secret (LICENSE_SECRET), it can be
 * verified anywhere without storage, can carry the buyer's email, and cannot
 * be forged or tampered with. This gives a real per-purchase entitlement that
 * works across devices (the buyer re-enters their key) — far stronger than a
 * single shared unlock code, while needing no database.
 */

interface LicensePayload {
  /** Buyer email (entitlement holder). */
  email: string;
  /** Issued-at (ms epoch). */
  iat: number;
  /** Expiry (ms epoch); 0 = lifetime. */
  exp: number;
  /** Schema version. */
  v: number;
}

export interface LicenseVerification {
  valid: boolean;
  email?: string;
  reason?: string;
}

function getSecret(): string | null {
  const s = process.env.LICENSE_SECRET;
  return s && s.length >= 16 ? s : null;
}

export function isLicensingConfigured(): boolean {
  return getSecret() !== null;
}

function b64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function b64urlDecode(input: string): Buffer {
  return Buffer.from(input.replace(/-/g, "+").replace(/_/g, "/"), "base64");
}

function sign(data: string, secret: string): string {
  return b64url(crypto.createHmac("sha256", secret).update(data).digest());
}

/** Issues a signed license for the given email. `ttlDays` of 0 = lifetime. */
export function issueLicense(email: string, ttlDays = 0): string | null {
  const secret = getSecret();
  if (!secret) return null;
  const now = Date.now();
  const payload: LicensePayload = {
    email,
    iat: now,
    exp: ttlDays > 0 ? now + ttlDays * 86_400_000 : 0,
    v: 1,
  };
  const data = b64url(JSON.stringify(payload));
  return `${data}.${sign(data, secret)}`;
}

/** Verifies a license token's signature and expiry. */
export function verifyLicense(token: string): LicenseVerification {
  const secret = getSecret();
  if (!secret) return { valid: false, reason: "not_configured" };
  if (!token || typeof token !== "string") {
    return { valid: false, reason: "missing" };
  }

  const [data, sig] = token.split(".");
  if (!data || !sig) return { valid: false, reason: "malformed" };

  const expected = sign(data, secret);
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
    return { valid: false, reason: "bad_signature" };
  }

  try {
    const payload = JSON.parse(b64urlDecode(data).toString("utf8")) as LicensePayload;
    if (payload.exp && Date.now() > payload.exp) {
      return { valid: false, reason: "expired" };
    }
    return { valid: true, email: payload.email };
  } catch {
    return { valid: false, reason: "corrupt" };
  }
}
