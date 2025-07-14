import Link from 'next/link'

export default function NavBar() {
  const navItems = [
    {
      name: 'Domain',
      href: '/domain',
    },
    {
      name: 'Cloud Hosting',
      href: '#',
      subItems: [
        {
          name: 'Shared Hosting',
          description: 'Perfect for small websites and blogs',
          icon: 'shared-icon',
          href: '/shared-hosting'
        },
        {
          name: 'WordPress Hosting',
          description: 'Optimized for WordPress performance',
          icon: 'wordpress-icon',
          href: '/wordpress-hosting'
        },
        {
          name: 'VPS Hosting',
          description: 'Dedicated resources for growing sites',
          icon: 'vps-icon',
          href: '/vps-hosting'
        },
        {
          name: 'Dedicated Hosting',
          description: 'Full server control for high traffic',
          icon: 'dedicated-icon',
          href: '/dedicated-hosting'
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
          icon: 'woocommerce-icon',
          href: '/woocommerce-hosting'
        },
        {
          name: 'Reseller Hosting',
          description: 'Start your own hosting business',
          icon: 'reseller-icon',
          href: '/reseller-hosting'
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
          icon: 'knowledgebase-icon',
          href: '/knowledgebase'
        },
        {
          name: 'Contact Us',
          description: '24/7 expert support',
          icon: 'contact-icon',
          href: '/contact'
        },
        {
          name: 'Blogs',
          description: 'Latest news and tips',
          icon: 'blog-icon',
          href: '/blog'
        }
      ]
    }
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 font-bold text-2xl">
              Cloud<span className="text-blue-800">Care</span>Host
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="text-blue-900 hover:text-blue-600 font-medium flex items-center">
                  {item.name}
                  {item.subItems && (
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        className="block px-4 py-3 hover:bg-blue-50 transition"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3">
                            {/* Icon would go here */}
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-blue-900">{subItem.name}</p>
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
          
          <div className="flex items-center space-x-4">
            {/* <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login
            </Link> */}
            <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition">
              CLIENT AREA
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-blue-900 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden bg-white shadow-lg">
        {/* Mobile menu items would go here */}
      </div>
    </nav>
  )
}