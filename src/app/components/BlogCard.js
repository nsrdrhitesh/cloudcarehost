import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post, isFeatured = false, className = '', style }) {
  return (
    <article 
      className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition duration-300 ${className}`}
      style={style}
    >
      <Link href={`/blog/${post.id}`}>
        <div className={`relative ${isFeatured ? 'h-64' : 'h-48'} overflow-hidden`}>
          <Image
            src={post.image_url || '/assets/images/default.jpg'}
            alt={post.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
            sizes={isFeatured ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
          />
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
            {post.category}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.read_time}</span>
          </div>
          
          <h3 className={`font-bold mb-3 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          {post.author && (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={post.author.avatar || '/assets/images/blog/authors/default.jpg'}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
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
  );
}