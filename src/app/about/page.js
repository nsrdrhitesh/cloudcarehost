export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cloud Care Host</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Empowering businesses and individuals with reliable, high-performance hosting solutions since 2015.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="/assets/images/about-team.jpg" 
                alt="Our Team" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015 by a team of hosting industry veterans, Cloud Care Host began with a simple mission: to provide reliable, high-performance hosting with exceptional customer support.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation with a single server has grown into a global hosting provider with data centers on three continents, serving thousands of satisfied customers worldwide.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our services while staying true to our core values of transparency, reliability, and outstanding customer care.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What drives us every day to deliver the best hosting experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Performance</h3>
              <p className="text-gray-600">
                We invest in cutting-edge technology to ensure your websites load blazingly fast.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Security</h3>
              <p className="text-gray-600">
                Your data's safety is our top priority with enterprise-grade protection.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Support</h3>
              <p className="text-gray-600">
                Our expert team is available 24/7 to assist you with any issues.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Cloud Care Host
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Alex Johnson", role: "CEO & Founder", image: "/assets/images/team1.jpg" },
              { name: "Maria Garcia", role: "CTO", image: "/assets/images/team2.jpg" },
              { name: "David Kim", role: "Support Director", image: "/assets/images/team3.jpg" },
              { name: "Sarah Williams", role: "Marketing Lead", image: "/assets/images/team4.jpg" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Thousands of Satisfied Customers?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the Cloud Care Host difference today.
          </p>
          <a 
            href="/signup" 
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </main>
  )
}