export default function Features() {
  const features = [
    {
      title: "99.99% Uptime Guarantee",
      description: "Our enterprise-grade infrastructure ensures maximum reliability with a 99.99% uptime SLA backed by redundant network architecture.",
      stats: "99.99% uptime",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "24/7 Priority Support",
      description: "Get instant access to our senior technicians with average response times under 15 minutes via live chat, phone, or ticket system.",
      stats: "<15 min response",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Free Premium SSL",
      description: "All plans include free Wildcard SSL certificates with 256-bit encryption and $10,000 security warranties.",
      stats: "256-bit encryption",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "300+ 1-Click Apps",
      description: "Instant deployment for WordPress, WooCommerce, Joomla, Drupal, and hundreds of other applications.",
      stats: "300+ apps",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Automated Backups",
      description: "Daily snapshots with 30-day retention plus on-demand backups stored in geographically separate locations.",
      stats: "30-day retention",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Risk-Free Guarantee",
      description: "Try us risk-free with our 45-day money-back guarantee - no contracts, no hidden fees.",
      stats: "45-day guarantee",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden" id="features">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern-grid.svg')] bg-[length:60px_60px]"></div>
      </div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 opacity-70 animate-gradient-shift"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Hosting <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Without Enterprise Complexity</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge infrastructure with intuitive tools to deliver performance that powers over 50,000 websites worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Feature icon with animated border */}
              <div className="relative z-10 mb-6">
                <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm font-medium text-blue-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature.stats}
                </div>
              </div>
              
              {/* Animated border bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            <div className="p-8 text-center" data-aos="fade-up">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Websites Hosted</div>
            </div>
            <div className="p-8 text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-white mb-2">99.99%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
            <div className="p-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-white mb-2">15min</div>
              <div className="text-blue-100">Avg. Response Time</div>
            </div>
            <div className="p-8 text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}