import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  a: (props) => {
    const href = String(props.href || '')
    const isInternal = href.startsWith('/') || href.startsWith('#')
    if (isInternal) return <a href={href}>{props.children}</a>
    return <a target="_blank" rel="noreferrer" {...props} />
  },
  pre: (props) => <pre className="not-prose overflow-x-auto" {...props} />,
}
