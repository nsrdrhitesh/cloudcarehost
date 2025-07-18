"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import Loading from '@/app/components/Loading'

export default function HostingPage() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
  const pathname = usePathname()
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [hostingData, setHostingData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Extract hosting type from URL
  const hostingType = decodeURIComponent(pathname.split('/').pop())

  // Map URL segments to API types
  const typeMap = {
    'shared': 'Shared Hosting',
    'wordpress': 'WordPress Hosting',
    'vps': 'VPS Hosting',
    'dedicated': 'Dedicated Hosting',
    'woocommerce': 'WooCommerce Hosting',
    'reseller': 'Reseller Hosting'
  }

  // Get the proper API type name
  const apiType = typeMap[hostingType.toLowerCase()] || hostingType

  // Default feature icons (can be customized per hosting type)
  const defaultFeatures = [
    {
      title: "High Performance",
      description: "Optimized servers ensure your website loads quickly.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Reliable Uptime",
      description: "We guarantee your website will be available when your visitors need it.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Security Included",
      description: "Protection against threats with free SSL and security features.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ]

  // Fetch hosting data from API
  useEffect(() => {
    const fetchHostingData = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/hosting?type=${encodeURIComponent(apiType)}`)
        const data = await response.json()
        
        if (data.success) {
          setHostingData(data.data)
        } else {
          setError('Failed to load hosting data')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchHostingData()
  }, [apiType])

  // Default pricing structure (can be customized per hosting type)
    const getPricingStructure = (plan) => {
    const basePrice = plan.id * 2 + 1; // Example deterministic calculation
    return {
        monthly: { 
        price: `$${(basePrice + 2).toFixed(2)}`,
        discount: `$${(basePrice + 5).toFixed(2)}/mo when you renew`
        },
        yearly: { 
        price: `$${(basePrice + 1).toFixed(2)}`,
        discount: `$${(basePrice + 4).toFixed(2)}/mo when you renew`,
        save: `${15 + (plan.id * 5)}%`
        },
        biennially: { 
        price: `$${basePrice.toFixed(2)}`,
        discount: `$${(basePrice + 3).toFixed(2)}/mo when you renew`,
        save: `${25 + (plan.id * 5)}%`
        }
    }
    }

  // Format hosting type for display
  const formatHostingType = (type) => {
    return type
      .replace('Hosting', '')
      .replace(/([A-Z])/g, ' $1')
      .trim()
  }

  if (loading) return <Loading />
  if (error) return <div className="text-center py-16 text-red-500">{error}</div>
  if (!hostingData) return <div className="text-center py-16">No hosting plans available</div>

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
              {formatHostingType(apiType)}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn delay-100">
              {hostingData[0]?.hosting_description || 'High-performance hosting solution for your needs'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-200">
              <Link 
                href="#pricing" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
              >
                View Plans
              </Link>
              <Link 
                href="#features" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-bold text-lg transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our {formatHostingType(apiType).toLowerCase()} includes powerful features to help your website thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:border-blue-200 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Simple, Affordable Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your website. All plans include our 30-day money-back guarantee.
            </p>
            
            {/* Billing Cycle Toggle */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {[
                  { id: 'monthly', label: 'Monthly' },
                  { id: 'yearly', label: 'Yearly' },
                  { id: 'biennially', label: '2 Years' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setBillingCycle(option.id)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      billingCycle === option.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {option.label}
                    {billingCycle === option.id && hostingData[0] && getPricingStructure(hostingData[0])[option.id]?.save && (
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                        billingCycle === option.id ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'
                      }`}>
                        Save {getPricingStructure(hostingData[0])[option.id].save}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {hostingData.map((plan, index) => {
              const currentPricing = getPricingStructure(plan)[billingCycle]
              return (
                <div 
                  key={index} 
                  className={`relative rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl ${
                    plan.popular ? 'transform md:-translate-y-4 border-2 border-blue-500' : 'border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-1 text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`p-6 ${plan.popular ? 'pt-10' : ''}`}>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-blue-600">{currentPricing.price}</span>
                      <span className="text-gray-500">/{billingCycle === 'monthly' ? 'mo' : billingCycle === 'yearly' ? 'yr' : '2 yrs'}</span>
                      <p className="text-sm text-gray-500 mt-1">{currentPricing.discount}</p>
                      {currentPricing.save && !plan.popular && (
                        <p className="text-sm text-green-600 font-medium mt-1">Save {currentPricing.save}</p>
                      )}
                    </div>
                    
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={{
                        pathname: "/billing",
                        query: { 
                          plan: plan.name.toLowerCase(), 
                          type: apiType,
                          cycle: billingCycle,
                          id: plan.id // Add the plan ID here
                        }
                      }}
                      className={`w-full block text-center py-3 rounded-lg font-bold transition ${
                        plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {plan.cta || 'Get Started'}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">* Free domain registration for 1st year with annual plans</p>
            <p className="text-gray-600">Need help choosing? <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact our team</Link></p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about {formatHostingType(apiType).toLowerCase()}? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: `What is ${formatHostingType(apiType).toLowerCase()}?`,
                answer: `${formatHostingType(apiType)} is a powerful hosting solution designed for specific needs. It provides optimized performance and features tailored for your requirements.`
              },
              {
                question: `How does ${formatHostingType(apiType).toLowerCase()} differ from other hosting types?`,
                answer: `Our ${formatHostingType(apiType).toLowerCase()} is specially configured to provide the best performance and features for this specific use case, with optimized resources and specialized support.`
              },
              {
                question: "Do you offer a money-back guarantee?",
                answer: "Yes! We offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied, you'll get a full refund."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade your hosting plan at any time with just a few clicks. Your data will be migrated automatically."
              },
              {
                question: "What kind of support do you offer?",
                answer: "We provide 24/7 expert support for all our hosting plans, with specialized knowledge for this hosting type."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Launch your website with our {formatHostingType(apiType).toLowerCase()} today and enjoy optimized performance.
          </p>
          <Link 
            href="/signup" 
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  )
}