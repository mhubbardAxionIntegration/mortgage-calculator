import type { NextConfig } from "next";
import { STATES } from "./src/lib/states";

const stateRedirects = STATES.map((s) => ({
  source: `/mortgage-calculator/${s.slug}`,
  destination: `/mortgage-calculator?state=${s.slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  // Avoid trailing-slash redirects that fight Hostinger hcdn canonicalization on "/".
  skipTrailingSlashRedirect: true,
  async redirects() {
    return stateRedirects;
  },
  async headers() {
    return [
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
    ];
  },
};

export default nextConfig;
