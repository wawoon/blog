import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    default: 'wawoon blog',
    template: '%s | wawoon blog',
  },
  description: 'Personal blog rebuilt with Next.js 14 and MDX',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-slate-50 text-slate-900">
        <header className="border-b border-indigo-200">
          <div className="mx-auto max-w-3xl px-4 py-4 flex items-center gap-4">
            <Link href="/" className="font-semibold">wawoon blog</Link>
            <nav className="ml-auto flex gap-4 text-sm text-indigo-700">
              <Link href="/">Home</Link>
              <Link href="/tags">Tags</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-indigo-200">
          <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-slate-500">
            © {new Date().getFullYear()} wawoon
          </div>
        </footer>
      </body>
    </html>
  )
}
