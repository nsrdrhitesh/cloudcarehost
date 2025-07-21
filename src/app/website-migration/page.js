import Link from 'next/link';
import { FaServer, FaShieldAlt, FaClock, FaCogs, FaHeadset, FaCheckCircle } from 'react-icons/fa';

export default function WebsiteMigration() {
  const features = [
    {
      icon: <FaServer className="text-4xl text-blue-600" />,
      title: "Seamless Transfer",
      description: "We handle all the technical aspects of moving your website to our servers without any downtime."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Security First",
      description: "Your data is protected with enterprise-grade security during the entire migration process."
    },
    {
      icon: <FaClock className="text-4xl text-blue-600" />,
      title: "24/7 Monitoring",
      description: "Our team monitors the migration around the clock to ensure everything goes smoothly."
    },
    {
      icon: <FaCogs className="text-4xl text-blue-600" />,
      title: "Configuration Included",
      description: "We optimize all server settings and configurations for peak performance."
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-600" />,
      title: "Expert Support",
      description: "Dedicated migration specialists available to assist you at every step."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-blue-600" />,
      title: "Post-Migration Check",
      description: "Comprehensive testing after migration to ensure everything works perfectly."
    }
  ];

  const migrationSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We analyze your current hosting environment and plan the migration strategy."
    },
    {
      step: "2",
      title: "Pre-Migration Backup",
      description: "Complete backup of your website to ensure zero data loss."
    },
    {
      step: "3",
      title: "Environment Setup",
      description: "Configure our servers to perfectly match your website requirements."
    },
    {
      step: "4",
      title: "Data Transfer",
      description: "Secure transfer of all your files, databases, and configurations."
    },
    {
      step: "5",
      title: "Testing Phase",
      description: "Rigorous testing to ensure everything functions as expected."
    },
    {
      step: "6",
      title: "DNS Propagation",
      description: "Final switchover with minimal downtime (typically under 5 minutes)."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            Professional <span className="text-blue-400">Website Migration</span> Service
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-10">
            Let our experts handle your website transfer - fast, secure, and with zero downtime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#migration-form" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Migration Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16 -mt-10">
        <div className="bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-800 mb-2">10,000+</div>
            <div className="text-gray-600 font-medium">Websites Migrated</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-800 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-800 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Migration Support</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Our Migration Service?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make website migration effortless so you can focus on your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Migration Process Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our 6-Step Migration Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures a smooth transition for your website.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {migrationSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between`}
                >
                  {/* Step Content */}
                  <div className={`md:w-5/12 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} mb-8 md:mb-0`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 ml-14">{step.description}</p>
                  </div>
                  
                  {/* Step Number (Mobile) */}
                  <div className="md:hidden absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Migration Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Affordable options for every type of website.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300">
            <div className="bg-blue-100 p-6 text-center">
              <h3 className="text-xl font-bold text-blue-900">Basic Migration</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-blue-800">$49</span>
                <span className="text-gray-600"> / one-time</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>1 Website</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Up to 5GB Data</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>1 Database</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Basic Testing</span>
                </li>
              </ul>
              <Link 
                href="#migration-form" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Choose Basic
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500 transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
              MOST POPULAR
            </div>
            <div className="bg-blue-600 p-6 text-center">
              <h3 className="text-xl font-bold text-white">Professional Migration</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-blue-200"> / one-time</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Up to 3 Websites</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Up to 15GB Data</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Multiple Databases</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Performance Optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Priority Support</span>
                </li>
              </ul>
              <Link 
                href="#migration-form" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Choose Professional
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300">
            <div className="bg-blue-100 p-6 text-center">
              <h3 className="text-xl font-bold text-blue-900">Enterprise Migration</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-blue-800">$199</span>
                <span className="text-gray-600"> / one-time</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Unlimited Websites</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Unlimited Data</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Complex Configurations</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Advanced Optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>Dedicated Migration Expert</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>24/7 Priority Support</span>
                </li>
              </ul>
              <Link 
                href="#migration-form" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Choose Enterprise
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Form Section */}
      <div id="migration-form" className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-700 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Migrate?</h2>
                <p className="text-blue-100 mb-6">
                  Fill out this form and our migration experts will contact you within 1 business day to discuss your requirements and schedule the transfer.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-300 mr-3 mt-1">
                      <FaCheckCircle className="h-full w-full" />
                    </div>
                    <p className="text-blue-100">No downtime guaranteed</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-300 mr-3 mt-1">
                      <FaCheckCircle className="h-full w-full" />
                    </div>
                    <p className="text-blue-100">24/7 expert support</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-blue-300 mr-3 mt-1">
                      <FaCheckCircle className="h-full w-full" />
                    </div>
                    <p className="text-blue-100">100% satisfaction guarantee</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8 text-gray-800">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <input 
                      type="url" 
                      id="website" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">Migration Plan</label>
                    <select 
                      id="plan" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    >
                      <option value="">Select a plan</option>
                      <option value="basic">Basic Migration ($49)</option>
                      <option value="professional">Professional Migration ($99)</option>
                      <option value="enterprise">Enterprise Migration ($199)</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea 
                      id="details" 
                      rows="3" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="Tell us about your current hosting environment, special requirements, etc."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105"
                  >
                    Request Migration
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Migration FAQs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about our website migration service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button className="w-full text-left p-6 focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-900">How long does the migration process take?</h3>
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Most standard website migrations are completed within 24-48 hours after we receive all necessary credentials. Complex websites with large databases or custom configurations may take longer. We provide a time estimate after assessing your specific requirements.</p>
              </div>
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button className="w-full text-left p-6 focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-900">Will my website experience downtime during migration?</h3>
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-4 text-gray-600">
                <p>We guarantee zero downtime during migration. We use advanced techniques to synchronize data between servers before making the final DNS switch, which typically results in less than 5 minutes of downtime during the final propagation phase.</p>
              </div>
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button className="w-full text-left p-6 focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-900">What information do you need from me to start the migration?</h3>
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-4 text-gray-600">
                <p>We'll need access to your current hosting control panel or FTP credentials, database information (if applicable), and DNS management access. All credentials are handled with strict security protocols and can be deleted after migration is complete.</p>
              </div>
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button className="w-full text-left p-6 focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-900">Do you migrate email accounts as well?</h3>
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Yes, we can migrate email accounts as part of our Professional and Enterprise migration packages. For Basic migrations, email migration may require an additional service which we can quote based on the number of accounts.</p>
              </div>
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <button className="w-full text-left p-6 focus:outline-none">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-900">What if something goes wrong during migration?</h3>
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="mt-4 text-gray-600">
                <p>Before making any changes, we create complete backups of your website. If any issues arise, we can immediately revert to the original setup. Our 100% satisfaction guarantee means we'll work until your website is functioning perfectly on our servers.</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}