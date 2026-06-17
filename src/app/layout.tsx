import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import {
  SITE,
  MONETIZATION,
  isAdsEnabled,
  isAnalyticsEnabled,
  isConsentRequired,
} from "@/lib/site";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { CookieConsent } from "@/components/consent/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Mortgage Calculator: Estimate Monthly Payments & Affordability (${SITE.year} Rates)`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author.name }],
  keywords: [
    "mortgage calculator",
    "mortgage payment calculator",
    "home affordability calculator",
    "mortgage calculator with taxes and insurance",
    "how much house can i afford",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: `Free Mortgage Calculator (${SITE.year})`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    title: `Free Mortgage Calculator (${SITE.year})`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        {/* smc-deploy:ga4-v3 — search page source for this marker to confirm Hostinger pulled latest build */}
        {/* Google Consent Mode v2 — must run before gtag config. */}
        {isConsentRequired() && (
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});",
            }}
          />
        )}
        {/* AdSense — literal <script> in SSR HTML for crawler/tag detection. */}
        {isAdsEnabled() && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${MONETIZATION.adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}
        {/* GA4 — literal tags in SSR HTML so Tag Assistant / GA detect the tag. */}
        {isAnalyticsEnabled() && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${MONETIZATION.analyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${MONETIZATION.analyticsId}',{anonymize_ip:true,send_page_view:true});`,
              }}
            />
          </>
        )}
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <ConsentProvider>
          <JsonLd data={organizationSchema()} />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ConsentProvider>
      </body>
    </html>
  );
}
