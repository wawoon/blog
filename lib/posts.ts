import { allPosts as generatedPosts, type Post as GeneratedPost } from 'contentlayer/generated'

/**
 * Contentlayer emits `tagList: list` (an unresolved type) for computed list fields,
 * so we re-declare it with the correct element type here.
 */
export type Post = Omit<GeneratedPost, 'tagList'> & { tagList: string[] }

const allPosts = generatedPosts as Post[]

const byDateDesc = (a: Post, b: Post) => +new Date(b.published_at) - +new Date(a.published_at)

/** All posts, newest first. */
export const getAllPosts = (): Post[] => [...allPosts].sort(byDateDesc)

export const getPostBySlug = (slug: string): Post | undefined =>
  allPosts.find((p) => p.slug === slug)

/** Posts that have the given tag, newest first. */
export const getPostsByTag = (tag: string): Post[] =>
  getAllPosts().filter((p) => p.tagList.includes(tag))

/** All tags with their post counts, most used first. */
export const getAllTags = (): { tag: string; count: number }[] => {
  const counts = new Map<string, number>()
  for (const p of allPosts) {
    for (const t of p.tagList) counts.set(t, (counts.get(t) ?? 0) + 1)
  }
  return Array.from(counts, ([tag, count]) => ({ tag, count })).sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag),
  )
}

export const getPostDescription = (post: Post): string => post.description || post.excerpt

export const tagPath = (tag: string) => `/tags/${encodeURIComponent(tag)}` as const
