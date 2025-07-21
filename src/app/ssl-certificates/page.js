import Link from 'next/link';

export default function SSLCertificatesPage() {
  const certificatePlans = [
    {
      name: "Basic SSL",
      price: "$49.99/yr",
      discountedPrice: "$29.99/yr",
      features: [
        "Domain Validation",
        "256-bit Encryption",
        "99.9% Browser Recognition",
        "Free Reissues",
        "Trust Seal",
        "24/7 Support"
      ],
      bestFor: "Personal Websites & Blogs",
      popular: false
    },
    {
      name: "Business SSL",
      price: "$149.99/yr",
      discountedPrice: "$89.99/yr",
      features: [
        "Organization Validation",
        "256-bit Encryption",
        "99.9% Browser Recognition",
        "Free Reissues",
        "Premium Trust Seal",
        "Priority Support",
        "$10,000 Warranty"
      ],
      bestFor: "Business Websites & E-commerce",
      popular: true
    },
    {
      name: "Wildcard SSL",
      price: "$249.99/yr",
      discountedPrice: "$159.99/yr",
      features: [
        "Secure Unlimited Subdomains",
        "Organization Validation",
        "256-bit Encryption",
        "99.9% Browser Recognition",
        "Free Reissues",
        "Premium Trust Seal",
        "Priority Support",
        "$50,000 Warranty"
      ],
      bestFor: "Enterprises with Multiple Subdomains",
      popular: false
    },
    {
      name: "EV SSL",
      price: "$349.99/yr",
      discountedPrice: "$249.99/yr",
      features: [
        "Extended Validation",
        "Green Address Bar",
        "256-bit Encryption",
        "99.9% Browser Recognition",
        "Free Reissues",
        "Premium Trust Seal",
        "24/7 Priority Support",
        "$1,000,000 Warranty",
        "Business Verification"
      ],
      bestFor: "High Security Websites & Financial Institutions",
      popular: false
    }
  ];

  const features = [
    {
      title: "Bank-Level Security",
      description: "256-bit encryption ensures your data is protected with the same level of security used by banks.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Boost Customer Trust",
      description: "Display the trust seal to increase conversions by up to 42%.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "SEO Advantage",
      description: "Google ranks HTTPS sites higher in search results.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Easy Installation",
      description: "We handle the complex setup - you get protection with one click.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Secure Your Website with SSL Certificates</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Protect your visitors' data and boost your search rankings with our trusted SSL certificates. Get up to <span className="font-bold">70% OFF</span> today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#compare-plans" className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full font-bold shadow-lg transition duration-300 transform hover:scale-105">
              Compare Plans
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold shadow-lg transition duration-300 transform hover:scale-105">
              Need Help?
            </Link>
          </div>
        </div>
      </div>

      {/* Why SSL Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Your Website Needs SSL</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SSL certificates encrypt data between your visitors and your website, protecting sensitive information and building trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Plans */}
      <div id="compare-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">SSL Certificate Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect SSL certificate for your website's needs. All plans include 24/7 support and easy installation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificatePlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-2 border-blue-500 transform -translate-y-2' : 'border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-1 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-center mb-4">{plan.bestFor}</p>
                  
                  <div className="text-center mb-6">
                    <span className="text-gray-400 line-through text-lg">{plan.price}</span>
                    <span className="text-3xl font-bold text-blue-600 ml-2">{plan.discountedPrice}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/signup" 
                    className={`block text-center w-full py-3 px-4 rounded-lg font-bold transition duration-300 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-800'}`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">SSL Certificate FAQs</h2>
            <p className="text-gray-600">
              Get answers to common questions about SSL certificates and website security.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-200 flex justify-between items-center">
                <span className="font-semibold text-blue-800">What is an SSL certificate?</span>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  An SSL (Secure Sockets Layer) certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection. It creates a secure channel between a web server and a browser, ensuring all data passed between them remains private.
                </p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-200 flex justify-between items-center">
                <span className="font-semibold text-blue-800">How do I install my SSL certificate?</span>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600 mb-4">
                  We make SSL installation simple. After purchase, our system will guide you through the validation process. Once validated, we offer:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Automatic installation for most hosting accounts</li>
                  <li>Step-by-step installation guides</li>
                  <li>24/7 support to help with manual installation if needed</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-200 flex justify-between items-center">
                <span className="font-semibold text-blue-800">What's the difference between DV, OV and EV SSL?</span>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 py-4 bg-white">
                <ul className="space-y-4">
                  <li>
                    <strong className="text-blue-800">Domain Validation (DV):</strong> Basic encryption with quick issuance (minutes). Validates domain ownership only.
                  </li>
                  <li>
                    <strong className="text-blue-800">Organization Validation (OV):</strong> Validates business identity for more trust. Takes 1-3 days to issue.
                  </li>
                  <li>
                    <strong className="text-blue-800">Extended Validation (EV):</strong> Highest level with green address bar. Includes rigorous business verification.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition duration-200 flex justify-between items-center">
                <span className="font-semibold text-blue-800">Do you offer wildcard SSL certificates?</span>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  Yes! Our Wildcard SSL certificates secure your main domain and all its subdomains with a single certificate. This is perfect for businesses with multiple subdomains (like shop.yourdomain.com, blog.yourdomain.com) as it's more cost-effective than buying separate certificates for each.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Website?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            Get started with SSL today and protect your visitors' data while boosting your search rankings.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full font-bold shadow-lg transition duration-300 transform hover:scale-105">
              Get SSL Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-full font-bold shadow-lg transition duration-300 transform hover:scale-105">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}