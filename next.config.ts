import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images in /public are always allowed
    unoptimized: false,
  },
};

export default nextConfig;
