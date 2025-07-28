import Link from 'next/link';

export default function BlogNavigation({ prevPost, nextPost }) {
  if (!prevPost && !nextPost) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Previous Post */}
          {prevPost && (
            <Link 
              href={`/blog/${prevPost.slug}`} 
              className="group flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={prevPost.image_url} 
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
              href={`/blog/${nextPost.slug}`} 
              className="group flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition md:text-right md:flex-row-reverse"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                <img 
                  src={nextPost.image_url} 
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
  );
}
