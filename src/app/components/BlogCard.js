import Link from 'next/link'

export default function BlogCard({ post, isFeatured = false, className = '', style }) {
  return (
    <article 
      className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition duration-300 ${className}`}
      style={style}
    >
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition duration-500 hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
            {post.category}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h3 className={`font-bold mb-3 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4">
            {post.excerpt}
          </p>
          
          {post.author && (
            <div className="flex items-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm text-gray-600">{post.author.name}</span>
            </div>
          )}
          
          {!post.author && (
            <Link 
              href={`/blog/${post.id}`} 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-2"
            >
              Read more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </Link>
    </article>
  )
}