"use client"
import { useState, useEffect } from 'react'
import DomainSearch from './DomainSearch'
import DomainOptions from './DomainOptions'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { checkDomainAvailability } from '../../../api/lib/domain'

export default function DomainSelection({
  onNextStep,
  onDomainSelected
}) {
  const [useExistingDomain, setUseExistingDomain] = useState(true)
  const [existingDomain, setExistingDomain] = useState('')
  const [domainSearch, setDomainSearch] = useState('')
  const [domainResult, setDomainResult] = useState(null)
  const [selectedDomain, setSelectedDomain] = useState(null)
  const [domainLoading, setDomainLoading] = useState(false)
  const [error, setError] = useState(null)
  const [alternativeDomains, setAlternativeDomains] = useState([])

  // Generate alternative domain options based on the searched domain
  const generateAlternatives = (searchedDomain) => {
    const domainWithoutTld = searchedDomain.replace(/\..+$/, '')
    const currentTld = searchedDomain.match(/\.(.+)$/)?.[1] || 'com'
    
    // Common TLDs excluding the one already searched
    const commonTlds = ['.com', '.net', '.org', '.io', '.co', '.info']
      .filter(tld => tld !== `.${currentTld}`)
    
    return commonTlds.map(tld => ({
      domain: `${domainWithoutTld}${tld}`,
      price: (Math.random() * (17 - 13) + 13).toFixed(2),
      status: 'available'
    }))
  }

  const handleDomainSearch = async (e) => {
    e.preventDefault()
    setError(null)
    
    if (!domainSearch.trim()) {
      setError('Please enter a domain name to search')
      return
    }

    setDomainLoading(true)
    try {
      const result = await checkDomainAvailability(domainSearch)
      
      if (result.success) {
        const searchedDomain = result.data.searchedDomain || domainSearch
        setDomainResult({
          data: {
            ...result.data,
            price: (Math.random() * (17 - 13) + 13).toFixed(2), // Add random price
            searchedDomain
          }
        })
        
        // Always generate alternative domains
        setAlternativeDomains(generateAlternatives(searchedDomain))

        if (result.data.status === 'available') {
          const domainWithPrice = {
            domain: searchedDomain,
            status: 'available',
            price: result.data.price || (Math.random() * (17 - 13) + 13).toFixed(2)
          }
          setSelectedDomain(domainWithPrice)
          onDomainSelected(domainWithPrice)
        } else {
          // Clear selection if domain is unavailable
          setSelectedDomain(null)
          onDomainSelected(null)
        }
      } else {
        setError('Failed to check domain availability')
      }
    } catch (err) {
      setError('An error occurred while checking domain availability')
      console.error(err)
    } finally {
      setDomainLoading(false)
    }
  }

  const handleSelectDomain = (domain) => {
    setSelectedDomain(domain)
    onDomainSelected(domain)
  }

  const handleAlternativeDomainSelect = (altDomain) => {
    setSelectedDomain(altDomain)
    onDomainSelected(altDomain)
  }

  const handleNextStep = () => {
    if (useExistingDomain && !existingDomain.trim()) {
      setError('Please enter your existing domain')
      return
    }
    
    if (!useExistingDomain && !selectedDomain) {
      setError('Please select an available domain')
      return
    }

    onNextStep()
  }

  const isContinueDisabled = (useExistingDomain && !existingDomain.trim()) || 
                         (!useExistingDomain && (!selectedDomain || selectedDomain.status !== 'available'))
  
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
                required
              />
              <button 
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
                onClick={() => {
                  setSelectedDomain({
                    domain: existingDomain,
                    status: 'existing'
                  })
                  onDomainSelected({
                    domain: existingDomain,
                    status: 'existing'
                  })
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
          <>
            <DomainSearch 
              domainSearch={domainSearch}
              setDomainSearch={setDomainSearch}
              domainLoading={domainLoading}
              handleDomainSearch={handleDomainSearch}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </>
        )}
        
        {!useExistingDomain && domainResult && (
          <DomainOptions
            domainResult={domainResult}
            selectedDomain={selectedDomain}
            handleSelectDomain={handleSelectDomain}
            alternativeDomains={alternativeDomains}
            handleAlternativeDomainSelect={handleAlternativeDomainSelect}
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