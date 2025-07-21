import Link from 'next/link';
import { FaShieldAlt, FaMoneyBillWave, FaClock, FaQuestionCircle } from 'react-icons/fa';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            Refund <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our commitment to fair and transparent refund practices for all our customers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Policy Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-blue-50">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Money-Back Guarantee</h3>
                <p className="text-sm text-gray-600">30-day guarantee on shared hosting</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaMoneyBillWave className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Pro-Rated Refunds</h3>
                <p className="text-sm text-gray-600">For eligible services after 30 days</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaClock className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Processing Time</h3>
                <p className="text-sm text-gray-600">5-10 business days</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaQuestionCircle className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Questions?</h3>
                <p className="text-sm text-gray-600">Contact our support team</p>
              </div>
            </div>
          </div>

          {/* Detailed Policy Content */}
          <div className="p-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">
                General Refund Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At CloudCareHost, we stand behind our services with a fair and transparent refund policy. 
                  Our goal is to ensure complete customer satisfaction with all our hosting solutions.
                </p>
                <p>
                  If you're not satisfied with our services, we offer a <span className="font-semibold text-blue-600">
                  30-day money-back guarantee</span> on all shared hosting plans. This gives you ample time to 
                  evaluate our services and request a refund if they don't meet your expectations.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">
                Eligibility for Refunds
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <p>
                    <span className="font-semibold">Shared Hosting:</span> Full refund within 30 days of purchase
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <p>
                    <span className="font-semibold">VPS/Dedicated Servers:</span> Pro-rated refund after 30 days (excluding setup fees)
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    ✓
                  </div>
                  <p>
                    <span className="font-semibold">Domain Names:</span> Refundable within 96 hours of registration (subject to registry policies)
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    ✗
                  </div>
                  <p>
                    <span className="font-semibold">Non-Refundable:</span> SSL certificates, dedicated IPs, and third-party services
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">
                How to Request a Refund
              </h2>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">Follow these simple steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Log in to your CloudCareHost client area</li>
                  <li>Navigate to the "Services" section</li>
                  <li>Select the service you wish to cancel</li>
                  <li>Click "Request Cancellation" and choose "Refund" option</li>
                  <li>Submit the form and our team will process your request</li>
                </ol>
              </div>
              <p className="text-gray-600 italic">
                Note: Refund requests must be submitted through the client area. Email requests cannot be processed.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-2">
                Processing Time & Methods
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Approved refunds are typically processed within <span className="font-semibold">5-10 business days</span>. 
                  The refund will be issued to the original payment method used for the purchase.
                </p>
                <p>
                  For payments older than 120 days, we may issue the refund via check or alternative payment method 
                  at our discretion.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <span className="font-medium">Important:</span> Domain name refunds may take additional time 
                        as they are subject to registry policies. Setup fees for dedicated servers and VPS are non-refundable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Need Help With Your Refund?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our support team is available 24/7 to assist you with any questions about our refund policy 
                or to help process your refund request.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}