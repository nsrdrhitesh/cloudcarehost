export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <div className="relative">
        <input
          type="text"
          placeholder="Search knowledge base..."
          className="w-full py-4 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <div className="mt-3 text-sm text-gray-600">
        Popular searches: <span className="text-blue-600 cursor-pointer hover:underline">WordPress</span>, <span className="text-blue-600 cursor-pointer hover:underline">email setup</span>, <span className="text-blue-600 cursor-pointer hover:underline">domain transfer</span>
      </div>
    </div>
  )
}