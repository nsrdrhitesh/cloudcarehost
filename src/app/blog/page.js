import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';

async function getPosts(page = 1, limit = 10, category = null) {
  const url = category
    ? `${process.env.NEXT_PUBLIC_API_URL}/api/blog/posts?page=${page}&limit=${limit}&category=${category}`
    : `${process.env.NEXT_PUBLIC_API_URL}/api/blog/posts?page=${page}&limit=${limit}`;
  
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/categories`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

async function getFeaturedPost() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/posts?featured=true&limit=1`, { next: { revalidate: 60 } });
  console.log(res);
  if (!res.ok) throw new Error('Failed to fetch featured post');
  const data = await res.json();
  return data.posts[0];
}

export default async function BlogPage({ searchParams }) {
   const params = await searchParams; 
  const page = params?.page || 1;
  const limit = 4;
  const category = params?.category || null;
  
  const [postsData, categories, featuredPost] = await Promise.all([
    getPosts(page, limit, category),
    getCategories(),
    getFeaturedPost()
  ]);

  const { posts = [], pagination = {} } = postsData || {};
  const popularPosts = Array.isArray(posts) ? posts.slice(0, 4) : [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Cloud Care Host Blog</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn delay-100">
              Expert tips, tutorials, and industry insights to help you succeed online
            </p>
            
            <div className="relative max-w-md mx-auto animate-fadeIn delay-200">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">Featured Article</h2>
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <BlogCard 
                post={{
                  ...featuredPost,
                  category: featuredPost.category_name,
                  date: new Date(featuredPost.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }),
                  author: {
                    name: featuredPost.author_name,
                    avatar: featuredPost.author_avatar
                  }
                }} 
                isFeatured={true}
                className="border-0"
              />
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Latest Articles</h2>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Sort by:</span>
                  <select className="bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.isArray(posts) && posts.length > 0 ? (
  posts.map((post, index) => (
    <BlogCard 
      key={post.id} 
      post={{
        ...post,
        id: post.slug,
        category: post.category_name,
        date: new Date(post.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        author: post.author_name ? {
          name: post.author_name,
          avatar: post.author_avatar
        } : null
      }}
      className="animate-fadeIn"
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    />
  ))
              ) : (
                  <p className="text-gray-500">No posts found.</p>
                  )}
              </div>

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <a
                          key={pageNum}
                          href={`?page=${pageNum}`}
                          className={`w-10 h-10 flex items-center justify-center rounded-md ${
                            pagination.page === pageNum 
                              ? 'bg-blue-600 text-white' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          {pageNum}
                        </a>
                      );
                    })}
                    {pagination.totalPages > 5 && (
                      <>
                        <span className="px-2">...</span>
                        <a
                          href={`?page=${pagination.totalPages}`}
                          className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200"
                        >
                          {pagination.totalPages}
                        </a>
                      </>
                    )}
                    {pagination.page < pagination.totalPages && (
                      <a
                        href={`?page=${parseInt(pagination.page) + 1}`}
                        className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </nav>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <BlogSidebar 
                popularPosts={popularPosts.map(post => ({
                  ...post,
                  id: post.slug,
                  date: new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })
                }))}
                categories={categories} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Our Latest Posts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter and never miss an update from our blog.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-r-lg font-bold transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}