export default function BlogSidebar({ popularPosts, categories }) {
  return (
    <aside className="space-y-8">
      {/* About Widget */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4">About Our Blog</h3>
        <p className="text-gray-600 mb-4">
          Welcome to the Cloud Care Host blog where we share expert insights, tutorials, and the latest trends in web hosting and online business.
        </p>
        <button className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Learn more about us
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Popular Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-start group">
              <div className="flex-shrink-0 mr-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-16 h-16 object-cover rounded"
                />
              </div>
              <div>
                <a href="#" className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition">
                  {post.title}
                </a>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="flex justify-between items-center text-gray-600 hover:text-blue-600 transition">
                <span>{category.name}</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Newsletter</h3>
        <p className="text-gray-600 mb-4">
          Subscribe to get notified about new articles and hosting tips.
        </p>
        <div className="space-y-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition">
            Subscribe
          </button>
        </div>
      </div>
    </aside>
  )
}