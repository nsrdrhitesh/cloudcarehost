import Link from 'next/link'

export default function BlogNavigation({ currentPostId }) {
  const posts = [
    {
      id: "wordpress-optimization",
      title: "How to Optimize Your WordPress Website for Maximum Performance",
      image: "/assets/images/blog/featured.jpg"
    },
    {
      id: "wordpress-security",
      title: "Essential WordPress Security Measures for 2025",
      image: "/assets/images/blog/security.jpg"
    },
    {
      id: "caching-solutions",
      title: "Comparing the Top 5 WordPress Caching Plugins",
      image: "/assets/images/blog/caching.jpg"
    }
  ]

  const currentIndex = posts.findIndex(post => post.id === currentPostId)
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Post */}
          {prevPost && (
            <Link 
              href={`/blog/${prevPost.id}`} 
              className="group flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={prevPost.image} 
                  alt={prevPost.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500 mb-1">Previous Post</span>
                <h3 className="font-bold text-blue-900 group-hover:text-blue-600 transition">
                  {prevPost.title}
                </h3>
              </div>
            </Link>
          )}

          {/* Next Post */}
          {nextPost && (
            <Link 
              href={`/blog/${nextPost.id}`} 
              className="group flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition md:text-right md:flex-row-reverse"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={nextPost.image} 
                  alt={nextPost.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500 mb-1">Next Post</span>
                <h3 className="font-bold text-blue-900 group-hover:text-blue-600 transition">
                  {nextPost.title}
                </h3>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}