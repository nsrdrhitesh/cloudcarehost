<header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
        <nav class="flex justify-between items-center py-5">
            <!-- Logo -->
            <a href="{{ url('/') }}" class="flex items-center">
                <div
                    class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-lg flex items-center justify-center mr-3 shadow-md shadow-indigo-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 8V16L12 20L20 16V8L12 4Z" fill="white" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 12L20 8" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 12V20" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12 12L4 8" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8 6L16 10" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div>
                    <div class="text-xl leading-none mb-0.5 font-bold font-montserrat text-indigo-600">CLOUD CARE</div>
                    <div class="text-xs tracking-wider text-gray-500 leading-none font-montserrat">HOST</div>
                </div>
            </a>

            <!-- Desktop Navigation with Dropdowns -->
            <ul class="hidden md:flex gap-6 items-center">

                <!-- Domains Dropdown -->
                <li class="relative group">
                    <button
                        class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Domain
                        <!-- <i class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i> -->
                    </button>
                    <!-- <div
                        class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-1">
                            <a href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Domain
                                Search</a>
                            <a href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Domain
                                Transfer</a>
                            <a href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">WHOIS
                                Lookup</a>
                            <a href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Domain
                                Pricing</a>
                            <a href="#"
                                class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Free
                                Domain</a>
                        </div>
                    </div> -->
                </li>

                <!-- Hosting Dropdown -->
                <li class="relative group">
                    <button
                        class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Cloud Hosting <i
                            class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div
                        class="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-2">
                            <!-- Shared Hosting -->
                            <a href="{{ route('hosting.shared') }}"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fas fa-server text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">Shared Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Perfect for small websites and blogs</div>
                                </div>
                            </a>

                            <!-- WordPress Hosting -->
                            <a href="#"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fab fa-wordpress text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">WordPress Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Optimized for WordPress performance</div>
                                </div>
                            </a>

                            <!-- VPS Hosting -->
                            <a href="#"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fas fa-cloud text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">VPS Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Dedicated resources for growing sites</div>
                                </div>
                            </a>

                            <!-- Dedicated Hosting -->
                            <a href="#"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fas fa-tachometer-alt text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">Dedicated Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Full server control for high traffic</div>
                                </div>
                            </a>

                            <!-- Divider -->
                            <div class="border-t border-gray-100 my-1"></div>

                            <!-- Compare Plans -->
                            <a href="#"
                                class="flex items-center px-4 py-2 text-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium">
                                <i class="fas fa-chart-bar mr-2"></i>
                                Compare All Hosting Plans
                            </a>
                        </div>
                    </div>
                </li>



                <!-- Business Solution Dropdown -->
                <li class="relative group">
                    <button
                        class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Business Solution <i
                            class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div
                        class="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-2">
                            <!-- WooCommerce Hosting -->
                            <a href="#"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fab fa-wordpress-simple text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">WooCommerce Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Optimized for online stores</div>
                                </div>
                            </a>

                            <!-- Reseller Hosting -->
                            <a href="#"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fas fa-users text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">Reseller Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Start your own hosting business</div>
                                </div>
                            </a>

                            <!-- Divider -->
                            <div class="border-t border-gray-100 my-1"></div>

                            <!-- Business Solutions Page -->
                            <a href="#"
                                class="flex items-center px-4 py-2 text-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium">
                                <i class="fas fa-briefcase mr-2"></i>
                                Explore All Business Solutions
                            </a>
                        </div>
                    </div>
                </li>

                <!-- Help & Resources Dropdown -->
                <li class="relative group">
                    <button
                        class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Help & Resources <i
                            class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div
                        class="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-2">
                            <!-- Knowledgebase -->
                            <a href="#"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fas fa-book text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">Knowledgebase</div>
                                    <div class="text-xs text-gray-500 mt-1">Guides, tutorials and FAQs</div>
                                </div>
                            </a>

                            <!-- Contact Us -->
                            <a href="{{ route('contact') }}"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fas fa-headset text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">Contact Us</div>
                                    <div class="text-xs text-gray-500 mt-1">24/7 expert support</div>
                                </div>
                            </a>

                            <!-- Blog -->
                            <a href="#"
                                class="flex items-start px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors group">
                                <div class="mr-3 mt-0.5 text-indigo-500">
                                    <i class="fas fa-newspaper text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-medium group-hover:text-indigo-600">Blog</div>
                                    <div class="text-xs text-gray-500 mt-1">Latest news and tips</div>
                                </div>
                            </a>

                            <!-- Divider -->
                            <div class="border-t border-gray-100 my-1"></div>

                            <!-- System Status -->
                            <a href="#"
                                class="flex items-center px-4 py-2 text-indigo-600 hover:bg-indigo-50 transition-colors text-sm font-medium">
                                <i class="fas fa-server mr-2"></i>
                                System Status
                            </a>
                        </div>
                    </div>
                </li>
            </ul>

            <!-- Auth Links (Desktop) -->
            <div class="hidden md:flex items-center gap-4">
                @auth
                    <a href="{{ route('dashboard') }}" class="text-gray-800 hover:text-indigo-600 font-medium">Dashboard</a>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="text-gray-800 hover:text-indigo-600 font-medium">Log Out</button>
                    </form>
                @else
                    <a href="{{ route('login') }}" class="text-gray-800 hover:text-indigo-600 font-medium">Log in</a>
                    <a href="{{ route('register') }}"
                        class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors">Register</a>
                @endauth
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden flex flex-col gap-1.5" id="mobileMenuButton">
                <span class="w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span class="w-6 h-0.5 bg-gray-800 transition-all"></span>
                <span class="w-6 h-0.5 bg-gray-800 transition-all"></span>
            </button>
        </nav>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden fixed left-[-100%] top-[72px] w-full bg-white shadow-lg transition-all duration-300 z-40 py-5 overflow-y-auto max-h-[calc(100vh-72px)]"
        id="mobileMenu">
        <div class="container mx-auto px-4">
            <!-- Mobile Navigation with Accordion -->
            <ul class="flex flex-col gap-1">

                <!-- Domains Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
                        onclick="toggleMobileDropdown('domains-dropdown')">
                        <span>Domains</span>
                        <!-- <i class="fas fa-chevron-down text-xs transition-transform" id="domains-chevron"></i> -->
                    </button>
                    <!-- <ul class="pl-4 hidden" id="domains-dropdown">
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Domain Search</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Domain Transfer</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">WHOIS Lookup</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Domain Pricing</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Free Domain</a></li>
                    </ul> -->
                </li>

                <!-- Hosting Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
                        onclick="toggleMobileDropdown('hosting-dropdown')">
                        <span>Cloud Hosting</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="hosting-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="hosting-dropdown">
                        <li>
                            <a href="{{ route('hosting.shared') }}"
                                class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fas fa-server text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>Shared Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Perfect for small websites</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fab fa-wordpress text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>WordPress Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Optimized for WordPress</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fas fa-cloud text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>VPS Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Dedicated resources</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fas fa-tachometer-alt text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>Dedicated Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Full server control</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>



                <!-- Business Solution Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
                        onclick="toggleMobileDropdown('business-dropdown')">
                        <span>Business Solution</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="business-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="business-dropdown">
                        <li>
                            <a href="#" class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fab fa-wordpress-simple text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>WooCommerce Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Optimized for online stores</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fas fa-users text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>Reseller Hosting</div>
                                    <div class="text-xs text-gray-500 mt-1">Start your hosting business</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>

                <!-- Help & Resources Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
                        onclick="toggleMobileDropdown('help-dropdown')">
                        <span>Help & Resources</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="help-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="help-dropdown">
                        <li>
                            <a href="#" class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fas fa-book text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>Knowledgebase</div>
                                    <div class="text-xs text-gray-500 mt-1">Guides and tutorials</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('contact') }}"
                                class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fas fa-headset text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>Contact Us</div>
                                    <div class="text-xs text-gray-500 mt-1">24/7 support</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-start py-2 text-gray-600 hover:text-indigo-600">
                                <i class="fas fa-newspaper text-indigo-500 mt-1 mr-3 w-4"></i>
                                <div>
                                    <div>Blog</div>
                                    <div class="text-xs text-gray-500 mt-1">News and tips</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <!-- Auth Links (Mobile) -->
            <div class="mt-6 pt-6 border-t border-gray-100">
                @auth
                    <a href="{{ route('dashboard') }}" class="block py-2 text-gray-800 font-medium">Dashboard</a>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="block py-2 text-gray-800 font-medium w-full text-left">Log Out</button>
                    </form>
                @else
                    <a href="{{ route('login') }}" class="block py-2 text-gray-800 font-medium">Log in</a>
                    <a href="{{ route('register') }}"
                        class="block mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium text-center transition-colors">Register</a>
                @endauth
            </div>
        </div>
    </div>
</header>

<!-- Mobile Menu JavaScript (Inline as requested) -->
<script>
    // Toggle mobile menu
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const bars = mobileMenuButton.querySelectorAll('span');

    mobileMenuButton.addEventListener('click', function () {
        // Toggle menu visibility
        mobileMenu.classList.toggle('left-[-100%]');
        mobileMenu.classList.toggle('left-0');

        // Toggle hamburger icon
        if (mobileMenu.classList.contains('left-0')) {
            bars[0].style.transform = 'translateY(8px) rotate(45deg)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
        } else {
            bars[0].style.transform = '';
            bars[1].style.opacity = '';
            bars[2].style.transform = '';
        }
    });

    // Function to toggle mobile dropdowns
    function toggleMobileDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        const chevron = document.getElementById(dropdownId.replace('-dropdown', '-chevron'));

        dropdown.classList.toggle('hidden');
        chevron.classList.toggle('rotate-180');
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('left-[-100%]');
            mobileMenu.classList.remove('left-0');
            bars[0].style.transform = '';
            bars[1].style.opacity = '';
            bars[2].style.transform = '';
        }
    });
</script>