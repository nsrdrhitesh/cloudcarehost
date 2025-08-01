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
  const [isGeneratingAlternatives, setIsGeneratingAlternatives] = useState(false)

 // Generate AI-powered alternative domain options
  const generateAlternatives = async (searchedDomain) => {
    setIsGeneratingAlternatives(true)
    try {
      const domainWithoutTld = searchedDomain.replace(/\..+$/, '')
      const currentTld = searchedDomain.match(/\.(.+)$/)?.[1] || 'com'
      
      // First generate creative variations using AI
      const aiResponse = await fetch('/api/ai/domain-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          baseDomain: domainWithoutTld,
          count: 10 // Request 10 suggestions
        })
      })
      
      const aiData = await aiResponse.json()
      
      if (!aiResponse.ok || !aiData.suggestions) {
        throw new Error('Failed to get AI suggestions')
      }
      
      // Common TLDs to check
      const popularTlds = [
        '.com', '.net', '.org', '.io', '.co', 
        '.ai', '.dev', '.app', '.tech', '.site'
      ]
      
      // Create a list of domains to check (AI suggestions + base with different TLDs)
      const domainsToCheck = [
            // Keep the original with different TLD
            ...popularTlds.filter(tld => tld !== `.${currentTld}`)
              .map(tld => `${domainWithoutTld}${tld}`),

            // Add AI suggestions with popular TLDs
            ...aiData.suggestions.slice(0, 5)
              .flatMap(suggestion => popularTlds.map(tld => `${suggestion}${tld}`))
          ].slice(0, 10);  // Limit to 10 domains to check
      
      // Check availability for all domains
      const availabilityChecks = await Promise.all(
        domainsToCheck.map(domain => checkDomainAvailability(domain))
      );
      // Process results
      const availableDomains = availabilityChecks
        .filter(result => result.success && result.data.status === 'available')
        .map(result => ({
          domain: result.data.searchedDomain,
          price: (Math.random() * (17 - 13) + 13).toFixed(2),
          status: 'available',
          isAiGenerated: !result.data.searchedDomain.startsWith(domainWithoutTld)
        }))
      
      // If we don't have enough available domains, add some premium suggestions
      if (availableDomains.length < 5) {
        const premiumTlds = ['.io', '.app', '.dev', '.ai', '.tech']
        premiumTlds.forEach(tld => {
          if (!availableDomains.some(d => d.domain.endsWith(tld))) {
            availableDomains.push({
              domain: `${domainWithoutTld}${tld}`,
              price: (Math.random() * (25 - 20) + 20).toFixed(2),
              status: 'premium',
              isPremium: true
            })
          }
        })
      }
      
      return availableDomains.slice(0, 10) // Return max 10 domains
    } catch (error) {
      console.error('Error generating alternatives:', error)
      // Fallback to basic generation if AI fails
      const domainWithoutTld = searchedDomain.replace(/\..+$/, '')
      const currentTld = searchedDomain.match(/\.(.+)$/)?.[1] || 'com'
      const commonTlds = ['.com', '.net', '.org', '.io', '.co', '.info']
        .filter(tld => tld !== `.${currentTld}`)
      
      return commonTlds.map(tld => ({
        domain: `${domainWithoutTld}${tld}`,
        price: (Math.random() * (17 - 13) + 13).toFixed(2),
        status: 'available'
      }))
    } finally {
      setIsGeneratingAlternatives(false)
    }
  }

  const handleExistingDomainChange = (e) => {
  const value = e.target.value;
  setExistingDomain(value);
  
  if (value.trim()) {
    const domainObj = {
      domain: value,
      status: 'existing',
      price: 0
    };
    setSelectedDomain(domainObj);
    onDomainSelected(domainObj);
  }
};

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
        const formattedDomain = result.data.searchedDomain || domainSearch;
        setDomainResult({
          data: {
            ...result.data,
            price: (Math.random() * (17 - 13) + 13).toFixed(2), // Add random price
            searchedDomain : formattedDomain
          }
        })
        
        setSelectedDomain(result.data.searchedDomain || domainSearch);
        // Generate AI-powered alternative domains
        const alternatives = await generateAlternatives(formattedDomain)
        setAlternativeDomains(alternatives)

        if (result.data.status === 'available') {
          const domainWithPrice = {
            domain: formattedDomain,
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