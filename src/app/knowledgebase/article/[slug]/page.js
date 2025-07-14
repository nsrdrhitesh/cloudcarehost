import ArticleHeader from '@/app/components/KnowledgeBase/ArticleHeader'
// import ArticleHeader from '@/app/components/KnowledgeBase/ArticleHeader'
import ArticleContent from '@/app/components/KnowledgeBase/ArticleContent'
import ArticleMeta from '@/app/components/KnowledgeBase/ArticleMeta'
import RelatedArticles from '@/app/components/KnowledgeBase/RelatedArticles'
import ArticleNavigation from '@/app/components/KnowledgeBase/ArticleNavigation'
import Breadcrumb from '@/app/components/KnowledgeBase/Breadcrumb'

export default function ArticlePage({ params }) {
  // Sample data - in a real app this would come from an API or CMS
  const articleData = {
    'create-account': {
      title: "How to Create Your Hosting Account",
      excerpt: "Step-by-step guide to signing up for Cloud Care Host services",
      views: 2456,
      lastUpdated: "2023-11-15",
      author: {
        name: "Alex Johnson",
        role: "Support Specialist",
        avatar: "/assets/images/author-1.jpg"
      },
      content: `
        <h2>Getting Started with Cloud Care Host</h2>
        <p>Welcome to Cloud Care Host! Creating your hosting account is the first step toward launching your website. This comprehensive guide will walk you through the entire process.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="font-bold text-blue-800">Pro Tip:</p>
          <p>Have your domain name ready before starting. If you don't have one, you can register it during signup.</p>
        </div>
        
        <h3>Step 1: Visit Our Website</h3>
        <p>Navigate to <a href="https://cloudcarehost.com" class="text-blue-600 hover:underline">cloudcarehost.com</a> and click on the "Get Started" or "Sign Up" button prominently displayed on the homepage.</p>
        
        <h3>Step 2: Choose Your Hosting Plan</h3>
        <p>We offer several hosting options:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Starter:</strong> Perfect for small websites and blogs</li>
          <li><strong>Business:</strong> Ideal for growing websites with more traffic</li>
          <li><strong>Enterprise:</strong> For high-traffic websites needing maximum resources</li>
        </ul>
        <p>Select the plan that best fits your needs and click "Continue".</p>
        
        <h3>Step 3: Register or Transfer Your Domain</h3>
        <p>You have two options:</p>
        <ol class="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Register a new domain:</strong> Search for your desired domain name and add it to your cart</li>
          <li><strong>Use an existing domain:</strong> Enter the domain you already own (you'll configure DNS later)</li>
        </ol>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
          <p class="font-bold text-yellow-800">Important:</p>
          <p>If you're transferring a domain from another registrar, you'll need the authorization code from your current provider.</p>
        </div>
        
        <h3>Step 4: Create Your Account</h3>
        <p>Fill out the registration form with:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>Your personal information</li>
          <li>A valid email address (for verification)</li>
          <li>A strong password</li>
        </ul>
        
        <h3>Step 5: Review and Complete Payment</h3>
        <p>Review your order summary, select your billing cycle (monthly, annually, etc.), and enter your payment information. We accept all major credit cards and PayPal.</p>
        
        <h3>Step 6: Verify Your Email</h3>
        <p>After payment, you'll receive a verification email. Click the link in the email to activate your account. This is a security measure to protect your account.</p>
        
        <h3>Step 7: Access Your Hosting Dashboard</h3>
        <p>Once verified, log in to your account at <a href="https://panel.cloudcarehost.com" class="text-blue-600 hover:underline">panel.cloudcarehost.com</a>. From here you can:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li>Manage your hosting services</li>
          <li>Install applications like WordPress</li>
          <li>Set up email accounts</li>
          <li>Access support resources</li>
        </ul>
        
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <p class="font-bold text-green-800">Congratulations!</p>
          <p>You've successfully created your Cloud Care Host account. Next, check out our guide on <a href="/knowledgebase/article/point-domain" class="text-blue-600 hover:underline">connecting your domain</a> or <a href="/knowledgebase/article/install-wordpress" class="text-blue-600 hover:underline">installing WordPress</a>.</p>
        </div>
      `,
      relatedArticles: [
        {
          title: "Connecting Your Domain to Hosting",
          excerpt: "Complete guide to updating DNS settings",
          link: "/knowledgebase/article/point-domain"
        },
        {
          title: "Setting Up Professional Email Accounts",
          excerpt: "Create and manage email addresses with your domain",
          link: "/knowledgebase/article/setup-email"
        },
        {
          title: "Installing WordPress in 5 Minutes",
          excerpt: "Quick-start guide for WordPress installation",
          link: "/knowledgebase/article/install-wordpress"
        }
      ]
    }
  }

  const article = articleData[params.slug] || {
    title: "Article Not Found",
    excerpt: "The requested article does not exist."
  }

  return (
    <main>
      <ArticleHeader 
        title={article.title}
        excerpt={article.excerpt}
      />
      
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb 
          items={[
            { name: "Knowledge Base", link: "/knowledgebase" },
            { name: "Getting Started", link: "/knowledgebase/getting-started" },
            { name: article.title }
          ]}
        />
      </div>
      
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ArticleMeta 
              views={article.views}
              lastUpdated={article.lastUpdated}
              author={article.author}
            />
            
            <ArticleContent content={article.content} />
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h3 className="text-xl font-bold text-blue-900">Was this article helpful?</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Yes
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    No
                  </button>
                </div>
              </div>
              
              <ArticleNavigation />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <RelatedArticles articles={article.relatedArticles} />
        </div>
      </section>
      
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need More Personalized Help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our expert support team is available 24/7 to assist you with any questions.
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
              Start Live Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}