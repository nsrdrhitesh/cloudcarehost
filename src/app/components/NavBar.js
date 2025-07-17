// components/NavBar.js
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const navItems = [
    {
      name: 'Domain',
      href: '/domain',
    },
    {
      name: 'Cloud Hosting',
      href: '#', // Keep '#' if it's purely a dropdown trigger, or a relevant page
      subItems: [
        {
          name: 'Shared Hosting',
          description: 'Perfect for small websites and blogs',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM13 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zM13 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
            </svg>
          ),
          href: '/hosting/shared'
        },
        {
          name: 'WordPress Hosting',
          description: 'Optimized for WordPress performance',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6zm-1 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          ),
          href: '/hosting/wordpress'
        },
        {
          name: 'VPS Hosting',
          description: 'Dedicated resources for growing sites',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zm-4 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-1 4a1 1 0 011-1h8a1 1 0 110 2H5a1 1 0 01-1-1zm10-7a1 1 0 10-2 0v2a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
          ),
          href: '/hosting/vps'
        },
        {
          name: 'Dedicated Hosting',
          description: 'Full server control for high traffic',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm0 14a1 1 0 01-1 1v1a1 1 0 012 0v-1a1 1 0 01-1-1zm7-8a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM3 9a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm11.293-4.707a1 1 0 010 1.414L12.414 8l1.879 1.879a1 1 0 11-1.414 1.414L11 9.414l-1.879 1.879a1 1 0 01-1.414-1.414L9.586 8 7.707 6.121a1 1 0 111.414-1.414L11 6.586l1.879-1.879a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ),
          href: '/hosting/dedicated'
        }
      ]
    },
    {
      name: 'Business Solutions',
      href: '#',
      subItems: [
        {
          name: 'WooCommerce Hosting',
          description: 'Optimized for online stores',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-4V3a1 1 0 10-2 0v1H8V3a1 1 0 10-2 0v1H4zM6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" />
            </svg>
          ),
          href: '/hosting/woocommerce'
        },
        {
          name: 'Reseller Hosting',
          description: 'Start your own hosting business',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
          ),
          href: '/hosting/reseller'
        }
      ]
    },
    {
      name: 'Help & Resources',
      href: '#',
      subItems: [
        {
          name: 'Knowledgebase',
          description: 'Guides, tutorials and FAQs',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3 3 0 01-6 0 1 1 0 012 0c0 .379.045.753.138 1.118l-.16.16a1 1 0 01-1.414 1.414l-1.414-1.414a3 3 0 014.242-4.242A1 1 0 0110 7v3a1 1 0 01-2 0V8a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          ),
          href: '/knowledgebase'
        },
        {
          name: 'Contact Us',
          description: '24/7 expert support',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          ),
          href: '/contact'
        },
        {
          name: 'Blogs',
          description: 'Latest news and tips',
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm-1 3a1 1 0 100 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
            </svg>
          ),
          href: '/blog'
        }
      ]
    }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 font-extrabold text-2xl tracking-tight">
              Cloud<span className="text-blue-800">Care</span>Host
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.subItems ? item.href : item.href} // Link main item, or # if it has subitems
                  className="text-blue-900 hover:text-blue-600 font-medium flex items-center py-2 transition-colors duration-300"
                >
                  {item.name}
                  {item.subItems && (
                    <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>

                {item.subItems && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-80 bg-white shadow-xl rounded-lg py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible transform translate-y-2 group-hover:translate-y-0">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                              {subItem.icon}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-900">{subItem.name}</p>
                            <p className="text-xs text-gray-500">{subItem.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              CLIENT AREA
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu content */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 pt-2">
          {navItems.map((item) => (
            <div key={item.name} className="px-2 pt-2 pb-3 space-y-1">
              {item.subItems ? (
                <>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left text-base font-medium text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  <div className="ml-4 border-l border-gray-200 pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-blue-900 hover:bg-blue-50 hover:text-blue-600 rounded-md px-3 py-2 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="px-5 py-3">
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-300"
            >
              CLIENT AREA
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}