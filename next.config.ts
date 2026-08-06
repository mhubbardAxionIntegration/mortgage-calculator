import type { NextConfig } from "next";
import { STATES } from "./src/lib/states";

const stateRedirects = STATES.map((s) => ({
  source: `/mortgage-calculator/${s.slug}`,
  destination: `/?state=${s.slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  // Avoid trailing-slash redirects that fight Hostinger hcdn canonicalization on "/".
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      ...stateRedirects,
      {
        source: "/mortgage-calculator",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icon.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/ads.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // HSTS only helps after a valid HTTPS certificate is serving the site.
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
