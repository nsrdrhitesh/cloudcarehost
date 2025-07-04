<footer class="bg-gray-800 text-white">
    <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div class="mb-8">
                <h3 href="{{ route('hosting.index') }}" class="text-xl font-bold font-montserrat mb-5">Hosting</h3>
                <ul class="space-y-2">
                    <li><a href="{{ route('hosting.shared') }}"
                            class="text-gray-300 hover:text-white transition-colors hover:pl-1">Shared
                            Hosting</a></li>
                    <li><a href="{{ route('hosting.wordpress') }}"
                            class="text-gray-300 hover:text-white transition-colors hover:pl-1">WordPress
                            Hosting</a></li>
                    <li><a href="{{ route('hosting.cloud') }}"
                            class="text-gray-300 hover:text-white transition-colors hover:pl-1">Cloud
                            Hosting</a></li>
                    <li><a href="{{ route('hosting.vps') }}"
                            class="text-gray-300 hover:text-white transition-colors hover:pl-1">VPS Hosting</a>
                    </li>
                    <li><a href="{{ route('hosting.dedicated') }}"
                            class="text-gray-300 hover:text-white transition-colors hover:pl-1">Dedicated
                            Servers</a></li>
                    <li><a href="{{ route('hosting.dedicated') }}"
                            class="text-gray-300 hover:text-white transition-colors hover:pl-1">Dedicated
                            Servers</a></li>
                </ul>
            </div>

            <div class="mb-8">
                <h3 class="text-xl font-bold font-montserrat mb-5">Domains</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Domain
                            Search</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">SSL
                            certificate</a></li>
                    <!-- <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">WHOIS Lookup</a>
                    </li> -->
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Domain
                            Pricing</a></li>
                    <!-- <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Free Domain</a>
                    </li> -->
                </ul>
            </div>

            <div class="mb-8">
                <h3 class="text-xl font-bold font-montserrat mb-5">Company</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">About Us</a>
                    </li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Careers</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Press</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Blog</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div class="mb-8">
                <h3 class="text-xl font-bold font-montserrat mb-5">Support</h3>
                <ul class="space-y-2">
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Knowledge
                            Base</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Tutorials</a>
                    </li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">System
                            Status</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Community</a>
                    </li>
                    <li><a href="#" class="text-gray-300 hover:text-white transition-colors hover:pl-1">Submit a
                            Ticket</a></li>
                </ul>
            </div>

            <div class="mb-8">
                <h3 class="text-xl font-bold font-montserrat mb-5">Contact Us</h3>
                <ul class="space-y-3 text-gray-300">
                    <li class="flex items-start"><i class="fas fa-map-marker-alt text-indigo-500 mt-1 mr-2 w-4"></i> 123
                        Cloud Street, San Francisco, CA 94107</li>
                    <li class="flex items-start"><i class="fas fa-phone-alt text-indigo-500 mt-1 mr-2 w-4"></i> +1 (800)
                        123-4567</li>
                    <li class="flex items-start"><i class="fas fa-envelope text-indigo-500 mt-1 mr-2 w-4"></i>
                        support@cloudcarehost.com</li>
                </ul>

                <div class="flex gap-3 mt-5">
                    <a href="#"
                        class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all"><i
                            class="fab fa-facebook-f"></i></a>
                    <a href="#"
                        class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all"><i
                            class="fab fa-twitter"></i></a>
                    <a href="#"
                        class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all"><i
                            class="fab fa-instagram"></i></a>
                    <a href="#"
                        class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all"><i
                            class="fab fa-linkedin-in"></i></a>
                    <a href="#"
                        class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all"><i
                            class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gray-900 py-5">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="text-gray-500 text-sm">&copy; {{ date('Y') }} Cloud Care Host. All Rights Reserved.</div>

            <div class="flex gap-5">
                <div class="flex gap-5">
                    <a href="{{ route('terms') }}"
                        class="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
                    <!-- Other links... -->
                </div>
                <a href="{{ route('privacy.policy') }}"
                    class="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="{{ route('sitemap') }}"
                    class="text-gray-500 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>

            <div class="flex gap-4 text-gray-500 text-2xl">
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-mastercard"></i>
                <i class="fab fa-cc-amex"></i>
                <i class="fab fa-cc-paypal"></i>
                <i class="fab fa-bitcoin"></i>
            </div>
        </div>
    </div>
</footer>