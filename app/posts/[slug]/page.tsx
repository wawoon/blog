import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from '../../../mdx-components'
import type { Metadata } from 'next'

export const dynamicParams = false

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description ?? undefined,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <article className="prose prose-slate max-w-none">
      <h1>{post.title}</h1>
      <div className="text-sm text-slate-500">
        {new Date(post.published_at).toLocaleDateString('ja-JP')}
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  )
}
