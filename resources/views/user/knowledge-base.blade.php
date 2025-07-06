<x-user-layout>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 md:py-28 overflow-hidden">
        <div class="absolute max-w-screen-xl mx-auto mx-auto inset-0 opacity-10">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" stroke-width="2"
                    stroke-dasharray="5,5" />
            </svg>
        </div>
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 relative z-10">
            <div class="max-w-3xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 animate__animated animate__fadeInDown">
                    Knowledge Base</h1>
                <p class="text-xl text-indigo-100 mb-8 animate__animated animate__fadeInDown animate__delay-1s">Find
                    answers, guides, and tutorials to help you get the most out of our services</p>
                <div class="max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
                    <form class="relative">
                        <input type="text" placeholder="Search knowledge base..."
                            class="w-full px-6 py-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
                        <button type="submit"
                            class="absolute right-2 top-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg transition-colors">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-gray-50">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-3">Browse by Category</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Find help articles organized by topic</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Category 1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                    <div class="p-6 text-center">
                        <div
                            class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <i class="fas fa-server text-2xl text-indigo-600 group-hover:text-white"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Hosting</h3>
                        <p class="text-gray-500 mb-4">Everything about web hosting setup and management</p>
                        <a href="{{ route('articles') }}"
                            class="text-indigo-600 font-medium inline-flex items-center group-hover:text-indigo-700 transition-colors">
                            View Articles <i class="fas fa-chevron-right ml-1 text-sm"></i>
                        </a>
                    </div>
                </div>

                <!-- Category 2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                    <div class="p-6 text-center">
                        <div
                            class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <i class="fas fa-globe text-2xl text-indigo-600 group-hover:text-white"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Domains</h3>
                        <p class="text-gray-500 mb-4">Domain registration, transfer, and management</p>
                        <a href="{{ route('articles') }}"
                            class="text-indigo-600 font-medium inline-flex items-center group-hover:text-indigo-700 transition-colors">
                            View Articles <i class="fas fa-chevron-right ml-1 text-sm"></i>
                        </a>
                    </div>
                </div>

                <!-- Category 3 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                    <div class="p-6 text-center">
                        <div
                            class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <i class="fab fa-wordpress text-2xl text-indigo-600 group-hover:text-white"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">WordPress</h3>
                        <p class="text-gray-500 mb-4">WordPress installation and optimization</p>
                        <a href="{{ route('articles') }}"
                            class="text-indigo-600 font-medium inline-flex items-center group-hover:text-indigo-700 transition-colors">
                            View Articles <i class="fas fa-chevron-right ml-1 text-sm"></i>
                        </a>
                    </div>
                </div>

                <!-- Category 4 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                    <div class="p-6 text-center">
                        <div
                            class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <i class="fas fa-envelope text-2xl text-indigo-600 group-hover:text-white"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                        <p class="text-gray-500 mb-4">Email setup and configuration guides</p>
                        <a href="{{ route('articles') }}"
                            class="text-indigo-600 font-medium inline-flex items-center group-hover:text-indigo-700 transition-colors">
                            View Articles <i class="fas fa-chevron-right ml-1 text-sm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Popular Guides Section -->
    <section class="py-16" id="popular-guides">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-3">Popular Guides</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Most frequently viewed help articles</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Guide 1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative overflow-hidden h-48">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Hosting Setup"
                            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <span
                                class="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Hosting</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">How to Set Up Your First Website</h3>
                        <p class="text-gray-500 mb-4">Step-by-step guide to getting your website online with our hosting
                        </p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400"><i class="far fa-clock mr-1"></i> 10 min read</span>
                            <a href="#"
                                class="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-700 transition-colors">
                                Read Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Guide 2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative overflow-hidden h-48">
                        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="WordPress Setup"
                            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <span
                                class="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">WordPress</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Installing WordPress in 5 Minutes</h3>
                        <p class="text-gray-500 mb-4">Quick start guide to installing WordPress with our one-click
                            installer</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400"><i class="far fa-clock mr-1"></i> 5 min read</span>
                            <a href="#"
                                class="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-700 transition-colors">
                                Read Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Guide 3 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative overflow-hidden h-48">
                        <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            alt="Domain Transfer"
                            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <span
                                class="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Domains</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Transferring Your Domain to Us</h3>
                        <p class="text-gray-500 mb-4">Complete guide to transferring your domain with minimal downtime
                        </p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400"><i class="far fa-clock mr-1"></i> 15 min read</span>
                            <a href="#"
                                class="text-indigo-600 font-medium inline-flex items-center hover:text-indigo-700 transition-colors">
                                Read Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-10">
                <a href="{{ route('guides') }}"
                    class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                    View All Guides <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Video Tutorials Section -->
    <section class="py-16 bg-gray-50" id="tutorials">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-3">Video Tutorials</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Watch step-by-step video guides for visual learners</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Tutorial 1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative pb-[56.25%]"> <!-- 16:9 Aspect Ratio -->
                        <div class="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <button
                                class="video-play-button w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-colors"
                                data-video-id="dQw4w9WgXcQ">
                                <i class="fas fa-play text-xl"></i>
                            </button>
                        </div>
                        <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="Video thumbnail"
                            class="absolute inset-0 w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Getting Started with cPanel</h3>
                        <p class="text-gray-500 mb-4">Learn how to navigate and use cPanel to manage your hosting</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400"><i class="far fa-clock mr-1"></i> 8:32 min</span>
                            <span class="text-sm text-gray-400"><i class="far fa-eye mr-1"></i> 1,245 views</span>
                        </div>
                    </div>
                </div>

                <!-- Tutorial 2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative pb-[56.25%]"> <!-- 16:9 Aspect Ratio -->
                        <div class="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <button
                                class="video-play-button w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-colors"
                                data-video-id="9bZkp7q19f0">
                                <i class="fas fa-play text-xl"></i>
                            </button>
                        </div>
                        <img src="https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg" alt="Video thumbnail"
                            class="absolute inset-0 w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Setting Up Email Accounts</h3>
                        <p class="text-gray-500 mb-4">How to create and manage email accounts with your domain</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400"><i class="far fa-clock mr-1"></i> 6:15 min</span>
                            <span class="text-sm text-gray-400"><i class="far fa-eye mr-1"></i> 892 views</span>
                        </div>
                    </div>
                </div>

                <!-- Tutorial 3 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="relative pb-[56.25%]"> <!-- 16:9 Aspect Ratio -->
                        <div class="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <button
                                class="video-play-button w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-colors"
                                data-video-id="JGwWNGJdvx8">
                                <i class="fas fa-play text-xl"></i>
                            </button>
                        </div>
                        <img src="https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg" alt="Video thumbnail"
                            class="absolute inset-0 w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">WordPress Security Basics</h3>
                        <p class="text-gray-500 mb-4">Essential security practices for your WordPress site</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400"><i class="far fa-clock mr-1"></i> 12:45 min</span>
                            <span class="text-sm text-gray-400"><i class="far fa-eye mr-1"></i> 2,103 views</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-10">
                <a href="#"
                    class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                    View All Tutorials <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16" id="faqs">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">Quick answers to common questions</p>
            </div>

            <div class="max-w-3xl mx-auto">
                <!-- FAQ Category 1 -->
                <div class="mb-12">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-server text-indigo-600 mr-3"></i> Hosting Questions
                    </h3>

                    <div class="space-y-4">
                        <!-- FAQ Item 1 -->
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <button
                                class="faq-question w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors">
                                <span class="font-medium">How do I upload files to my hosting account?</span>
                                <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                            </button>
                            <div class="faq-answer px-5 pb-5 hidden">
                                <div class="text-gray-600">
                                    <p>You can upload files to your hosting account using one of these methods:</p>
                                    <ul class="list-disc pl-5 mt-2 space-y-1">
                                        <li>Using FTP (File Transfer Protocol) with an FTP client like FileZilla</li>
                                        <li>Through cPanel's File Manager</li>
                                        <li>Via SSH if you have shell access</li>
                                        <li>Using WordPress media uploader for WordPress sites</li>
                                    </ul>
                                    <p class="mt-3">For detailed instructions, please see our <a href="#"
                                            class="text-indigo-600 hover:underline">File Upload Guide</a>.</p>
                                </div>
                            </div>
                        </div>

                        <!-- FAQ Item 2 -->
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <button
                                class="faq-question w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors">
                                <span class="font-medium">What's the difference between shared and cloud hosting?</span>
                                <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                            </button>
                            <div class="faq-answer px-5 pb-5 hidden">
                                <div class="text-gray-600">
                                    <p>Shared hosting means your website shares server resources with other websites on
                                        the same server. Cloud hosting uses multiple servers working together, providing
                                        better scalability and reliability.</p>
                                    <p class="mt-2">Key differences:</p>
                                    <table class="min-w-full mt-2">
                                        <thead class="bg-gray-100">
                                            <tr>
                                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">
                                                    Feature</th>
                                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Shared
                                                </th>
                                                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Cloud
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-gray-700">Resource Allocation</td>
                                                <td class="px-4 py-2 text-sm text-gray-500">Shared with others</td>
                                                <td class="px-4 py-2 text-sm text-gray-500">Dedicated resources</td>
                                            </tr>
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-gray-700">Scalability</td>
                                                <td class="px-4 py-2 text-sm text-gray-500">Limited</td>
                                                <td class="px-4 py-2 text-sm text-gray-500">Easily scalable</td>
                                            </tr>
                                            <tr>
                                                <td class="px-4 py-2 text-sm text-gray-700">Uptime</td>
                                                <td class="px-4 py-2 text-sm text-gray-500">Good (99.9%)</td>
                                                <td class="px-4 py-2 text-sm text-gray-500">Excellent (99.99%)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FAQ Category 2 -->
                <div class="mb-12">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                        <i class="fas fa-globe text-indigo-600 mr-3"></i> Domain Questions
                    </h3>

                    <div class="space-y-4">
                        <!-- FAQ Item 1 -->
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <button
                                class="faq-question w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors">
                                <span class="font-medium">How do I transfer my domain to your service?</span>
                                <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                            </button>
                            <div class="faq-answer px-5 pb-5 hidden">
                                <div class="text-gray-600">
                                    <p>Transferring your domain involves these steps:</p>
                                    <ol class="list-decimal pl-5 mt-2 space-y-1">
                                        <li>Unlock your domain at your current registrar</li>
                                        <li>Request an authorization code (EPP code)</li>
                                        <li>Initiate the transfer through our domain transfer page</li>
                                        <li>Approve the transfer when you receive the confirmation email</li>
                                    </ol>
                                    <p class="mt-3">Note: Domain transfers typically take 5-7 days to complete. Your
                                        domain must be at least 60 days old to be eligible for transfer.</p>
                                </div>
                            </div>
                        </div>

                        <!-- FAQ Item 2 -->
                        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                            <button
                                class="faq-question w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors">
                                <span class="font-medium">What's the difference between domain registration and
                                    hosting?</span>
                                <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                            </button>
                            <div class="faq-answer px-5 pb-5 hidden">
                                <div class="text-gray-600">
                                    <p>A domain name is your website's address on the internet (e.g., yourdomain.com),
                                        while web hosting is the service that stores your website's files and makes them
                                        accessible online.</p>
                                    <p class="mt-2">Think of it like this:</p>
                                    <ul class="list-disc pl-5 mt-2 space-y-1">
                                        <li><strong>Domain</strong> = Your business's street address</li>
                                        <li><strong>Hosting</strong> = The actual building where your business operates
                                        </li>
                                    </ul>
                                    <p class="mt-3">You can register a domain without hosting (it will just point
                                        nowhere), but you need both for a functioning website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Help Section -->
    <section class="py-16 bg-indigo-600 text-white">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p class="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">Our support team is available 24/7 to assist you
                with any questions or issues.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#"
                    class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-100 transition-colors">
                    <i class="fas fa-headset mr-2"></i> Live Chat
                </a>
                <a href="#"
                    class="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-indigo-700 transition-colors">
                    <i class="fas fa-ticket-alt mr-2"></i> Submit Ticket
                </a>
            </div>
        </div>
    </section>

    <!-- Inline JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // FAQ Accordion
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const icon = question.querySelector('i');
                    const answer = question.nextElementSibling;

                    // Toggle icon rotation
                    icon.classList.toggle('rotate-180');

                    // Toggle answer visibility
                    answer.classList.toggle('hidden');

                    // Close other open FAQs
                    faqQuestions.forEach(q => {
                        if (q !== question) {
                            q.querySelector('i').classList.remove('rotate-180');
                            q.nextElementSibling.classList.add('hidden');
                        }
                    });
                });
            });

            // Video Play Button
            const videoButtons = document.querySelectorAll('.video-play-button');
            videoButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const videoId = this.getAttribute('data-video-id');
                    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

                    // Create modal
                    const modal = document.createElement('div');
                    modal.style.position = 'fixed';
                    modal.style.top = '0';
                    modal.style.left = '0';
                    modal.style.width = '100%';
                    modal.style.height = '100%';
                    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                    modal.style.zIndex = '1000';
                    modal.style.display = 'flex';
                    modal.style.justifyContent = 'center';
                    modal.style.alignItems = 'center';

                    // Create iframe
                    const iframe = document.createElement('iframe');
                    iframe.width = '80%';
                    iframe.height = '80%';
                    iframe.src = videoUrl;
                    iframe.frameBorder = '0';
                    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                    iframe.allowFullscreen = true;

                    // Close button
                    const closeButton = document.createElement('button');
                    closeButton.innerHTML = '<i class="fas fa-times"></i>';
                    closeButton.style.position = 'absolute';
                    closeButton.style.top = '20px';
                    closeButton.style.right = '20px';
                    closeButton.style.color = 'white';
                    closeButton.style.fontSize = '24px';
                    closeButton.style.background = 'none';
                    closeButton.style.border = 'none';
                    closeButton.style.cursor = 'pointer';

                    closeButton.addEventListener('click', () => {
                        document.body.removeChild(modal);
                    });

                    // Add elements to modal
                    modal.appendChild(iframe);
                    modal.appendChild(closeButton);

                    // Add modal to body
                    document.body.appendChild(modal);

                    // Close modal when clicking outside
                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) {
                            document.body.removeChild(modal);
                        }
                    });
                });
            });

            // Search functionality
            const searchForm = document.querySelector('form');
            if (searchForm) {
                searchForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    const searchTerm = this.querySelector('input').value.trim();
                    if (searchTerm) {
                        // In a real implementation, this would search your knowledge base
                        alert(`Searching for: ${searchTerm}`);
                        // window.location.href = `/knowledge-base/search?q=${encodeURIComponent(searchTerm)}`;
                    }
                });
            }
        });
    </script>
</x-user-layout>