"use client"
import { ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function DomainOptions({ 
  domainResult, 
  selectedDomain, 
  handleSelectDomain,
  alternativeDomains,
  handleAlternativeDomainSelect,
  isGeneratingAlternatives
}) {
  if (!domainResult) return null

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-800 mb-3">Domain Availability</h3>
      <div className="space-y-3">
        {/* Main domain search result */}
        <div 
          onClick={() => domainResult.data.status === 'available' && handleSelectDomain({
            domain: domainResult.data.searchedDomain,
            status: 'available',
            price: domainResult.data.price || 15.99
          })}
          className={`p-4 border rounded-lg transition ${
            domainResult.data.status === 'available' 
              ? 'cursor-pointer hover:border-blue-300 ' + 
                (selectedDomain?.domain === domainResult.data.searchedDomain ? 'border-blue-500 bg-blue-50' : 'border-gray-200')
              : 'border-gray-200 cursor-not-allowed bg-gray-50'
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">{domainResult.data.searchedDomain}</span>
            <div className="flex items-center">
              {domainResult.data.status === 'available' ? (
                <>
                  <span className="text-green-600 font-medium">${domainResult.data.price || 15.99}</span>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400 ml-2" />
                </>
              ) : domainResult.data.status === 'unavailable' ? (
                <span className="text-red-600">Unavailable</span>
              ) : (
                <span className="text-yellow-600">Error: {domainResult.data.message}</span>
              )}
            </div>
          </div>
        </div>
        
        {/* Alternative domains section */}
        {alternativeDomains.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-700">Alternative Options</h4>
              {isGeneratingAlternatives && (
                <span className="text-xs text-blue-600 flex items-center">
                  <SparklesIcon className="w-3 h-3 mr-1" />
                  Generating smart suggestions...
                </span>
              )}
            </div>
            <div className="space-y-2">
              {alternativeDomains.map((altDomain, index) => (
                <div 
                  key={index}
                  onClick={() => handleAlternativeDomainSelect(altDomain)}
                  className={`p-3 border rounded-lg cursor-pointer transition ${
                    selectedDomain?.domain === altDomain.domain 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  } ${
                    altDomain.isPremium ? 'border-purple-200 bg-purple-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="font-medium">{altDomain.domain}</span>
                      {altDomain.isAiGenerated && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                          AI Suggested
                        </span>
                      )}
                      {altDomain.isPremium && (
                        <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                          Premium
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className={`font-medium ${
                        altDomain.isPremium ? 'text-purple-600' : 'text-green-600'
                      }`}>
                        ${altDomain.price}
                      </span>
                      <ChevronRightIcon className="w-5 h-5 text-gray-400 ml-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}