"use client"
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function DomainOptions({ 
  domainOptions, 
  selectedDomain, 
  handleSelectDomain 
}) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-800 mb-3">Available Domains</h3>
      <div className="space-y-3">
        {domainOptions.map((domain, index) => (
          <div 
            key={index}
            onClick={() => handleSelectDomain(domain)}
            className={`p-4 border rounded-lg cursor-pointer transition ${selectedDomain?.name === domain.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{domain.name}</span>
              <div className="flex items-center">
                {domain.available ? (
                  <>
                    <span className="text-green-600 font-medium">${domain.price.toFixed(2)}/yr</span>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400 ml-2" />
                  </>
                ) : (
                  <span className="text-red-600">Unavailable</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}