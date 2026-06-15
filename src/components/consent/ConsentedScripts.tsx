"use client";

import Script from "next/script";
import { useConsent } from "./ConsentProvider";
import {
  MONETIZATION,
  isAdsEnabled,
  isAnalyticsEnabled,
} from "@/lib/site";

/**
 * Loads non-essential third-party scripts (Google AdSense + GA4) ONLY after
 * the visitor has accepted cookies. Until then nothing is injected, so no
 * advertising/analytics cookies are set — which is what GDPR/ePrivacy expect
 * and what Google's EEA consent requirements assume.
 */
export function ConsentedScripts() {
  const { consent } = useConsent();
  if (consent !== "granted") return null;

  return (
    <>
      {isAdsEnabled() && (
        <Script
          id="adsbygoogle-init"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${MONETIZATION.adsenseClientId}`}
        />
      )}

      {isAnalyticsEnabled() && (
        <>
          <Script
            id="ga4-src"
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${MONETIZATION.analyticsId}`}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${MONETIZATION.analyticsId}', { anonymize_ip: true });`}
          </Script>
        </>
      )}
    </>
  );
}
