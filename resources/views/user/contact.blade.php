<x-user-layout>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br max-w-screen-xl mx-auto mx-auto from-gray-50 to-indigo-50 py-20">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-4">Contact Our Support Team</h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">We're here to help you with any questions about our
                hosting services, domains, or technical support.</p>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20">
        <div class="container max-w-screen-xl mx-auto mx-auto mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Contact Form -->
                <div class="bg-white rounded-xl shadow-lg p-8 lg:p-10">
                    <h2 class="text-2xl font-bold font-montserrat mb-6">Send Us a Message</h2>

                    <form id="contactForm" class="space-y-6">
                        @csrf
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all">
                            </div>
                            <div>
                                <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all">
                            </div>
                        </div>

                        <div>
                            <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                            <select id="subject" name="subject"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all">
                                <option value="">Select a subject</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Billing Question">Billing Question</option>
                                <option value="Domain Services">Domain Services</option>
                                <option value="Feedback">Feedback</option>
                            </select>
                        </div>

                        <div>
                            <label for="message" class="block text-gray-700 font-medium mb-2">Your Message</label>
                            <textarea id="message" name="message" rows="5" required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"></textarea>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" id="consent" name="consent" required
                                class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2">
                            <label for="consent" class="text-gray-600 text-sm">I agree to the <a href="#"
                                    class="text-indigo-600 hover:underline">privacy policy</a> and terms of
                                service</label>
                        </div>

                        <button type="submit"
                            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                            <span id="submitText">Send Message</span>
                            <svg id="submitSpinner" class="hidden w-5 h-5 ml-2 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </button>
                    </form>

                    <div id="formSuccess"
                        class="hidden mt-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>Thank you! Your message has been sent successfully. Our team will get back to you
                                soon.</span>
                        </div>
                    </div>

                    <div id="formError" class="hidden mt-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span id="errorMessage">There was an error submitting your message. Please try again.</span>
                        </div>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    <div class="bg-white rounded-xl shadow-lg p-8">
                        <h3 class="text-xl font-bold font-montserrat mb-6">Contact Information</h3>

                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Our Location</h4>
                                    <p class="text-gray-600">123 Cloud Street, San Francisco, CA 94107</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Phone Numbers</h4>
                                    <p class="text-gray-600">
                                        <span class="block">Sales: +1 (800) 123-4567</span>
                                        <span class="block">Support: +1 (800) 765-4321</span>
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Email Addresses</h4>
                                    <p class="text-gray-600">
                                        <span class="block">General: info@cloudcarehost.com</span>
                                        <span class="block">Support: support@cloudcarehost.com</span>
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-900">Working Hours</h4>
                                    <p class="text-gray-600">
                                        <span class="block">Monday - Friday: 9:00 AM - 6:00 PM</span>
                                        <span class="block">Saturday: 10:00 AM - 4:00 PM</span>
                                        <span class="block">Sunday: Closed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Support Center -->
                    <div class="bg-white rounded-xl shadow-lg p-8">
                        <h3 class="text-xl font-bold font-montserrat mb-6">Support Center</h3>
                        <p class="text-gray-600 mb-6">For immediate assistance, please visit our support center where
                            you can find answers to common questions or submit a support ticket.</p>
                        <a href="https://maps.app.goo.gl/93DGwYVbJsdVpMkP8"
                            class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                            Visit Support Center
                            <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="max-w-screen-xl mx-auto mx-auto pb-20">
        <div class="container mx-auto px-4">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="h-96 w-full" id="map">
                    <!-- Google Maps will be loaded here -->
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.997697060495!2d73.73878531535422!3d19.95245548660371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd3fe5a0d5a2c9%3A0x6e7e3e3e3e3e3e3e!2sXLO%20Point%2C%20Ambad%20MIDC%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-dow"></iframe>
                </div>
            </div>
        </div>
    </section>
    @push('scripts')
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                // Contact Form Handling
                const contactForm = document.getElementById('contactForm');
                if (contactForm) {
                    contactForm.addEventListener('submit', async (e) => {
                        e.preventDefault();

                        const submitButton = contactForm.querySelector('button[type="submit"]');
                        const submitText = document.getElementById('submitText');
                        const submitSpinner = document.getElementById('submitSpinner');
                        const formSuccess = document.getElementById('formSuccess');
                        const formError = document.getElementById('formError');

                        // Show loading state
                        submitText.textContent = 'Sending...';
                        submitSpinner.classList.remove('hidden');
                        submitButton.disabled = true;

                        // Hide previous messages
                        formSuccess.classList.add('hidden');
                        formError.classList.add('hidden');

                        try {
                            // Get form data
                            const formData = new FormData(contactForm);

                            // Add your actual endpoint here
                            // route("contact.submit")
                            const response = await fetch('{{ route("contact") }}', {
                                method: 'POST',
                                headers: {
                                    'X-CSRF-TOKEN': '{{ csrf_token() }}',
                                    'Accept': 'application/json'
                                },
                                body: formData
                            });

                            const data = await response.json();

                            if (!response.ok) {
                                throw new Error(data.message || 'Submission failed');
                            }

                            // Show success message
                            formSuccess.classList.remove('hidden');
                            contactForm.reset();

                            // Hide success message after 5 seconds
                            setTimeout(() => {
                                formSuccess.classList.add('hidden');
                            }, 5000);

                        } catch (error) {
                            // Show error message
                            document.getElementById('errorMessage').textContent = error.message || 'There was an error submitting your message. Please try again.';
                            formError.classList.remove('hidden');
                        } finally {
                            // Reset button state
                            submitText.textContent = 'Send Message';
                            submitSpinner.classList.add('hidden');
                            submitButton.disabled = false;
                        }
                    });
                }

                // Google Maps initialization (if needed)
                function initMap() {
                    // Your map initialization code here
                    console.log('Map would be initialized here');
                }

                // Load Google Maps API if needed
                if (document.getElementById('map') && typeof google === 'undefined') {
                    const script = document.createElement('script');
                    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                }
            });
        </script>
    @endpush
</x-user-layout>