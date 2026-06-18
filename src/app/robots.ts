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
      { userAgent: "Bingbot", ...publicAllow },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
