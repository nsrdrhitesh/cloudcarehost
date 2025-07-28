'use client';

import { useState } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { checkDomainAvailability } from '../api/lib/domain';
import DomainCard from './DomainCard';

export default function DomainSearch() {
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const { data, success, error } = await checkDomainAvailability(domain);

      if (!success) {
        throw new Error(error || 'Failed to check domain');
      }

      // Add new result with its domain name
      const newResult = {
        id: Date.now(), // unique key
        domain: domain.trim(),
        status: data.status,
        whois: data.whois || `The domain "${domain}" suggests a personalized, premium website.`
      };

      setResults((prev) => [newResult, ...prev]); // prepend new result
      setDomain(''); // clear input after search
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Find your perfect domain..."
            className="flex-grow px-5 py-4 bg-white text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 font-bold transition flex items-center"
          >
            {loading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              <FaSearch className="mr-2" />
            )}
            Search
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8 space-y-6">
          {results.map((item, index) => (
            <DomainCard
              key={item.id}
              domain={item.domain}
              status={item.status}
              price="$21.18"
              discountedPrice="$16.94"
              discountPercent="20%"
              whois={item.whois}
              delay={index * 0.1} // Optional animation delay
            />
          ))}
        </div>
      )}
    </div>
  );
}
