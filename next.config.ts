import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stop trailing-slash redirects that loop with Hostinger CDN + Facebook fbclid URLs.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
