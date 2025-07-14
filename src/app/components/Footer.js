import React, { useEffect, useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp // For the back to top button
} from 'react-icons/fa'; // Using react-icons for easy icon integration

export default function Footer() {
  const links = [
    {
      title: "Hosting Solutions",
      items: [
        { name: "Shared Hosting", url: "#" },
        { name: "WordPress Hosting", url: "#" },
        { name: "Cloud Hosting", url: "#" },
        { name: "VPS Hosting", url: "#" },
        { name: "Dedicated Server", url: "#" },
        { name: "Reseller Hosting", url: "#" },
        { name: "Ecommerce Hosting", url: "#" }
      ]
    },
    {
      title: "Services",
      items: [
        { name: "Domain Names", url: "#" },
        { name: "SSL Certificates", url: "#" },
        { name: "Website Migration", url: "#" },
        { name: "Backups & Security", url: "#" }
      ]
    },
    {
      title: "Company & Support",
      items: [
        { name: "About Us", url: "#" },
        { name: "Knowledge Base", url: "#" },
        { name: "Tutorials", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Blogs", url: "#" },
        { name: "Contact Us", url: "#" }
      ]
    },
    // {
    //   title: "Support",
    //   items: [
        
    //     { name: "System Status", url: "#" },
    //   ]
    // }
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/" },
    { name: "Twitter", icon: FaTwitter, url: "https://x.com/" },
    { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/" },
    { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/" }
  ];

  const legalLinks = [
    { name: "Terms of Service", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Sitemap", url: "#" },
    { name: "Acceptable Use Policy", url: "#" },
    { name: "Refund Policy", url: "#" }
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-800 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background shape/gradient for visual interest */}
      <div className="absolute inset-0 bg-pattern opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-extrabold mb-4 animate-fade-in">
              Cloud<span className="text-blue-400">Care</span>Host
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Providing reliable, high-performance hosting solutions since 2015. Our mission is to make web hosting simple and accessible for everyone.
            </p>
            <div className="mb-6">
              <div className="flex items-center mb-3 text-blue-100">
                <FaPhoneAlt className="w-5 h-5 mr-3 text-blue-400" />
                <span className="hover:text-blue-50 transition duration-300">+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center text-blue-100">
                <FaEnvelope className="w-5 h-5 mr-3 text-blue-400" />
                <span className="hover:text-blue-50 transition duration-300">support@cloudcarehost.com</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-500 transition duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="text-xl text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {links.map((section, index) => (
            <div key={index} className="sm:last:col-span-2 lg:last:col-auto"> {/* Adjust column span for the last section on small screens */}
              <h4 className="text-xl font-bold mb-5 text-blue-300 border-b border-blue-700 pb-2">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.url}
                      className="text-blue-200 hover:text-blue-50 transition duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Section (New Addition) */}
        <div className="border-t border-blue-800 pt-8 mt-12 text-center">
          <h4 className="text-2xl font-bold mb-4 text-blue-300">Stay Updated with CloudCareHost!</h4>
          <p className="text-blue-200 mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest hosting tips, exclusive deals, and company news.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 p-3 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-blue-300 mb-4 md:mb-0 text-sm">
              © 2025 Cloud Care Host. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-blue-300 hover:text-blue-50 text-sm transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}