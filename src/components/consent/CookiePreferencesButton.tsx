"use client";

import { useConsent } from "./ConsentProvider";
import { isConsentRequired } from "@/lib/site";

/**
 * Footer link that re-opens the consent banner so visitors can change or
 * withdraw their cookie choice at any time (a GDPR requirement).
 */
export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  const { resetConsent } = useConsent();
  if (!isConsentRequired()) return null;

  return (
    <button type="button" onClick={resetConsent} className={className}>
      Cookie preferences
    </button>
  );
}
