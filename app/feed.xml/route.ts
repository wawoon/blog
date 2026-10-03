import { getAllPosts, getPostDescription } from '@/lib/posts'
import { absoluteUrl, siteConfig } from '@/lib/site'

export const dynamic = 'force-static'

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

export function GET() {
  const posts = getAllPosts()
  const items = posts
    .map((post) => {
      const url = absoluteUrl(post.url)
      const categories = post.tagList.map((t) => `<category>${escapeXml(t)}</category>`).join('')
      return `<item><title>${escapeXml(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(post.published_at).toUTCString()}</pubDate><description>${escapeXml(getPostDescription(post))}</description>${categories}</item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(siteConfig.name)}</title>
<link>${absoluteUrl('/')}</link>
<description>${escapeXml(siteConfig.description)}</description>
<language>ja</language>
<atom:link href="${absoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml"/>
${posts[0] ? `<lastBuildDate>${new Date(posts[0].published_at).toUTCString()}</lastBuildDate>` : ''}
${items}
</channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
