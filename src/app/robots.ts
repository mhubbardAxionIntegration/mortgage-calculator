import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const publicAllow = {
  allow: "/",
  disallow: ["/api/"],
};

/**
 * Real content is crawlable. `/api/` is blocked. Location/share query strings
 * are left crawlable so Google can see the canonical, but those URLs are
 * noindexed in middleware + metadata so they do not dilute the index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...publicAllow },
      { userAgent: "Googlebot", ...publicAllow },
      { userAgent: "Googlebot-Image", ...publicAllow },
      { userAgent: "Mediapartners-Google", ...publicAllow },
      { userAgent: "AdsBot-Google", ...publicAllow },
      { userAgent: "AdsBot-Google-Mobile", ...publicAllow },
      { userAgent: "Bingbot", ...publicAllow },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
