import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import BlogCard from '@/app/components/BlogCard';
import Link from 'next/link';

async function getSearchResults(searchTerm) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/search?q=${encodeURIComponent(searchTerm)}`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch search results');
  }
  
  return res.json();
}

export default async function BlogSearchPage({ searchParams }) {
  // Get search term safely
  const searchTerm = searchParams?.q || '';
  
  // Only fetch results if there's a search term
  const { data } = searchTerm ? await getSearchResults(searchTerm) : { data: null };
  
  const posts = data?.posts || [];
  const categories = data?.categories || [];
  const tags = data?.tags || [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Blog Search'}
            </h1>
            {searchTerm && (
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn delay-100">
                Found {posts.length + categories.length + tags.length} results
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {!searchTerm ? (
            <div className="text-center py-12">
              <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Enter a search term</h3>
              <p className="mt-1 text-gray-500">
                Try searching for blog posts, categories, or tags.
              </p>
            </div>
          ) : (
            <>
              {posts.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-blue-900 mb-8">Blog Posts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                      <BlogCard 
                        key={`post-${post.id}`}
                        post={{
                          ...post,
                          id: post.slug,
                          category: post.category_name,
                          date: new Date(post.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        }}
                        className="animate-fadeIn"
                      />
                    ))}
                  </div>
                </div>
              )}

              {categories.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-blue-900 mb-8">Categories</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category) => (
                      <Link
                        key={`category-${category.id}`}
                        href={`/blog?category=${category.slug}`}
                        className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-300"
                      >
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {tags.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-blue-900 mb-8">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Link
                        key={`tag-${tag.id}`}
                        href={`/blog?tag=${tag.slug}`}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full transition"
                      >
                        #{tag.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {posts.length === 0 && categories.length === 0 && tags.length === 0 && (
                <div className="text-center py-12">
                  <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
                  <p className="mt-1 text-gray-500">
                    Try searching for something else or browse our blog categories.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  )
}