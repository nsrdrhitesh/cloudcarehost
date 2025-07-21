import Link from 'next/link';
import { FaSearch, FaGlobe, FaLock, FaSyncAlt, FaTags, FaShieldAlt, FaChartLine } from 'react-icons/fa';

export default function DomainPage() {
  const popularDomains = [
    { name: '.com', price: '$12.99', description: 'The world\'s most popular domain' },
    { name: '.net', price: '$14.99', description: 'Great for networks and tech businesses' },
    { name: '.org', price: '$11.99', description: 'Perfect for organizations and nonprofits' },
    { name: '.io', price: '$39.99', description: 'Popular with tech startups and developers' },
    { name: '.co', price: '$19.99', description: 'Global alternative to .com' },
    { name: '.tech', price: '$24.99', description: 'For technology companies and innovators' },
  ];

  const domainFeatures = [
    {
      icon: <FaGlobe className="text-blue-500 text-3xl" />,
      title: "Global Recognition",
      description: "Get a domain that's recognized worldwide and builds trust with your audience."
    },
    {
      icon: <FaLock className="text-blue-500 text-3xl" />,
      title: "Free Privacy Protection",
      description: "We include free WHOIS privacy to keep your personal information safe."
    },
    {
      icon: <FaSyncAlt className="text-blue-500 text-3xl" />,
      title: "Easy Management",
      description: "Our intuitive control panel makes domain management simple."
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
      title: "Domain Security",
      description: "Advanced security features to protect your domain from hijacking."
    },
    {
      icon: <FaChartLine className="text-blue-500 text-3xl" />,
      title: "SEO Benefits",
      description: "Choose a domain that helps with search engine rankings."
    },
    {
      icon: <FaTags className="text-blue-500 text-3xl" />,
      title: "Discounts on Bundles",
      description: "Save when you register multiple domains or add hosting."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            Find Your Perfect Domain Name
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Search for your ideal domain and register it in seconds. Start your online journey today!
          </p>
          
          {/* Domain Search Box */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search for your perfect domain..."
                  className="w-full px-5 py-4 text-gray-800 focus:outline-none"
                />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 md:px-8 transition duration-300">
                Search
              </button>
            </div>
          </div>
          
          <div className="mt-6 text-blue-200">
            <p>.com $12.99 | .net $14.99 | .org $11.99 | And many more...</p>
          </div>
        </div>
      </section>

      {/* Popular Domains Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Popular Domain Extensions
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDomains.map((domain, index) => (
              <div 
                key={index}
                className="bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-extrabold text-blue-800">{domain.name}</span>
                    <span className="text-xl font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {domain.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{domain.description}</p>
                  <div className="flex justify-between">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
                      Register
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 transition duration-300">
                      Transfer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/domain/tlds" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              View All Domain Extensions
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            Why Register Your Domain With CloudCareHost?
          </h2>
          <p className="text-center text-blue-700 max-w-2xl mx-auto mb-12">
            We make domain registration simple, affordable, and secure with industry-leading features.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domainFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Transfer Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Transfer Your Domain to CloudCareHost
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Enjoy better management, superior support, and competitive pricing when you transfer your domain to us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition duration-300">
              Transfer Your Domain
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do I register a domain name?",
                answer: "Simply search for your desired domain using our search tool above. If it's available, you can proceed to register it by completing the checkout process. It only takes a few minutes!"
              },
              {
                question: "How long does domain registration last?",
                answer: "Domains are registered for a minimum of 1 year, but you can register for multiple years at a time. We'll notify you when your domain is about to expire so you can renew it."
              },
              {
                question: "What's included with my domain registration?",
                answer: "All our domains come with free WHOIS privacy protection, DNS management, domain forwarding, and email forwarding. You'll also get 24/7 customer support."
              },
              {
                question: "Can I transfer my domain to CloudCareHost?",
                answer: "Yes! We make domain transfers easy. Most domains can be transferred in just a few steps, and we'll help you through the entire process."
              },
              {
                question: "What if the domain I want is already taken?",
                answer: "We'll show you alternative suggestions when your first choice isn't available. You can also use our domain broker service to try acquiring the domain from its current owner."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-blue-100 rounded-lg overflow-hidden">
                <button className="w-full text-left p-5 bg-blue-50 hover:bg-blue-100 transition duration-300 flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-800">{faq.question}</span>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="p-5 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}