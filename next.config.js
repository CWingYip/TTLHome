/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT === '1' ? 'export' : 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(process.env.EXPORT === '1' && {
    basePath: '/TTLHome',
    assetPrefix: '/TTLHome',
  }),
}

module.exports = nextConfig
