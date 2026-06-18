import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid trailing-slash redirects that fight Hostinger hcdn canonicalization on "/".
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
