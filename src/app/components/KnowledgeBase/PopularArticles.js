import Link from 'next/link'

export default function PopularArticles({ title, views, link, delay = 0 }) {
  return (
    <Link href={link}>
      <div 
        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer animate-fadeIn"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-blue-900 hover:text-blue-600">{title}</h3>
          <span className="text-sm text-gray-500">{views} views</span>
        </div>
      </div>
    </Link>
  )
}