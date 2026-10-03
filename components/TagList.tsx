import Link from 'next/link'
import { tagPath } from '@/lib/posts'

export function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null
  return (
    <ul className="flex flex-wrap gap-2 text-xs">
      {tags.map((t) => (
        <li key={t}>
          <Link
            href={tagPath(t)}
            className="rounded bg-slate-100 px-2 py-0.5 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            #{t}
          </Link>
        </li>
      ))}
    </ul>
  )
}
