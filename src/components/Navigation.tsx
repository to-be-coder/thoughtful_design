'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

type NavigationProps = {
  items: {
    title: string
    url: string
  }[]
}

export default function Navigation({ items }: NavigationProps) {
  const segment = useSelectedLayoutSegment()
  const currentPage = segment || 'ai'

  return (
    <nav>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.title}>
            <Link href={item.url} className={`block py-1 px-2 rounded ${item.url.includes(`/${currentPage}`) ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
              <span className="flex items-center">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
