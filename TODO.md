# TODO List

## In Progress
- [x] Finalize SEO metadata (site-wide and per-post), OG image handling (2025-08-08 19:09)
- [x] Smoke testing and polish (syntax highlighting theme, minor styles) (2026-10-03)

## Pending
- [x] Write utilities (if needed) (2026-10-03)
  - [x] lib/date.ts (nice date formatting) (2026-10-03)
  - [x] lib/posts.ts (sorting, tags, descriptions) (2026-10-03)
- [x] Testing & verification (2026-10-03)
  - [x] Run dev and smoke test /, /posts/[slug], /tags, /tags/[tag] (2026-10-03)
  - [x] Validate sitemap.xml and robots.txt (2026-10-03)
  - [x] Type-check and lint clean (2025-08-08 19:09)
- [x] Documentation & PR
  - [x] Update README with new stack and content workflow (2026-10-03)
  - [x] Create PULL_REQUEST.md (summary, implementation, testing results, breaking changes) (2025-08-08 19:09)
  - [x] Create PR via gh: gh pr create --title "Modernize blog to Next.js 14 (App Router)" --body-file PULL_REQUEST.md (2025-08-08 19:09)
- [ ] Deployment
  - [ ] Setup/confirm Vercel project, preview deployment
  - [ ] Verify domain and production build on Vercel
- [x] Cleanup (2026-10-03)
  - [x] Remove legacy files/configs no longer used (pages/*, now.json, next.config.old.js if fully migrated) (2026-10-03)
  - [x] Add redirects if any URL changes are required (aiming to preserve existing paths) (2026-10-03)

## Follow-ups
- [ ] Consider migrating off Contentlayer (unmaintained) to e.g. Velite / next-mdx-remote, then upgrade to Next.js 15 / React 19
- [ ] Generate per-post OG images (next/og)

## Completed
- [x] Add RSS feed (/feed.xml), canonical/OG metadata, dark mode, prev/next post navigation (2026-10-03)
- [x] Fix non-ASCII tag pages returning 404 (2026-10-03)
- [x] Create feature branch: feat/modernize-next14 (2025-08-08)
- [x] Inventory existing features/components and content locations (2025-08-08)
- [x] Set Node engine and scripts in package.json (dev/build/start/lint/typecheck/format/contentlayer) (2025-08-08)
- [x] Upgrade Next.js to 14, React 18, TypeScript 5 (2025-08-08)
- [x] Add ESLint + Prettier and configs (.eslintrc.json, .prettierrc) (2025-08-08)
- [x] Tailwind CSS setup: tailwindcss, postcss, autoprefixer, @tailwindcss/typography (2025-08-08)
- [x] Create tailwind.config.js and postcss.config.js; add app/globals.css (2025-08-08)
- [x] Contentlayer + MDX v2: install and configure (remark-gfm, rehype-pretty-code, shiki) (2025-08-08)
- [x] Create contentlayer.config.ts (Post schema including title, description, published_at, tags[]) (2025-08-08)
- [x] Add next.config.mjs with withContentlayer (2025-08-08)
- [x] Add mdx-components.tsx (code, links, images) (2025-08-08)
- [x] Migrate MDX from pages/posts/*.mdx to content/posts/*.mdx (2025-08-08)
- [x] App Router pages: layout.tsx, page.tsx, posts/[slug]/page.tsx, tags pages, sitemap.ts, robots.ts (2025-08-08)
- [x] Remove legacy Babel config and Emotion remnants to enable SWC (2025-08-08)
- [x] Build success on Next 14 (yarn build) (2025-08-08)
- [x] Move/prepare assets under public/ as needed (2025-08-08)

PR: https://github.com/wawoon/blog/pull/29
