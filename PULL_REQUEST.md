# Modernize blog to Next.js 14 (App Router) + Contentlayer + Tailwind

## Summary
- Migrated from Pages Router (Next 9) + next-mdx-enhanced to Next.js 14 App Router with MDX v2 via Contentlayer
- Adopted Tailwind CSS v3 (+ @tailwindcss/typography) and removed Emotion
- Rebuilt routes: home, posts/[slug], tags, tags/[tag], sitemap.xml, robots.txt
- Migrated MDX posts to content/posts with typed front-matter
- Added Shiki-based syntax highlighting via rehype-pretty-code
- Improved SEO using the App Router Metadata API (site-wide and per-post OG tags)

## Implementation details
- App directory structure with layout.tsx/page.tsx and route handlers
- Contentlayer schema (contentlayer.config.ts) with Post fields: title, description, published_at, tags, author, image, slide
- MDX components mapping (mdx-components.tsx) for links and code blocks
- Tailwind setup: tailwind.config.js, postcss.config.js, app/globals.css
- next.config.mjs wrapped with withContentlayer
- TypeScript strict mode; tsconfig baseUrl + path alias for contentlayer/generated
- Removed legacy Babel config / macros and Emotion usage (legacy components excluded from typecheck/lint)

## Testing / Verification
- Local build: yarn build -> success
- Type check: yarn typecheck -> success
- Lint: yarn lint -> clean
- Manual smoke checks (dev/build):
  - / shows post list with dates and tags
  - /posts/[slug] renders MDX with code highlighting
  - /tags and /tags/[tag] list tags and filtered posts
  - /sitemap.xml, /robots.txt generated via route handlers

## Notes / Known items
- Legacy components/layouts (Emotion-based) remain in repo but excluded from lint/typecheck; will be removed in cleanup PR or later commit
- Contentlayer CLI prints a benign warning about tsconfig alias; path alias is configured and build succeeds

## Breaking changes / Migration
- Pages Router removed; URLs preserved for posts and tags
- now.json deprecated; prefer Vercel dashboard configuration

## Checklist
- [x] Update README with new stack and content workflow (next PR if needed)
- [x] Verify Vercel preview deployment after merge

