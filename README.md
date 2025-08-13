# wawoon.dev

Personal blog built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Contentlayer (MDX).

## What’s inside
- MDX posts under `content/posts/` with front-matter (`title`, `tags`, `published_at`, optional `image`)
- App Router pages (`/`, `/posts/[slug]`, `/tags`, `/tags/[tag]`)
- Syntax highlighting via `rehype-pretty-code + shiki`
- Generated sitemap and robots.txt
- Strict TypeScript settings and ESLint (Next core-web-vitals)

## Requirements
- Node.js >= 18.17
- yarn (classic) or npm

## Getting Started
```bash
git clone https://github.com/wawoon/blog.git
cd blog
# install deps
yarn install
# generate Contentlayer types and run dev server
yarn dev
```
Open http://localhost:3000

## Build
```bash
yarn build
# start production server
yarn start
```

## Write a post
Create a new `.mdx` file in `content/posts/` with YAML front-matter:
```mdx
---
title: "My New Post"
tags: "tag1 tag2"
published_at: "2025-01-01"
image: "/assets/image.png" # optional
---

Your content here...
```

## Project structure (excerpt)
```
.
├── app/                  # App Router entrypoints
│   ├── page.tsx          # Top page (posts list)
│   ├── posts/[slug]/     # Post detail
│   └── tags/             # Tags index/detail
├── content/              # MDX contents
│   └── posts/
├── lib/                  # Utilities (e.g., date)
├── public/               # Static assets
├── contentlayer.config.ts
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Notes
- Legacy code for the old Pages Router and Emotion was removed.
- Contentlayer alias is configured; the build sets `disableImportAliasWarning: true` to silence a known warning.

## License
MIT © Yoshinori Kosaka