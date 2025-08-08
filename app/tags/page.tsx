import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function TagsPage() {
  const tagCount = new Map<string, number>()
  for (const p of allPosts) {
    for (const t of p.tagList) {
      tagCount.set(t, (tagCount.get(t) || 0) + 1)
    }
  }
  const tags = Array.from(tagCount.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tags</h1>
      <ul className="flex flex-wrap gap-2">
        {tags.map(([tag, count]) => (
          <li key={tag}>
            <Link href={`/tags/${encodeURIComponent(tag)}`} className="rounded bg-slate-100 px-3 py-1 text-sm hover:bg-slate-200">
              {tag} <span className="text-slate-500">({count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
