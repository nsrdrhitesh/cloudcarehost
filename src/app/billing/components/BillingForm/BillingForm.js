"use client"
import { ChevronRightIcon, LockClosedIcon, StarIcon } from '@heroicons/react/24/outline'
import BillingDetails from './BillingDetails'
import AccountSecurity from './AccountSecurity'
import PaymentMethod from './PaymentMethod'
import Link from 'next/link'

export default function BillingForm({
  formData,
  handleInputChange,
  generatePassword,
  handleSubmit,
  setStep,
  error,
  hostingPlan,
  orderSummary,
  selectedCurrency,
  handleCurrencyChange,
  handleBillingCycleChange,
  serverLocation,
  setServerLocation
}) {
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Complete Your Order</h2>
            <p className="text-gray-600 mt-2">Enter your billing information to complete your purchase.</p>
          </div>
          <div className="flex items-center space-x-2">
            {hostingPlan.popular && (
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                <StarIcon className="w-3 h-3 mr-1" /> Popular
              </span>
            )}
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {hostingPlan.hosting_type}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-8">
        {/* Currency Selector */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Select Currency</h3>
          <div className="flex flex-wrap gap-2">
            {hostingPlan.pricing.map((currencyOption) => (
              <button
                key={currencyOption.currency.code}
                type="button"
                onClick={() => handleCurrencyChange(currencyOption.currency.code)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  selectedCurrency === currencyOption.currency.code 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {currencyOption.currency.code} ({currencyOption.currency.symbol})
              </button>
            ))}
          </div>
        </div>
        
        {/* Choose Billing Cycle */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Choose Billing Cycle</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['monthly', 'yearly', 'biennially'].map((cycle) => {
              const currencyPricing = hostingPlan.pricing.find(p => p.currency.code === selectedCurrency)
              if (!currencyPricing) return null
              
              const cycleData = currencyPricing[cycle]
              const cycleTextMap = {
                monthly: 'Monthly',
                yearly: 'Yearly',
                biennially: '2 Years'
              }
              
              return (
                <div 
                  key={cycle}
                  onClick={() => handleBillingCycleChange(cycle)}
                  className={`p-4 border rounded-lg cursor-pointer transition ${
                    orderSummary.cycle === cycle 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{cycleTextMap[cycle]}</h4>
                      {cycleData.discount_percent && (
                        <p className="text-green-600 text-sm mt-1">Save {cycleData.discount_percent}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-bold">
                        {currencyPricing.currency.symbol}
                        {parseFloat(cycleData.discount_price.replace(/[^\d.-]/g, '')).toFixed(2)}
                      </span>
                      {cycleData.discount_price !== cycleData.price && (
                        <span className="block text-sm text-gray-500 line-through">
                          {currencyPricing.currency.symbol}
                          {parseFloat(cycleData.price.replace(/[^\d.-]/g, '')).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Server Location */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Select Server Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { id: 'us-east', label: 'US East', flag: '🇺🇸' },
              { id: 'us-west', label: 'US West', flag: '🇺🇸' },
              { id: 'europe', label: 'Europe', flag: '🇪🇺' },
              { id: 'asia', label: 'Asia', flag: '🇮🇳' }
            ].map((location) => (
              <div 
                key={location.id}
                onClick={() => setServerLocation(location.id)}
                className={`p-4 border rounded-lg cursor-pointer transition ${
                  serverLocation === location.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{location.flag}</span>
                  <span className="font-medium">{location.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <BillingDetails formData={formData} handleInputChange={handleInputChange} />
        <AccountSecurity 
          formData={formData} 
          handleInputChange={handleInputChange} 
          generatePassword={generatePassword} 
        />
        <PaymentMethod formData={formData} handleInputChange={handleInputChange} />
        
        {/* Terms and Conditions */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to the <Link href="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
        >
          <ChevronRightIcon className="w-4 h-4 rotate-180 mr-1" /> Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <LockClosedIcon className="w-4 h-4 mr-2" /> Complete Order
        </button>
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}
      </div>
    </form>
  )
}