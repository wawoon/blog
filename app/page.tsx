import type { Metadata } from 'next'
import { PostList } from '@/components/PostList'
import { getAllPosts } from '@/lib/posts'
import { feedAlternates } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/', types: feedAlternates },
}

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Posts</h1>
      <PostList posts={getAllPosts()} />
    </div>
  )
}
