/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/kouchou-ai-yatsushiro',
  assetPrefix: '/kouchou-ai-yatsushiro'
}

module.exports = nextConfig
