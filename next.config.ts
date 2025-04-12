import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['ec2-18-178-87-70.ap-northeast-1.compute.amazonaws.com'],
  images: {
    remotePatterns: [
            {
              hostname: "images.unsplash.com"
            }
        ]
  }
};

export default nextConfig;
