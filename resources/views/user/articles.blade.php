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
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">All Articles</h1>
                <p class="text-xl text-indigo-100 mb-8">Browse our complete collection of help articles</p>
                <div class="max-w-2xl mx-auto">
                    <form class="relative">
                        <input type="text" placeholder="Search articles..."
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
    <section class="py-16 bg-gray-50">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Sidebar -->
                <div class="lg:w-1/4">
                    <div class="bg-white rounded-xl shadow-md p-6 sticky top-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium">
                                    <span>All Articles</span>
                                    <span class="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">128</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Hosting</span>
                                    <span class="text-gray-500 text-xs">42</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Domains</span>
                                    <span class="text-gray-500 text-xs">28</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>WordPress</span>
                                    <span class="text-gray-500 text-xs">35</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Email</span>
                                    <span class="text-gray-500 text-xs">15</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <span>Security</span>
                                    <span class="text-gray-500 text-xs">18</span>
                                </a>
                            </li>
                        </ul>

                        <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Popular Tags</h3>
                        <div class="flex flex-wrap gap-2">
                            <a href="#"
                                class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">cPanel</a>
                            <a href="#"
                                class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">DNS</a>
                            <a href="#"
                                class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">SSL</a>
                            <a href="#"
                                class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">Migration</a>
                            <a href="#"
                                class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">Backups</a>
                            <a href="#"
                                class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">PHP</a>
                        </div>

                        <div class="mt-8 p-4 bg-indigo-50 rounded-lg">
                            <h4 class="font-medium text-indigo-800 mb-2">Need Help?</h4>
                            <p class="text-sm text-gray-600 mb-3">Can't find what you're looking for?</p>
                            <a href="#"
                                class="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Article List -->
                <div class="lg:w-3/4">
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Latest Articles</h2>
                        <div class="flex items-center">
                            <span class="text-sm text-gray-500 mr-2">Sort by:</span>
                            <select
                                class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                <option>Newest First</option>
                                <option>Oldest First</option>
                                <option>Most Popular</option>
                                <option>A-Z</option>
                            </select>
                        </div>
                    </div>

                    <!-- Article Cards -->
                    <div class="space-y-6">
                        <!-- Article 1 -->
                        <article
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="md:flex">
                                <div class="md:w-1/3">
                                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Article thumbnail" class="w-full h-full object-cover">
                                </div>
                                <div class="p-6 md:w-2/3">
                                    <div class="flex items-center mb-2">
                                        <span
                                            class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Hosting</span>
                                        <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 10 min
                                            read</span>
                                    </div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">How to Set Up Your First
                                        Website</h3>
                                    <p class="text-gray-600 mb-4">Step-by-step guide to getting your website online with
                                        our hosting, from domain setup to publishing your content.</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Author"
                                                class="w-8 h-8 rounded-full mr-2">
                                            <span class="text-sm text-gray-600">Sarah Johnson</span>
                                        </div>
                                        <a href="{{ route('single-articles') }}"
                                            class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                            Read Article <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <!-- Article 2 -->
                        <article
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="md:flex">
                                <div class="md:w-1/3">
                                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Article thumbnail" class="w-full h-full object-cover">
                                </div>
                                <div class="p-6 md:w-2/3">
                                    <div class="flex items-center mb-2">
                                        <span
                                            class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">WordPress</span>
                                        <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 5 min
                                            read</span>
                                    </div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Installing WordPress in 5
                                        Minutes</h3>
                                    <p class="text-gray-600 mb-4">Quick start guide to installing WordPress with our
                                        one-click installer and basic configuration settings.</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author"
                                                class="w-8 h-8 rounded-full mr-2">
                                            <span class="text-sm text-gray-600">Michael Chen</span>
                                        </div>
                                        <a href="{{ route('single-articles') }}"
                                            class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                            Read Article <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <!-- Article 3 -->
                        <article
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="md:flex">
                                <div class="md:w-1/3">
                                    <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Article thumbnail" class="w-full h-full object-cover">
                                </div>
                                <div class="p-6 md:w-2/3">
                                    <div class="flex items-center mb-2">
                                        <span
                                            class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Domains</span>
                                        <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 15 min
                                            read</span>
                                    </div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Transferring Your Domain to Us
                                    </h3>
                                    <p class="text-gray-600 mb-4">Complete guide to transferring your domain with
                                        minimal downtime and ensuring all services remain connected.</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Author"
                                                class="w-8 h-8 rounded-full mr-2">
                                            <span class="text-sm text-gray-600">Emily Rodriguez</span>
                                        </div>
                                        <a href="{{ route('single-articles') }}"
                                            class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                            Read Article <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <!-- Article 4 -->
                        <article
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="md:flex">
                                <div class="md:w-1/3">
                                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Article thumbnail" class="w-full h-full object-cover">
                                </div>
                                <div class="p-6 md:w-2/3">
                                    <div class="flex items-center mb-2">
                                        <span
                                            class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Email</span>
                                        <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 8 min
                                            read</span>
                                    </div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Setting Up Professional Email
                                        Accounts</h3>
                                    <p class="text-gray-600 mb-4">Learn how to create and manage professional email
                                        accounts using your domain name with our webmail interface.</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Author"
                                                class="w-8 h-8 rounded-full mr-2">
                                            <span class="text-sm text-gray-600">David Wilson</span>
                                        </div>
                                        <a href="{{ route('single-articles') }}"
                                            class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                            Read Article <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <!-- Article 5 -->
                        <article
                            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="md:flex">
                                <div class="md:w-1/3">
                                    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Article thumbnail" class="w-full h-full object-cover">
                                </div>
                                <div class="p-6 md:w-2/3">
                                    <div class="flex items-center mb-2">
                                        <span
                                            class="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded mr-2">Security</span>
                                        <span class="text-gray-500 text-sm"><i class="far fa-clock mr-1"></i> 12 min
                                            read</span>
                                    </div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Essential Security Practices
                                        for Your Website</h3>
                                    <p class="text-gray-600 mb-4">Protect your website from common threats with these
                                        essential security measures and best practices.</p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Author"
                                                class="w-8 h-8 rounded-full mr-2">
                                            <span class="text-sm text-gray-600">Lisa Thompson</span>
                                        </div>
                                        <a href="{{ route('single-articles') }}"
                                            class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                            Read Article <i class="fas fa-chevron-right ml-1 text-sm"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
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
                                8
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

    <!-- Newsletter Section -->
    <section class="py-16 bg-indigo-50">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
                <p class="text-gray-600 mb-8">Subscribe to our newsletter to receive the latest articles, guides, and
                    updates directly to your inbox.</p>
                <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="email" placeholder="Your email address"
                        class="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                    <button type="submit"
                        class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                        Subscribe
                    </button>
                </form>
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
                        alert(`Searching for articles: ${searchTerm}`);
                        // window.location.href = `/articles/search?q=${encodeURIComponent(searchTerm)}`;
                    }
                });
            }

            // Category filter animation
            const categoryLinks = document.querySelectorAll('.sidebar ul li a');
            categoryLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Remove active class from all links
                    categoryLinks.forEach(l => {
                        l.classList.remove('bg-indigo-50', 'text-indigo-700');
                        l.classList.add('hover:bg-gray-100');
                    });

                    // Add active class to clicked link
                    this.classList.add('bg-indigo-50', 'text-indigo-700');
                    this.classList.remove('hover:bg-gray-100');

                    // In a real implementation, this would filter the articles
                    alert(`Filtering by category: ${this.textContent.trim()}`);
                });
            });

            // Newsletter form submission
            const newsletterForm = document.querySelector('.bg-indigo-50 form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function (e) {
                    e.preventDefault();
                    const email = this.querySelector('input').value.trim();
                    if (email) {
                        alert(`Thank you for subscribing with: ${email}`);
                        this.querySelector('input').value = '';
                    }
                });
            }
        });
    </script>
</x-user-layout>