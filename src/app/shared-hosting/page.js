"use client"

import Link from 'next/link'
import { useState } from 'react'


export default function SharedHosting() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const features = [
    {
      title: "Lightning Fast Performance",
      description: "Our SSD-powered servers ensure your website loads in milliseconds.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "We guarantee your website will be up and running 99.9% of the time.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Free SSL Certificate",
      description: "All plans include free SSL to secure your website and boost SEO.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Easy-to-use Control Panel",
      description: "Our custom control panel makes managing your website simple.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "1-Click WordPress Install",
      description: "Install WordPress and 100+ other apps with just one click.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "24/7 Expert Support",
      description: "Our team of experts is available round the clock to assist you.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  const plans = [
    {
      name: "Starter",
      monthly: { price: "$2.99", discount: "$5.99/mo when you renew" },
      yearly: { price: "$2.49", discount: "$4.99/mo when you renew", save: "17%" },
      biennially: { price: "$1.99", discount: "$3.99/mo when you renew", save: "33%" },
      description: "Perfect for small personal websites and blogs",
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Free Domain for 1st Year*",
        "100 Email Accounts",
        "24/7 Support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Basic",
      monthly: { price: "$4.99", discount: "$7.99/mo when you renew" },
      yearly: { price: "$3.99", discount: "$6.99/mo when you renew", save: "20%" },
      biennially: { price: "$3.49", discount: "$5.99/mo when you renew", save: "30%" },
      description: "Ideal for growing personal websites",
      features: [
        "Unlimited Websites",
        "50GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Free Domain for 1st Year*",
        "Unlimited Email Accounts",
        "24/7 Priority Support",
        "Free CDN"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Business",
      monthly: { price: "$7.99", discount: "$10.99/mo when you renew" },
      yearly: { price: "$6.49", discount: "$9.99/mo when you renew", save: "19%" },
      biennially: { price: "$5.49", discount: "$8.99/mo when you renew", save: "31%" },
      description: "Perfect for small business websites",
      features: [
        "Unlimited Websites",
        "100GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Free Domain for 1st Year*",
        "Unlimited Email Accounts",
        "24/7 Priority Support",
        "Free CDN",
        "Daily Backups",
        "Free SEO Tools"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium",
      monthly: { price: "$10.99", discount: "$14.99/mo when you renew" },
      yearly: { price: "$8.99", discount: "$12.99/mo when you renew", save: "18%" },
      biennially: { price: "$7.49", discount: "$10.99/mo when you renew", save: "32%" },
      description: "For high-traffic personal and business sites",
      features: [
        "Unlimited Websites",
        "200GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "Free Domain for 1st Year*",
        "Unlimited Email Accounts",
        "24/7 VIP Support",
        "Free CDN",
        "Daily Backups",
        "Free SEO Tools",
        "Free Dedicated IP",
        "Free Site Migration"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "What is shared hosting?",
      answer: "Shared hosting is a type of web hosting where multiple websites share the same server resources. It's an affordable option perfect for small websites and blogs that don't require dedicated resources."
    },
    {
      question: "How many websites can I host on shared hosting?",
      answer: "Our Starter plan allows 1 website, while all other plans allow unlimited websites. Choose the plan that fits your needs."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee on all our shared hosting plans. If you're not satisfied, you'll get a full refund."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your shared hosting plan at any time with just a few clicks. Your data will be migrated automatically."
    },
    {
      question: "Is WordPress included?",
      answer: "Yes! All our shared hosting plans include 1-click WordPress installation. We optimize our servers specifically for WordPress performance."
    }
  ]

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
              Shared Hosting
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn delay-100">
              Perfect for small websites and blogs. Get lightning-fast performance at an affordable price.
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
              Our shared hosting includes powerful features to help your website thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
              {plans[0][option.id]?.save && (
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  billingCycle === option.id ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'
                }`}>
                  Save {plans[0][option.id].save}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => {
        const currentPricing = plan[billingCycle];
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
              
              {/* <Link 
                href={{
                  pathname: "/billing",
                  query: { plan: plan.name.toLowerCase(), cycle: billingCycle }
                }}
                className={`w-full block text-center py-3 rounded-lg font-bold transition ${
                  plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                {plan.cta}
              </Link> */}
            </div>
          </div>
        );
      })}
          </div>
          
          
    
    <div className="mt-12 text-center">
      <p className="text-gray-600 mb-4">* Free domain registration for 1st year with annual plans</p>
      <p className="text-gray-600">Need help choosing? <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">Contact our team</Link></p>
    </div>
  </div>
</section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Plan Comparison</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our shared hosting plans stack up against each other.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="p-4 text-left font-bold text-blue-900">Features</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="p-4 text-center font-bold text-blue-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Websites</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">SSD Storage</td>
                  <td className="p-4 text-center">10GB</td>
                  <td className="p-4 text-center">50GB</td>
                  <td className="p-4 text-center">100GB</td>
                  <td className="p-4 text-center">200GB</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Bandwidth</td>
                  <td className="p-4 text-center">Unmetered</td>
                  <td className="p-4 text-center">Unmetered</td>
                  <td className="p-4 text-center">Unmetered</td>
                  <td className="p-4 text-center">Unmetered</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Free SSL</td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Free Domain</td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Email Accounts</td>
                  <td className="p-4 text-center">100</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Free CDN</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Daily Backups</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">Free Dedicated IP</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center"><svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Shared Hosting Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Personal Blogger",
                content: "I've been using Cloud Care Host's shared hosting for my blog for 2 years now. The performance is excellent, and I've never experienced any downtime. Their support team is incredibly helpful whenever I have questions.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Freelance Developer",
                content: "I host all my clients' small business websites on Cloud Care Host's shared plans. The one-click WordPress install and automatic updates save me hours of work every week. The servers are fast and reliable.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Small Business Owner",
                content: "After trying several hosts, I finally found a home with Cloud Care Host. My small business website loads faster than ever, and I've had zero downtime in the past year. The price is very reasonable for the quality.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about shared hosting? We've got answers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Website?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get started with our shared hosting today and enjoy lightning-fast performance with 24/7 support.
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