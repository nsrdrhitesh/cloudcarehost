<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Cloud Care Host') }}</title>
    <meta name="description"
        content="Cloud Care Host offers affordable domain registration and reliable web hosting services with 99.9% uptime guarantee. Get your website online today!">

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=poppins:300,400,500,600,700|montserrat:400,500,600,700"
        rel="stylesheet" />

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Animate.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <style>
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0% {
                transform: translateY(0px);
            }

            50% {
                transform: translateY(-20px);
            }

            100% {
                transform: translateY(0px);
            }
        }

        /* Custom container class */
        .container {
            @apply w-full max-w-[1200px] mx-auto px-4;
        }

        /* Custom section padding */
        section {
            @apply py-20;
        }

        /* Custom font family for Montserrat */
        .font-montserrat {
            font-family: 'Montserrat', sans-serif;
        }
    </style>
    <!-- Scripts -->
    <!-- @vite(['resources/css/app.css', 'resources/js/app.js']) -->
</head>

<body class="font-sans antialiased bg-gray-50">
    <!-- Top Bar -->
    @include('user.partials.top-bar')

    <!-- Navigation -->
    @include('user.partials.navigation')

    <!-- Page Content -->
    <main>
        {{ $slot }}
    </main>

    <!-- Footer -->
    @include('user.partials.footer')

    <!-- Back to Top Button -->
    <div class="flex flex-col gap-2 justify-center items-center absolute bottom-20 right-8">

        <!-- <a href="#"
            class="fixed bottom-[88px]  w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center opacity-0 invisible transition-all duration-300 z-50 hover:bg-indigo-700 hover:-translate-y-1"
            id="backToTop">
            <i class="fas fa-arrow-up"></i>
        </a> -->
        <x-chatbot />
    </div>
    @push('scripts')
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const chatbotContainer = document.getElementById('chatbot-container');
                const openChatbot = document.getElementById('open-chatbot');
                const closeChatbot = document.getElementById('close-chatbot');
                const chatForm = document.getElementById('chatbot-form');
                const chatInput = document.getElementById('chatbot-input');
                const chatMessages = document.getElementById('chat-messages');

                // Toggle chatbot visibility
                openChatbot.addEventListener('click', () => {
                    chatbotContainer.classList.toggle('hidden');
                });

                closeChatbot.addEventListener('click', () => {
                    chatbotContainer.classList.add('hidden');
                });

                // Handle form submission
                chatForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const message = chatInput.value.trim();

                    if (message) {
                        // Add user message
                        addMessage(message, 'user');
                        chatInput.value = '';

                        // Simulate bot response (in a real app, you'd call an API)
                        setTimeout(() => {
                            addMessage("I'm a simple bot. In a real implementation, I would connect to a chatbot service or API.", 'bot');
                        }, 1000);
                    }
                });

                function addMessage(text, sender) {
                    const messageDiv = document.createElement('div');
                    messageDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

                    const bubbleDiv = document.createElement('div');
                    bubbleDiv.className = `rounded-lg p-3 max-w-[80%] ${sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100'
                        }`;
                    bubbleDiv.textContent = text;

                    messageDiv.appendChild(bubbleDiv);
                    chatMessages.appendChild(messageDiv);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }
            });
        </script>
    @endpush
</body>

</html>