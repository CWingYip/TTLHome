/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT === '1' ? 'export' : 'standalone',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './src/imageLoader.js',
  },
  ...(process.env.EXPORT === '1' && {
    basePath: '/TTLHome',
    assetPrefix: '/TTLHome',
  }),
}

module.exports = nextConfig
