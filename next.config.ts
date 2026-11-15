import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fill the gap between the default 384px and 640px image candidates.
    imageSizes: [32, 48, 64, 96, 128, 256, 320, 384, 480, 512, 560],
  },
};

export default nextConfig;
