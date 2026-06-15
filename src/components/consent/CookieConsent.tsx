"use client";

import Link from "next/link";
import { useConsent } from "./ConsentProvider";
import { isConsentRequired } from "@/lib/site";

/**
 * Lightweight cookie-consent banner. Only appears when a non-essential script
 * (ads/analytics) is configured and the visitor hasn't chosen yet. Accepting
 * lets ConsentedScripts load AdSense/GA; declining keeps them off.
 */
export function CookieConsent() {
  const { consent, ready, setConsent } = useConsent();

  // Don't render until we've read storage (prevents a flash for returning
  // visitors) and only when there's actually something to consent to.
  if (!ready || !isConsentRequired() || consent !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-600">
          We use cookies for analytics and advertising to keep this calculator
          free. You can accept or decline non-essential cookies. See our{" "}
          <Link href="/privacy-policy" className="font-medium text-emerald-700 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
