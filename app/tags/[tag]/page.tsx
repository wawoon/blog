import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export function generateStaticParams() {
  const set = new Set<string>()
  for (const p of allPosts) {
    for (const t of p.tagList) set.add(t)
  }
  return Array.from(set).map((tag) => ({ tag }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURIComponent(params.tag)
  const matched = allPosts.filter((p) => p.tagList.includes(tag))
  if (matched.length === 0) notFound()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tag: {tag}</h1>
      <ul className="space-y-4">
        {matched.map((post) => (
          <li key={post._id}>
            <Link href={`/posts/${post.slug}`} className="font-semibold hover:underline">
              {post.title}
            </Link>
            <div className="text-sm text-slate-500">
              {new Date(post.published_at).toLocaleDateString('ja-JP')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
