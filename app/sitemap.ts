import type { MetadataRoute } from 'next'
import { getAllPosts, getAllTags, tagPath } from '@/lib/posts'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  return [
    { url: absoluteUrl('/'), lastModified: posts[0] ? new Date(posts[0].published_at) : undefined },
    { url: absoluteUrl('/tags') },
    ...posts.map((p) => ({ url: absoluteUrl(p.url), lastModified: new Date(p.published_at) })),
    ...getAllTags().map(({ tag }) => ({ url: absoluteUrl(tagPath(tag)) })),
  ]
}
