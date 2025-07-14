import Link from 'next/link'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: [
        "US/Canada: +1 (800) 123-4567",
        "UK: +44 20 1234 5678",
        "International: +1 (555) 123-4567"
      ],
      action: {
        text: "Call Now",
        href: "tel:+18001234567"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Send us an email and we'll respond quickly",
      details: [
        "General Inquiries: info@cloudcarehost.com",
        "Support: support@cloudcarehost.com",
        "Sales: sales@cloudcarehost.com"
      ],
      action: {
        text: "Email Now",
        href: "mailto:support@cloudcarehost.com"
      }
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Live Chat",
      description: "Instant messaging with our support agents",
      details: [
        "Available 24/7",
        "Average response time: < 2 minutes",
        "No account required"
      ],
      action: {
        text: "Start Chat",
        href: "#live-chat"
      }
    }
  ]

  const locations = [
    {
      city: "New York",
      address: "123 Cloud Street, Tech City, NY 10001",
      phone: "+1 (212) 123-4567",
      image: "/assets/images/ny-office.jpg"
    },
    {
      city: "London",
      address: "456 Hosting Lane, Digital District, EC2A 4NE",
      phone: "+44 20 1234 5678",
      image: "/assets/images/london-office.jpg"
    },
    {
      city: "Singapore",
      address: "789 Server Avenue, Tech Park, 138589",
      phone: "+65 6123 4567",
      image: "/assets/images/singapore-office.jpg"
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">Contact Cloud Care Host</h1>
            <p className="text-xl md:text-2xl opacity-90 animate-fadeIn delay-100">
              We're here to help you with any questions about our hosting services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fadeIn">How Can We Help You?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-100">
              Choose your preferred method to get in touch with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 hover:border-blue-200 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <ul className="space-y-2 text-gray-700">
                      {method.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link 
                      href={method.action.href}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                    >
                      {method.action.text}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn delay-300">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-600 p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <p className="mb-6 opacity-90">
                  Have questions about our hosting plans or need technical support? Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>support@cloudcarehost.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (800) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Cloud Street, Tech City, NY 10001</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fadeIn">Our Global Offices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-100">
              Visit us at one of our offices around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div 
                key={index}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={`${location.city} Office`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{location.city} Office</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{location.phone}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link 
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Get Directions
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fadeIn">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-100">
              Can't find what you're looking for? <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact our support team</Link>.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is your average response time for support requests?",
                answer: "Our average response time is less than 30 minutes for priority requests and under 2 hours for standard requests. We offer 24/7 support for all customers."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes, we offer phone support for all customers. Our phone support lines are open 24/7 for technical emergencies, and during business hours for general inquiries."
              },
              {
                question: "How can I migrate my existing website to Cloud Care Host?",
                answer: "We offer free website migrations for all new customers. Simply contact our support team after signing up, and we'll handle the entire migration process for you."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual payments."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}