import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
        {/* Google Consent Mode v2 defaults — set BEFORE any ad/analytics
            script so no personalized/ad-storage cookies are used until the
            visitor accepts in the cookie banner. */}
        {isConsentRequired() && (
          <Script id="consent-default" strategy="beforeInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied'});`}
          </Script>
        )}
        {/* AdSense loader — literal <script> in SSR HTML so Google's
            verification crawler finds it in <head> (next/script
            afterInteractive only preloads and injects client-side). */}
        {isAdsEnabled() && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${MONETIZATION.adsenseClientId}`}
            crossOrigin="anonymous"
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
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${MONETIZATION.analyticsId}',{anonymize_ip:true});`}
            </Script>
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
