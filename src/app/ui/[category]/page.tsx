import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'
import Link from 'next/link'

// Menu items.
const items = [
  {
    title: 'AI',
    url: '/ui/ai',
    icon: Home,
  },
  {
    title: 'Article',
    url: '/ui/article',
    icon: Inbox,
  },
  {
    title: 'Article Card',
    url: '/ui/article-card',
    icon: Calendar,
  },
  {
    title: 'Hero Section',
    url: '/ui/hero-section',
    icon: Search,
  },
  {
    title: 'Header',
    url: '/ui/header',
    icon: Settings,
  },
]

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  // Await the params
  const resolvedParams = await params

  // Get the current page title from the slug
  const currentPage = resolvedParams.slug?.[0] || 'ai'
  const pageTitle = items.find((item) => item.url.includes(currentPage))?.title || 'AI'

  return (
    <div className="flex">
      {/* Existing sidebar */}
      <div className="w-64 bg-white text-black min-h-screen p-4">
        <h1 className="text-xl font-bold mb-4">Components</h1>
        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.title}>
                <Link href={item.url} className={`block py-1 px-2 rounded ${'/ui/' + currentPage === item.url ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* New grid section */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">{pageTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <Link key={i} href={`/ui/${currentPage}/${i + 1}`} className="block">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-2xl">View Code</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
