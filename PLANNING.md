# PLANNING: Rebuild blog with a modern stack

## Task overview and objectives
- Modernize the existing blog repository to a current, maintainable stack.
- Preserve existing content and URLs where possible (e.g., /posts/[slug], /tags/[tag]).
- Improve developer experience (TypeScript, ESLint/Prettier), styling consistency, and SEO.
- Prepare for easy deploy on Vercel.

## Finalized target stack (my choices)
- Framework: Next.js 14 (App Router, React 18, Server Components)
- Language/Tooling: TypeScript 5.x, Node 18/20, ESLint + Prettier
- Content: MDX v2 via Contentlayer (typed content, fast build-time indexing)
- Styling: Tailwind CSS v3 + @tailwindcss/typography (remove Emotion)
- Syntax highlighting: Shiki (SSR) via rehype-pretty-code
- Images: next/image
- SEO: App Router Metadata API, custom route handlers or app/sitemap.ts
- Analytics: Vercel Analytics (GA4 optional; can add later)

## Step-by-step implementation plan
1) Repository setup
   - Create branch: feat/modernize-next14
   - Audit current structure and inventory content in pages/posts/*.mdx
2) Dependencies & config
   - Upgrade to Next.js 14, React 18, TypeScript 5
   - Add Tailwind CSS v3, PostCSS, Autoprefixer
   - Add Contentlayer + MDX v2, remark/rehype plugins (remark-gfm, rehype-pretty-code)
   - Add ESLint + Prettier configs
3) App Router bootstrap
   - Introduce app/ directory with layout.tsx, page.tsx
   - Add global styles (globals.css) and Tailwind setup
   - Implement site header/footer and basic layout
4) Content system
   - Create content/posts and migrate existing MDX from pages/posts
   - Define contentlayer.config.ts with Post schema (title, description, date, tags[], slug, image, published, author, slide?)
   - Implement mdx-components mapping (code blocks, images, links, callouts)
5) Routes (App Router)
   - app/page.tsx: home feed (latest posts)
   - app/posts/[slug]/page.tsx: post detail
   - app/tags/page.tsx: list all tags
   - app/tags/[tag]/page.tsx: posts by tag
   - app/sitemap.ts (or route handler) and app/robots.txt
   - app/rss/route.ts (optional)
6) Styling
   - Replace Emotion usage with Tailwind utilities and prose classes
   - Keep typography pleasant with @tailwindcss/typography
7) SEO & Metadata
   - Use Metadata API for site-wide and per-post meta/OG
   - Per-post OG image support via front-matter (image)
8) Utilities
   - lib/date.ts (formatting), lib/tags.ts (normalize/group), lib/og.ts (optional)
9) Build, test, and iterate
   - Run dev/build; fix type errors
   - Smoke-test key routes and MDX features (code, images, links)
   - Validate sitemap and robots.txt
10) Documentation and PR
   - Update README with new stack and content workflow
   - Create PULL_REQUEST.md and open PR via gh CLI

## Key files and components to modify or add
- package.json (deps/scripts), next.config.js
- tailwind.config.js, postcss.config.js, src/styles/globals.css
- app/layout.tsx, app/page.tsx
- app/posts/[slug]/page.tsx, app/tags/page.tsx, app/tags/[tag]/page.tsx
- app/sitemap.ts, app/robots.ts (or route.ts), app/rss/route.ts (optional)
- contentlayer.config.ts
- mdx-components.tsx
- content/posts/** (migrated MDX)
- lib/date.ts, lib/tags.ts, lib/posts.ts (if needed)
- .eslintrc.cjs, .prettierrc

## Testing and verification strategy
- Local dev smoke test for /, /posts/[slug], /tags, /tags/[tag]
- Verify metadata tags and OG images
- Validate sitemap.xml and robots.txt output
- Ensure no broken links or images in migrated MDX

## Rollout plan
- Work on feature branch and push to remote
- Use Vercel Preview deploys for review (optional)
- Merge to master after approval

## Risks and mitigation
- MDX v1 -> v2 differences: test code blocks; use rehype plugins to restore behavior
- Contentlayer maintenance: acceptable for our use; fallback to next-mdx-remote if issues appear
- Tailwind migration: ensure purge/content paths correct to avoid missing styles
- URL preservation: keep slug mapping; add redirects if any structural changes occur

## Initial repository notes (to be verified)
- Current repo directory: ./blog (cloned)
- Likely Next.js 9.x pages router, MDX via next-mdx-enhanced
- Content in pages/posts/*.mdx with front-matter (title, tags, author, slide, published_at)
- Styling via Tailwind 1.x and Emotion components

Status: In progress
- Branch: feat/modernize-next14
- Implemented: Next.js 14 App Router bootstrap, Tailwind v3, Contentlayer + MDX v2, routes (home/posts/tags), sitemap/robots, MDX migration
- Pending: SEO metadata polish, OG images, testing (build/dev), cleanup legacy files, docs & PR
