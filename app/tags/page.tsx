import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllTags, tagPath } from '@/lib/posts'
import { feedAlternates } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Tags',
  alternates: { canonical: '/tags', types: feedAlternates },
}

export default function TagsPage() {
  const tags = getAllTags()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tags</h1>
      <ul className="flex flex-wrap gap-2">
        {tags.map(({ tag, count }) => (
          <li key={tag}>
            <Link
              href={tagPath(tag)}
              className="block rounded bg-slate-100 px-3 py-1 text-sm hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              #{tag} <span className="text-slate-500 dark:text-slate-400">({count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
