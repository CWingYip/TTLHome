/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT === '1' ? 'export' : 'standalone',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './src/imageLoader.js',
  },
}

module.exports = nextConfig
