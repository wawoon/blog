import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from '@/mdx-components'
import { TagList } from '@/components/TagList'
import { formatDate, toISODate } from '@/lib/date'
import { getAllPosts, getPostBySlug, getPostDescription } from '@/lib/posts'
import { feedAlternates, siteConfig } from '@/lib/site'

export const dynamicParams = false

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  const description = getPostDescription(post)
  return {
    title: post.title,
    description,
    keywords: post.tagList,
    alternates: { canonical: post.url, types: feedAlternates },
    openGraph: {
      type: 'article',
      title: post.title,
      description,
      url: post.url,
      siteName: siteConfig.name,
      locale: 'ja_JP',
      publishedTime: new Date(post.published_at).toISOString(),
      authors: [post.author ?? siteConfig.author],
      tags: post.tagList,
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: post.image ? 'summary_large_image' : 'summary',
      title: post.title,
      description,
    },
  }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()
  const MDXContent = useMDXComponent(post.body.code)

  // Newer / older neighbours for in-blog navigation
  const posts = getAllPosts()
  const index = posts.findIndex((p) => p.slug === post.slug)
  const newer = posts[index - 1]
  const older = posts[index + 1]

  return (
    <article className="space-y-8">
      <header className="space-y-3 border-b border-slate-200 pb-6 dark:border-slate-800">
        <time dateTime={toISODate(post.published_at)} className="block text-sm text-slate-500 dark:text-slate-400">
          {formatDate(post.published_at)}
        </time>
        <h1 className="text-3xl font-bold leading-tight">{post.title}</h1>
        <TagList tags={post.tagList} />
      </header>

      <div className="prose prose-slate max-w-none dark:prose-invert prose-pre:rounded-lg prose-img:rounded">
        <MDXContent components={mdxComponents} />
      </div>

      <nav className="grid gap-4 border-t border-slate-200 pt-6 text-sm sm:grid-cols-2 dark:border-slate-800">
        {newer ? (
          <Link
            href={`/posts/${newer.slug}`}
            className="rounded border border-slate-200 p-3 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
          >
            <span className="block text-slate-500 dark:text-slate-400">← 新しい記事</span>
            {newer.title}
          </Link>
        ) : (
          <span />
        )}
        {older && (
          <Link
            href={`/posts/${older.slug}`}
            className="rounded border border-slate-200 p-3 text-right hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
          >
            <span className="block text-slate-500 dark:text-slate-400">古い記事 →</span>
            {older.title}
          </Link>
        )}
      </nav>
    </article>
  )
}
