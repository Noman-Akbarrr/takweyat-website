'use client'

import React from 'react'

type RichTextProps = {
  data: any
  className?: string
}

export function RichText({ data, className }: RichTextProps) {
  if (!data || !data.root || !data.root.children) {
    return null
  }

  return (
    <div className={className}>
      {data.root.children.map((node: any, i: number) => (
        <RichTextNode key={i} node={node} />
      ))}
    </div>
  )
}

function RichTextNode({ node }: { node: any }) {
  if (!node) return null

  const children = node.children?.map((child: any, i: number) => {
    if (child.type === 'text') {
      let text: React.ReactNode = child.text

      if (child.format & 1) text = <strong key={i}>{text}</strong>
      if (child.format & 2) text = <em key={i}>{text}</em>
      if (child.format & 8) text = <u key={i}>{text}</u>
      if (child.format & 16) text = <s key={i}>{text}</s>

      if (child.href) {
        text = (
          <a key={i} href={child.href} className="text-primary hover:underline">
            {text}
          </a>
        )
      }

      return text
    }

    return <RichTextNode key={i} node={child} />
  })

  switch (node.type) {
    case 'heading': {
      const level = node.tag?.replace('h', '') || '2'
      const headingClass = 'font-bold mb-4'
      if (level === '2') return <h2 className={headingClass}>{children}</h2>
      if (level === '3') return <h3 className={headingClass}>{children}</h3>
      if (level === '4') return <h4 className={headingClass}>{children}</h4>
      return <h2 className={headingClass}>{children}</h2>
    }
    case 'paragraph':
      return <p className="mb-4 leading-relaxed">{children}</p>
    case 'list':
      if (node.listType === 'number') {
        return <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>
      }
      return <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>
    case 'listitem':
      return <li>{children}</li>
    case 'quote':
      return (
        <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-text-secondary">
          {children}
        </blockquote>
      )
    case 'link':
      return (
        <a href={node.fields?.url || '#'} className="text-primary hover:underline">
          {children}
        </a>
      )
    default:
      return <div className="mb-4">{children}</div>
  }
}
