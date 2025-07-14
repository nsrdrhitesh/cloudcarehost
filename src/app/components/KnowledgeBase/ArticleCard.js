import Link from 'next/link'

export default function ArticleCard({ title, excerpt, views, lastUpdated, link, delay = 0, popular = false }) {
  return (
    <Link href={link}>
      <div 
        className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border ${
          popular ? 'border-blue-200 hover:border-blue-300' : 'border-gray-100 hover:border-blue-200'
        } cursor-pointer h-full animate-fadeIn`}
        style={{ animationDelay: `${delay}s` }}
      >
        {popular && (
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-blue-600">Popular Article</span>
          </div>
        )}
        <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{views.toLocaleString()} views</span>
          <span>Updated {new Date(lastUpdated).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  )
}