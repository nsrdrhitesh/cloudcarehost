<x-hosting-layout title="Shared Hosting" description="Affordable shared hosting perfect for small websites">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
            <h2 class="text-3xl font-bold font-montserrat mb-6">Shared Hosting Solutions</h2>
            <p class="text-gray-600 mb-6">Our shared hosting plans are perfect for individuals and small businesses
                looking for an affordable way to get online. With our easy-to-use control panel and one-click installs,
                you can have your website up and running in minutes.</p>

            <div class="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-6">
                <h3 class="font-bold text-indigo-800 mb-2">Best For:</h3>
                <ul class="list-disc list-inside text-gray-700">
                    <li>Personal websites and blogs</li>
                    <li>Small business websites</li>
                    <li>Portfolio sites</li>
                    <li>Low-traffic websites</li>
                </ul>
            </div>

            <h3 class="text-xl font-bold mb-4">Key Features:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>99.9% Uptime Guarantee</span>
                </div>
                <div class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Free SSL Certificate</span>
                </div>
                <div class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Unlimited Bandwidth</span>
                </div>
                <div class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>100+ One-Click Installs</span>
                </div>
                <div class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Free Website Migration</span>
                </div>
                <div class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>24/7 Customer Support</span>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl shadow-md p-8">
            <h3 class="text-2xl font-bold mb-6 text-center">Shared Hosting Plans</h3>

            <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                    <span class="font-medium">Billing Cycle</span>
                    <div class="flex items-center">
                        <span class="mr-3">Monthly</span>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" id="billing-toggle">
                            <div
                                class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                            </div>
                            <span class="ml-3">Yearly (Save 50%)</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Plan Tabs -->
            <div class="mb-6 border-b border-gray-200">
                <ul class="flex flex-wrap -mb-px" id="plan-tabs" role="tablist">
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="starter-tab"
                            data-tabs-target="#starter" type="button" role="tab" aria-controls="starter"
                            aria-selected="true">Starter</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                            id="pro-tab" data-tabs-target="#pro" type="button" role="tab" aria-controls="pro"
                            aria-selected="false">Pro</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                            id="business-tab" data-tabs-target="#business" type="button" role="tab"
                            aria-controls="business" aria-selected="false">Business</button>
                    </li>
                    <li role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                            id="business-cloud-tab" data-tabs-target="#business-cloud" type="button" role="tab"
                            aria-controls="business-cloud" aria-selected="false">Business Cloud</button>
                    </li>
                </ul>
            </div>

            <!-- Plan Content -->
            <div id="plan-content">
                <!-- Starter Plan -->
                <div class="p-4 rounded-lg bg-gray-50" id="starter" role="tabpanel" aria-labelledby="starter-tab">

                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Duration</th>
                                    <th scope="col" class="px-6 py-3">INR Total Price</th>
                                    <th scope="col" class="px-6 py-3">USD Total Price</th>
                                    <th scope="col" class="px-6 py-3">EURO Total Price</th>
                                    <th scope="col" class="px-6 py-3">AED Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Monthly</th>
                                    <td class="px-6 py-4">₹399</td>
                                    <td class="px-6 py-4">$4.99</td>
                                    <td class="px-6 py-4">€4.99</td>
                                    <td class="px-6 py-4">AED 17.99</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1 Year
                                        (60% OFF)</th>
                                    <td class="px-6 py-4">₹1,908 (₹159×12)</td>
                                    <td class="px-6 py-4">$23.88 (1.99×12)</td>
                                    <td class="px-6 py-4">€23.88 (1.99×12)</td>
                                    <td class="px-6 py-4">AED 83.88 (6.99×12)</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">2
                                        Years (70% OFF)</th>
                                    <td class="px-6 py-4">₹2,856 (₹119×24)</td>
                                    <td class="px-6 py-4">$35.76 (1.49×24)</td>
                                    <td class="px-6 py-4">€35.76 (1.49×24)</td>
                                    <td class="px-6 py-4">AED 131.76 (5.49×24)</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">3
                                        Years (75% OFF)</th>
                                    <td class="px-6 py-4">₹3,564 (₹99×36)</td>
                                    <td class="px-6 py-4">$45.00 (1.25×36)</td>
                                    <td class="px-6 py-4">€45.00 (1.25×36)</td>
                                    <td class="px-6 py-4">AED 161.64 (4.49×36)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-6 flex justify-between items-center">
                        <div>
                            <h4 class="font-bold text-lg">Starter Features</h4>
                            <ul class="list-disc list-inside text-gray-600">
                                <li>1 Website</li>
                                <li>10 GB SSD Storage</li>
                                <li>Unmetered Bandwidth</li>
                                <li>Free SSL Certificate</li>
                            </ul>
                        </div>
                        <a href="{{ route('hosting.checkout', ['plan' => 'starter']) }}"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">Buy
                            Now</a>
                    </div>
                </div>

                <!-- Pro Plan -->
                <div class="hidden p-4 rounded-lg bg-gray-50" id="pro" role="tabpanel" aria-labelledby="pro-tab">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Duration</th>
                                    <th scope="col" class="px-6 py-3">INR Total Price</th>
                                    <th scope="col" class="px-6 py-3">USD Total Price</th>
                                    <th scope="col" class="px-6 py-3">EURO Total Price</th>
                                    <th scope="col" class="px-6 py-3">AED Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Monthly</th>
                                    <td class="px-6 py-4">₹599</td>
                                    <td class="px-6 py-4">$7.49</td>
                                    <td class="px-6 py-4">€7.49</td>
                                    <td class="px-6 py-4">AED 26.99</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1 Year
                                        (60% OFF)</th>
                                    <td class="px-6 py-4">₹2,868 (₹239×12)</td>
                                    <td class="px-6 py-4">$35.88 (2.99×12)</td>
                                    <td class="px-6 py-4">€35.88 (2.99×12)</td>
                                    <td class="px-6 py-4">AED 131.88 (10.99×12)</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">2
                                        Years (70% OFF)</th>
                                    <td class="px-6 py-4">₹4,296 (₹179×24)</td>
                                    <td class="px-6 py-4">$59.76 (2.49×24)</td>
                                    <td class="px-6 py-4">€59.76 (2.49×24)</td>
                                    <td class="px-6 py-4">AED 191.76 (7.99×24)</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">3
                                        Years (75% OFF)</th>
                                    <td class="px-6 py-4">₹5,364 (₹149×36)</td>
                                    <td class="px-6 py-4">$80.04 (2.29×36)</td>
                                    <td class="px-6 py-4">€80.04 (2.29×36)</td>
                                    <td class="px-6 py-4">AED 233.64 (6.49×36)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-6 flex justify-between items-center">
                        <div>
                            <h4 class="font-bold text-lg">Pro Features</h4>
                            <ul class="list-disc list-inside text-gray-600">
                                <li>Unlimited Websites</li>
                                <li>50 GB SSD Storage</li>
                                <li>Unmetered Bandwidth</li>
                                <li>Free SSL Certificate</li>
                                <li>Free Domain (1 year)</li>
                            </ul>
                        </div>
                        <a href="{{ route('hosting.checkout', ['plan' => 'pro']) }}"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">Buy
                            Now</a>
                    </div>
                </div>

                <!-- Business Plan -->
                <div class="hidden p-4 rounded-lg bg-gray-50" id="business" role="tabpanel"
                    aria-labelledby="business-tab">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Duration</th>
                                    <th scope="col" class="px-6 py-3">INR Total Price</th>
                                    <th scope="col" class="px-6 py-3">USD Total Price</th>
                                    <th scope="col" class="px-6 py-3">EURO Total Price</th>
                                    <th scope="col" class="px-6 py-3">AED Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Monthly</th>
                                    <td class="px-6 py-4">₹799</td>
                                    <td class="px-6 py-4">$9.99</td>
                                    <td class="px-6 py-4">€9.99</td>
                                    <td class="px-6 py-4">AED 34.99</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1 Year
                                        (60% OFF)</th>
                                    <td class="px-6 py-4">₹3,828 (₹319×12)</td>
                                    <td class="px-6 py-4">$47.88 (3.99×12)</td>
                                    <td class="px-6 py-4">€47.88 (3.99×12)</td>
                                    <td class="px-6 py-4">AED 155.88 (12.99×12)</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">2
                                        Years (70% OFF)</th>
                                    <td class="px-6 py-4">₹5,736 (₹239×24)</td>
                                    <td class="px-6 py-4">$79.76 (3.29×24)</td>
                                    <td class="px-6 py-4">€79.76 (3.29×24)</td>
                                    <td class="px-6 py-4">AED 251.76 (10.49×24)</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">3
                                        Years (75% OFF)</th>
                                    <td class="px-6 py-4">₹7,164 (₹199×36)</td>
                                    <td class="px-6 py-4">$115.56 (3.21×36)</td>
                                    <td class="px-6 py-4">€115.56 (3.21×36)</td>
                                    <td class="px-6 py-4">AED 323.64 (8.99×36)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-6 flex justify-between items-center">
                        <div>
                            <h4 class="font-bold text-lg">Business Features</h4>
                            <ul class="list-disc list-inside text-gray-600">
                                <li>Unlimited Websites</li>
                                <li>100 GB SSD Storage</li>
                                <li>Unmetered Bandwidth</li>
                                <li>Free SSL Certificate</li>
                                <li>Free Domain (1 year)</li>
                                <li>Free CDN</li>
                            </ul>
                        </div>
                        <a href="{{ route('hosting.checkout', ['plan' => 'business']) }}"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">Buy
                            Now</a>
                    </div>
                </div>

                <!-- Business Cloud Plan -->
                <div class="hidden p-4 rounded-lg bg-gray-50" id="business-cloud" role="tabpanel"
                    aria-labelledby="business-cloud-tab">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Duration</th>
                                    <th scope="col" class="px-6 py-3">INR Total Price</th>
                                    <th scope="col" class="px-6 py-3">USD Total Price</th>
                                    <th scope="col" class="px-6 py-3">EURO Total Price</th>
                                    <th scope="col" class="px-6 py-3">AED Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Monthly</th>
                                    <td class="px-6 py-4">₹1,499</td>
                                    <td class="px-6 py-4">$18.99</td>
                                    <td class="px-6 py-4">€18.99</td>
                                    <td class="px-6 py-4">AED 66.99</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1 Year
                                        (60% OFF)</th>
                                    <td class="px-6 py-4">₹6,588 (₹549×12)</td>
                                    <td class="px-6 py-4">$89.88 (7.49×12)</td>
                                    <td class="px-6 py-4">€89.88 (7.49×12)</td>
                                    <td class="px-6 py-4">AED 287.88 (23.99×12)</td>
                                </tr>
                                <tr class="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">2
                                        Years (70% OFF)</th>
                                    <td class="px-6 py-4">₹10,788 (₹449×24)</td>
                                    <td class="px-6 py-4">$154.56 (6.44×24)</td>
                                    <td class="px-6 py-4">€154.56 (6.44×24)</td>
                                    <td class="px-6 py-4">AED 447.36 (18.64×24)</td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">3
                                        Years (75% OFF)</th>
                                    <td class="px-6 py-4">₹13,464 (₹374×36)</td>
                                    <td class="px-6 py-4">$215.64 (5.99×36)</td>
                                    <td class="px-6 py-4">€215.64 (5.99×36)</td>
                                    <td class="px-6 py-4">AED 674.64 (18.74×36)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mt-6 flex justify-between items-center">
                        <div>
                            <h4 class="font-bold text-lg">Business Cloud Features</h4>
                            <ul class="list-disc list-inside text-gray-600">
                                <li>Unlimited Websites</li>
                                <li>200 GB SSD Storage</li>
                                <li>Unmetered Bandwidth</li>
                                <li>Free SSL Certificate</li>
                                <li>Free Domain (1 year)</li>
                                <li>Free CDN & WAF</li>
                                <li>Dedicated Resources</li>
                            </ul>
                        </div>
                        <a href="{{ route('hosting.checkout', ['plan' => 'business-cloud']) }}"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">Buy
                            Now</a>
                    </div>
                </div>
            </div>
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

    @push('scripts')
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const tabs = document.querySelectorAll('[role="tab"]');
                const tabContents = document.querySelectorAll('[role="tabpanel"]');

                function proTab() {

                }

                function activateTab(tab) {
                    const targetId = tab.getAttribute('data-tabs-target');

                    // Deactivate all tabs and contents
                    tabs.forEach(t => {
                        t.classList.remove('border-indigo-600', 'text-indigo-600');
                        t.classList.add('border-transparent', 'text-gray-500');
                        t.setAttribute('aria-selected', 'false');
                    });

                    tabContents.forEach(content => {
                        content.classList.add('hidden');
                        content.setAttribute('aria-hidden', 'true');
                    });

                    // Activate selected tab and content
                    tab.classList.add('border-indigo-600', 'text-indigo-600');
                    tab.classList.remove('border-transparent', 'text-gray-500');
                    tab.setAttribute('aria-selected', 'true');

                    const activeContent = document.querySelector(targetId);
                    activeContent.classList.remove('hidden');
                    activeContent.setAttribute('aria-hidden', 'false');
                }

                // Activate first tab by default
                if (tabs.length > 0) {
                    activateTab(tabs[0]);
                }

                // Handle tab click events
                tabs.forEach(tab => {
                    tab.addEventListener('click', function (e) {
                        e.preventDefault();
                        activateTab(tab);
                    });
                });

                const faqToggles = document.querySelectorAll('.faq-toggle');
                faqToggles.forEach(toggle => {
                    toggle.addEventListener('click', function () {
                        const content = this.nextElementSibling;
                        const icon = this.querySelector('i');

                        content.classList.toggle('hidden');
                        icon.classList.toggle('rotate-180');

                        // Update aria-expanded attribute for accessibility
                        const isExpanded = this.getAttribute('aria-expanded') === 'true';
                        this.setAttribute('aria-expanded', !isExpanded);
                    });
                });
            });

        </script>
    @endpush
</x-hosting-layout>