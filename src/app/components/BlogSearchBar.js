'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function BlogSearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handlePopularSearch = (term) => {
    setSearchTerm(term);
    router.push(`/blog/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full py-3 px-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
      <div className="mt-3 text-sm text-gray-600">
        Popular searches: 
        <button 
          onClick={() => handlePopularSearch('WordPress')} 
          className="text-blue-600 cursor-pointer hover:underline ml-1"
        >
          WordPress
        </button>, 
        <button 
          onClick={() => handlePopularSearch('hosting')} 
          className="text-blue-600 cursor-pointer hover:underline"
        >
          hosting
        </button>, 
        <button 
          onClick={() => handlePopularSearch('performance')} 
          className="text-blue-600 cursor-pointer hover:underline"
        >
          performance
        </button>
      </div>
    </div>
  )
}