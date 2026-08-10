"use client";

import { useConsent } from "./ConsentProvider";
import { isAdsEnabled, isAnalyticsEnabled } from "@/lib/site";

declare global {
  interface Window {
    googlefc?: {
      showRevocationMessage?: () => void;
      callbackQueue?: unknown[];
    };
    __tcfapi?: (
      command: string,
      version: number,
      callback: (...args: unknown[]) => void,
      parameter?: unknown,
    ) => void;
  }
}

/**
 * Re-opens Google Privacy & messaging / TCF preferences when available; falls
 * back to resetting the local analytics consent choice.
 */
export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  const { resetConsent } = useConsent();
  if (!isAdsEnabled() && !isAnalyticsEnabled()) return null;

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        try {
          if (typeof window.googlefc?.showRevocationMessage === "function") {
            window.googlefc.showRevocationMessage();
            return;
          }
          if (typeof window.__tcfapi === "function") {
            window.__tcfapi("displayConsentUi", 2, () => {});
            return;
          }
        } catch {
          /* fall through to local reset */
        }
        resetConsent();
      }}
    >
      Cookie preferences
    </button>
  );
}
