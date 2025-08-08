import { allPosts } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.wawoon.dev'
  const routes: MetadataRoute.Sitemap = [
    '',
    '/tags',
    ...allPosts.map((p) => `/posts/${p.slug}`),
  ].map((path) => ({ url: `${baseUrl}${path}` }))
  return routes
}
