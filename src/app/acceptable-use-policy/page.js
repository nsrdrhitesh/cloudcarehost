import Link from 'next/link';

export default function AcceptableUsePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            Acceptable Use Policy
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our guidelines to ensure a safe and reliable hosting environment for all customers.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 mx-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Acceptable Use Policy</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-10">
              <p className="text-gray-600 mb-6">
                This Acceptable Use Policy ("AUP") governs your use of the services provided by CloudCareHost ("Company", "we", "us", or "our"). 
                By using our services, you agree to comply with this AUP. We may modify this AUP at any time without notice.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="h-1 w-12 bg-blue-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-blue-900">General Provisions</h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                Our services must be used in a manner that is consistent with the intended purpose of the services and in compliance with all applicable laws and regulations.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="h-1 w-12 bg-blue-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-blue-900">Prohibited Activities</h2>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <h3 className="font-semibold text-blue-800 mb-2">You may not use our services to:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Transmit, distribute, or store any material in violation of any applicable law or regulation</li>
                  <li>Host or distribute illegal content, including but not limited to pirated software or media</li>
                  <li>Engage in activities that compromise the security of our network or other networks</li>
                  <li>Send unsolicited commercial email (spam) or engage in phishing activities</li>
                  <li>Operate phishing sites, fraudulent sites, or any site engaged in illegal activities</li>
                  <li>Distribute viruses, worms, Trojan horses, or other malicious code</li>
                  <li>Engage in activities that cause harm to minors in any way</li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="h-1 w-12 bg-blue-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-blue-900">Resource Usage</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-lg text-blue-800 mb-3">Shared Hosting</h3>
                  <p className="text-gray-600">
                    Shared hosting accounts may not consume excessive resources that negatively impact other customers. 
                    Accounts found to be exceeding normal usage may be suspended or terminated.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-lg text-blue-800 mb-3">VPS/Dedicated Servers</h3>
                  <p className="text-gray-600">
                    While dedicated resources are allocated, activities that may compromise network integrity or 
                    cause excessive load on our infrastructure are prohibited.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="h-1 w-12 bg-blue-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-blue-900">Security</h2>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">You are responsible for:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Maintaining the security of your account and services</li>
                  <li>Keeping all software up to date with security patches</li>
                  <li>Ensuring your account credentials are secure and not shared</li>
                  <li>Reporting any security vulnerabilities to us immediately</li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="h-1 w-12 bg-blue-600 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-blue-900">Enforcement</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-blue-800">Violations:</span> We reserve the right to investigate any violation of this AUP and take appropriate action, which may include suspension or termination of services without notice.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-blue-800">Reporting:</span> To report a violation of this AUP, please contact our abuse department at <a href="mailto:abuse@cloudcarehost.com" className="text-blue-600 hover:underline">abuse@cloudcarehost.com</a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="font-semibold text-blue-800 text-xl mb-3">Policy Updates</h3>
              <p className="text-gray-700">
                We may update this AUP from time to time. The most current version will always be posted on our website. 
                Your continued use of our services after changes become effective constitutes acceptance of the revised policy.
              </p>
              <p className="text-gray-700 mt-3">
                <span className="font-semibold">Last Updated:</span> July 21, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}