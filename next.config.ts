import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so the parent folder's package-lock.json is ignored.
  turbopack: { root: import.meta.dirname },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
