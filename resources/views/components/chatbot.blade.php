<div class="fixed bottom-6 z-50  duration-300 hover:rounded-md hover:bg-green-700 hover:-translate-y-1">
    <div id="chatbot-container"
        class="hidden w-80 h-[500px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
        <div class="bg-indigo-600 text-white hover:rounded-xl p-4 flex justify-between items-center">
            <h3 class="font-bold">Support Bot</h3>
            <button id="close-chatbot" class="text-white  hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-3">
            <div class="flex justify-start">
                <div class="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p>Hello! How can I help you today?</p>
                </div>
            </div>
        </div>

        <div class="border-t p-3">
            <form id="chatbot-form" class="flex gap-2">
                <input type="text" id="chatbot-input" placeholder="Type your message..."
                    class="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <button type="submit"
                    class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </div>

    <button id="open-chatbot"
        class="w-14 h-14 bg-green-600 hover:rounded-md rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-700 transition">
        <i class="fas fa-comment-dots text-xl"></i>
    </button>
</div>