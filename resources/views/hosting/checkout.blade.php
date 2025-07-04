<x-hosting-layout title="Configure Your Hosting" description="Customize and complete your hosting setup">
    <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-16">
        <div class="md:flex">
            <div class="p-8 md:w-2/3">
                <h2 class="text-2xl font-bold font-montserrat mb-6">Configure Your Hosting Plan</h2>

                <!-- Plan Selection -->
                <div class="mb-8">
                    <h3 class="text-lg font-bold mb-4">1. Select Your Plan</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                            class="border border-gray-200 rounded-lg p-4 hover:border-indigo-400 transition-colors cursor-pointer">
                            <h4 class="font-bold mb-2">Starter</h4>
                            <p class="text-gray-600 text-sm mb-3">Perfect for starter websites</p>
                            <div class="text-indigo-600 font-bold">$4.99/mo</div>
                        </div>
                        <div class="border-2 border-indigo-600 rounded-lg p-4 cursor-pointer">
                            <div
                                class="absolute top-0 right-4 -translate-y-1/2 bg-indigo-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                                Recommended</div>
                            <h4 class="font-bold mb-2">Business</h4>
                            <p class="text-gray-600 text-sm mb-3">Ideal for growing websites</p>
                            <div class="text-indigo-600 font-bold">$9.99/mo</div>
                        </div>
                    </div>
                </div>

                <!-- Billing Cycle -->
                <div class="mb-8 p-6 bg-gray-50 rounded-lg">
                    <h3 class="text-lg font-bold mb-4">2. Choose Billing Cycle</h3>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div
                            class="border border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                            <div class="font-bold mb-1">Monthly</div>
                            <div class="text-gray-600 text-sm mb-2">No discount</div>
                            <div class="text-indigo-600 font-bold">$9.99/mo</div>
                        </div>
                        <div class="border-2 border-indigo-600 rounded-lg p-4 text-center cursor-pointer">
                            <div class="font-bold mb-1">1 Year</div>
                            <div class="text-green-600 text-sm mb-2">Save 60%</div>
                            <div class="text-indigo-600 font-bold">$3.99/mo</div>
                            <div class="text-gray-500 text-xs mt-1">$47.88 billed yearly</div>
                        </div>
                        <div
                            class="border border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                            <div class="font-bold mb-1">2 Years</div>
                            <div class="text-green-600 text-sm mb-2">Save 70%</div>
                            <div class="text-indigo-600 font-bold">$2.99/mo</div>
                            <div class="text-gray-500 text-xs mt-1">$71.76 billed every 2 years</div>
                        </div>
                        <div
                            class="border border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                            <div class="font-bold mb-1">3 Years</div>
                            <div class="text-green-600 text-sm mb-2">Save 75%</div>
                            <div class="text-indigo-600 font-bold">$2.49/mo</div>
                            <div class="text-gray-500 text-xs mt-1">$89.64 billed every 3 years</div>
                        </div>
                    </div>
                </div>

                <!-- Domain Options -->
                <div class="mb-8">
                    <h3 class="text-lg font-bold mb-4">3. Domain Options</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <input type="radio" id="new-domain" name="domain" class="mt-1 mr-3" checked>
                            <label for="new-domain" class="flex-1">
                                <div class="font-medium">Register a new domain</div>
                                <div class="text-gray-600 text-sm">Get a brand new domain name for your website</div>
                                <div class="mt-2">
                                    <input type="text" class="w-full px-4 py-2 border rounded-lg"
                                        placeholder="Search for a domain">
                                </div>
                            </label>
                        </div>
                        <div class="flex items-start">
                            <input type="radio" id="existing-domain" name="domain" class="mt-1 mr-3">
                            <label for="existing-domain" class="flex-1">
                                <div class="font-medium">I already have a domain</div>
                                <div class="text-gray-600 text-sm">I want to use my existing domain with this hosting
                                </div>
                                <div class="mt-2">
                                    <input type="text" class="w-full px-4 py-2 border rounded-lg"
                                        placeholder="Enter your domain">
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Payment Information -->
                <h3 class="text-lg font-bold mb-4">4. Payment Information</h3>
                <form>
                    <div class="mb-4">
                        <label class="block text-gray-700 mb-2">Card Number</label>
                        <input type="text"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="1234 5678 9012 3456">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label class="block text-gray-700 mb-2">Expiration Date</label>
                            <input type="text"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="MM/YY">
                        </div>
                        <div>
                            <label class="block text-gray-700 mb-2">CVV</label>
                            <input type="text"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="123">
                        </div>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 mb-2">Name on Card</label>
                        <input type="text"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="John Doe">
                    </div>
                    <button type="submit"
                        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors">Complete
                        Configuration</button>
                </form>
            </div>

            <!-- Order Summary -->
            <div class="p-8 bg-gray-50 md:w-1/3">
                <h3 class="text-lg font-bold mb-4">Order Summary</h3>
                <div class="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                    <div class="flex justify-between items-center mb-3">
                        <span class="font-medium">Business Hosting</span>
                        <span class="font-bold">$9.99/mo</span>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <span class="font-medium">Billing Cycle</span>
                        <span class="font-bold">Monthly</span>
                    </div>
                    <div class="flex justify-between items-center mb-3">
                        <span class="font-medium">Domain</span>
                        <span class="font-bold">New domain</span>
                    </div>
                    <div class="border-t border-gray-200 pt-3 mt-3">
                        <div class="flex justify-between items-center">
                            <span class="font-bold">Total Due Today</span>
                            <span class="text-xl font-bold">$9.99</span>
                        </div>
                    </div>
                </div>

                <h4 class="font-bold mb-2">Plan Features</h4>
                <ul class="space-y-2 mb-6">
                    <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-2 text-sm"></i>
                        <span class="text-sm">Unlimited Websites</span>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-2 text-sm"></i>
                        <span class="text-sm">100 GB SSD Storage</span>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-2 text-sm"></i>
                        <span class="text-sm">Unmetered Bandwidth</span>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-2 text-sm"></i>
                        <span class="text-sm">Free SSL Certificate</span>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-check text-green-500 mr-2 text-sm"></i>
                        <span class="text-sm">Free Domain (1 year)</span>
                    </li>
                </ul>

                <div class="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 class="font-bold mb-2">Need help configuring?</h4>
                    <p class="text-gray-600 text-sm mb-3">Our experts can help you choose the perfect setup for your
                        needs.</p>
                    <div class="flex items-center text-indigo-600">
                        <i class="fas fa-phone-alt mr-2 text-sm"></i>
                        <span class="text-sm">+1 (800) 123-4567</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-hosting-layout>