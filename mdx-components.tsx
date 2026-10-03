import type { MDXComponents } from 'mdx/types'
import type { Route } from 'next'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  a: ({ href = '', children, ...props }) => {
    if (href.startsWith('/')) return <Link href={href as Route}>{children}</Link>
    if (href.startsWith('#')) return <a href={href} {...props}>{children}</a>
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    )
  },
  pre: (props) => <pre className="overflow-x-auto" {...props} />,
}
