import BlogCard from '../components/BlogCard';
// import BlogCard from '../components/BlogCard';
import BlogSidebar from '../components/BlogSidebar';

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "How to Optimize Your WordPress Website for Maximum Performance",
    excerpt: "Learn the essential techniques to speed up your WordPress site and improve user experience with our comprehensive performance optimization guide.",
    date: "May 15, 2025",
    readTime: "8 min read",
    category: "WordPress",
    image: "/assets/images/blog/featured.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/assets/images/blog/authors/sarah.jpg"
    }
  }

  const blogPosts = [
    {
      id: 2,
      title: "10 Essential Security Measures Every Website Owner Should Implement",
      excerpt: "Protect your website from common threats with these must-have security practices.",
      date: "April 28, 2025",
      readTime: "6 min read",
      category: "Security",
      image: "/assets/images/blog/security.jpg"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Choosing the Right Hosting Plan for Your Business",
      excerpt: "Understand the differences between shared, VPS, and dedicated hosting to make the best choice.",
      date: "April 20, 2025",
      readTime: "10 min read",
      category: "Hosting",
      image: "/assets/images/blog/hosting.jpg"
    },
    {
      id: 4,
      title: "How to Migrate Your Website to a New Host Without Downtime",
      excerpt: "Step-by-step guide to seamless website migration with zero downtime.",
      date: "April 12, 2025",
      readTime: "7 min read",
      category: "Migration",
      image: "/assets/images/blog/migration.jpg"
    },
    {
      id: 5,
      title: "Understanding SSL Certificates: Why Your Website Needs HTTPS",
      excerpt: "Learn why SSL is crucial for security, SEO, and customer trust.",
      date: "April 5, 2025",
      readTime: "5 min read",
      category: "Security",
      image: "/assets/images/blog/ssl.jpg"
    },
    {
      id: 6,
      title: "Top 5 Website Builders Compared: Which One is Right for You?",
      excerpt: "Detailed comparison of popular website builders to help you choose the best platform.",
      date: "March 28, 2025",
      readTime: "9 min read",
      category: "Web Design",
      image: "/assets/images/blog/builders.jpg"
    },
    {
      id: 7,
      title: "How to Set Up Email Hosting with Your Domain Name",
      excerpt: "Professional email setup guide using your custom domain.",
      date: "March 20, 2025",
      readTime: "6 min read",
      category: "Email",
      image: "/assets/images/blog/email.jpg"
    },
    {
      id: 8,
      title: "The Benefits of Using a Content Delivery Network (CDN)",
      excerpt: "How CDNs can dramatically improve your website's speed and reliability.",
      date: "March 12, 2025",
      readTime: "7 min read",
      category: "Performance",
      image: "/assets/images/blog/cdn.jpg"
    },
    {
      id: 9,
      title: "Ecommerce Hosting: What You Need to Know Before Launching Your Online Store",
      excerpt: "Essential considerations for hosting an online store that converts.",
      date: "March 5, 2025",
      readTime: "8 min read",
      category: "Ecommerce",
      image: "/assets/images/blog/ecommerce.jpg"
    },
    {
      id: 10,
      title: "Backup Strategies: Protecting Your Website Data Effectively",
      excerpt: "Implement these backup solutions to never lose your website data.",
      date: "February 28, 2025",
      readTime: "5 min read",
      category: "Security",
      image: "/assets/images/blog/backup.jpg"
    },
    {
      id: 11,
      title: "WordPress Maintenance Checklist: Keep Your Site Running Smoothly",
      excerpt: "Monthly tasks to ensure your WordPress site stays secure and performs well.",
      date: "February 20, 2025",
      readTime: "6 min read",
      category: "WordPress",
      image: "/assets/images/blog/maintenance.jpg"
    },
    {
      id: 12,
      title: "How to Choose the Perfect Domain Name for Your Business",
      excerpt: "Expert tips for selecting a domain name that strengthens your brand.",
      date: "February 12, 2025",
      readTime: "4 min read",
      category: "Domains",
      image: "/assets/images/blog/domains.jpg"
    }
  ]

  const popularPosts = [
    blogPosts[0],
    blogPosts[2],
    blogPosts[4],
    blogPosts[6]
  ]

  const categories = [
    { name: "WordPress", count: 8 },
    { name: "Security", count: 12 },
    { name: "Hosting", count: 15 },
    { name: "Performance", count: 7 },
    { name: "Ecommerce", count: 5 }
  ]

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
                className="w-full px-6 py-3 rounded-full text-white-800 focus:outline-none focus:ring-2 focus:ring-white-500"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">Featured Article</h2>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <BlogCard 
              post={featuredPost} 
              isFeatured={true}
              className="border-0"
            />
          </div>
        </div>
      </section>

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
                {blogPosts.map((post, index) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    className="animate-fadeIn"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600 text-white">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200">
                    8
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <BlogSidebar popularPosts={popularPosts} categories={categories} />
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
  )
}