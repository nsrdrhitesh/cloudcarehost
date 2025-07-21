import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Privacy Policy</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-100 pb-2">1. Information We Collect</h2>
              <p className="text-gray-700 mb-6">
                We collect information to provide better services to all our users. The types of information we collect include:
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and other contact details.</li>
                <li><strong>Service Usage Data:</strong> We collect information about how you use our services, including hosting configurations, website visits, and interactions.</li>
                <li><strong>Device Information:</strong> We may collect device-specific information such as your IP address, browser type, and operating system.</li>
                <li><strong>Payment Information:</strong> When you make purchases, we collect payment details, though we don't store full credit card numbers.</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-100 pb-2">2. How We Use Information</h2>
              <p className="text-gray-700 mb-6">
                The information we collect is used to provide, maintain, protect, and improve our services, and to develop new ones. Specifically, we use information:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Service Delivery</h3>
                  <p className="text-gray-700">To deliver the hosting services you've requested and maintain your account.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Customer Support</h3>
                  <p className="text-gray-700">To provide technical support and respond to your inquiries.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Security & Protection</h3>
                  <p className="text-gray-700">To detect and prevent fraud, abuse, and security issues.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Service Improvement</h3>
                  <p className="text-gray-700">To understand how our services are used and improve them.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-100 pb-2">3. Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not share personal information with companies, organizations, or individuals outside of CloudCareHost except in the following cases:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">With Your Consent</h3>
                <p className="text-gray-700 mb-4">We'll share personal information outside of CloudCareHost when we have your consent to do so.</p>
                
                <h3 className="font-semibold text-blue-800 mb-3">For Legal Reasons</h3>
                <p className="text-gray-700 mb-4">We may disclose information if we believe it's reasonably necessary to comply with laws, regulations, or legal processes.</p>
                
                <h3 className="font-semibold text-blue-800 mb-3">Service Providers</h3>
                <p className="text-gray-700">We may share information with trusted third-party providers who assist us in delivering our services, under strict confidentiality agreements.</p>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-100 pb-2">4. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement robust security measures to protect your data:
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Encryption</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Firewalls</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Access Controls</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Regular Audits</span>
              </div>
              <p className="text-gray-700 mb-6">
                While we strive to protect your personal information, no security system is impenetrable. We cannot guarantee the absolute security of your data.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-100 pb-2">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have rights regarding your personal information:
              </p>
              <div className="bg-white border border-blue-200 rounded-lg divide-y divide-blue-200 mb-6">
                <div className="p-4 flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Access & Correction</h3>
                    <p className="text-gray-700">You can access and update your account information through your client area.</p>
                  </div>
                </div>
                <div className="p-4 flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Data Deletion</h3>
                    <p className="text-gray-700">You can request deletion of your personal data, subject to legal retention requirements.</p>
                  </div>
                </div>
                <div className="p-4 flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-1">Marketing Preferences</h3>
                    <p className="text-gray-700">You can opt-out of marketing communications at any time using the unsubscribe link in our emails.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-100 pb-2">6. Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this privacy policy from time to time. We'll notify you of significant changes through email or prominent notices on our website. The "Last Updated" date at the bottom of this page will reflect the most recent changes.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-4 border-b border-blue-100 pb-2">7. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have questions about this privacy policy or our data practices, please contact our Data Protection Officer:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@cloudcarehost.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (800) 123-4567 (Privacy Support Line)</p>
                <p className="text-gray-700"><strong>Mail:</strong> Data Protection Officer, CloudCareHost, 123 Hosting Street, Suite 500, San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center text-gray-500 text-sm">
          <p>Last Updated: July 21, 2025</p>
        </div>
      </div>
    </div>
  );
}