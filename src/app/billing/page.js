"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Loading from '@/app/components/Loading'
import { CheckCircleIcon, ChevronRightIcon, ArrowPathIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export default function BillingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(true)
  const [domainLoading, setDomainLoading] = useState(false)
  const [orderSummary, setOrderSummary] = useState(null)
  const [domainOptions, setDomainOptions] = useState([])
  const [domainSearch, setDomainSearch] = useState('')
  const [selectedDomain, setSelectedDomain] = useState(null)
  const [existingDomain, setExistingDomain] = useState('')
  const [useExistingDomain, setUseExistingDomain] = useState(true)
  const [serverLocation, setServerLocation] = useState('us-east')
  const [accountOption, setAccountOption] = useState('new')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    country: 'United States',
    state: '',
    postcode: '',
    password: '',
    confirmPassword: '',
    paymentMethod: 'razorpay',
    autoGeneratePassword: false
  })

  // Initialize order summary from URL params
  useEffect(() => {
    if (searchParams) {
      const plan = searchParams.get('plan')
      const type = searchParams.get('type')
      const cycle = searchParams.get('cycle')
      
      const priceMap = {
        'basic': { monthly: 5.99, yearly: 4.99, biennially: 3.99 },
        'standard': { monthly: 9.99, yearly: 8.99, biennially: 7.99 },
        'premium': { monthly: 14.99, yearly: 12.99, biennially: 10.99 },
        'enterprise': { monthly: 24.99, yearly: 21.99, biennially: 18.99 }
      }

      const cycleText = {
        monthly: 'Monthly',
        yearly: 'Yearly',
        biennially: '2 Years'
      }

      const domainPrice = 14.99 // Default domain price

      setOrderSummary({
        plan,
        type,
        cycle,
        price: priceMap[plan]?.[cycle] || 9.99,
        cycleText: cycleText[cycle] || 'Monthly',
        domainPrice,
        total: priceMap[plan]?.[cycle] || 9.99
      })
      setLoading(false)
    }
  }, [searchParams])

  // Handle domain search
  const handleDomainSearch = async (e) => {
    e.preventDefault()
    if (!domainSearch.trim()) return
    
    setDomainLoading(true)
    // Simulate API call
    setTimeout(() => {
      const extensions = ['.com', '.net', '.org', '.io', '.dev']
      const results = extensions.map(ext => ({
        name: domainSearch + ext,
        available: Math.random() > 0.3,
        price: 14.99 - Math.floor(Math.random() * 5)
      }))
      setDomainOptions(results)
      setDomainLoading(false)
    }, 1000)
  }

  // Handle domain selection
  const handleSelectDomain = (domain) => {
    setSelectedDomain(domain)
    setOrderSummary(prev => ({
      ...prev,
      domainPrice: domain.price,
      total: prev.price + domain.price
    }))
  }

  // Handle next step
  const handleNextStep = () => {
    if (step === 1) {
      if ((useExistingDomain && !existingDomain) || (!useExistingDomain && !selectedDomain)) {
        alert('Please select or enter a domain')
        return
      }
    }
    setStep(step + 1)
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Generate random password
  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let password = ''
    for (let i = 0; i < 12; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setFormData(prev => ({
      ...prev,
      password,
      confirmPassword: password
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Here you would typically send data to your backend
    // For demo purposes, we'll simulate a payment redirect
    
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // In a real app, you would redirect to Razorpay
      alert('Redirecting to Razorpay payment gateway...')
      // This would be the actual Razorpay integration:
      /*
      const options = {
        key: 'rzp_test_YOUR_KEY_ID',
        amount: orderSummary.total * 100,
        currency: 'USD',
        name: 'Your Hosting Company',
        description: `${orderSummary.type} - ${orderSummary.plan}`,
        image: '/logo.png',
        handler: function(response) {
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id)
          router.push('/success')
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: `${formData.street}, ${formData.city}, ${formData.country}`
        },
        theme: {
          color: '#2563eb'
        }
      }
      const rzp = new window.Razorpay(options)
      rzp.open()
      */
    }, 1500)
  }

  if (loading || !orderSummary) return <Loading />

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Progress indicator */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                {step > 1 ? <CheckCircleIcon className="w-5 h-5" /> : '1'}
              </div>
              <span className="ml-2 font-medium">Domain</span>
            </div>
            
            <div className="flex-1 h-1 mx-2 bg-gray-200">
              <div className={`h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} style={{ width: step >= 2 ? '100%' : '0%' }}></div>
            </div>
            
            <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                {step > 2 ? <CheckCircleIcon className="w-5 h-5" /> : '2'}
              </div>
              <span className="ml-2 font-medium">Billing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            {step === 1 && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">Choose Your Domain</h2>
                  <p className="text-gray-600 mt-2">Get a new domain or use an existing one for your website.</p>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <button
                      onClick={() => setUseExistingDomain(true)}
                      className={`px-4 py-2 rounded-lg font-medium ${useExistingDomain ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      Use Existing Domain
                    </button>
                    <button
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
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                          Verify
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        We'll verify ownership of this domain during setup.
                      </p>
                    </div>
                  ) : (
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
                            placeholder="yourdomain"
                            value={domainSearch}
                            onChange={(e) => setDomainSearch(e.target.value)}
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
                      
                      {domainOptions.length > 0 && (
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
                                        <span className="text-green-600 font-medium">${domain.price}/yr</span>
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
                      )}
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    disabled={(useExistingDomain && !existingDomain) || (!useExistingDomain && !selectedDomain)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
                  >
                    Continue to Billing <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">Complete Your Order</h2>
                  <p className="text-gray-600 mt-2">Enter your billing information to complete your purchase.</p>
                </div>
                
                <div className="p-6 space-y-8">
                  {/* Choose Billing Cycle */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Choose Billing Cycle</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'monthly', label: 'Monthly', price: orderSummary.price, discount: '' },
                        { id: 'yearly', label: 'Yearly', price: orderSummary.price * 0.9, discount: 'Save 10%' },
                        { id: 'biennially', label: '2 Years', price: orderSummary.price * 0.8 * 2, discount: 'Save 20%' }
                      ].map((option) => (
                        <div 
                          key={option.id}
                          onClick={() => {
                            setOrderSummary(prev => ({
                              ...prev,
                              cycle: option.id,
                              cycleText: option.label,
                              total: option.price + (selectedDomain?.price || 0)
                            }))
                          }}
                          className={`p-4 border rounded-lg cursor-pointer transition ${orderSummary.cycle === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{option.label}</h4>
                              <p className="text-gray-600 text-sm mt-1">{option.discount}</p>
                            </div>
                            <span className="font-bold">${option.price.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
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
                          className={`p-4 border rounded-lg cursor-pointer transition ${serverLocation === location.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{location.flag}</span>
                            <span className="font-medium">{location.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Billing Details */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Billing Details</h3>
                    
                    <div className="space-y-4">
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="w-1/2">
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="street"
                          name="street"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.street}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="w-1/2">
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="United States">United States</option>
                            <option value="India">India</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        <div className="w-1/2">
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                            State/Province
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="w-1/2">
                          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            id="postcode"
                            name="postcode"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                            value={formData.postcode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Account Security */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Account Security</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                            value={formData.password}
                            onChange={handleInputChange}
                            minLength="5"
                            required
                          />
                          <button
                            type="button"
                            onClick={generatePassword}
                            className="absolute right-2 top-2 text-gray-500 hover:text-blue-600"
                            title="Generate password"
                          >
                            <ArrowPathIcon className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">At least 5 characters</p>
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="autoGeneratePassword"
                          name="autoGeneratePassword"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          checked={formData.autoGeneratePassword}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="autoGeneratePassword" className="ml-2 block text-sm text-gray-700">
                          Auto-generate secure password
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Payment Method</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="razorpay"
                          name="paymentMethod"
                          value="razorpay"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={formData.paymentMethod === 'razorpay'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="razorpay" className="ml-2 block text-sm text-gray-700">
                          Credit/Debit Card (via Razorpay)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentMethod"
                          value="paypal"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={formData.paymentMethod === 'paypal'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="paypal" className="ml-2 block text-sm text-gray-700">
                          PayPal
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="bankTransfer"
                          name="paymentMethod"
                          value="bankTransfer"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={formData.paymentMethod === 'bankTransfer'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="bankTransfer" className="ml-2 block text-sm text-gray-700">
                          Bank Transfer
                        </label>
                      </div>
                    </div>
                  </div>
                  
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
                </div>
              </form>
            )}
          </div>
          
          {/* Order summary sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-800">Hosting Plan</h3>
                    <div className="flex justify-between mt-1">
                      <span className="text-gray-600">{orderSummary.type} - {orderSummary.plan}</span>
                      <span className="font-medium">${orderSummary.price.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{orderSummary.cycleText} Billing</div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-800">Domain</h3>
                    <div className="flex justify-between mt-1">
                      <span className="text-gray-600">
                        {useExistingDomain ? existingDomain || 'No domain selected' : selectedDomain?.name || 'No domain selected'}
                      </span>
                      <span className="font-medium">
                        {selectedDomain ? `$${selectedDomain.price.toFixed(2)}` : '$0.00'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {selectedDomain ? '1 year registration' : 'No domain selected'}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${orderSummary.total.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {orderSummary.cycleText === 'Monthly' ? 'Recurring monthly' : 
                       orderSummary.cycleText === 'Yearly' ? 'Recurring annually' : 'Recurring every 2 years'}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">What's Included</h4>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Free SSL Certificate</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 Customer Support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>99.9% Uptime Guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>30-Day Money-Back Guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}