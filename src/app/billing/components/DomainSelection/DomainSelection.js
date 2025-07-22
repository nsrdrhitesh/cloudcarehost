"use client"
import { useState } from 'react'
import DomainSearch from './DomainSearch'
import DomainOptions from './DomainOptions'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function DomainSelection({
  useExistingDomain,
  setUseExistingDomain,
  existingDomain,
  setExistingDomain,
  domainSearch,
  setDomainSearch,
  domainOptions,
  domainLoading,
  selectedDomain,
  handleDomainSearch,
  handleSelectDomain,
  handleNextStep
}) {
  const isContinueDisabled = (useExistingDomain && !existingDomain.trim()) || 
                           (!useExistingDomain && !selectedDomain)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Choose Your Domain</h2>
        <p className="text-gray-600 mt-2">Get a new domain or use an existing one for your website.</p>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <button
            type="button"
            onClick={() => setUseExistingDomain(true)}
            className={`px-4 py-2 rounded-lg font-medium ${useExistingDomain ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Use Existing Domain
          </button>
          <button
            type="button"
            onClick={() => setUseExistingDomain(false)}
            className={`px-4 py-2 rounded-lg font-medium ${!useExistingDomain ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
          >
            Get New Domain
          </button>
        </div>
        
        {useExistingDomain ? (
          <div>
            <label htmlFor="existingDomain" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your existing domain
            </label>
            <div className="flex">
              <input
                type="text"
                id="existingDomain"
                className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="example.com"
                value={existingDomain}
                onChange={(e) => setExistingDomain(e.target.value)}
              />
              <button 
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
                onClick={() => {
                  // Add domain verification logic here if needed
                  alert('Domain verification would happen here in a real app');
                }}
              >
                Verify
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              We'll verify ownership of this domain during setup.
            </p>
          </div>
        ) : (
          <DomainSearch
            domainSearch={domainSearch}
            setDomainSearch={setDomainSearch}
            domainLoading={domainLoading}
            handleDomainSearch={handleDomainSearch}
          />
        )}
        
        {!useExistingDomain && domainOptions.length > 0 && (
          <DomainOptions
            domainOptions={domainOptions}
            selectedDomain={selectedDomain}
            handleSelectDomain={handleSelectDomain}
          />
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
        <button
          type="button"
          onClick={handleNextStep}
          disabled={isContinueDisabled}
          className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center ${isContinueDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Continue to Billing <ChevronRightIcon className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  )
}