import Link from 'next/link'
import { formatDate, toISODate } from '@/lib/date'
import type { Post } from '@/lib/posts'
import { TagList } from './TagList'

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="divide-y divide-slate-200 dark:divide-slate-800">
      {posts.map((post) => (
        <li key={post._id} className="space-y-2 py-5 first:pt-0">
          <time dateTime={toISODate(post.published_at)} className="block text-sm text-slate-500 dark:text-slate-400">
            {formatDate(post.published_at)}
          </time>
          <h2 className="text-lg font-semibold leading-snug">
            <Link href={`/posts/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          <TagList tags={post.tagList} />
        </li>
      ))}
    </ul>
  )
}
