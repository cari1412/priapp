// next.config.ts - ФИНАЛЬНАЯ ВЕРСИЯ ДЛЯ NEXT.JS 16
// Без устаревших опций

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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Production Source Maps отключены
  productionBrowserSourceMaps: false,

  // Headers для агрессивного кеширования статики
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|ico)',
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
      {
        source: '/_next/static/:path*',
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