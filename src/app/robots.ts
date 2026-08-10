import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const publicAllow = {
    allow: "/",
    disallow: ["/api/"],
  };

  return {
    rules: [
      { userAgent: "*", ...publicAllow },
      { userAgent: "Googlebot", ...publicAllow },
      { userAgent: "Googlebot-Image", ...publicAllow },
      // AdSense crawlers — explicit allow (also covered by "*").
      { userAgent: "Mediapartners-Google", ...publicAllow },
      { userAgent: "AdsBot-Google", ...publicAllow },
      { userAgent: "AdsBot-Google-Mobile", ...publicAllow },
      { userAgent: "Bingbot", ...publicAllow },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
