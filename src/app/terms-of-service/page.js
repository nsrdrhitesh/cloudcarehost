import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Terms of Service</span>
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
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                Welcome to CloudCareHost! These Terms of Service ("Terms") govern your use of our website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">2. Account Registration</h2>
              <p className="text-gray-700 mb-4">
                To access certain features of our Services, you may need to register for an account. You agree to:
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept all risks of unauthorized access to your account</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">3. Acceptable Use</h2>
              <p className="text-gray-700 mb-4">
                You agree not to use our Services to:
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute malware or engage in hacking activities</li>
                <li>Send spam or unsolicited communications</li>
                <li>Host illegal or harmful content</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">4. Service Limitations</h2>
              <p className="text-gray-700 mb-6">
                CloudCareHost reserves the right to impose limits on your use of our Services, including but not limited to: storage space, bandwidth, CPU usage, and memory. We may suspend or terminate your account if your usage exceeds reasonable limits or negatively impacts other customers.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">5. Payments and Billing</h2>
              <p className="text-gray-700 mb-4">
                Our Services are offered on both monthly and annual subscription plans. You agree to:
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>Pay all fees associated with your account</li>
                <li>Provide valid payment information</li>
                <li>Authorize us to charge your payment method for renewal periods</li>
                <li>Understand that all fees are non-refundable except as required by law</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">6. Termination</h2>
              <p className="text-gray-700 mb-6">
                You may terminate your account at any time by following the instructions on our website. We reserve the right to suspend or terminate your account immediately for violations of these Terms or for any other reason at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by law, CloudCareHost shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                <li>Your use or inability to use our Services</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from our Services</li>
                <li>Any bugs, viruses, or similar that may be transmitted through our Services</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">8. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We may modify these Terms at any time. We'll notify you of significant changes through our website or by email. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">9. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">10. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <p className="text-blue-800 font-medium">CloudCareHost Support</p>
                <p className="text-blue-700">Email: legal@cloudcarehost.com</p>
                <p className="text-blue-700">Phone: +1 (800) 123-4567</p>
                <p className="text-blue-700">Address: 123 Cloud Street, Suite 100, Wilmington, DE 19801</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}