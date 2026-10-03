# wawoon.dev

Personal blog built with **Next.js 14 (App Router)**, **MDX via Contentlayer**, and **Tailwind CSS**.

## Features
- Posts written in MDX (`content/posts/*.mdx`) with typed front-matter (Contentlayer)
- Statically generated pages: home, `/posts/[slug]`, `/tags`, `/tags/[tag]`
- Syntax highlighting with Shiki (`rehype-pretty-code`), GitHub-flavored Markdown (`remark-gfm`)
- Tailwind CSS v3 + `@tailwindcss/typography`, automatic dark mode (`prefers-color-scheme`)
- SEO via the Metadata API: canonical URLs, Open Graph / Twitter cards, auto-generated descriptions
- `sitemap.xml`, `robots.txt` and an RSS feed (`/feed.xml`)

## Prerequisites
- Node.js 18.17 or newer
- Yarn

## Getting Started

```bash
git clone https://github.com/wawoon/blog.git
cd blog
yarn install
yarn dev        # http://localhost:3000
```

## Scripts

| Command          | Description                                 |
| ---------------- | ------------------------------------------- |
| `yarn dev`       | Start the dev server (with content reload)  |
| `yarn build`     | Build content with Contentlayer + Next.js   |
| `yarn start`     | Serve the production build                  |
| `yarn lint`      | ESLint (`next lint`)                        |
| `yarn typecheck` | TypeScript type check                       |
| `yarn format`    | Format with Prettier                        |

## Folder Structure

```
.
├── app/                    App Router pages, sitemap.ts, robots.ts, feed.xml route
├── components/             Shared React components (PostList, TagList)
├── content/posts/          Blog posts (MDX)
├── lib/                    Site config and helpers (posts, dates)
├── public/                 Static assets
├── contentlayer.config.ts  Content schema and MDX plugins
├── mdx-components.tsx      Components used when rendering MDX
├── next.config.mjs         Next.js configuration (Contentlayer, redirects)
└── tailwind.config.js      Tailwind CSS configuration
```

`.contentlayer/` is generated on `yarn dev` / `yarn build` and is not committed.

## Writing Posts

Create `content/posts/<slug>.mdx`. The file name becomes the URL (`/posts/<slug>`).

```markdown
---
title: My New Post
tags: tag1 tag2            # space-separated
published_at: 2024-01-01
description: Optional summary (falls back to the beginning of the post)
image: /og/my-post.png     # optional OG image
---

Write your post here in Markdown or MDX...
```

## Configuration

| Env var                | Default              | Description                                   |
| ---------------------- | -------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://wawoon.dev` | Absolute site URL used for canonical/OG/feeds |

## Deployment

Deploy on [Vercel](https://vercel.com/) (framework preset: Next.js). The default build command `yarn build` runs Contentlayer before `next build`.

## License

MIT © Yoshinori Kosaka
