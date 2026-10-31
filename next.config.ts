import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: 'security',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
