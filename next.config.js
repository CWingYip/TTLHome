/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT === '1' ? 'export' : 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
