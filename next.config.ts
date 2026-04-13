import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.thuisbatterijbelgie.be' }],
        destination: 'https://thuisbatterijbelgie.be/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
