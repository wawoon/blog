import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PostList } from '@/components/PostList'
import { getAllTags, getPostsByTag, tagPath } from '@/lib/posts'
import { feedAlternates } from '@/lib/site'

export const dynamicParams = false

type Props = { params: { tag: string } }

// Next 14 matches `dynamicParams = false` against the *encoded* path segment,
// so non-ASCII tags (e.g. 転職活動) must be returned URL-encoded here.
export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag: encodeURIComponent(tag) }))
}

export function generateMetadata({ params }: Props): Metadata {
  const tag = decodeURIComponent(params.tag)
  return {
    title: `#${tag}`,
    description: `「${tag}」タグの記事一覧`,
    alternates: { canonical: tagPath(tag), types: feedAlternates },
  }
}

export default function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag)
  const posts = getPostsByTag(tag)
  if (posts.length === 0) notFound()
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">
        #{tag}{' '}
        <span className="text-base font-normal text-slate-500 dark:text-slate-400">({posts.length})</span>
      </h1>
      <PostList posts={posts} />
    </div>
  )
}
