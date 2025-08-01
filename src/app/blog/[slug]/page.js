import BlogAuthor from '../../components/BlogAuthor';
import BlogContent from '../../components/BlogContent';
import BlogNavigation from '../../components/BlogNavigation';

async function getPost(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/posts/${slug}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

export default async function BlogPost({ params }) {
  const { post, tags, relatedPosts, comments, prevPost, nextPost } = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-700 text-white text-sm px-4 py-1 rounded-full mb-4 animate-fadeIn">
              {post.category_name}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn delay-100">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-blue-100 animate-fadeIn delay-200">
              <span>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{post.read_time}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              {/* Featured Image */}
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg animate-fadeIn">
                <img 
                  src={post.image_url} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Blog Content */}
              <BlogContent content={post.content} />

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-12 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag.slug}
                      href={`/blog/posts?tag=${tag.slug}`}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition"
                    >
                      #{tag.name}
                    </a>
                  ))}
                </div>
              )}

              {/* Author Bio */}
              {post.author_name && (
                <BlogAuthor author={{
                  name: post.author_name,
                  avatar: post.author_avatar,
                  bio: post.author_bio,
                  social: {
                    twitter: post.twitter_handle ? `https://twitter.com/${post.twitter_handle}` : '#',
                    linkedin: post.linkedin_url || '#',
                    website: post.website_url || '#'
                  }
                }} />
              )}

              {/* Comments Section */}
              <div className="mt-16 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Comments ({comments.length})
                </h3>
                
                <div className="space-y-6">
                  {comments.map(comment => (
                    <div key={comment.id} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                        {comment.author_name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold">{comment.author_name}</h4>
                            <span className="text-sm text-gray-500">
                              {new Date(comment.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                          <button className="text-blue-600 text-sm mt-2 hover:text-blue-800">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">Leave a Comment</h4>
                  <form 
                    action="/api/blog/comments" 
                    method="POST"
                    className="space-y-4"
                  >
                    <input type="hidden" name="post_id" value={post.id} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="author_name"
                        placeholder="Your Name" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <input 
                        type="email" 
                        name="author_email"
                        placeholder="Your Email" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <textarea 
                      name="content"
                      placeholder="Your Comment" 
                      rows="4" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                    <button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition"
                    >
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-blue-900 mb-8">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost, index) => (
                      <div 
                        key={relatedPost.id} 
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition duration-300 animate-fadeIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <a href={`/blog/${relatedPost.slug}`}>
                          <div className="h-40 overflow-hidden">
                            <img 
                              src={relatedPost.image_url} 
                              alt={relatedPost.title} 
                              className="w-full h-full object-cover transition duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <span className="text-sm text-gray-500">
                              {new Date(relatedPost.published_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                            <h4 className="font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-6 space-y-8">
                {/* Table of Contents */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
                    {/* You would parse the content to generate this */}
                    {[
                      "Introduction",
                      "Why WordPress Performance Matters",
                      "Essential Optimization Techniques",
                      "Advanced Optimization Strategies",
                      "Monitoring and Maintenance",
                      "Conclusion"
                    ].map((item, index) => (
                      <li key={index}>
                        <a 
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="text-gray-600 hover:text-blue-600 transition flex items-center"
                        >
                          <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Get More Tips</h3>
                  <p className="text-gray-600 mb-4">
                    Subscribe to our newsletter for weekly WordPress tips and hosting insights.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition">
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Popular Tags */}
                {tags.length > 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <a 
                          key={index} 
                          href={`/blog?tag=${tag.slug}`}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition"
                        >
                          #{tag.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Navigation */}
      <BlogNavigation prevPost={prevPost} nextPost={nextPost} />
    </main>
  );
}