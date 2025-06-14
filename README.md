# wawoon.dev

This is a personal blog built with Next.js, MDX, Tailwind CSS, and Emotion.

## Features
- Write blog posts in Markdown/MDX with front-matter (`title`, `tags`, `published_at`, optional `image`)
- Responsive styling with Tailwind CSS and Emotion
- Code syntax highlighting using Prism.js (`prism-react-renderer`)
- SEO optimization with `next-seo` and dynamic Open Graph tags
- Automatically generated sitemap and `robots.txt`
- Google Analytics integration
- Deploy easily on Vercel (formerly ZEIT Now)

## Prerequisites
- Node.js v10 or newer
- Yarn or npm

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/wawoon/blog.git
   cd blog
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building and Running in Production

```bash
yarn build
yarn start
# or with npm:
npm run build
npm run start
```

## Folder Structure

```
.
├── components/               Shared React components
│   └── posts/                Components for blog posts
├── layouts/                  MDX layouts (default post layout)
├── lib/                      Utility functions (e.g., date formatting)
├── post_data/                MDX front-matter parsing and sorting
├── pages/                    Next.js pages, including `posts/` and API routes
├── public/                   Static assets (robots.txt, favicon, etc.)
├── tailwind.config.js        Tailwind CSS configuration
├── babel-plugin-macros.config.js  Babel configuration for Tailwind macros
├── next.config.js            Next.js configuration with MDX support
├── now.json                  Vercel (Now) deployment configuration
├── package.json              Project metadata and scripts
└── tsconfig.json             TypeScript configuration
```

## Writing Posts

Create a new `.md` or `.mdx` file under `pages/posts/` with YAML front-matter:

```markdown
---
title: "My New Post"
tags: "tag1 tag2"
published_at: "2021-01-01"
image: "/assets/image.png"  # optional
---

Write your post content here in Markdown or MDX...
```

## Deployment

The `now.json` file is configured for easy deployment on Vercel.
Simply run:

```bash
vercel
```

## License

MIT © Yoshinori Kosaka