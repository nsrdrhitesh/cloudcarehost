export default function ArticleMeta({ views, lastUpdated, author }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-gray-200 animate-fadeIn">
      <div className="flex items-center">
        <img 
          src={author?.avatar || "/assets/images/default-avatar.jpg"} 
          alt={author?.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-medium text-blue-900">{author?.name || "Cloud Care Team"}</p>
          <p className="text-sm text-gray-500">{author?.role || "Support Specialist"}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {new Date(lastUpdated).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 9.586V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          {views.toLocaleString()} views
        </div>
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          92% found this helpful
        </div>
      </div>
    </div>
  )
}