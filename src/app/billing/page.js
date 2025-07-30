"use client"
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Loading from '@/app/components/Loading'
import RazorpayScript from '@/app/components/RazorpayScript'
import ProgressSteps from './components/ProgressSteps/ProgressSteps'
import DomainSelection from './components/DomainSelection/DomainSelection'
import BillingForm from './components/BillingForm/BillingForm'
import OrderSummary from './components/OrderSummary/OrderSummary'

export default function BillingPage() {
  const router = useRouter()
  const [error, setError] = useState(null)
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(true)
  const [domainLoading, setDomainLoading] = useState(false)
  const [orderSummary, setOrderSummary] = useState(null)
  const [hostingPlan, setHostingPlan] = useState(null)
  const [domainSearch, setDomainSearch] = useState('')
  const [selectedDomain, setSelectedDomain] = useState(null)
  const [existingDomain, setExistingDomain] = useState('')
  const [useExistingDomain, setUseExistingDomain] = useState(true)
  const [serverLocation, setServerLocation] = useState('us-east')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  
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


  // Fetch hosting plan data based on ID from URL
useEffect(() => {
  const fetchHostingPlan = async () => {
    try {
      const planId = searchParams.get('id')
      const cycle = searchParams.get('cycle') || 'yearly' // Get cycle from URL or default to yearly
      
      if (!planId) {
        router.push('/hosting')
        return
      }
      
      const response = await fetch(`/api/hosting/${planId}`)
      const data = await response.json()
      
      if (data.success) {
        setHostingPlan(data.data)
        const defaultPricing = data.data.pricing.find(p => p.currency.code === 'USD') || data.data.pricing[0]
        setSelectedCurrency(defaultPricing.currency.code)
        
        const getNumericPrice = (priceStr) => {
          const numericValue = parseFloat(priceStr.replace(/[^\d.-]/g, ''))
          return isNaN(numericValue) ? 0 : numericValue
        }

        // Use the cycle from URL params
        const cyclePrice = getNumericPrice(defaultPricing[cycle].discount_price)
        const originalPrice = getNumericPrice(defaultPricing[cycle].price)
        
        const cycleTextMap = {
          monthly: 'Monthly',
          yearly: 'Yearly',
          biennially: '2 Years'
        }
        
        setOrderSummary({
          id: data.data.id,
          name: data.data.name,
          type: data.data.hosting_type,
          cycle: cycle, // Use the cycle from URL
          price: cyclePrice,
          originalPrice: originalPrice,
          cycleText: cycleTextMap[cycle],
          domainPrice: 0,
          total: cyclePrice,
          currency: defaultPricing.currency
        })
      } else {
        router.push('/hosting')
      }
    } catch (error) {
      console.error('Error fetching hosting plan:', error)
      router.push('/hosting')
    } finally {
      setLoading(false)
    }
  }
  
  fetchHostingPlan()
}, [searchParams, router])

  // Handle domain selection
  const handleDomainSelected = (domain) => {
  setSelectedDomain(domain);
  
  // If we're selecting a new domain (not using existing)
  if (domain) {
    setUseExistingDomain(false);
    setExistingDomain(''); // Clear existing domain field
    
    // Update order summary with complete domain info
    setOrderSummary(prev => ({
      ...prev,
      domainName: domain.name || domain.domain,
      domainPrice: domain.price || 0,
      total: prev.price + (domain.price || 0)
    }));
  }
};

const handleExistingDomainChange = (e) => {
  const value = e.target.value;
  setExistingDomain(value);
  
  // When typing in existing domain, clear any selected domain
  if (value.trim()) {
    setSelectedDomain(null);
    setUseExistingDomain(true);
    
    // Update order summary
    setOrderSummary(prev => ({
      ...prev,
      domainName: value,
      domainPrice: 0, // No cost for existing domains
      total: prev.price
    }));
  }
};

  // Handle next step
  const handleNextStep = () => {
    console.log('Continue button clicked')
  console.log('Current step:', step)
  console.log('Use existing domain:', useExistingDomain)
  console.log('Existing domain value:', existingDomain)
  console.log('Selected domain:', selectedDomain)
  if (step === 1) {
    const hasValidDomain = (useExistingDomain && existingDomain.trim()) || 
                         (!useExistingDomain && selectedDomain);
    
    if (!hasValidDomain) {
      setError('Please select or enter a domain');
      return;
    }

    // Final sync before proceeding
    if (useExistingDomain) {
      setOrderSummary(prev => ({
        ...prev,
        domainName: existingDomain,
        domainPrice: 0,
        total: prev.price
      }));
    }
  }
  
  setStep(step + 1);
  setError(null);
};

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Handle currency change
  const handleCurrencyChange = (currencyCode) => {
    if (!hostingPlan) return
    
    const newCurrency = hostingPlan.pricing.find(p => p.currency.code === currencyCode)
    if (!newCurrency) return
    
    setSelectedCurrency(currencyCode)
    
    // Update order summary with new currency pricing
    const currentCycle = orderSummary?.cycle || 'yearly'
    const cycleData = newCurrency[currentCycle]
    
    setOrderSummary(prev => ({
      ...prev,
      price: parseFloat(cycleData.discount_price.replace(/[^\d.-]/g, '')),
      originalPrice: parseFloat(cycleData.price.replace(/[^\d.-]/g, '')),
      currency: newCurrency.currency,
      total: parseFloat(cycleData.discount_price.replace(/[^\d.-]/g, '')) + (selectedDomain?.price || 0)
    }))
  }

  // Handle domain search
  const handleDomainSearch = async (e) => {
    e.preventDefault()
    if (!domainSearch.trim()) return
    
    setDomainLoading(true)
    try {
      const response = await fetch(`/api/domain/check?domain=${domainSearch}`)
      console.log('Domain search URL:', response)
      const data = await response.json()
      console.log('Domain check response:', data)
      if (data.success) {
        setDomainOptions(data.domains)
      } else {
        setError(data.error || 'Failed to check domain availability')
      }
    } catch (error) {
      setError('Error checking domain availability')
    } finally {
      setDomainLoading(false)
    }
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

  // Handle billing cycle change
  const handleBillingCycleChange = (cycle) => {
    if (!hostingPlan || !orderSummary) return
    
    const currencyPricing = hostingPlan.pricing.find(p => p.currency.code === selectedCurrency)
    if (!currencyPricing) return
    
    const cycleData = currencyPricing[cycle]
    const cycleTextMap = {
      monthly: 'Monthly',
      yearly: 'Yearly',
      biennially: '2 Years'
    }
    
    setOrderSummary(prev => ({
      ...prev,
      cycle,
      price: parseFloat(cycleData.discount_price.replace(/[^\d.-]/g, '')),
      originalPrice: parseFloat(cycleData.price.replace(/[^\d.-]/g, '')),
      cycleText: cycleTextMap[cycle],
      total: parseFloat(cycleData.discount_price.replace(/[^\d.-]/g, '')) + (selectedDomain?.price || 0)
    }))
  }

  // Create client in WHMCS
  const createClient = async () => {
    try {
      const clientData = {
        action: 'AddClient',
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        address1: formData.street,
        city: formData.city,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country,
        phonenumber: formData.phone,
        password2: formData.password,
        responsetype: 'json'
      };

      const response = await fetch('/api/whmcs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
      });

      const result = await response.json();

      if (result.result !== 'success') {
        throw new Error(result.message || 'Failed to create client');
      }

      return result.clientid;

    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  };

  // Create order in WHMCS
  const createOrder = async (clientId) => {
    try {
      const orderData = {
        action: 'AddOrder',
        clientid: clientId,
        pid: [hostingPlan.id],
        domain: [useExistingDomain ? existingDomain : selectedDomain?.name],
        billingcycle: [orderSummary.cycle],
        paymentmethod: formData.paymentMethod,
        responsetype: 'json'
      };

      // Add domain registration details if new domain
      if (!useExistingDomain && selectedDomain) {
        orderData.domaintype = ['register'];
        orderData.regperiod = [1]; // 1 year registration
      }

      const response = await fetch('/api/whmcs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (result.result !== 'success') {
        throw new Error(result.message || 'Failed to create order');
      }

      return result;

    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);
    
    try {
      // First create client in WHMCS
      const clientId = await createClient();
      
      // Then create the order
      const orderResult = await createOrder(clientId);

      // If payment method is razorpay, proceed with payment
      if (formData.paymentMethod === 'razorpay') {
        // Prepare Razorpay order data
        const orderData = {
          amount: Math.round(orderSummary.total * 100), // Convert to paise
          currency: orderSummary.currency.code,
          receipt: orderResult.orderid
        };

        // Create Razorpay order
        const orderResponse = await fetch('/api/razorpay', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(orderData)
        });

        if (!orderResponse.ok) {
          const errorData = await orderResponse.json();
          throw new Error(errorData.error || `Server returned ${orderResponse.status}`);
        }

        const razorpayResult = await orderResponse.json();
        
        if (!razorpayResult.success) {
          throw new Error(razorpayResult.error || 'Failed to create payment order');
        }

        // Prepare Razorpay options
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag',
          amount: razorpayResult.order.amount,
          currency: razorpayResult.order.currency,
          name: 'Cloud Care Host',
          description: `${orderSummary.type} - ${orderSummary.name}`,
          image: '/logo.png',
          order_id: razorpayResult.order.id,
          handler: function(response) {
            console.log('Payment success:', response);
            // Redirect to success page with order details
            router.push(`/success?order_id=${orderResult.orderid}`);
          },
          prefill: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            contact: formData.phone
          },
          notes: {
            address: `${formData.street}, ${formData.city}, ${formData.country}`,
            order_id: orderResult.orderid,
            domain: useExistingDomain ? existingDomain : selectedDomain?.name
          },
          theme: {
            color: '#2563eb'
          }
        };

        // Handle payment failure
        options.modal = {
          ondismiss: function() {
            alert('Payment was cancelled. Your order has been created but not paid.');
          }
        };

        // Open Razorpay checkout
        const rzp = new window.Razorpay(options);
        rzp.open();
        
        rzp.on('payment.failed', function(response) {
          console.error('Payment failed:', response);
          alert(`Payment failed: ${response.error.description}`);
        });

      } else {
        // For non-razorpay payments, redirect to success page
        router.push(`/success?order_id=${orderResult.orderid}`);
      }

    } catch (error) {
      console.error('Full payment error:', error);
      setError(error.message || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading || !orderSummary || !hostingPlan) return <Loading />

  return (
    <main className="bg-gray-50 min-h-screen">
      <RazorpayScript />
      <ProgressSteps step={step} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {step === 1 && (
              <DomainSelection
                useExistingDomain={useExistingDomain}
                setUseExistingDomain={setUseExistingDomain}
                existingDomain={existingDomain}
                setExistingDomain={setExistingDomain}
                domainSearch={domainSearch}
                setDomainSearch={setDomainSearch}
                domainLoading={domainLoading}
                selectedDomain={selectedDomain}
                onDomainSelected={handleDomainSelected} 
                onNextStep={handleNextStep}
                error={error}
              />
            )}
            
            {step === 2 && (
              <BillingForm
                formData={formData}
                handleInputChange={handleInputChange}
                generatePassword={generatePassword}
                handleSubmit={handleSubmit}
                setStep={setStep}
                error={error}
                hostingPlan={hostingPlan}
                orderSummary={orderSummary}
                selectedCurrency={selectedCurrency}
                handleCurrencyChange={handleCurrencyChange}
                handleBillingCycleChange={handleBillingCycleChange}
                serverLocation={serverLocation}
                setServerLocation={setServerLocation}
                selectedDomain={selectedDomain}
                existingDomain={existingDomain}
                useExistingDomain={useExistingDomain}  
              />
            )}
          </div>
          
          <div className="lg:w-1/3">
            <OrderSummary
              orderSummary={orderSummary}
              hostingPlan={hostingPlan}
              useExistingDomain={useExistingDomain}
              existingDomain={existingDomain}
              selectedDomain={selectedDomain}
            />
          </div>
        </div>
      </div>
    </main>
  )
}