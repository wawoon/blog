import './globals.css'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { feedAlternates, siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: siteConfig.github }],
  alternates: {
    types: feedAlternates,
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: 'ja_JP',
  },
  twitter: { card: 'summary' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex min-h-dvh flex-col bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <header className="border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto flex max-w-3xl items-center gap-4 px-4 py-4">
            <Link href="/" className="font-semibold">
              {siteConfig.name}
            </Link>
            <nav className="ml-auto flex gap-4 text-sm">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/tags" className="hover:underline">
                Tags
              </Link>
              <a href="/feed.xml" className="hover:underline">
                RSS
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">{children}</main>
        <footer className="border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto flex max-w-3xl gap-4 px-4 py-8 text-sm text-slate-500 dark:text-slate-400">
            <span>
              © {new Date().getFullYear()} {siteConfig.author}
            </span>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="ml-auto hover:underline">
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}
