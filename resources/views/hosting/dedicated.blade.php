<x-hosting-layout title="Shared Web Hosting"
    description="Powerful, reliable hosting with enterprise-grade performance at affordable prices">
    <!-- Hero Section -->
    <!-- <div class="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 rounded-xl mb-12">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-4">Shared Web Hosting</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">Powerful, reliable hosting with enterprise-grade
                performance at affordable prices</p>
        </div>
    </div> -->

    <!-- Pricing Tabs -->
    <div class="mb-16">
        <div class="flex flex-wrap justify-center gap-2 mb-8">
            <button class="px-6 py-3 rounded-lg font-medium transition-all pricing-tab active"
                data-plan="starter">Starter</button>
            <button class="px-6 py-3 rounded-lg font-medium transition-all pricing-tab" data-plan="pro">Pro</button>
            <button class="px-6 py-3 rounded-lg font-medium transition-all pricing-tab"
                data-plan="business">Business</button>
            <button class="px-6 py-3 rounded-lg font-medium transition-all pricing-tab"
                data-plan="business-cloud">Business Cloud</button>
        </div>

        <!-- Pricing Tables -->
        <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <!-- Starter Plan (Default Visible) -->
            <div class="pricing-plan" id="starter-plan">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-0">
                    <!-- Header Row -->
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">Duration</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">INR Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">USD Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">EURO Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">AED Total Price</div>

                    <!-- Monthly -->
                    <div class="p-4 border-b border-gray-200">Monthly</div>
                    <div class="p-4 border-b border-gray-200">₹399</div>
                    <div class="p-4 border-b border-gray-200">$4.99</div>
                    <div class="p-4 border-b border-gray-200">€4.99</div>
                    <div class="p-4 border-b border-gray-200">AED 17.99</div>

                    <!-- 1 Year -->
                    <div class="p-4 border-b border-gray-200">1 Year <span class="text-green-600 text-sm">(60%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹1,908 <span
                            class="text-gray-500 text-sm">(₹159×12)</span></div>
                    <div class="p-4 border-b border-gray-200">$23.88 <span
                            class="text-gray-500 text-sm">($1.99×12)</span></div>
                    <div class="p-4 border-b border-gray-200">€23.88 <span
                            class="text-gray-500 text-sm">(€1.99×12)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 83.88 <span class="text-gray-500 text-sm">(AED
                            6.99×12)</span></div>

                    <!-- 2 Years -->
                    <div class="p-4 border-b border-gray-200">2 Years <span class="text-green-600 text-sm">(70%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹2,856 <span
                            class="text-gray-500 text-sm">(₹119×24)</span></div>
                    <div class="p-4 border-b border-gray-200">$35.76 <span
                            class="text-gray-500 text-sm">($1.49×24)</span></div>
                    <div class="p-4 border-b border-gray-200">€35.76 <span
                            class="text-gray-500 text-sm">(€1.49×24)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 131.76 <span class="text-gray-500 text-sm">(AED
                            5.49×24)</span></div>

                    <!-- 3 Years -->
                    <div class="p-4">3 Years <span class="text-green-600 text-sm">(75% OFF)</span></div>
                    <div class="p-4">₹3,564 <span class="text-gray-500 text-sm">(₹99×36)</span></div>
                    <div class="p-4">$45.00 <span class="text-gray-500 text-sm">($1.25×36)</span></div>
                    <div class="p-4">€45.00 <span class="text-gray-500 text-sm">(€1.25×36)</span></div>
                    <div class="p-4">AED 161.64 <span class="text-gray-500 text-sm">(AED 4.49×36)</span></div>
                </div>
            </div>

            <!-- Pro Plan (Hidden by default) -->
            <div class="pricing-plan hidden" id="pro-plan">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-0">
                    <!-- Header Row -->
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">Duration</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">INR Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">USD Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">EURO Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">AED Total Price</div>

                    <!-- Monthly -->
                    <div class="p-4 border-b border-gray-200">Monthly</div>
                    <div class="p-4 border-b border-gray-200">₹599</div>
                    <div class="p-4 border-b border-gray-200">$7.49</div>
                    <div class="p-4 border-b border-gray-200">€7.49</div>
                    <div class="p-4 border-b border-gray-200">AED 26.99</div>

                    <!-- 1 Year -->
                    <div class="p-4 border-b border-gray-200">1 Year <span class="text-green-600 text-sm">(60%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹2,868 <span
                            class="text-gray-500 text-sm">(₹239×12)</span></div>
                    <div class="p-4 border-b border-gray-200">$35.88 <span
                            class="text-gray-500 text-sm">($2.99×12)</span></div>
                    <div class="p-4 border-b border-gray-200">€35.88 <span
                            class="text-gray-500 text-sm">(€2.99×12)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 131.88 <span class="text-gray-500 text-sm">(AED
                            10.99×12)</span></div>

                    <!-- 2 Years -->
                    <div class="p-4 border-b border-gray-200">2 Years <span class="text-green-600 text-sm">(70%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹4,296 <span
                            class="text-gray-500 text-sm">(₹179×24)</span></div>
                    <div class="p-4 border-b border-gray-200">$59.76 <span
                            class="text-gray-500 text-sm">($2.49×24)</span></div>
                    <div class="p-4 border-b border-gray-200">€59.76 <span
                            class="text-gray-500 text-sm">(€2.49×24)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 191.76 <span class="text-gray-500 text-sm">(AED
                            7.99×24)</span></div>

                    <!-- 3 Years -->
                    <div class="p-4">3 Years <span class="text-green-600 text-sm">(75% OFF)</span></div>
                    <div class="p-4">₹5,364 <span class="text-gray-500 text-sm">(₹149×36)</span></div>
                    <div class="p-4">$80.04 <span class="text-gray-500 text-sm">($2.29×36)</span></div>
                    <div class="p-4">€80.04 <span class="text-gray-500 text-sm">(€2.29×36)</span></div>
                    <div class="p-4">AED 233.64 <span class="text-gray-500 text-sm">(AED 6.49×36)</span></div>
                </div>
            </div>

            <!-- Business Plan (Hidden by default) -->
            <div class="pricing-plan hidden" id="business-plan">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-0">
                    <!-- Header Row -->
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">Duration</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">INR Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">USD Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">EURO Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">AED Total Price</div>

                    <!-- Monthly -->
                    <div class="p-4 border-b border-gray-200">Monthly</div>
                    <div class="p-4 border-b border-gray-200">₹799</div>
                    <div class="p-4 border-b border-gray-200">$9.99</div>
                    <div class="p-4 border-b border-gray-200">€9.99</div>
                    <div class="p-4 border-b border-gray-200">AED 34.99</div>

                    <!-- 1 Year -->
                    <div class="p-4 border-b border-gray-200">1 Year <span class="text-green-600 text-sm">(60%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹3,828 <span
                            class="text-gray-500 text-sm">(₹319×12)</span></div>
                    <div class="p-4 border-b border-gray-200">$47.88 <span
                            class="text-gray-500 text-sm">($3.99×12)</span></div>
                    <div class="p-4 border-b border-gray-200">€47.88 <span
                            class="text-gray-500 text-sm">(€3.99×12)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 155.88 <span class="text-gray-500 text-sm">(AED
                            12.99×12)</span></div>

                    <!-- 2 Years -->
                    <div class="p-4 border-b border-gray-200">2 Years <span class="text-green-600 text-sm">(70%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹5,736 <span
                            class="text-gray-500 text-sm">(₹239×24)</span></div>
                    <div class="p-4 border-b border-gray-200">$79.76 <span
                            class="text-gray-500 text-sm">($3.29×24)</span></div>
                    <div class="p-4 border-b border-gray-200">€79.76 <span
                            class="text-gray-500 text-sm">(€3.29×24)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 251.76 <span class="text-gray-500 text-sm">(AED
                            10.49×24)</span></div>

                    <!-- 3 Years -->
                    <div class="p-4">3 Years <span class="text-green-600 text-sm">(75% OFF)</span></div>
                    <div class="p-4">₹7,164 <span class="text-gray-500 text-sm">(₹199×36)</span></div>
                    <div class="p-4">$115.56 <span class="text-gray-500 text-sm">($3.21×36)</span></div>
                    <div class="p-4">€115.56 <span class="text-gray-500 text-sm">(€3.21×36)</span></div>
                    <div class="p-4">AED 323.64 <span class="text-gray-500 text-sm">(AED 8.99×36)</span></div>
                </div>
            </div>

            <!-- Business Cloud Plan (Hidden by default) -->
            <div class="pricing-plan hidden" id="business-cloud-plan">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-0">
                    <!-- Header Row -->
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">Duration</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">INR Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">USD Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">EURO Total Price</div>
                    <div class="bg-gray-100 p-4 font-bold border-b border-gray-200">AED Total Price</div>

                    <!-- Monthly -->
                    <div class="p-4 border-b border-gray-200">Monthly</div>
                    <div class="p-4 border-b border-gray-200">₹1,499</div>
                    <div class="p-4 border-b border-gray-200">$18.99</div>
                    <div class="p-4 border-b border-gray-200">€18.99</div>
                    <div class="p-4 border-b border-gray-200">AED 66.99</div>

                    <!-- 1 Year -->
                    <div class="p-4 border-b border-gray-200">1 Year <span class="text-green-600 text-sm">(60%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹6,588 <span
                            class="text-gray-500 text-sm">(₹549×12)</span></div>
                    <div class="p-4 border-b border-gray-200">$89.88 <span
                            class="text-gray-500 text-sm">($7.49×12)</span></div>
                    <div class="p-4 border-b border-gray-200">€89.88 <span
                            class="text-gray-500 text-sm">(€7.49×12)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 287.88 <span class="text-gray-500 text-sm">(AED
                            23.99×12)</span></div>

                    <!-- 2 Years -->
                    <div class="p-4 border-b border-gray-200">2 Years <span class="text-green-600 text-sm">(70%
                            OFF)</span></div>
                    <div class="p-4 border-b border-gray-200">₹10,788 <span
                            class="text-gray-500 text-sm">(₹449×24)</span></div>
                    <div class="p-4 border-b border-gray-200">$154.56 <span
                            class="text-gray-500 text-sm">($6.44×24)</span></div>
                    <div class="p-4 border-b border-gray-200">€154.56 <span
                            class="text-gray-500 text-sm">(€6.44×24)</span></div>
                    <div class="p-4 border-b border-gray-200">AED 447.36 <span class="text-gray-500 text-sm">(AED
                            18.64×24)</span></div>

                    <!-- 3 Years -->
                    <div class="p-4">3 Years <span class="text-green-600 text-sm">(75% OFF)</span></div>
                    <div class="p-4">₹13,464 <span class="text-gray-500 text-sm">(₹374×36)</span></div>
                    <div class="p-4">$215.64 <span class="text-gray-500 text-sm">($5.99×36)</span></div>
                    <div class="p-4">€215.64 <span class="text-gray-500 text-sm">(€5.99×36)</span></div>
                    <div class="p-4">AED 674.64 <span class="text-gray-500 text-sm">(AED 18.74×36)</span></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Comparison -->
    <div class="bg-white rounded-xl shadow-md p-8 mb-16">
        <h2 class="text-3xl font-bold font-montserrat mb-8 text-center">Plan Comparison</h2>

        <div class="overflow-x-auto">
            <table class="w-full">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="p-4 text-left">Features</th>
                        <th class="p-4 text-center">Starter</th>
                        <th class="p-4 text-center">Pro</th>
                        <th class="p-4 text-center">Business</th>
                        <th class="p-4 text-center">Business Cloud</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200">
                        <td class="p-4 font-medium">Websites</td>
                        <td class="p-4 text-center">1</td>
                        <td class="p-4 text-center">Unlimited</td>
                        <td class="p-4 text-center">Unlimited</td>
                        <td class="p-4 text-center">Unlimited</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="p-4 font-medium">SSD Storage</td>
                        <td class="p-4 text-center">10 GB</td>
                        <td class="p-4 text-center">50 GB</td>
                        <td class="p-4 text-center">100 GB</td>
                        <td class="p-4 text-center">200 GB</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="p-4 font-medium">Bandwidth</td>
                        <td class="p-4 text-center">Unmetered</td>
                        <td class="p-4 text-center">Unmetered</td>
                        <td class="p-4 text-center">Unmetered</td>
                        <td class="p-4 text-center">Unmetered</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="p-4 font-medium">Free SSL</td>
                        <td class="p-4 text-center"><i class="fas fa-check text-green-500"></i></td>
                        <td class="p-4 text-center"><i class="fas fa-check text-green-500"></i></td>
                        <td class="p-4 text-center"><i class="fas fa-check text-green-500"></i></td>
                        <td class="p-4 text-center"><i class="fas fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="p-4 font-medium">Free Domain</td>
                        <td class="p-4 text-center">-</td>
                        <td class="p-4 text-center">1 Year</td>
                        <td class="p-4 text-center">1 Year</td>
                        <td class="p-4 text-center">1 Year</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="p-4 font-medium">Email Accounts</td>
                        <td class="p-4 text-center">5</td>
                        <td class="p-4 text-center">Unlimited</td>
                        <td class="p-4 text-center">Unlimited</td>
                        <td class="p-4 text-center">Unlimited</td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td class="p-4 font-medium">CPU Cores</td>
                        <td class="p-4 text-center">1</td>
                        <td class="p-4 text-center">2</td>
                        <td class="p-4 text-center">4</td>
                        <td class="p-4 text-center">8</td>
                    </tr>
                    <tr>
                        <td class="p-4 font-medium">RAM</td>
                        <td class="p-4 text-center">1 GB</td>
                        <td class="p-4 text-center">2 GB</td>
                        <td class="p-4 text-center">4 GB</td>
                        <td class="p-4 text-center">8 GB</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Performance Section -->
    <div class="bg-white rounded-xl shadow-md p-8 mb-16">
        <h2 class="text-3xl font-bold font-montserrat mb-8 text-center">Performance Optimized</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
                <div
                    class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                    <i class="fas fa-bolt"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">SSD Storage</h3>
                <p class="text-gray-600">Our servers use lightning-fast SSD storage for up to 20x faster load times
                    compared to traditional HDDs.</p>
            </div>
            <div class="text-center">
                <div
                    class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                    <i class="fas fa-network-wired"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">LiteSpeed Web Server</h3>
                <p class="text-gray-600">LiteSpeed provides superior performance with lower resource usage compared to
                    Apache.</p>
            </div>
            <div class="text-center">
                <div
                    class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4">
                    <i class="fas fa-memory"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">Advanced Caching</h3>
                <p class="text-gray-600">Built-in caching mechanisms ensure your visitors get the fastest possible
                    experience.</p>
            </div>
        </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white text-center mb-16">
        <h2 class="text-3xl font-bold font-montserrat mb-4">Ready to Get Started?</h2>
        <p class="text-xl mb-6 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us with their
            websites.</p>
        <button class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">Get
            Started Now</button>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white rounded-xl shadow-md p-8">
        <h2 class="text-3xl font-bold font-montserrat mb-8 text-center">Frequently Asked Questions</h2>

        <div class="space-y-4">
            <div class="border-b border-gray-200 pb-4">
                <button class="flex justify-between items-center w-full text-left font-medium faq-toggle">
                    <span>What is shared hosting?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="mt-2 text-gray-600 hidden faq-content">
                    <p>Shared hosting is a type of web hosting where multiple websites share the same server resources.
                        It's the most affordable hosting option and is perfect for small websites, blogs, and personal
                        projects that don't require dedicated resources.</p>
                </div>
            </div>

            <div class="border-b border-gray-200 pb-4">
                <button class="flex justify-between items-center w-full text-left font-medium faq-toggle">
                    <span>Can I upgrade my plan later?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="mt-2 text-gray-600 hidden faq-content">
                    <p>Yes, you can upgrade your shared hosting plan at any time without any downtime. Our support team
                        can help you migrate to a higher plan or even to a VPS or dedicated server when your website
                        grows.</p>
                </div>
            </div>

            <div class="border-b border-gray-200 pb-4">
                <button class="flex justify-between items-center w-full text-left font-medium faq-toggle">
                    <span>Do you offer a money-back guarantee?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="mt-2 text-gray-600 hidden faq-content">
                    <p>Yes, we offer a 30-day money-back guarantee on all our shared hosting plans. If you're not
                        satisfied with our service, you can cancel within the first 30 days for a full refund.</p>
                </div>
            </div>

            <div class="border-b border-gray-200 pb-4">
                <button class="flex justify-between items-center w-full text-left font-medium faq-toggle">
                    <span>What control panel do you use?</span>
                    <i class="fas fa-chevron-down transition-transform"></i>
                </button>
                <div class="mt-2 text-gray-600 hidden faq-content">
                    <p>We use cPanel, the industry-standard hosting control panel that makes managing your website,
                        emails, databases, and files simple and intuitive.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript for interactive elements -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // Pricing tabs
            const pricingTabs = document.querySelectorAll('.pricing-tab');
            pricingTabs.forEach(tab => {
                tab.addEventListener('click', function () {
                    // Remove active class from all tabs
                    pricingTabs.forEach(t => t.classList.remove('active', 'bg-blue-600', 'text-white'));
                    // Add active class to clicked tab
                    this.classList.add('active', 'bg-blue-600', 'text-white');

                    // Hide all pricing plans
                    document.querySelectorAll('.pricing-plan').forEach(plan => {
                        plan.classList.add('hidden');
                    });

                    // Show selected pricing plan
                    const planId = this.getAttribute('data-plan') + '-plan';
                    document.getElementById(planId).classList.remove('hidden');
                });
            });

            // FAQ toggles
            const faqToggles = document.querySelectorAll('.faq-toggle');
            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', function () {
                    const content = this.nextElementSibling;
                    const icon = this.querySelector('i');

                    // Toggle content visibility
                    content.classList.toggle('hidden');

                    // Rotate icon
                    icon.classList.toggle('rotate-180');
                });
            });
        });
    </script>
</x-hosting-layout>