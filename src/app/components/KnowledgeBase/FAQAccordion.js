'use client'

import { useState } from 'react'

export default function FAQAccordion({ question, answer, delay = 0 }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <button
        className="w-full px-6 py-4 text-left font-medium text-blue-900 hover:bg-blue-50 transition duration-300 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`px-6 pb-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}