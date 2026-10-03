import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const toExcerpt = (markdown: string, length = 120) => {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ') // code blocks
    .replace(/<[^>]+>/g, ' ') // html / jsx tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/^\s*(#{1,6}|>|[-*+]|\d+\.)\s+/gm, '') // headings, quotes, list markers
    .replace(/[`*~|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > length ? `${text.slice(0, length)}…` : text
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    tags: { type: 'string', required: false }, // space-separated
    author: { type: 'string', required: false },
    slide: { type: 'boolean', required: false },
    published_at: { type: 'date', required: true },
    image: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^posts\//, ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath.replace(/^posts\//, '')}`,
    },
    date: {
      type: 'date',
      resolve: (doc) => new Date(doc.published_at),
    },
    tagList: {
      type: 'list',
      of: { type: 'string' },
      resolve: (doc) => (doc.tags ? doc.tags.split(/\s+/).filter(Boolean) : []),
    },
    excerpt: {
      type: 'string',
      description: 'Plain-text summary used as a fallback for meta description',
      resolve: (doc) => toExcerpt(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    // rehype-pretty-code bundles a newer vfile than contentlayer's unified types, hence the cast
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rehypePlugins: [[rehypePrettyCode as any, { theme: 'github-dark' }]],
  },
})
