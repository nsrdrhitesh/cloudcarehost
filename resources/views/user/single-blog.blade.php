<x-user-layout>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-16 md:py-24 overflow-hidden">
        <div class="absolute max-w-screen-xl mx-auto mx-auto inset-0 opacity-10">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" stroke-width="2"
                    stroke-dasharray="5,5" />
            </svg>
        </div>
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <div class="flex justify-center mb-4">
                    <span
                        class="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">Hosting</span>
                </div>
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">How to Set Up Your First Website
                </h1>
                <p class="text-xl text-indigo-100 mb-6">A complete step-by-step guide to getting your website online</p>
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4 text-indigo-100">
                    <div class="flex items-center">
                        <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Author"
                            class="w-10 h-10 rounded-full mr-3 border-2 border-white">
                        <span>Sarah Johnson</span>
                    </div>
                    <div class="flex items-center">
                        <i class="far fa-clock mr-2"></i>
                        <span>Last updated: June 15, 2023</span>
                    </div>
                    <div class="flex items-center">
                        <i class="far fa-clock mr-2"></i>
                        <span>10 min read</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="flex flex-col lg:flex-row gap-12">
                <!-- Article Content -->
                <article class="lg:w-2/3">
                    <!-- Featured Image -->
                    <div class="mb-10 rounded-xl overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                            alt="Setting up a website" class="w-full h-auto object-cover">
                    </div>

                    <!-- Social Sharing -->
                    <div class="flex justify-between items-center mb-10 p-4 bg-gray-50 rounded-lg">
                        <div>
                            <span class="text-gray-600 mr-3">Share this article:</span>
                        </div>
                        <div class="flex space-x-3">
                            <a href="#"
                                class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#"
                                class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                                <i class="fab fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Article Body -->
                    <div class="prose max-w-none">
                        <p class="lead">Setting up your first website can seem daunting, but with this comprehensive
                            guide, you'll have your site up and running in no time. Whether you're creating a personal
                            blog, portfolio, or business website, these steps will walk you through the entire process.
                        </p>

                        <h2>Step 1: Choose a Domain Name</h2>
                        <p>Your domain name is your website's address on the internet (e.g., yourname.com). Here's how
                            to choose the perfect one:</p>
                        <ul>
                            <li><strong>Keep it short and memorable</strong> - Easy to type and remember</li>
                            <li><strong>Use keywords when possible</strong> - Helps with search engine visibility</li>
                            <li><strong>Avoid numbers and hyphens</strong> - Can be confusing when spoken aloud</li>
                            <li><strong>Choose the right extension</strong> - .com is most common, but .net or .org can
                                work too</li>
                        </ul>

                        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-6 rounded-r-lg">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-lightbulb text-indigo-500 text-xl"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-indigo-700">
                                        <strong>Pro Tip:</strong> Use our <a href="#"
                                            class="font-medium underline">domain search tool</a> to check availability
                                        and get suggestions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2>Step 2: Select a Web Hosting Plan</h2>
                        <p>Web hosting is where your website files are stored. We offer several plans to fit your needs:
                        </p>

                        <div class="overflow-x-auto my-6">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Feature</th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Starter</th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Business</th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Websites</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unlimited</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Storage</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10GB SSD</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100GB SSD</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unlimited SSD</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Bandwidth</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unmetered</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unmetered</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unmetered</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Free
                                            Domain</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 Year</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 Year</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Step 3: Install a Website Builder or CMS</h2>
                        <p>You have several options for building your website:</p>

                        <!-- Tabs Navigation -->
                        <div class="border-b border-gray-200 mb-6">
                            <nav class="-mb-px flex space-x-8" id="builder-tabs">
                                <button type="button"
                                    class="builder-tab whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-indigo-500 text-indigo-600"
                                    data-tab="wordpress">WordPress</button>
                                <button type="button"
                                    class="builder-tab whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    data-tab="website-builder">Website Builder</button>
                                <button type="button"
                                    class="builder-tab whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    data-tab="html-css">HTML/CSS</button>
                            </nav>
                        </div>

                        <!-- Tab Panels -->
                        <div id="wordpress-tab" class="builder-content">
                            <h3>WordPress Installation</h3>
                            <p>WordPress powers over 40% of all websites and is our recommended solution for most users:
                            </p>
                            <ol>
                                <li>Log in to your cPanel account</li>
                                <li>Navigate to "Softaculous Apps Installer"</li>
                                <li>Click on the WordPress icon</li>
                                <li>Fill in the installation details (site name, admin credentials, etc.)</li>
                                <li>Click "Install" and wait for the process to complete</li>
                            </ol>
                            <div class="mt-4">
                                <a href="#"
                                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                    <i class="fas fa-play-circle mr-2"></i> Watch Installation Video
                                </a>
                            </div>
                        </div>

                        <div id="website-builder-tab" class="builder-content hidden">
                            <h3>Using Our Website Builder</h3>
                            <p>Our drag-and-drop website builder is perfect for beginners:</p>
                            <ol>
                                <li>From your hosting dashboard, select "Website Builder"</li>
                                <li>Choose a template that fits your needs</li>
                                <li>Use the intuitive editor to customize your design</li>
                                <li>Add your content (text, images, videos, etc.)</li>
                                <li>Publish your site with one click</li>
                            </ol>
                        </div>

                        <div id="html-css-tab" class="builder-content hidden">
                            <h3>Manual HTML/CSS Setup</h3>
                            <p>For developers who want full control:</p>
                            <ol>
                                <li>Create your website files locally</li>
                                <li>Connect to your hosting via FTP (we recommend FileZilla)</li>
                                <li>Upload your files to the public_html directory</li>
                                <li>Test your site by visiting your domain</li>
                            </ol>
                        </div>

                        <h2>Step 4: Design Your Website</h2>
                        <p>Now comes the fun part - making your website look great!</p>

                        <!-- Before/After Slider -->
                        <div class="my-8">
                            <h4 class="text-lg font-medium mb-4">Example Design Transformation</h4>
                            <div class="relative w-full h-64 md:h-96 bg-gray-200 overflow-hidden rounded-lg"
                                id="before-after-slider">
                                <div class="absolute top-0 left-0 w-full h-full">
                                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                                        alt="Before design" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                                        alt="After design" class="w-full h-full object-cover">
                                </div>
                                <div class="absolute top-0 left-1/2 h-full w-1 cursor-col-resize" id="slider-handle">
                                    <div
                                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                                        <i class="fas fa-arrows-alt-h text-gray-600"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between mt-2 text-sm text-gray-600">
                                <span>Before</span>
                                <span>After</span>
                            </div>
                        </div>

                        <h2>Step 5: Add Content</h2>
                        <p>Quality content is key to a successful website. Consider including:</p>
                        <ul>
                            <li><strong>Homepage:</strong> Clear value proposition and call-to-action</li>
                            <li><strong>About page:</strong> Tell your story and build trust</li>
                            <li><strong>Products/Services:</strong> Showcase what you offer</li>
                            <li><strong>Blog:</strong> Share valuable information and improve SEO</li>
                            <li><strong>Contact page:</strong> Make it easy for visitors to reach you</li>
                        </ul>

                        <h2>Step 6: Publish and Promote</h2>
                        <p>Once you're happy with your website:</p>
                        <ol>
                            <li>Test all links and forms</li>
                            <li>Check mobile responsiveness</li>
                            <li>Submit your site to search engines</li>
                            <li>Share on social media</li>
                            <li>Consider running ads to drive traffic</li>
                        </ol>

                        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6 rounded-r-lg">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <i class="fas fa-check-circle text-green-500 text-xl"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm text-green-700">
                                        <strong>Congratulations!</strong> You've just set up your first website.
                                        Remember, you can always come back and make improvements as you learn more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Article Footer -->
                    <div class="mt-12 pt-8 border-t border-gray-200">
                        <div class="flex items-center justify-between mb-6">
                            <h3 class="text-lg font-medium">Tags:</h3>
                            <div class="flex flex-wrap gap-2">
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">website
                                    setup</a>
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">beginners
                                    guide</a>
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">hosting</a>
                                <a href="#"
                                    class="inline-block px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors">wordpress</a>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-gray-600 mr-2">Was this article helpful?</span>
                                <button type="button"
                                    class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors mr-1">
                                    <i class="fas fa-thumbs-up"></i>
                                </button>
                                <button type="button"
                                    class="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors">
                                    <i class="fas fa-thumbs-down"></i>
                                </button>
                            </div>
                            <div class="flex space-x-4">
                                <a href="#"
                                    class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                    <i class="fas fa-print mr-2"></i> Print
                                </a>
                                <a href="#"
                                    class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors">
                                    <i class="fas fa-download mr-2"></i> PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Sidebar -->
                <aside class="lg:w-1/3">
                    <div class="sticky top-6 space-y-6">
                        <!-- Table of Contents -->
                        <div class="bg-white rounded-xl shadow-md p-6">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4">Table of Contents</h3>
                            <nav class="space-y-2">
                                <a href="#step1"
                                    class="block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">1. Choose a
                                    Domain Name</a>
                                <a href="#step2"
                                    class="block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">2. Select a
                                    Web Hosting Plan</a>
                                <a href="#step3"
                                    class="block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">3. Install a
                                    Website Builder or CMS</a>
                                <a href="#step4"
                                    class="block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">4. Design
                                    Your Website</a>
                                <a href="#step5"
                                    class="block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">5. Add
                                    Content</a>
                                <a href="#step6"
                                    class="block px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">6. Publish
                                    and Promote</a>
                            </nav>
                        </div>

                        <!-- Related Articles -->
                        <div class="bg-white rounded-xl shadow-md p-6">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4">Related Articles</h3>
                            <div class="space-y-4">
                                <a href="#" class="group block">
                                    <h4 class="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                                        How to Choose the Right Hosting Plan</h4>
                                    <p class="text-sm text-gray-500">Understand the differences between hosting types
                                    </p>
                                </a>
                                <a href="#" class="group block">
                                    <h4 class="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                                        WordPress vs. Website Builders</h4>
                                    <p class="text-sm text-gray-500">Which option is best for your needs?</p>
                                </a>
                                <a href="#" class="group block">
                                    <h4 class="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">
                                        Essential Plugins for New WordPress Sites</h4>
                                    <p class="text-sm text-gray-500">Must-have tools to enhance your site</p>
                                </a>
                            </div>
                        </div>

                        <!-- Newsletter -->
                        <div class="bg-indigo-50 rounded-xl p-6">
                            <h3 class="text-xl font-semibold text-indigo-800 mb-2">Get More Tips</h3>
                            <p class="text-sm text-indigo-600 mb-4">Subscribe to our newsletter for weekly website tips
                                and resources</p>
                            <form class="space-y-3">
                                <input type="email" placeholder="Your email address"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                                <button type="submit"
                                    class="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </section>

    <!-- Comments Section -->
    <section class="py-16 bg-gray-50">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-2xl font-bold text-gray-800 mb-8">Comments (3)</h2>

                <!-- Comment Form -->
                <div class="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h3 class="text-lg font-medium text-gray-800 mb-4">Leave a Comment</h3>
                    <form class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email"
                                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                            </div>
                        </div>
                        <div>
                            <label for="comment" class="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                            <textarea id="comment" rows="4"
                                class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="notify"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="notify" class="ml-2 block text-sm text-gray-700">Notify me of follow-up comments
                                by email</label>
                        </div>
                        <button type="submit"
                            class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
                            Post Comment
                        </button>
                    </form>
                </div>

                <!-- Comments List -->
                <div class="space-y-6">
                    <!-- Comment 1 -->
                    <div class="bg-white rounded-xl shadow-md p-6">
                        <div class="flex items-start mb-4">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User"
                                class="w-10 h-10 rounded-full mr-4">
                            <div>
                                <h4 class="font-medium text-gray-800">Michael Chen</h4>
                                <p class="text-sm text-gray-500">June 18, 2023</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">This guide was incredibly helpful! I was able to set up my
                            photography portfolio site in just a few hours following these steps. The WordPress
                            installation was especially easy with your one-click installer.</p>
                        <div class="flex items-center">
                            <button type="button" class="text-gray-500 hover:text-indigo-600 transition-colors mr-4">
                                <i class="fas fa-reply mr-1"></i> Reply
                            </button>
                            <button type="button" class="text-gray-500 hover:text-indigo-600 transition-colors">
                                <i class="far fa-thumbs-up mr-1"></i> Helpful (5)
                            </button>
                        </div>
                    </div>

                    <!-- Comment 2 -->
                    <div class="bg-white rounded-xl shadow-md p-6 ml-8 md:ml-12">
                        <div class="flex items-start mb-4">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User"
                                class="w-10 h-10 rounded-full mr-4">
                            <div>
                                <h4 class="font-medium text-gray-800">Emily Rodriguez</h4>
                                <p class="text-sm text-gray-500">June 20, 2023</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">I'm having trouble with the domain setup. When I try to connect my
                            domain to the hosting, I get an error message. Has anyone else experienced this?</p>
                        <div class="flex items-center">
                            <button type="button" class="text-gray-500 hover:text-indigo-600 transition-colors mr-4">
                                <i class="fas fa-reply mr-1"></i> Reply
                            </button>
                            <button type="button" class="text-gray-500 hover:text-indigo-600 transition-colors">
                                <i class="far fa-thumbs-up mr-1"></i> Helpful (2)
                            </button>
                        </div>
                    </div>

                    <!-- Comment 3 -->
                    <div class="bg-white rounded-xl shadow-md p-6">
                        <div class="flex items-start mb-4">
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User"
                                class="w-10 h-10 rounded-full mr-4">
                            <div>
                                <h4 class="font-medium text-gray-800">David Wilson</h4>
                                <p class="text-sm text-gray-500">June 22, 2023</p>
                            </div>
                        </div>
                        <p class="text-gray-600 mb-4">Great tutorial! The before/after slider showing the design
                            transformation was particularly inspiring. I'd love to see more content about mobile
                            optimization in a future article.</p>
                        <div class="flex items-center">
                            <button type="button" class="text-gray-500 hover:text-indigo-600 transition-colors mr-4">
                                <i class="fas fa-reply mr-1"></i> Reply
                            </button>
                            <button type="button" class="text-gray-500 hover:text-indigo-600 transition-colors">
                                <i class="far fa-thumbs-up mr-1"></i> Helpful (8)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Inline JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Tab functionality
            const tabs = document.querySelectorAll('.builder-tab');
            const tabContents = document.querySelectorAll('.builder-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', function () {
                    // Remove active class from all tabs
                    tabs.forEach(t => {
                        t.classList.remove('border-indigo-500', 'text-indigo-600');
                        t.classList.add('border-transparent', 'text-gray-500');
                    });

                    // Add active class to clicked tab
                    this.classList.add('border-indigo-500', 'text-indigo-600');
                    this.classList.remove('border-transparent', 'text-gray-500');

                    // Hide all tab contents
                    tabContents.forEach(content => {
                        content.classList.add('hidden');
                    });

                    // Show selected tab content
                    const tabId = this.getAttribute('data-tab') + '-tab';
                    document.getElementById(tabId).classList.remove('hidden');
                });
            });

            // Before/After Slider
            const slider = document.getElementById('before-after-slider');
            const handle = document.getElementById('slider-handle');
            let isDragging = false;

            if (slider && handle) {
                handle.addEventListener('mousedown', function (e) {
                    isDragging = true;
                    document.body.style.cursor = 'col-resize';
                    e.preventDefault();
                });

                document.addEventListener('mousemove', function (e) {
                    if (!isDragging) return;

                    const sliderRect = slider.getBoundingClientRect();
                    let position = (e.clientX - sliderRect.left) / sliderRect.width;

                    // Keep position within bounds
                    position = Math.min(Math.max(position, 0.05), 0.95);

                    handle.style.left = `${position * 100}%`;
                    slider.querySelector('div.absolute > div').style.width = `${position * 100}%`;
                });

                document.addEventListener('mouseup', function () {
                    isDragging = false;
                    document.body.style.cursor = '';
                });

                // Touch support
                handle.addEventListener('touchstart', function (e) {
                    isDragging = true;
                    e.preventDefault();
                });

                document.addEventListener('touchmove', function (e) {
                    if (!isDragging) return;

                    const sliderRect = slider.getBoundingClientRect();
                    let position = (e.touches[0].clientX - sliderRect.left) / sliderRect.width;

                    // Keep position within bounds
                    position = Math.min(Math.max(position, 0.05), 0.95);

                    handle.style.left = `${position * 100}%`;
                    slider.querySelector('div.absolute > div').style.width = `${position * 100}%`;
                });

                document.addEventListener('touchend', function () {
                    isDragging = false;
                });
            }

            // Like/Dislike buttons
            const likeBtn = document.querySelector('.fa-thumbs-up').closest('button');
            const dislikeBtn = document.querySelector('.fa-thumbs-down').closest('button');

            if (likeBtn && dislikeBtn) {
                likeBtn.addEventListener('click', function () {
                    alert('Thanks for your feedback! This article was marked as helpful.');
                });

                dislikeBtn.addEventListener('click', function () {
                    alert('We\'re sorry this article wasn\'t helpful. What could we improve?');
                });
            }

            // Smooth scrolling for table of contents
            const tocLinks = document.querySelectorAll('nav a[href^="#"]');
            tocLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</x-user-layout>