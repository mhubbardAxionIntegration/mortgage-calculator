"use client";

import Link from "next/link";
import { useConsent } from "./ConsentProvider";
import { isAnalyticsEnabled } from "@/lib/site";

/**
 * Optional analytics-only banner. Ad consent for EEA/UK/CH is handled by Google's
 * certified Privacy & messaging (Funding Choices) CMP — not this UI.
 */
export function CookieConsent() {
  const { consent, ready, setConsent } = useConsent();

  // AdSense CMP is Google Privacy & messaging; only show this for analytics choice.
  if (!isAnalyticsEnabled()) return null;
  if (!ready || consent !== "unknown") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Analytics cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-600">
          We use optional analytics cookies to understand site usage. Advertising
          consent in Europe is collected separately via Google&rsquo;s privacy
          message when required. See our{" "}
          <Link href="/privacy-policy" className="font-medium text-sky-800 underline">
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
            Decline analytics
          </button>
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="rounded-lg bg-sky-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
