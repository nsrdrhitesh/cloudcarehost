import BlogAuthor from '@/app/components/BlogAuthor';
// import BlogAuthor from '@/app/components/BlogAuthor';
import BlogContent from '@/app/components/BlogContent';
import BlogNavigation from '@/app/components/BlogNavigation';

export default function BlogPost({ params }) {
  // Static data for the blog post
  const post = {
    id: params.slug,
    title: "How to Optimize Your WordPress Website for Maximum Performance",
    date: "May 15, 2025",
    readTime: "8 min read",
    category: "WordPress",
    image: "/assets/images/blog/featured.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/assets/images/blog/authors/sarah.jpg",
      bio: "WordPress expert with 10+ years of experience helping businesses optimize their online presence. Sarah specializes in performance optimization and security.",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#"
      }
    },
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced digital world, website performance is more important than ever. A slow-loading WordPress site can lead to higher bounce rates, lower search engine rankings, and ultimately, lost revenue. In this comprehensive guide, we'll walk you through the essential techniques to speed up your WordPress site and improve user experience.</p>
      
      <h2>Why WordPress Performance Matters</h2>
      <p>Studies show that:</p>
      <ul>
        <li>53% of mobile users abandon sites that take longer than 3 seconds to load</li>
        <li>A 1-second delay in page response can result in a 7% reduction in conversions</li>
        <li>Google uses page speed as a ranking factor in search results</li>
      </ul>
      
      <h2>Essential Optimization Techniques</h2>
      
      <h3>1. Choose Quality Hosting</h3>
      <p>Your hosting provider plays a crucial role in your site's performance. Look for:</p>
      <ul>
        <li>SSD storage instead of traditional HDD</li>
        <li>PHP 8.0+ support</li>
        <li>Built-in caching solutions</li>
        <li>Content Delivery Network (CDN) integration</li>
      </ul>
      
      <h3>2. Optimize Your Images</h3>
      <p>Images often account for most of a webpage's size. Follow these best practices:</p>
      <ul>
        <li>Compress images before uploading (aim for 70-80% quality)</li>
        <li>Use modern formats like WebP</li>
        <li>Implement lazy loading</li>
        <li>Specify image dimensions</li>
      </ul>
      
      <h3>3. Implement Caching</h3>
      <p>Caching can dramatically improve load times for repeat visitors:</p>
      <ul>
        <li>Browser caching</li>
        <li>Page caching</li>
        <li>Object caching (Redis or Memcached)</li>
      </ul>
      
      <h3>4. Minify and Combine Files</h3>
      <p>Reduce the number of HTTP requests by:</p>
      <ul>
        <li>Minifying CSS and JavaScript files</li>
        <li>Combining files where possible</li>
        <li>Deferring non-critical JavaScript</li>
      </ul>
      
      <h2>Advanced Optimization Strategies</h2>
      
      <h3>Database Optimization</h3>
      <p>Regularly maintain your WordPress database:</p>
      <ul>
        <li>Clean up post revisions</li>
        <li>Remove spam comments</li>
        <li>Optimize database tables</li>
      </ul>
      
      <h3>Use a Content Delivery Network (CDN)</h3>
      <p>A CDN stores your site's static files on servers around the world, delivering them from the location closest to each visitor.</p>
      
      <h2>Monitoring and Maintenance</h2>
      <p>Performance optimization isn't a one-time task. Regularly:</p>
      <ul>
        <li>Test your site speed (using tools like GTmetrix or PageSpeed Insights)</li>
        <li>Update WordPress core, themes, and plugins</li>
        <li>Review and adjust your optimization strategies</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>By implementing these WordPress performance optimization techniques, you can significantly improve your site's speed, user experience, and search engine rankings. Start with the basics and gradually implement more advanced strategies as needed.</p>
    `,
    relatedPosts: [
      {
        id: "wordpress-security",
        title: "Essential WordPress Security Measures for 2025",
        date: "April 10, 2025",
        image: "/assets/images/blog/security.jpg"
      },
      {
        id: "caching-solutions",
        title: "Comparing the Top 5 WordPress Caching Plugins",
        date: "March 22, 2025",
        image: "/assets/images/blog/caching.jpg"
      },
      {
        id: "hosting-comparison",
        title: "WordPress Hosting Showdown: Shared vs Managed vs VPS",
        date: "March 5, 2025",
        image: "/assets/images/blog/hosting.jpg"
      }
    ]
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
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn delay-100">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-blue-100 animate-fadeIn delay-200">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
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
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Blog Content */}
              <BlogContent content={post.content} />

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {['WordPress', 'Performance', 'Optimization', 'Hosting', 'Speed'].map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio */}
              <BlogAuthor author={post.author} />

              {/* Comments Section */}
              <div className="mt-16 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Comments (3)</h3>
                
                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="flex items-start gap-4">
                    <img 
                      src="/assets/images/blog/authors/comment1.jpg" 
                      alt="User" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold">Michael Chen</h4>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-700">
                          Great article! I implemented these techniques and saw my page load time drop from 4.2s to 1.8s. The image optimization tips were especially helpful.
                        </p>
                        <button className="text-blue-600 text-sm mt-2 hover:text-blue-800">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div className="flex items-start gap-4">
                    <img 
                      src="/assets/images/blog/authors/comment2.jpg" 
                      alt="User" 
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold">Emily Rodriguez</h4>
                          <span className="text-sm text-gray-500">1 week ago</span>
                        </div>
                        <p className="text-gray-700">
                          Could you recommend any specific plugins for database optimization? I have a site with 5+ years of content that's getting sluggish.
                        </p>
                        <button className="text-blue-600 text-sm mt-2 hover:text-blue-800">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">Leave a Comment</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <textarea 
                      placeholder="Your Comment" 
                      rows="4" 
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-blue-900 mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <div 
                      key={relatedPost.id} 
                      className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition duration-300 animate-fadeIn"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <a href={`/blog/${relatedPost.id}`}>
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-sm text-gray-500">{relatedPost.date}</span>
                          <h4 className="font-bold mt-1 line-clamp-2">{relatedPost.title}</h4>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-6 space-y-8">
                {/* Table of Contents */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Table of Contents</h3>
                  <ul className="space-y-2">
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

                {/* Popular Tags */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "WordPress", count: 24 },
                      { name: "Performance", count: 18 },
                      { name: "Security", count: 15 },
                      { name: "Hosting", count: 12 },
                      { name: "SEO", count: 9 },
                      { name: "Plugins", count: 7 },
                      { name: "Themes", count: 6 },
                      { name: "Ecommerce", count: 5 }
                    ].map((tag, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full transition flex items-center"
                      >
                        #{tag.name}
                        <span className="text-xs text-gray-500 ml-1">({tag.count})</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Navigation */}
      <BlogNavigation currentPostId={post.id} />
    </main>
  )
}