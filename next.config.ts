import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://otunba.name.ng/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
