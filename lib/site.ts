export const siteConfig = {
  name: 'wawoon blog',
  description: 'wawoon の技術ブログ。GraphQL / React / Next.js / Ruby などについて書いています。',
  author: 'wawoon',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://wawoon.dev').replace(/\/$/, ''),
  github: 'https://github.com/wawoon',
} as const

export const absoluteUrl = (path = '') => `${siteConfig.url}${path}`

/** RSS autodiscovery link. Re-spread it when a page overrides `alternates` (metadata merges shallowly). */
export const feedAlternates = {
  'application/rss+xml': [{ url: '/feed.xml', title: siteConfig.name }],
}
