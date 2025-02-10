import Navigation from '@/components/Navigation'
import Link from 'next/link'

const items = [
  {
    title: 'Chat Interface',
    url: '/ui/ai/1',
    id: '1',
    description: 'Modern chat interface with message bubbles',
  },
  {
    title: 'Message Input',
    url: '/ui/ai/2',
    id: '2',
    description: 'Input field with send button and attachments',
  },
  {
    title: 'Chat History',
    url: '/ui/ai/3',
    id: '3',
    description: 'Scrollable chat history with timestamps',
  },
  {
    title: 'AI Assistant Card',
    url: '/ui/ai/4',
    id: '4',
    description: 'Profile card for AI assistant with status',
  },
]

export default function ComponentPage({ params }: { params: { category: string; componentId: string } }) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Side Menu */}
      <div className="w-64 bg-white text-black min-h-screen p-4">
        <h1 className="text-xl font-bold mb-4">{params.category.toUpperCase()}</h1>
        <Navigation items={items} defaultPage={'ai'} />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Breadcrumb navigation */}
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/ui" className="hover:text-gray-900">
              UI
            </Link>
            <span>/</span>
            <Link href={`/ui/${params.category}`} className="hover:text-gray-900 capitalize">
              {params.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">Component {params.componentId}</span>
          </div>
        </div>

        {/* Component content */}
        <div className="container mx-auto px-8 py-8">
          <h1 className="text-4xl font-bold mb-8">Component {params.componentId}</h1>

          <div className="flex gap-4 mb-8">
            <button className="px-4 py-2 font-medium border-b-2 border-orange-500">Preview</button>
            <button className="px-4 py-2 font-medium text-gray-500 hover:text-gray-900">Code</button>
          </div>

          {/* Preview/Code content area */}
          <div className="bg-gray-100 rounded-lg min-h-[400px] p-8">{/* Component preview or code will go here */}</div>
        </div>
      </div>
    </div>
  )
}
