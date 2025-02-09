import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '955a99af-74d7-4b91-a36a-20819b829e85.selstorage.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
