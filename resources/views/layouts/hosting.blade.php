<x-user-layout>
    <!-- Hosting Hero Section -->
    <section class="bg-gradient-to-br from-gray-50 to-indigo-50 py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">{{ $title }}</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">{{ $description }}</p>
        </div>
    </section>

    <!-- Breadcrumbs -->
    <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4 py-4">
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a href="{{ route('user.home') }}"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600">
                        <i class="fas fa-home mr-2"></i>
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <i class="fas fa-chevron-right text-gray-400 mx-2"></i>
                        <a href="{{ route('hosting.index') }}"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ml-2">Hosting</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <i class="fas fa-chevron-right text-gray-400 mx-2"></i>
                        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">{{ $title }}</span>
                    </div>
                </li>
            </ol>
        </nav>
    </div>

    <!-- Page Content -->
    <div class="container  max-w-screen-xl mx-auto mx-auto mx-auto px-4 py-12">
        {{ $slot }}
    </div>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-indigo-600 to-indigo-700 py-16 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold font-montserrat mb-6">Ready to Get Started?</h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">Choose the perfect hosting solution for your needs and launch your
                website today.</p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="{{ route('hosting.index') }}"
                    class="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">View
                    All Plans</a>
                <a 
                    class="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-medium transition-colors">Contact
                    Sales</a>
                <!-- contact us la call karaycha ethun -->
            </div>
        </div>
    </section>
</x-user-layout>