export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/images/dot-pattern.svg')] bg-[length:40px_40px]"></div>
      </div>
      
      {/* Floating circles decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-700 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-indigo-700 opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content - left side */}
          <div className="lg:w-1/2 animate-fadeIn">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">99.9% Uptime Guarantee</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 leading-tight">
              Premium Cloud Hosting <span className="text-blue-300">Solutions</span> for Your Business
            </h1>
            
            <p className="text-xl md:text-xl mb-8 opacity-90 leading-relaxed">
              Experience <span className="font-semibold text-blue-200">lightning-fast</span> servers, <span className="font-semibold text-blue-200">military-grade</span> security, 
              and <span className="font-semibold text-blue-200">24/7 expert support</span> that keeps your website running at peak performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#pricing" 
                className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a 
                href="#features" 
                className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Watch Demo
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                  </div>
                <span>Trusted by 10,000+ businesses</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>4.9/5 (2,458 Reviews)</span>
              </div>
            </div>
          </div>
          
          {/* Image - right side */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0 animate-fadeInRight">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                <img 
                  src="/assets/images/dashboard-preview.png" 
                  alt="Cloud Hosting Dashboard Preview" 
                  className="w-full h-auto"
                />
                
                {/* Floating badge on image */}
                {/* <div className="absolute -bottom-4 -right-4 bg-white text-blue-900 px-6 py-3 rounded-xl shadow-lg font-bold flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Live Demo
                </div> */}
              </div>
              
              {/* Floating elements around main image */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-600 rounded-2xl shadow-lg p-4 animate-float">
                <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-indigo-600 rounded-2xl shadow-lg p-4 animate-float delay-1000">
                <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
    </section>
  )
}