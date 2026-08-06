"use client";

import Script from "next/script";
import {
  MONETIZATION,
  isAdServingEnabled,
  isAnalyticsEnabled,
} from "@/lib/site";
import { useConsent } from "./ConsentProvider";

/**
 * Loads nonessential third-party scripts after hydration and after cookie choice —
 * keeps them off the critical LCP path. AdSense JS is skipped entirely while no
 * ad slot IDs are configured (meta verification can stay in the document head).
 */
export function ConsentedScripts() {
  const { consent, ready } = useConsent();

  if (!ready || consent === "denied") return null;

  const serveAds = isAdServingEnabled();
  const analytics = isAnalyticsEnabled();
  if (!serveAds && !analytics) return null;

  return (
    <>
      {serveAds && (
        <Script
          id="adsense"
          strategy="lazyOnload"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${MONETIZATION.adsenseClientId}`}
          crossOrigin="anonymous"
        />
      )}
      {analytics && (
        <>
          <Script
            id="gtag-js"
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${MONETIZATION.analyticsId}`}
          />
          <Script id="gtag-config" strategy="lazyOnload">{`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${MONETIZATION.analyticsId}',{anonymize_ip:true,send_page_view:true});
          `}</Script>
        </>
      )}
    </>
  );
}
