"use client"

import React, { useState, useEffect } from 'react';

export default function Pricing() {
  const [pricingPeriod, setPricingPeriod] = useState('yearly');
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState([]);

  // Fetch currencies first
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        // fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/currencies`)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/currencies`);
        if (!response.ok) {
          throw new Error('Failed to fetch currencies');
        }
        const data = await response.json();
        setCurrencies(data.data);
        // Set default currency to USD if available
        if (data.data.some(c => c.code === 'USD')) {
          setSelectedCurrency('USD');
        } else if (data.data.length > 0) {
          setSelectedCurrency(data.data[0].code);
        }
      } catch (err) {
        console.error('Error fetching currencies:', err);
        setError('Failed to load currency data');
      }
    };

    fetchCurrencies();
  }, []);

  // Fetch plans data from API
  useEffect(() => {
    const fetchPlans = async () => {
      if (currencies.length === 0) return; // Don't fetch until we have currencies

      try {
        setLoading(true);
        
        // Fetch all three plans in parallel
        const responses = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hosting/2`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hosting/6`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hosting/10`)
        ]);

        // Check if any response failed
        const errors = responses.filter(response => !response.ok);
        if (errors.length > 0) {
          throw new Error(`${errors.length} plan(s) failed to load`);
        }

        // Extract JSON data from responses
        const data = await Promise.all(responses.map(r => r.json()));
        
        // Transform API data to match our component structure
        const formattedPlans = data.map(item => {
          const currencyData = item.data.pricing.find(p => p.currency.code === selectedCurrency) || 
                             item.data.pricing[0]; // Fallback to first currency if selected not found

          return {
            id: item.data.id,
            name: item.data.name,
            description: item.data.description,
            popular: item.data.popular,
            features: item.data.features,
            pricing: item.data.pricing, // Keep all pricing data
            prices: {
              monthly: {
                // ${currencyData.currency.symbol}
                // ${currencyData.currency.symbol}
                // ${currencyData.currency.symbol}
                amount: `${currencyData.monthly.discount_price}`,
                savings: currencyData.monthly.discount_percent ? 
                        `${currencyData.monthly.discount_percent} OFF` : null
              },
              yearly: {
                amount: `${currencyData.yearly.discount_price}`,
                savings: currencyData.yearly.discount_percent ? 
                        `${currencyData.yearly.discount_percent} OFF` : null
              },
              twoYearly: {
                amount: `${currencyData.biennially.discount_price}`,
                savings: currencyData.biennially.discount_percent ? 
                        `${currencyData.biennially.discount_percent} OFF` : null
              }
            },
            cta: item.data.cta || 'Get Started'
          };
        });

        setPlans(formattedPlans);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch plans:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlans();
  }, [selectedCurrency, currencies]);

  // Handle currency change
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 rounded w-1/2 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto mb-8"></div>
            <div className="h-10 bg-gray-300 rounded-full w-1/3 mx-auto mb-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 h-[600px]">
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-12 bg-gray-300 rounded w-1/2"></div>
                    {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                      <div key={idx} className="h-4 bg-gray-300 rounded w-full"></div>
                    ))}
                    <div className="h-12 bg-gray-300 rounded-xl w-full mt-8"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error loading pricing:</strong>
            <span className="block sm:inline"> {error}</span>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 font-inter" id="pricing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Simple, Transparent Pricing for Every Need
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Choose the perfect plan that fits your website's requirements. No hidden fees, no surprises.
            Upgrade or downgrade anytime with ease.
          </p>

          {/* Currency Selector */}
          <div className="mb-8">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
              Select Currency:
            </label>
            <select
              id="currency"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
              className="mt-1 block w-40 mx-auto rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>

          {/* Pricing Period Toggle */}
          <div className="inline-flex bg-white p-1 rounded-full shadow-lg border border-gray-200 animate-fade-in-up">
            <button
              onClick={() => setPricingPeriod('monthly')}
              className={`py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300
                ${pricingPeriod === 'monthly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPricingPeriod('yearly')}
              className={`py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300 relative
                ${pricingPeriod === 'yearly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full rotate-6 transform origin-top-right">
                SAVE
              </span>
            </button>
            <button
              onClick={() => setPricingPeriod('twoYearly')}
              className={`py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300 relative
                ${pricingPeriod === 'twoYearly' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              2-Yearly
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full rotate-6 transform origin-top-right">
                BEST
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200
                transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
                ${plan.popular ? 'md:-translate-y-6 border-blue-600 ring-4 ring-blue-200' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider animate-bounce-in">
                  <span className="inline-block mr-2">✨</span> MOST POPULAR <span className="inline-block ml-2">✨</span>
                </div>
              )}
              <div className={`p-8 flex flex-col h-full ${plan.popular ? 'pt-14' : ''}`}>
                <h3 className="text-3xl font-bold text-blue-900 mb-3">{plan.name}</h3>
                <p className="text-gray-600 mb-6 text-base">{plan.description}</p>

                <div className="mb-8 flex items-end">
                  <span className="text-5xl font-extrabold text-blue-600 leading-none">
                    {plan.prices[pricingPeriod].amount}
                  </span>
                  <span className="text-gray-500 text-xl ml-2 leading-none">
                    /{pricingPeriod === 'monthly' ? 'month' : (pricingPeriod === 'yearly' ? 'year' : '2 years')}
                  </span>
                </div>
                {plan.prices[pricingPeriod].savings && (
                  <p className="text-green-600 font-semibold mb-6 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    {plan.prices[pricingPeriod].savings}
                  </p>
                )}

                <ul className="mb-10 space-y-4 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300
                    ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-md'}`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Custom Solutions */}
        <div className="mt-20 text-center bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-700 mb-6">
            Our team is ready to craft a tailored hosting package that perfectly aligns with your unique business needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
          >
            Contact Our Sales Team
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
          }
          20% {
            transform: scale3d(1.1, 1.1, 1.1);
          }
          40% {
            transform: scale3d(0.9, 0.9, 0.9);
          }
          60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
          }
          80% {
            transform: scale3d(0.97, 0.97, 0.97);
          }
          100% {
            opacity: 1;
            transform: scale3d(1, 1, 1);
          }
        }

        .animate-bounce-in {
          animation: bounceIn 1s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}