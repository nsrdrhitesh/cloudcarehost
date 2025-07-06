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
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Step-by-Step Guides</h1>
                <p class="text-xl text-indigo-100 mb-8">Comprehensive tutorials to help you master our services</p>
                <div class="max-w-2xl mx-auto">
                    <form class="relative">
                        <input type="text" placeholder="Search guides..."
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

    <!-- Main Content -->
    <section class="py-16">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar -->
                <div class="lg:w-1/4">
                    <div class="bg-white rounded-xl shadow-md p-6 sticky top-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">Guide Categories</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium">
                                    <span>All Guides</span>
                                    <span class="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">42</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Getting Started</span>
                                    <span class="text-gray-500 text-xs">12</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Advanced Setup</span>
                                    <span class="text-gray-500 text-xs">8</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Troubleshooting</span>
                                    <span class="text-gray-500 text-xs">15</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Best Practices</span>
                                    <span class="text-gray-500 text-xs">7</span>
                                </a>
                            </li>
                        </ul>

                        <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Difficulty Level</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#"
                                    class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                    <span>Beginner</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                                    <span>Intermediate</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span class="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                                    <span>Advanced</span>
                                </a>
                            </li>
                        </ul>

                        <div class="mt-8">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4">Popular Tags</h3>
                            <div class="flex flex-wrap gap-2">
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">Installation</a>
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">Configuration</a>
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">Security</a>
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">Optimization</a>
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">Migration</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Guide List -->
                <div class="lg:w-3/4">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Featured Guides</h2>
                        <div class="flex items-center">
                            <span class="text-sm text-gray-500 mr-2">Sort by:</span>
                            <select
                                class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                <option>Most Popular</option>
                                <option>Newest First</option>
                                <option>Difficulty Level</option>
                            </select>
                        </div>
                    </div>

                    <!-- Guide Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Guide 1 -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="relative h-48">
                                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Guide thumbnail" class="w-full h-full object-cover">
                                <div
                                    class="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                                    Beginner</div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 class="text-lg font-semibold text-white">Website Setup Guide</h3>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center mb-3">
                                    <span
                                        class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Hosting</span>
                                    <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 15 min</span>
                                </div>
                                <p class="text-gray-600 mb-4">Complete step-by-step guide to setting up your first
                                    website from scratch, including domain configuration and content publishing.</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm text-gray-600">4.8 (124)</span>
                                    </div>
                                    <a href="#"
                                        class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                        View Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Guide 2 -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="relative h-48">
                                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Guide thumbnail" class="w-full h-full object-cover">
                                <div
                                    class="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                                    Intermediate</div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 class="text-lg font-semibold text-white">WordPress Optimization</h3>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center mb-3">
                                    <span
                                        class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">WordPress</span>
                                    <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 25 min</span>
                                </div>
                                <p class="text-gray-600 mb-4">Advanced techniques to optimize your WordPress site for
                                    speed, security, and search engine visibility.</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm text-gray-600">4.9 (87)</span>
                                    </div>
                                    <a href="#"
                                        class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                        View Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Guide 3 -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="relative h-48">
                                <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Guide thumbnail" class="w-full h-full object-cover">
                                <div
                                    class="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                                    Beginner</div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 class="text-lg font-semibold text-white">Domain Transfer Guide</h3>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center mb-3">
                                    <span
                                        class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Domains</span>
                                    <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 20 min</span>
                                </div>
                                <p class="text-gray-600 mb-4">Step-by-step instructions for transferring your domain to
                                    our service with minimal downtime.</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm text-gray-600">4.7 (56)</span>
                                    </div>
                                    <a href="#"
                                        class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                        View Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Guide 4 -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="relative h-48">
                                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Guide thumbnail" class="w-full h-full object-cover">
                                <div
                                    class="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                                    Advanced</div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 class="text-lg font-semibold text-white">Server Security Hardening</h3>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center mb-3">
                                    <span
                                        class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Security</span>
                                    <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 45 min</span>
                                </div>
                                <p class="text-gray-600 mb-4">Comprehensive guide to securing your server against common
                                    threats and vulnerabilities.</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm text-gray-600">4.9 (42)</span>
                                    </div>
                                    <a href="#"
                                        class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                        View Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Guide 5 -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="relative h-48">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Guide thumbnail" class="w-full h-full object-cover">
                                <div
                                    class="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                                    Intermediate</div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 class="text-lg font-semibold text-white">Email Configuration Guide</h3>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center mb-3">
                                    <span
                                        class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Email</span>
                                    <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 18 min</span>
                                </div>
                                <p class="text-gray-600 mb-4">How to set up professional email accounts and configure
                                    them with various email clients.</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm text-gray-600">4.6 (73)</span>
                                    </div>
                                    <a href="#"
                                        class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                        View Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Guide 6 -->
                        <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="relative h-48">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                    alt="Guide thumbnail" class="w-full h-full object-cover">
                                <div
                                    class="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                                    Beginner</div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 class="text-lg font-semibold text-white">Backup & Restore Guide</h3>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center mb-3">
                                    <span
                                        class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Hosting</span>
                                    <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 12 min</span>
                                </div>
                                <p class="text-gray-600 mb-4">Learn how to create backups of your website and restore
                                    them when needed.</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm text-gray-600">4.8 (91)</span>
                                    </div>
                                    <a href="#"
                                        class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                        View Guide <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="mt-10 flex justify-center">
                        <nav class="flex items-center space-x-2">
                            <a href="#" class="px-3 py-1 rounded-md bg-indigo-600 text-white font-medium">
                                1
                            </a>
                            <a href="#" class="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
                                2
                            </a>
                            <a href="#" class="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
                                3
                            </a>
                            <a href="#" class="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
                                <i class="fas fa-ellipsis-h"></i>
                            </a>
                            <a href="#" class="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
                                5
                            </a>
                            <a href="#" class="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors">
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-indigo-600 text-white">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-6">Need Personalized Help?</h2>
            <p class="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">Our experts are ready to assist you with any
                questions or issues you might have.</p>
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
            // Search functionality
            const searchForm = document.querySelector('form');
            if (searchForm) {
                searchForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    const searchTerm = this.querySelector('input').value.trim();
                    if (searchTerm) {
                        alert(`Searching for guides: ${searchTerm}`);
                        // window.location.href = `/guides/search?q=${encodeURIComponent(searchTerm)}`;
                    }
                });
            }

            // Difficulty level filter
            const difficultyFilters = document.querySelectorAll('.sidebar ul li a');
            difficultyFilters.forEach(filter => {
                filter.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Remove active class from all filters
                    difficultyFilters.forEach(f => {
                        f.classList.remove('bg-indigo-50', 'text-indigo-700');
                        f.classList.add('hover:bg-gray-100');
                    });

                    // Add active class to clicked filter
                    this.classList.add('bg-indigo-50', 'text-indigo-700');
                    this.classList.remove('hover:bg-gray-100');

                    // In a real implementation, this would filter the guides
                    const difficulty = this.querySelector('span:last-child').textContent;
                    alert(`Filtering by difficulty: ${difficulty}`);
                });
            });

            // Rating stars interaction
            const ratingStars = document.querySelectorAll('.fa-star');
            ratingStars.forEach(star => {
                star.addEventListener('click', function () {
                    const rating = this.getAttribute('data-rating');
                    alert(`You rated this guide ${rating} stars!`);
                    // In a real implementation, this would submit the rating to your backend
                });
            });
        });
    </script>
</x-user-layout>