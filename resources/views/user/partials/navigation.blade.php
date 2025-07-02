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
                <!-- Hosting Dropdown -->
                <li class="relative group">
                    <button
                        class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Hosting <i class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Shared Hosting</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">VPS Hosting</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Dedicated Servers</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Cloud Hosting</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Compare Plans</a>
                        </div>
                    </div>
                </li>

                <!-- Domains Dropdown -->
                <li class="relative group">
                    <button class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Domains <i class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Domain Search</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Domain Transfer</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">WHOIS Lookup</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Domain Pricing</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Free Domain</a>
                        </div>
                    </div>
                </li>

                <!-- WordPress Dropdown -->
                <li class="relative group">
                    <button class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        WordPress <i class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">WordPress Hosting</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Managed WordPress</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">WordPress Migration</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">WordPress Tools</a>
                        </div>
                    </div>
                </li>

                <!-- Email Dropdown -->
                <li class="relative group">
                    <button class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Email <i class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Business Email</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Email Hosting</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Microsoft 365</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Google Workspace</a>
                        </div>
                    </div>
                </li>

                <!-- Support Dropdown -->
                <li class="relative group">
                    <button class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        Support <i class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Help Center</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Knowledge Base</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">System Status</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Contact Support</a>
                        </div>
                    </div>
                </li>

                <!-- About Dropdown -->
                <li class="relative group">
                    <button class="flex items-center text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all group-hover:after:w-full">
                        About <i class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div class="py-1">
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Our Company</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Careers</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Press</a>
                            <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">Blog</a>
                        </div>
                    </div>
                </li>

                <!-- Blog Link -->
                <li>
                    <a href="#" class="text-gray-800 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all hover:after:w-full">Blog</a>
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
                    <a href="{{ route('register') }}" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors">Register</a>
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
    <div class="md:hidden fixed left-[-100%] top-[72px] w-full bg-white shadow-lg transition-all duration-300 z-40 py-5 overflow-y-auto max-h-[calc(100vh-72px)]" id="mobileMenu">
        <div class="container mx-auto px-4">
            <!-- Mobile Navigation with Accordion -->
            <ul class="flex flex-col gap-1">
                <!-- Hosting Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium" onclick="toggleMobileDropdown('hosting-dropdown')">
                        <span>Hosting</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="hosting-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="hosting-dropdown">
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Shared Hosting</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">VPS Hosting</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Dedicated Servers</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Cloud Hosting</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Compare Plans</a></li>
                    </ul>
                </li>

                <!-- Domains Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium" onclick="toggleMobileDropdown('domains-dropdown')">
                        <span>Domains</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="domains-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="domains-dropdown">
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Domain Search</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Domain Transfer</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">WHOIS Lookup</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Domain Pricing</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Free Domain</a></li>
                    </ul>
                </li>

                <!-- WordPress Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium" onclick="toggleMobileDropdown('wordpress-dropdown')">
                        <span>WordPress</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="wordpress-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="wordpress-dropdown">
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">WordPress Hosting</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Managed WordPress</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">WordPress Migration</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">WordPress Tools</a></li>
                    </ul>
                </li>

                <!-- Email Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium" onclick="toggleMobileDropdown('email-dropdown')">
                        <span>Email</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="email-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="email-dropdown">
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Business Email</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Email Hosting</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Microsoft 365</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Google Workspace</a></li>
                    </ul>
                </li>

                <!-- Support Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium" onclick="toggleMobileDropdown('support-dropdown')">
                        <span>Support</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="support-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="support-dropdown">
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Help Center</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Knowledge Base</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">System Status</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Contact Support</a></li>
                    </ul>
                </li>

                <!-- About Accordion -->
                <li class="border-b border-gray-100">
                    <button class="w-full flex justify-between items-center py-3 text-gray-800 font-medium" onclick="toggleMobileDropdown('about-dropdown')">
                        <span>About</span>
                        <i class="fas fa-chevron-down text-xs transition-transform" id="about-chevron"></i>
                    </button>
                    <ul class="pl-4 hidden" id="about-dropdown">
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Our Company</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Careers</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Press</a></li>
                        <li><a href="#" class="block py-2 text-gray-600 hover:text-indigo-600">Blog</a></li>
                    </ul>
                </li>

                <!-- Blog Link -->
                <li class="border-b border-gray-100">
                    <a href="#" class="block py-3 text-gray-800 font-medium">Blog</a>
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
                    <a href="{{ route('register') }}" class="block mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium text-center transition-colors">Register</a>
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

    mobileMenuButton.addEventListener('click', function() {
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
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('left-[-100%]');
            mobileMenu.classList.remove('left-0');
            bars[0].style.transform = '';
            bars[1].style.opacity = '';
            bars[2].style.transform = '';
        }
    });
</script>