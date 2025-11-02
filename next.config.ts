// next.config.ts - ФИНАЛЬНАЯ ВЕРСИЯ ДЛЯ NEXT.JS 16

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Экспериментальные оптимизации
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Компрессия
  compress: true,

  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Production Source Maps отключены
  productionBrowserSourceMaps: false,

  // Headers для кеширования статики
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Настройки для production
  poweredByHeader: false,
  generateEtags: true,
  
  // Оптимизация TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;