"use client"
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export default function DomainSearch({ 
  domainSearch, 
  setDomainSearch, 
  domainLoading, 
  handleDomainSearch 
}) {
  return (
    <div>
      <form onSubmit={handleDomainSearch}>
        <label htmlFor="domainSearch" className="block text-sm font-medium text-gray-700 mb-1">
          Search for a new domain
        </label>
        <div className="flex">
          <input
            type="text"
            id="domainSearch"
            className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="yourdomain.com"
            value={domainSearch}
            onChange={(e) => setDomainSearch(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition flex items-center"
            disabled={domainLoading}
          >
            {domainLoading ? (
              <ArrowPathIcon className="w-4 h-4 animate-spin mr-2" />
            ) : null}
            Search
          </button>
        </div>
      </form>
    </div>
  )
}