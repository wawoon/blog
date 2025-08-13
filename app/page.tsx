import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { dateToString } from '../lib/date'

export default function HomePage() {
  const posts = [...allPosts].sort((a, b) => +new Date(b.published_at) - +new Date(a.published_at))
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post._id} className="">
            <Link href={`/posts/${post.slug}`} className="text-lg font-semibold hover:underline">
              {post.title}
            </Link>
            <div className="text-sm text-slate-500">
              {dateToString(new Date(post.published_at))}
            </div>
            {post.tagList.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-2 text-xs text-slate-600">
                {post.tagList.map((t: string) => (
                  <Link key={t} href={`/tags/${encodeURIComponent(t)}`} className="rounded bg-slate-100 px-2 py-0.5 hover:bg-slate-200">
                    {t}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
