# wawoon.dev

Personal blog built with Next.js App Router, Contentlayer (MDX), Tailwind CSS, and Shiki-based code highlighting.

## Features
- App Router (Next.js 14) with `app/` directory
- MDX posts managed by Contentlayer (`content/posts/*.mdx`)
- GitHub Dark theme highlighting via `rehype-pretty-code`/Shiki
- Responsive styling with Tailwind CSS and Typography plugin
- Generated sitemap and robots using route handlers (`/app/sitemap.ts`, `/app/robots.ts`)
- TypeScript, ESLint, Prettier
- Ready to deploy on Vercel

## Requirements
- Node.js >= 18.17 (see `package.json#engines`)
- Yarn or npm (Yarn is recommended; `yarn.lock` is committed)

## Quickstart
```bash
# clone
git clone https://github.com/wawoon/blog.git
cd blog

# install deps
# using yarn
yarn install
# or npm
# npm install

# dev server
yarn dev
# open http://localhost:3000
```

## Scripts
- `yarn dev` — start Next.js dev server
- `yarn build` — build Contentlayer and Next.js (`contentlayer build && next build`)
- `yarn start` — start production server
- `yarn lint` — run ESLint
- `yarn typecheck` — type-check with tsc
- `yarn format` — format with Prettier
- `yarn contentlayer` — regenerate Contentlayer outputs

## Writing posts
Create a new file under `content/posts/` with `.mdx` extension. Supported front‑matter fields come from `contentlayer.config.ts`:

```yaml
---
title: "My New Post"
description: "Optional description for meta"
tags: "tag1 tag2"        # space-separated
author: "Your Name"      # optional
slide: false              # optional boolean
published_at: 2024-07-01  # required ISO date
image: "/images/og.png"  # optional absolute path under public/
---

MDX content here...
```

Contentlayer computes:
- `slug` — derived from file name
- `url` — `/posts/<slug>`
- `date` — Date instance from `published_at`
- `tagList` — array from `tags`

## Project structure
```
.
├── app/                # App Router entry, routes, sitemap/robots
│   ├── layout.tsx
│   ├── page.tsx
│   ├── posts/
│   └── tags/
├── components/
├── content/
│   └── posts/         # MDX sources
├── lib/
├── public/
├── contentlayer.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Deployment
Vercel recommended:
```bash
# build locally
yarn build
# start
yarn start
```
Set Node version to >= 18.17 in your environment (Vercel picks this up from `engines`).

## License
MIT © Yoshinori Kosaka
