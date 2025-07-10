import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
export const config = {
  runtime: "edge",
};

export const runtime = "edge";
