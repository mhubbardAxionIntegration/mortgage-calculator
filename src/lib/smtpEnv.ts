/**
 * Runtime email env helpers for the contact API.
 *
 * Delivery order (see /api/contact): Resend (RESEND_API_KEY) → SMTP
 * (SMTP_USER + SMTP_PASS) → 503 in production.
 *
 * Primary SMTP names (set these on Hostinger): SMTP_USER, SMTP_PASS
 * Optional aliases are accepted so a misnamed panel entry still works.
 *
 * Do NOT put secrets in next.config `env` — that inlines at build time.
 * Server routes should read process.env at request time (this module).
 */
import "server-only";

/** Trim and strip a single layer of wrapping quotes from panel/env UIs. */
export function envValue(name: string): string | undefined {
  const raw = process.env[name];
  if (raw == null) return undefined;
  let value = raw.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim();
  }
  return value.length > 0 ? value : undefined;
}

/** First non-empty among primary + alias names. */
export function envValueAny(...names: string[]): string | undefined {
  for (const name of names) {
    const value = envValue(name);
    if (value) return value;
  }
  return undefined;
}

/** Primary + accepted aliases for mailbox login. */
export const SMTP_USER_KEYS = ["SMTP_USER", "SMTP_USERNAME", "MAIL_USER"] as const;
export const SMTP_PASS_KEYS = ["SMTP_PASS", "SMTP_PASSWORD", "MAIL_PASS"] as const;

export function resolveSmtpUser(): string | undefined {
  return envValueAny(...SMTP_USER_KEYS);
}

export function resolveSmtpPass(): string | undefined {
  return envValueAny(...SMTP_PASS_KEYS);
}

/** Resend API key — often injected more reliably than SMTP on some hosts. */
export function resolveResendApiKey(): string | undefined {
  return envValue("RESEND_API_KEY");
}

/**
 * From address for Resend.
 * Use a verified domain sender in production, or onboarding@resend.dev for tests.
 */
export function resolveResendFrom(
  siteName: string,
  fallbackEmail: string,
): string {
  return (
    envValue("RESEND_FROM") ||
    envValue("SMTP_FROM") ||
    `${siteName} <${fallbackEmail}>`
  );
}

export function parseSmtpPort(raw: string | undefined, fallback: number): number {
  if (!raw) return fallback;
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export function resolveSmtpSecure(
  port: number,
  secureEnv: string | undefined,
): boolean {
  if (secureEnv === "true" || secureEnv === "1") return true;
  if (secureEnv === "false" || secureEnv === "0") return false;
  return port === 465;
}

export type SmtpConfig = {
  host: string;
  user: string | undefined;
  pass: string | undefined;
  port: number;
  from: string;
  secure: boolean;
  /** True when both user and pass resolve to non-empty values. */
  ready: boolean;
};

export function getSmtpConfig(opts: {
  siteName: string;
  fallbackEmail: string;
}): SmtpConfig {
  const host = envValue("SMTP_HOST") || "smtp.hostinger.com";
  const user = resolveSmtpUser();
  const pass = resolveSmtpPass();
  const port = parseSmtpPort(envValue("SMTP_PORT"), 465);
  const from =
    envValue("SMTP_FROM") ||
    (user
      ? `"${opts.siteName}" <${user}>`
      : `"${opts.siteName}" <${opts.fallbackEmail}>`);
  const secure = resolveSmtpSecure(
    port,
    envValue("SMTP_SECURE")?.toLowerCase(),
  );

  return {
    host,
    user,
    pass,
    port,
    from,
    secure,
    ready: Boolean(user && pass),
  };
}

/**
 * Safe diagnostics — booleans only, never secret values.
 * `SMTP_USER` / `SMTP_PASS` reflect effective presence after alias resolution.
 */
export function smtpConfiguredFlags(): {
  SMTP_USER: boolean;
  SMTP_PASS: boolean;
  RESEND_API_KEY: boolean;
} {
  return {
    SMTP_USER: Boolean(resolveSmtpUser()),
    SMTP_PASS: Boolean(resolveSmtpPass()),
    RESEND_API_KEY: Boolean(resolveResendApiKey()),
  };
}

/** True when at least one delivery path can run. */
export function emailDeliveryReady(): {
  resend: boolean;
  smtp: boolean;
  ready: boolean;
} {
  const flags = smtpConfiguredFlags();
  const resend = flags.RESEND_API_KEY;
  const smtp = flags.SMTP_USER && flags.SMTP_PASS;
  return { resend, smtp, ready: resend || smtp };
}

/** Names of missing env keys for operator-facing JSON (no secrets). */
export function missingEmailEnvKeys(): string[] {
  const flags = smtpConfiguredFlags();
  const { ready } = emailDeliveryReady();
  if (ready) return [];
  const missing: string[] = [];
  if (!flags.RESEND_API_KEY) missing.push("RESEND_API_KEY");
  if (!flags.SMTP_USER) missing.push("SMTP_USER");
  if (!flags.SMTP_PASS) missing.push("SMTP_PASS");
  return missing;
}

/** Full presence map for server logs (booleans only). */
export function smtpEnvPresence(): Record<string, boolean> {
  const keys = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_USERNAME",
    "MAIL_USER",
    "SMTP_PASS",
    "SMTP_PASSWORD",
    "MAIL_PASS",
    "SMTP_FROM",
    "SMTP_SECURE",
    "CONTACT_EMAIL",
    "RESEND_API_KEY",
    "RESEND_FROM",
  ] as const;

  const presence: Record<string, boolean> = {};
  for (const key of keys) {
    presence[key] = Boolean(envValue(key));
  }
  const configured = smtpConfiguredFlags();
  const delivery = emailDeliveryReady();
  presence["effective.SMTP_USER"] = configured.SMTP_USER;
  presence["effective.SMTP_PASS"] = configured.SMTP_PASS;
  presence["effective.RESEND_API_KEY"] = configured.RESEND_API_KEY;
  presence["effective.emailReady"] = delivery.ready;
  return presence;
}

export function logSmtpEnvPresence(): void {
  console.error("[contact] email env presence:", smtpEnvPresence());
}
