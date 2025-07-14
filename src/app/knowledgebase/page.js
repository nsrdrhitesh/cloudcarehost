import PageHeader from '../components/PageHeader';
import SearchBar from '../components/KnowledgeBase/SearchBar';
import CategoryCard from '../components/KnowledgeBase/CategoryCard';
// import CategoryCard from '../components/KnowledgeBase/CategoryCard';
import PopularArticles from '../components/KnowledgeBase/PopularArticles';
import TutorialCard from '../components/KnowledgeBase/TutorialCard';
import FAQAccordion from '../components/KnowledgeBase/FAQAccordion';

export default function KnowledgeBase() {
  const categories = [
    {
      title: "Getting Started",
      description: "New to Cloud Care Host? Start here with our beginner guides.",
      icon: "🚀",
      count: 12,
      link: "/knowledgebase/getting-started"
    },
    {
      title: "Account Management",
      description: "Manage your hosting account, billing, and settings.",
      icon: "👤",
      count: 8,
      link: "/knowledgebase/account"
    },
    {
      title: "Domain Names",
      description: "Register, transfer, and manage your domains.",
      icon: "🌐",
      count: 15,
      link: "/knowledgebase/domains"
    },
    {
      title: "Email Setup",
      description: "Configure email accounts and services.",
      icon: "✉️",
      count: 7,
      link: "/knowledgebase/email"
    },
    {
      title: "Website Migration",
      description: "Move your website to Cloud Care Host seamlessly.",
      icon: "🔄",
      count: 5,
      link: "/knowledgebase/migration"
    },
    {
      title: "Security",
      description: "SSL certificates, backups, and protection.",
      icon: "🔒",
      count: 9,
      link: "/knowledgebase/security"
    }
  ]

  const popularArticles = [
    {
      title: "How to Install WordPress in 5 Minutes",
      views: 1245,
      link: "/knowledgebase/article/install-wordpress"
    },
    {
      title: "Connecting Your Domain to Hosting",
      views: 987,
      link: "/knowledgebase/article/connect-domain"
    },
    {
      title: "Setting Up Professional Email Accounts",
      views: 756,
      link: "/knowledgebase/article/setup-email"
    },
    {
      title: "Optimizing Your Website Speed",
      views: 654,
      link: "/knowledgebase/article/optimize-speed"
    },
    {
      title: "Migrating from cPanel to Cloud Care Host",
      views: 543,
      link: "/knowledgebase/article/cpanel-migration"
    }
  ]

  const tutorials = [
    {
      title: "WordPress Installation Guide",
      description: "Step-by-step guide to installing WordPress on your hosting account.",
      duration: "8 min",
      level: "Beginner",
      link: "/knowledgebase/tutorial/wordpress-install"
    },
    {
      title: "Setting Up SSL Certificate",
      description: "Secure your website with free Let's Encrypt SSL.",
      duration: "12 min",
      level: "Intermediate",
      link: "/knowledgebase/tutorial/ssl-setup"
    },
    {
      title: "Creating Email Forwarders",
      description: "Forward emails from one address to another.",
      duration: "5 min",
      level: "Beginner",
      link: "/knowledgebase/tutorial/email-forwarders"
    },
    {
      title: "Advanced DNS Management",
      description: "Configure MX, CNAME, and other DNS records.",
      duration: "15 min",
      level: "Advanced",
      link: "/knowledgebase/tutorial/dns-management"
    }
  ]

  const faqs = [
    {
      question: "How do I access my hosting control panel?",
      answer: "You can access your control panel by logging into your Cloud Care Host account and clicking on the 'Hosting Dashboard' button. Alternatively, you can go directly to https://panel.cloudcarehost.com and log in with your account credentials."
    },
    {
      question: "What is the difference between shared and VPS hosting?",
      answer: "Shared hosting means your website shares server resources with other websites, making it more affordable but with limited resources. VPS hosting provides you with dedicated resources on a virtual private server, offering better performance and customization options for growing websites."
    },
    {
      question: "How long does domain transfer take?",
      answer: "Domain transfers typically take 5-7 days to complete. This includes the time needed for approval from your current registrar and propagation across DNS servers worldwide. We'll send you email updates throughout the process."
    },
    {
      question: "Do you offer website migration services?",
      answer: "Yes! We offer free website migration for all new hosting customers. Our expert team will handle the entire process for you, ensuring zero downtime. Simply submit a migration request from your account dashboard after signing up."
    },
    {
      question: "How can I improve my website's loading speed?",
      answer: "There are several ways to improve loading speed: optimize your images, enable caching, use a CDN, minimize plugins (for WordPress), and leverage browser caching. Our servers are already optimized for speed, but we also offer a free speed optimization guide in our knowledge base."
    }
  ]

  return (
    <main>
      <PageHeader 
        title="Knowledge Base"
        subtitle="Guides, tutorials and FAQs to help you get the most from your hosting"
      />
      <div className="container mx-auto px-4 py-4">
        <nav className="flex text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
            </li>
            <li aria-current="page">
                <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-500 ml-1">Knowledge Base</span>
                </div>
            </li>
            </ol>
        </nav>
      </div>
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <SearchBar />
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard 
                  key={index}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  count={category.count}
                  link={category.link}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <PopularArticles
                    key={index}
                    title={article.title}
                    views={article.views}
                    link={article.link}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Video Tutorials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tutorials.map((tutorial, index) => (
                  <TutorialCard
                    key={index}
                    title={tutorial.title}
                    description={tutorial.description}
                    duration={tutorial.duration}
                    level={tutorial.level}
                    link={tutorial.link}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
            <a 
              href="/live-chat" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-bold transition"
            >
              Live Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}