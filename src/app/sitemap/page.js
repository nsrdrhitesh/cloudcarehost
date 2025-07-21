import Link from 'next/link';
import { FaSitemap, FaHome, FaServer, FaGlobe, FaTools, FaInfoCircle, FaBook, FaHeadset } from 'react-icons/fa';

export default function SitemapPage() {
  const sitemapSections = [
    {
      title: "Home",
      icon: <FaHome className="text-blue-500 text-2xl" />,
      links: [
        { name: "Homepage", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Contact Us", url: "/contact" },
        { name: "Blog", url: "/blog" },
      ]
    },
    {
      title: "Hosting Solutions",
      icon: <FaServer className="text-blue-500 text-2xl" />,
      links: [
        { name: "Shared Hosting", url: "/hosting/shared" },
        { name: "WordPress Hosting", url: "/hosting/wordpress" },
        { name: "VPS Hosting", url: "/hosting/vps" },
        { name: "Dedicated Servers", url: "/hosting/dedicated" },
        { name: "Cloud Hosting", url: "/hosting/cloud" },
        { name: "Reseller Hosting", url: "/hosting/reseller" },
      ]
    },
    {
      title: "Domain Services",
      icon: <FaGlobe className="text-blue-500 text-2xl" />,
      links: [
        { name: "Domain Registration", url: "/domain/register" },
        { name: "Domain Transfer", url: "/domain/transfer" },
        { name: "Domain Pricing", url: "/domain/pricing" },
        { name: "WHOIS Lookup", url: "/domain/whois" },
      ]
    },
    {
      title: "Services",
      icon: <FaTools className="text-blue-500 text-2xl" />,
      links: [
        { name: "SSL Certificates", url: "/services/ssl" },
        { name: "Website Migration", url: "/services/migration" },
        { name: "Website Builder", url: "/services/website-builder" },
        { name: "Email Hosting", url: "/services/email" },
      ]
    },
    {
      title: "Company",
      icon: <FaInfoCircle className="text-blue-500 text-2xl" />,
      links: [
        { name: "About CloudCareHost", url: "/company/about" },
        { name: "Our Team", url: "/company/team" },
        { name: "Careers", url: "/company/careers" },
        { name: "News & Press", url: "/company/news" },
        { name: "Testimonials", url: "/company/testimonials" },
      ]
    },
    {
      title: "Support",
      icon: <FaHeadset className="text-blue-500 text-2xl" />,
      links: [
        { name: "Knowledge Base", url: "/support/knowledgebase" },
        { name: "Tutorials", url: "/support/tutorials" },
        { name: "System Status", url: "/support/status" },
        { name: "Submit Ticket", url: "/support/ticket" },
        { name: "Live Chat", url: "/support/chat" },
      ]
    },
    {
      title: "Legal",
      icon: <FaBook className="text-blue-500 text-2xl" />,
      links: [
        { name: "Terms of Service", url: "/legal/terms" },
        { name: "Privacy Policy", url: "/legal/privacy" },
        { name: "Acceptable Use Policy", url: "/legal/aup" },
        { name: "Refund Policy", url: "/legal/refund" },
        { name: "GDPR Compliance", url: "/legal/gdpr" },
      ]
    },
    {
      title: "Client Area",
      icon: <FaSitemap className="text-blue-500 text-2xl" />,
      links: [
        { name: "Login", url: "/client/login" },
        { name: "Register", url: "/client/register" },
        { name: "Password Reset", url: "/client/reset" },
        { name: "Billing", url: "/client/billing" },
        { name: "Support Tickets", url: "/client/tickets" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <FaSitemap className="text-5xl text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Sitemap</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Explore all the pages and services available at CloudCareHost through our comprehensive sitemap.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-600">
                  <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg>
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Sitemap</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Navigate Our Website</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Below you'll find all the important pages organized by category for easy navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sitemapSections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.url} 
                        className="flex items-center text-blue-700 hover:text-blue-600 hover:underline transition-colors duration-200"
                      >
                        <svg className="w-3 h-3 mr-2 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                        </svg>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Further Assistance?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you can't find what you're looking for, our support team is available 24/7 to help you navigate our services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Contact Support
            </Link>
            <Link 
              href="/knowledgebase" 
              className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md"
            >
              Visit Knowledge Base
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}