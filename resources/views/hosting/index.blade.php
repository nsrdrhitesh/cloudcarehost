<x-hosting-layout title="Hosting Solutions"
    description="Choose the perfect hosting solution for your website with our reliable and high-performance hosting services.">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Shared Hosting Card -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div
                        class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                        <i class="fas fa-server text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold">Shared Hosting</h3>
                </div>
                <p class="text-gray-600 mb-6">Perfect for small websites and blogs with our affordable shared hosting
                    plans.</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">From $2.99/mo</span>
                    <a href="{{ route('hosting.shared') }}"
                        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- WordPress Hosting Card -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                        <i class="fab fa-wordpress text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold">WordPress Hosting</h3>
                </div>
                <p class="text-gray-600 mb-6">Optimized WordPress hosting with automatic updates and enhanced security.
                </p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">From $4.99/mo</span>
                    <a href="{{ route('hosting.wordpress') }}"
                        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Cloud Hosting Card -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div
                        class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4">
                        <i class="fas fa-cloud text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold">Cloud Hosting</h3>
                </div>
                <p class="text-gray-600 mb-6">Scalable cloud hosting with guaranteed resources and high availability.
                </p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">From $9.99/mo</span>
                    <a href="{{ route('hosting.cloud') }}"
                        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- VPS Hosting Card -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                        <i class="fas fa-cube text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold">VPS Hosting</h3>
                </div>
                <p class="text-gray-600 mb-6">Virtual private servers with root access and dedicated resources.</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">From $19.99/mo</span>
                    <a href="{{ route('hosting.vps') }}"
                        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Dedicated Servers Card -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mr-4">
                        <i class="fas fa-server text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold">Dedicated Servers</h3>
                </div>
                <p class="text-gray-600 mb-6">Powerful dedicated servers for maximum performance and control.</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">From $99.99/mo</span>
                    <a href="{{ route('hosting.dedicated') }}"
                        class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- Compare Hosting Card -->
        <div
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-indigo-600">
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div
                        class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
                        <i class="fas fa-chart-bar text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold">Compare Hosting</h3>
                </div>
                <p class="text-gray-600 mb-6">Not sure which hosting is right for you? Compare all our hosting options.
                </p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-indigo-600">All Plans</span>
                    <a href="{{ route('hosting.compare') }}"
                        class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Compare Now
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div class="bg-white rounded-xl shadow-md p-8 mb-16">
        <h2 class="text-3xl font-bold font-montserrat mb-8 text-center">Why Choose Our Hosting?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
                <div
                    class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl mx-auto mb-4">
                    <i class="fas fa-tachometer-alt"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">Blazing Fast Speed</h3>
                <p class="text-gray-600">Our SSD-powered servers and optimized stack ensure your website loads in
                    milliseconds.</p>
            </div>
            <div class="text-center">
                <div
                    class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl mx-auto mb-4">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">Top-Notch Security</h3>
                <p class="text-gray-600">Free SSL certificates, DDoS protection, and regular backups keep your data
                    safe.</p>
            </div>
            <div class="text-center">
                <div
                    class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl mx-auto mb-4">
                    <i class="fas fa-headset"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">24/7 Expert Support</h3>
                <p class="text-gray-600">Our hosting experts are available round the clock to assist you with any
                    issues.</p>
            </div>
        </div>
    </div>
</x-hosting-layout>