"use client";

import Script from "next/script";
import { MONETIZATION, isAnalyticsEnabled } from "@/lib/site";
import { useConsent } from "./ConsentProvider";

/**
 * Loads analytics after hydration and after cookie acceptance.
 * AdSense publisher script lives in the root layout <head> (Google requirement).
 */
export function ConsentedScripts() {
  const { consent, ready } = useConsent();

  if (!ready || consent === "denied") return null;
  if (!isAnalyticsEnabled()) return null;

  return (
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
  );
}
