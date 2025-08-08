# TODO List

## In Progress
- [ ] Remove legacy Babel config and Emotion remnants to enable SWC (rename babel.config.js, remove macros config)
- [ ] Finalize SEO metadata (site-wide and per-post), OG image handling
- [ ] Smoke testing and polish (syntax highlighting theme, minor styles)

## Pending
- [ ] Write utilities (if needed)
  - [ ] lib/date.ts (nice date formatting)
  - [ ] lib/tags.ts (normalize/group)
- [ ] Testing & verification
  - [ ] Run dev and smoke test /, /posts/[slug], /tags, /tags/[tag]
  - [ ] Validate sitemap.xml and robots.txt
  - [ ] Type-check and lint clean
- [ ] Documentation & PR
  - [ ] Update README with new stack and content workflow
  - [ ] Create PULL_REQUEST.md (summary, implementation, testing results, breaking changes)
  - [ ] Create PR via gh: gh pr create --title "Modernize blog to Next.js 14 (App Router)" --body-file PULL_REQUEST.md
- [ ] Deployment
  - [ ] Setup/confirm Vercel project, preview deployment
  - [ ] Verify domain and production build on Vercel
- [ ] Cleanup
  - [ ] Remove legacy files/configs no longer used (pages/*, now.json, next.config.old.js if fully migrated)
  - [ ] Add redirects if any URL changes are required (aiming to preserve existing paths)

## Completed
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
- [x] Move/prepare assets under public/ as needed (2025-08-08)
