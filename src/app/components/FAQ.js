"use client"

import React, { useState, useRef, useEffect } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What makes Cloud Care Host different from other hosting providers?",
      answer: "We offer enterprise-grade infrastructure at affordable prices with 24/7 expert support. Our proprietary caching technology ensures your website loads up to 3x faster than standard hosting solutions. Plus, we provide free daily backups, free SSL certificates, and a 99.9% uptime guarantee.",
      // icon: "⭐",
      icon: ""
    },
    {
      question: "How does your 99.9% uptime guarantee work?",
      answer: "We monitor all servers continuously and maintain redundant systems. If we fall below 99.9% uptime in any given month (which rarely happens), we'll credit your account with 5% of your monthly fee for each hour of downtime, up to 100% of your monthly payment.",
      // icon: "⏱️",
      icon: ""
    },
    {
      question: "What security measures do you have in place?",
      answer: "Our security includes: DDoS protection, Web Application Firewall (WAF), malware scanning, automatic updates, isolated account environments, and 24/7 security monitoring. All plans include free SSL certificates to encrypt your data.",
      // icon: "🔒",
      icon: ""
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Absolutely! You can change plans anytime with just a few clicks in your control panel. We make the migration process seamless with no downtime for your website. Downgrades are applied at your next billing cycle.",
      // icon: "🔄",
      icon: ""
    },
    {
      question: "Do you offer website migration services?",
      answer: "Yes! We provide free website migrations for all new customers. Our expert team will handle the entire process, typically completing migrations within 24-48 hours with zero downtime for your visitors.",
      // icon: "🚚",
      icon: ""
    },
    {
      question: "What kind of support can I expect?",
      answer: "Our support team consists of hosting experts (not outsourced support) available 24/7/365 via live chat, phone, and ticket system. Average response time is under 5 minutes for critical issues. We also have an extensive knowledge base and video tutorials.",
      // icon: "👨‍💻",
      icon: ""
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "We offer a 30-day money-back guarantee on all shared hosting plans. If you're not completely satisfied, we'll give you a full refund, no questions asked. For VPS and dedicated servers, we offer prorated refunds.",
      // icon: "💰",
      icon: ""
    },
    {
      question: "How do backups work?",
      answer: "We perform automatic daily backups of all accounts and retain them for 30 days. You can restore your site to any backup point with one click from your control panel. For added protection, we recommend maintaining your own backups as well.",
      // icon: "💾",
      icon: ""
    }
  ];

  // State to manage which FAQ item is open.
  // We'll use an array of booleans, one for each FAQ.
  const [openStates, setOpenStates] = useState(faqs.map(() => false));

  // Refs to get the scroll height of the content for smooth animation
  const contentRefs = useRef([]);
  // Initialize contentRefs array with null for each FAQ item
  useEffect(() => {
    contentRefs.current = faqs.map((_, i) => contentRefs.current[i] ?? null);
  }, [faqs]);

  // Function to toggle the open state of an FAQ item
  const toggleFaq = (index) => {
    setOpenStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-1/2 w-36 h-36 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Reliable Cloud Hosting Solutions
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Get answers to common questions about our hosting services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openStates[index];
            const contentHeight = isOpen ? (contentRefs.current[index]?.scrollHeight || 'auto') : '0px';

            return (
              <div
                key={index}
                className="mb-4 group transition-all duration-300"
              >
                <div
                  className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 border-l-4 border-blue-500 group-hover:border-blue-600"
                  onClick={() => toggleFaq(index)} // Use React's onClick
                >
                  <div className="mr-4 text-2xl">{faq.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition">
                      {faq.question}
                    </h3>
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{ maxHeight: contentHeight }} // Dynamically set max-height
                      ref={el => contentRefs.current[index] = el} // Assign ref to the element
                    >
                      <div className="text-blue-800 pb-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                  <div className={`ml-4 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-700 mb-4">
            Still have questions? Our experts are ready to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition shadow-md hover:shadow-lg"
          >
            Contact Support
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
