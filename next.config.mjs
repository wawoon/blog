import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      // The old Pages Router site served the sitemap from an API route
      { source: '/api/sitemap.xml', destination: '/sitemap.xml', permanent: true },
    ]
  },
}

export default withContentlayer(nextConfig)
