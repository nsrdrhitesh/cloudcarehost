import Link from 'next/link';
import { FaShieldAlt, FaDatabase, FaClock, FaSync, FaLock, FaServer, FaCloudDownloadAlt } from 'react-icons/fa';

export default function BackupsSecurityPage() {
  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
      title: "Automated Backups",
      description: "Daily, weekly, and monthly automated backups with 1-click restore functionality.",
      stats: "99.9% Backup Success Rate"
    },
    {
      icon: <FaDatabase className="w-8 h-8 text-blue-600" />,
      title: "Redundant Storage",
      description: "Your backups are stored across multiple secure locations for maximum reliability.",
      stats: "3x Data Redundancy"
    },
    {
      icon: <FaClock className="w-8 h-8 text-blue-600" />,
      title: "Point-in-Time Recovery",
      description: "Restore your site to any specific moment with our incremental backup system.",
      stats: "Up to 30 Days Retention"
    },
    {
      icon: <FaSync className="w-8 h-8 text-blue-600" />,
      title: "Real-time Sync",
      description: "Continuous data protection with real-time file changes monitoring.",
      stats: "24/7 Data Protection"
    },
    {
      icon: <FaLock className="w-8 h-8 text-blue-600" />,
      title: "Military-grade Encryption",
      description: "All backups encrypted with AES-256 encryption both in transit and at rest.",
      stats: "Bank-level Security"
    },
    {
      icon: <FaServer className="w-8 h-8 text-blue-600" />,
      title: "Off-site Storage",
      description: "Backups stored in geographically separate locations for disaster recovery.",
      stats: "3 Global Locations"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$4.99",
      period: "/month",
      features: [
        "Daily Automated Backups",
        "7 Days Retention",
        "1-Click Restore",
        "Email Notifications",
        "100GB Storage"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$9.99",
      period: "/month",
      features: [
        "Real-time Backups",
        "14 Days Retention",
        "Database Backups",
        "Priority Restores",
        "500GB Storage",
        "Encrypted Backups"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19.99",
      period: "/month",
      features: [
        "Continuous Backups",
        "30 Days Retention",
        "Unlimited Storage",
        "24/7 Support",
        "Multi-site Management",
        "Off-site Storage",
        "Custom Retention"
      ],
      cta: "Premium Plan",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            <span className="text-blue-400">Backups</span> & Security
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8">
            Protect your website with our enterprise-grade backup solutions and military-grade security measures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105"
            >
              Get Started Now
            </Link>
            <Link 
              href="#features" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold border border-white/20 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Comprehensive <span className="text-blue-600">Protection</span> for Your Data
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our backup and security solutions are designed to give you peace of mind with enterprise-grade protection at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              How Our <span className="text-blue-600">Backup System</span> Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple three-step process to ensure your data is always protected and recoverable.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Automatic Backup</h3>
              <p className="text-gray-600">
                Our system automatically captures and stores your website data at scheduled intervals.
              </p>
            </div>

            <div className="hidden md:block">
              <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="flex-1 text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Secure Storage</h3>
              <p className="text-gray-600">
                Your encrypted backups are stored in multiple geographically diverse locations.
              </p>
            </div>

            <div className="hidden md:block">
              <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

            <div className="flex-1 text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Easy Restoration</h3>
              <p className="text-gray-600">
                Restore your entire site or individual files with just one click when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Simple, <span className="text-blue-600">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the backup plan that fits your needs. All plans include our 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative border rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg ${plan.popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rotate-12">
                    POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-extrabold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/signup" 
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <FaCloudDownloadAlt className="w-12 h-12 mx-auto mb-6 text-blue-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Website?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Don't wait for disaster to strike. Get protected today with our reliable backup solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold border border-white transition duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}