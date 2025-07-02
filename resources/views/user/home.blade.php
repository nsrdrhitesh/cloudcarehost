<x-user-layout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-50 to-indigo-50 py-24 relative overflow-hidden">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left animate__animated animate__fadeInDown">
                <h1 class="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6 leading-tight">Powerful
                    Hosting hitesh for Your Website</h1>
                <p class="text-lg text-gray-600 mb-8 animate__animated animate__fadeInDown animate__delay-1s">Get your
                    domain and hosting in one place with 99.9% uptime guarantee</p>

                <div class="max-w-lg mx-auto lg:mx-0 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                    <form class="flex flex-col sm:flex-row gap-0 sm:gap-0 shadow-xl rounded-lg overflow-hidden">
                        <input type="text" placeholder="Find your perfect domain name..."
                            class="flex-grow px-5 py-4 focus:outline-none text-gray-700">
                        <button type="submit"
                            class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 font-medium transition-colors">Search</button>
                    </form>
                </div>

                <div
                    class="flex flex-wrap justify-center lg:justify-start gap-3 animate__animated animate__fadeIn animate__delay-2s">
                    <span class="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">.com $9.99/yr</span>
                    <span class="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">.net $12.99/yr</span>
                    <span class="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">.org $10.99/yr</span>
                </div>
            </div>

            <div class="lg:w-1/2 animate__animated animate__fadeInRight animate__delay-1s">
                <img src="{{ asset('images/hero.jpg') }}" alt="Cloud Hosting Illustration"
                    class="rounded-lg shadow-xl max-w-full animate-float">
            </div>
        </div>
    </section>

    <!-- Trust Badges Section -->
    <!-- <section class="bg-white py-12 shadow-sm">
        <div class="container mx-auto px-4 text-center">
            <p class="text-gray-500 mb-8">Trusted by 50,000+ customers worldwide</p>
            <div class="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity">
                <img src="{{ asset('images/Trustpilot.png') }}" alt="Trustpilot" class="h-10">
                <img src="https://via.placeholder.com/150x50" alt="Google" class="h-10">
                <img src="https://via.placeholder.com/150x50" alt="Microsoft" class="h-10">
                <img src="https://via.placeholder.com/150x50" alt="AWS" class="h-10">
            </div>
        </div>
    </section> -->

    <!-- Features Section -->
    <section class="bg-gray-50 py-20">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">Everything You Need to Succeed
                Online</h2>
            <p class="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">From domains to hosting, we've got you
                covered</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow animate__animated animate__fadeInUp">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-indigo-600 text-3xl mb-6 mx-auto">
                        <i class="fas fa-server"></i>
                    </div>
                    <h3 class="text-xl font-bold text-center mb-3">Lightning Fast Servers</h3>
                    <p class="text-gray-500 text-center">Our SSD-powered servers ensure your website loads in
                        milliseconds.</p>
                </div>

                <div
                    class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-1s">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-indigo-600 text-3xl mb-6 mx-auto">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3 class="text-xl font-bold text-center mb-3">Top-notch Security</h3>
                    <p class="text-gray-500 text-center">Free SSL certificates and daily backups to keep your data safe.
                    </p>
                </div>

                <div
                    class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-2s">
                    <div
                        class="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-indigo-600 text-3xl mb-6 mx-auto">
                        <i class="fas fa-headset"></i>
                    </div>
                    <h3 class="text-xl font-bold text-center mb-3">24/7 Expert Support</h3>
                    <p class="text-gray-500 text-center">Our hosting experts are available round the clock to assist
                        you.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Hosting Plans Section -->
    <section class="bg-white py-20">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">Choose Your Perfect Hosting Plan
            </h2>
            <p class="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">Scalable solutions for every need</p>

            <div class="flex items-center justify-center gap-4 mb-12">
                <span id="monthlyText" class="font-medium text-indigo-600 cursor-pointer">Monthly</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="billingToggle" class="sr-only peer">
                    <div
                        class="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-indigo-600 peer-focus:ring-4 peer-focus:ring-indigo-300 transition-all duration-300">
                        <div
                            class="toggle-circle absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-300 peer-checked:translate-x-6">
                        </div>
                    </div>
                </label>
                <span id="yearlyText" class="font-medium text-gray-500 cursor-pointer">Yearly (Save 50%)</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Starter Plan -->
                <div
                    class="plan-card bg-white border border-gray-200 rounded-xl p-8 relative hover:shadow-lg transition-all">
                    <div class="mb-8 text-center">
                        <h3 class="text-2xl font-bold mb-1">Shared Starter</h3>
                        <p class="text-gray-500">The ideal starting point into shared hosting!</p>
                    </div>
                    <div class="text-center mb-4">
                        <span class="price text-4xl font-bold">$2.99</span>
                        <span class="period text-gray-500">/mo</span>
                    </div>
                    <button
                        class="w-full mb-4 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                        Select Plan
                    </button>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 1 website</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Managed hosting
                            for WordPress</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free 7-day
                            Horizons trial</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 10 GB SSD
                            storage</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Hostinger
                            Website Builder</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free domain
                            (₹749.00 value)</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free automatic
                            website migration</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 1 mailbox -
                            free for 1 year</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Unlimited free
                            SSL</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Weekly backups
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> WooCommerce
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> AI SEO ready
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free CDN</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Dedicated IP
                            address</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Priority
                            support</li>
                    </ul>

                </div>

                <!-- Business Plan -->
                <div
                    class="plan-card bg-white border border-indigo-600 rounded-xl p-8 relative hover:shadow-lg transition-all transform lg:-translate-y-5">
                    <div
                        class="absolute top-0 right-6 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular</div>
                    <div class="mb-8 text-center">
                        <h3 class="text-2xl font-bold mb-1">Business</h3>
                        <p class="text-gray-500">Perfect for growing businesses</p>
                    </div>
                    <div class="text-center mb-4">
                        <span class="price text-4xl font-bold">$5.99</span>
                        <span class="period text-gray-500">/month</span>
                    </div>
                    <button
                        class="w-full mb-4 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">Select
                        Plan</button>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 25 websites
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Managed hosting
                            for WordPress</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free 7-day
                            Horizons trial</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 25 GB SSD
                            storage</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Hostinger
                            Website Builder</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free domain
                            (₹749.00 value)</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free automatic
                            website migration</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 2 mailboxes per
                            website - free for 1 year</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Unlimited free
                            SSL</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Weekly backups
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Starter
                            WooCommerce</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> AI SEO ready
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free CDN</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Dedicated IP
                            address</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Priority
                            support</li>
                    </ul>

                </div>

                <!-- Enterprise Plan -->
                <div
                    class="plan-card bg-white border border-gray-200 rounded-xl p-8 relative hover:shadow-lg transition-all">
                    <div class="mb-8 text-center">
                        <h3 class="text-2xl font-bold mb-1">Cloud Startup</h3>
                        <p class="text-gray-500">Enjoy optimised performance & guaranteed resources.</p>
                    </div>
                    <div class="text-center mb-4">
                        <span class="price text-4xl font-bold">$12.99</span>
                        <span class="period text-gray-500">/month</span>
                    </div>
                    <button
                        class="w-full mb-4 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">Select
                        Plan</button>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 100 websites
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Managed hosting
                            for WordPress</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free 7-day
                            Horizons trial</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 100 GB NVMe
                            storage</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Hostinger
                            Website Builder</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free domain
                            (₹749.00 value)</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free automatic
                            website migration</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> 10 mailboxes
                            per website per year</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Unlimited free
                            SSL</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Daily backups
                            (₹2,268.00 value)</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Standard
                            WooCommerce</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> AI SEO ready
                        </li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Free CDN</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Dedicated IP
                            address</li>
                        <li class="flex items-center"><i class="fas fa-check text-emerald-500 mr-2"></i> Priority
                            support</li>
                    </ul>

                </div>
            </div>
        </div>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const billingToggle = document.getElementById('billingToggle');
            const monthlyText = document.getElementById('monthlyText');
            const yearlyText = document.getElementById('yearlyText');
            const priceElements = document.querySelectorAll('.price');
            const periodElements = document.querySelectorAll('.period');
            const toggleCircle = document.querySelector('.toggle-circle');

            // Define monthly and yearly prices for each plan
            const planPrices = [
                { monthly: 2.99, yearly: (2.99 * 12 * 0.5).toFixed(2) },  // Starter (50% off)
                { monthly: 5.99, yearly: (5.99 * 12 * 0.5).toFixed(2) },  // Business
                { monthly: 12.99, yearly: (12.99 * 12 * 0.5).toFixed(2) } // Enterprise
            ];

            // Update prices and toggle state
            function updateBillingDisplay() {
                const isYearly = billingToggle.checked;

                // Update toggle text colors
                if (isYearly) {
                    monthlyText.classList.remove('text-indigo-600');
                    monthlyText.classList.add('text-gray-500');
                    yearlyText.classList.remove('text-gray-500');
                    yearlyText.classList.add('text-indigo-600');
                    toggleCircle.classList.add('right-[5px]');
                    toggleCircle.classList.remove('left-1');
                } else {
                    yearlyText.classList.remove('text-indigo-600');
                    yearlyText.classList.add('text-gray-500');
                    monthlyText.classList.remove('text-gray-500');
                    monthlyText.classList.add('text-indigo-600');
                    toggleCircle.classList.remove('right-[5px]');
                    toggleCircle.classList.add('left-1');
                }

                // Update prices and periods
                priceElements.forEach((priceElement, index) => {
                    const price = isYearly ? planPrices[index].yearly : planPrices[index].monthly;
                    priceElement.textContent = `$${price}`;
                });

                periodElements.forEach(periodElement => {
                    periodElement.textContent = isYearly ? '/year' : '/month';
                });
            }

            // Initialize the display
            updateBillingDisplay();

            // Add event listener for toggle change
            billingToggle.addEventListener('change', function () {
                updateBillingDisplay();
            });

            // Add click event for text toggles
            monthlyText.addEventListener('click', function () {
                if (billingToggle.checked) {
                    billingToggle.checked = false;
                    updateBillingDisplay();
                }
            });

            yearlyText.addEventListener('click', function () {
                if (!billingToggle.checked) {
                    billingToggle.checked = true;
                    updateBillingDisplay();
                }
            });
        });
    </script>

    <!-- Domain Pricing Section -->
    <section class="bg-gray-50 py-20">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">Find Your Perfect Domain</h2>
            <p class="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">Register your domain today and get
                started</p>

            <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-10">
                <div class="flex bg-indigo-600 text-white p-4 font-semibold">
                    <div class="flex-1">Domain Extension</div>
                    <div class="flex-1 text-center">First Year Price</div>
                    <div class="flex-1 text-center">Renewal Price</div>
                </div>

                <div class="flex p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <div class="flex-1 font-medium">.com</div>
                    <div class="flex-1 text-center text-indigo-600 font-semibold">$9.99</div>
                    <div class="flex-1 text-center">$15.99</div>
                </div>

                <div class="flex p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <div class="flex-1 font-medium">.net</div>
                    <div class="flex-1 text-center text-indigo-600 font-semibold">$12.99</div>
                    <div class="flex-1 text-center">$18.99</div>
                </div>

                <div class="flex p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <div class="flex-1 font-medium">.org</div>
                    <div class="flex-1 text-center text-indigo-600 font-semibold">$10.99</div>
                    <div class="flex-1 text-center">$16.99</div>
                </div>

                <div class="flex p-4 hover:bg-gray-50 transition-colors">
                    <div class="flex-1 font-medium">.io</div>
                    <div class="flex-1 text-center text-indigo-600 font-semibold">$39.99</div>
                    <div class="flex-1 text-center">$49.99</div>
                </div>
            </div>

            <div class="text-center">
                <button
                    class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-medium transition-colors">View
                    All Domain Extensions</button>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-white py-20">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">What Our Customers Say</h2>
            <p class="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">Join 50,000+ happy customers worldwide
            </p>

            <div class="flex overflow-x-auto gap-8 py-4 px-2 -mx-2" id="testimonialSlider">
                <div class="flex-shrink-0 w-full sm:w-96 bg-white p-8 rounded-xl shadow-md">
                    <div class="mb-6">
                        <div class="text-yellow-400 mb-4">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="text-gray-700 italic">"Cloud Care Host made migrating my website effortless. Their
                            support team was incredibly helpful and the performance is outstanding."</p>
                    </div>
                    <div class="flex items-center">
                        <!-- <img src="https://via.placeholder.com/50" alt="Sarah J." class="rounded-full mr-4"> -->
                        <div>
                            <h4 class="font-bold">Sarah J.</h4>
                            <p class="text-gray-500 text-sm">Small Business Owner</p>
                        </div>
                    </div>
                </div>

                <div class="flex-shrink-0 w-full sm:w-96 bg-white p-8 rounded-xl shadow-md">
                    <div class="mb-6">
                        <div class="text-yellow-400 mb-4">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="text-gray-700 italic">"I've been using Cloud Care Host for all my client projects. The
                            uptime is reliable and the pricing is very competitive."</p>
                    </div>
                    <div class="flex items-center">
                        <!-- <img src="https://via.placeholder.com/50" alt="Michael T." class="rounded-full mr-4"> -->
                        <div>
                            <h4 class="font-bold">Michael T.</h4>
                            <p class="text-gray-500 text-sm">Web Developer</p>
                        </div>
                    </div>
                </div>

                <div class="flex-shrink-0 w-full sm:w-96 bg-white p-8 rounded-xl shadow-md">
                    <div class="mb-6">
                        <div class="text-yellow-400 mb-4">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text-gray-700 italic">"The one-click WordPress installation saved me so much time. My
                            blog has never loaded faster!"</p>
                    </div>
                    <div class="flex items-center">
                        <!-- <img src="https://via.placeholder.com/50" alt="Emily R." class="rounded-full mr-4"> -->
                        <div>
                            <h4 class="font-bold">Emily R.</h4>
                            <p class="text-gray-500 text-sm">Blogger</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 py-20">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold font-montserrat text-center mb-4">Frequently Asked Questions</h2>
            <p class="text-gray-500 text-lg text-center max-w-2xl mx-auto mb-16">Find answers to common questions about
                our services</p>

            <div class="max-w-3xl mx-auto" x-data="{ activeFaq: null }">
                <!-- FAQ Item 1 -->
                <div class="mb-4 rounded-lg overflow-hidden shadow-sm">
                    <button @click="activeFaq = activeFaq === 1 ? null : 1"
                        class="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left">
                        <span class="font-medium">What is web hosting?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"
                            :class="{ 'rotate-180': activeFaq === 1 }"></i>
                    </button>
                    <div x-show="activeFaq === 1" x-collapse class="bg-white px-6 pb-6">
                        <p class="text-gray-500">Web hosting is a service that allows organizations and individuals to
                            post a website or web page onto the Internet. A web host, or web hosting service provider,
                            is a business that provides the technologies and services needed for the website or webpage
                            to be viewed on the Internet.</p>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="mb-4 rounded-lg overflow-hidden shadow-sm">
                    <button @click="activeFaq = activeFaq === 2 ? null : 2"
                        class="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left">
                        <span class="font-medium">What's the difference between shared and cloud hosting?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"
                            :class="{ 'rotate-180': activeFaq === 2 }"></i>
                    </button>
                    <div x-show="activeFaq === 2" x-collapse class="bg-white px-6 pb-6">
                        <p class="text-gray-500">Shared hosting means your website shares server resources with other
                            websites. Cloud hosting uses multiple servers working together to host websites, providing
                            better scalability and reliability. Our cloud hosting plans offer better performance and
                            uptime compared to traditional shared hosting.</p>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="mb-4 rounded-lg overflow-hidden shadow-sm">
                    <button @click="activeFaq = activeFaq === 3 ? null : 3"
                        class="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left">
                        <span class="font-medium">Do you offer a money-back guarantee?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"
                            :class="{ 'rotate-180': activeFaq === 3 }"></i>
                    </button>
                    <div x-show="activeFaq === 3" x-collapse class="bg-white px-6 pb-6">
                        <p class="text-gray-500">Yes! We offer a 30-day money-back guarantee on all our hosting plans.
                            If you're not satisfied with our service for any reason, you can cancel within the first 30
                            days for a full refund. Domain registrations are non-refundable as per ICANN policy.</p>
                    </div>
                </div>

                <!-- FAQ Item 4 -->
                <div class="mb-4 rounded-lg overflow-hidden shadow-sm">
                    <button @click="activeFaq = activeFaq === 4 ? null : 4"
                        class="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left">
                        <span class="font-medium">Can I transfer my existing website to Cloud Care Host?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"
                            :class="{ 'rotate-180': activeFaq === 4 }"></i>
                    </button>
                    <div x-show="activeFaq === 4" x-collapse class="bg-white px-6 pb-6">
                        <p class="text-gray-500">Absolutely! We offer free website migration services for all new
                            customers. Our expert team will handle the entire transfer process for you, ensuring minimal
                            downtime. Just contact our support team after signing up, and we'll take care of the rest.
                        </p>
                    </div>
                </div>

                <!-- FAQ Item 5 -->
                <div class="mb-4 rounded-lg overflow-hidden shadow-sm">
                    <button @click="activeFaq = activeFaq === 5 ? null : 5"
                        class="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left">
                        <span class="font-medium">Do you provide email hosting with your plans?</span>
                        <i class="fas fa-chevron-down transition-transform duration-300"
                            :class="{ 'rotate-180': activeFaq === 5 }"></i>
                    </button>
                    <div x-show="activeFaq === 5" x-collapse class="bg-white px-6 pb-6">
                        <p class="text-gray-500">Yes, all our hosting plans include free email hosting. You can create
                            professional email addresses using your domain name (e.g., yourname@yourdomain.com). Our
                            email hosting includes spam protection, webmail access, and compatibility with email clients
                            like Outlook.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-indigo-600 to-indigo-700 py-20 text-white">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div class="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                <h2 class="text-3xl md:text-4xl font-bold font-montserrat mb-6">Ready to Launch Your Website?</h2>
                <p class="text-lg opacity-90 mb-8">Get started with Cloud Care Host today and get your website online in
                    minutes.</p>
                <button
                    class="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">Get
                    Started Now</button>
            </div>
            <div class="lg:w-1/2">
                <img src="{{ asset('images/hero.jpg') }}" alt="Get Started"
                    class="rounded-lg shadow-xl max-w-full animate-float">
            </div>
        </div>
    </section>
</x-user-layout>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const button = item.querySelector('button');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('i');

            button.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-content').classList.add('hidden');
                        otherItem.querySelector('i').classList.remove('rotate-180');
                    }
                });

                // Toggle current item
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
    });
</script>