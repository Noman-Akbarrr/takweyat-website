import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'takweyat.org' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: '**.sanity.io' },
    ],
  },
  headers: async () => [
    {
      source: '/studio/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
      ],
    },
    {
      source: '/((?!studio).*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://cdn.sanity.io https://*.sanity.io",
            "style-src 'self' 'unsafe-inline' https: https://cdn.sanity.io https://*.sanity.io",
            "img-src 'self' data: https: blob: https://cdn.sanity.io https://*.sanity.io",
            "font-src 'self' data: https:",
            "connect-src 'self' https: https://*.sanity.io",
            "frame-src 'self' https://*.sanity.io",
          ].join('; '),
        },
      ],
    },
  ],
}

export default nextConfig
