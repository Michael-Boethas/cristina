import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          '{img.youtube.com,gigantic-clareta-cristina-180c122a.koyeb.app,media.licdn.com,res.cloudinary.com}',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,

  env: {
    NEXT_PUBLIC_BUILD_TIMESTAMP: new Date().getFullYear().toString(),
  },
};

export default nextConfig;
