import Script from "next/script";
import { MONETIZATION, isAdsEnabled } from "@/lib/site";

/** `ca-pub-123` → `pub-123` for Funding Choices / Privacy & messaging URLs. */
export function adsensePublisherId(): string {
  return MONETIZATION.adsenseClientId.trim().replace(/^ca-/, "");
}

/**
 * Google Consent Mode v2 defaults + AdSense Privacy & messaging (Funding Choices)
 * — Google's certified IAB TCF CMP for AdSense — then the adsbygoogle loader.
 *
 * Order matters: consent defaults must run before any Google ad tag.
 * Publish a European regulations message in AdSense → Privacy & messaging
 * so the CMP UI appears for EEA/UK/Switzerland visitors.
 */
export function AdSenseConsentScripts() {
  if (!isAdsEnabled()) return null;

  const clientId = MONETIZATION.adsenseClientId.trim();
  const pubId = adsensePublisherId();

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        // Global default: denied until a certified CMP (Privacy & messaging) updates.
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted',
          wait_for_update: 2000
        });
        // Non-EEA/UK/CH defaults for this US-focused site (CMP still overrides when shown).
        gtag('consent', 'default', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
          analytics_storage: 'denied',
          region: ['US','CA','MX','AU','NZ','JP','KR','SG','IN','BR','AR','CL','CO','PE','PH','MY','TH','ID','ZA']
        });
      `}</Script>
      <Script id="googlefc-present" strategy="beforeInteractive">{`
        (function(){
          function signalGooglefcPresent(){
            if (!window.frames['googlefcPresent']) {
              if (document.body) {
                var iframe = document.createElement('iframe');
                iframe.style.cssText = 'width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;';
                iframe.name = 'googlefcPresent';
                document.body.appendChild(iframe);
              } else {
                setTimeout(signalGooglefcPresent, 0);
              }
            }
          }
          signalGooglefcPresent();
        })();
      `}</Script>
      <Script
        id="funding-choices"
        strategy="beforeInteractive"
        src={`https://fundingchoicesmessages.google.com/i/${pubId}.js?ers=1`}
      />
      <Script
        id="adsense"
        async
        strategy="beforeInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
