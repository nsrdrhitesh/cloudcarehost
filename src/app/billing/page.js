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

  // In DomainSelection.js
const handleDomainSelected = (domain) => {
  setSelectedDomain(domain);
  if (domain) {
    setUseExistingDomain(false);
    setExistingDomain('');
    setOrderSummary(prev => ({
      ...prev,
      domainName: domain.domain,
      domainPrice: domain.price || 0,
      total: prev.price + (domain.price || 0)
    }));
  }
};

const handleExistingDomainChange = (e) => {
  const value = e.target.value;
  setExistingDomain(value);
  if (value.trim()) {
    setSelectedDomain(null);
    setUseExistingDomain(true);
    setOrderSummary(prev => ({
      ...prev,
      domainName: value,
      domainPrice: 0,
      total: prev.price
    }));
  }
};
  // Handle next step
  const handleNextStep = () => {

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
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        address1: formData.street,
        city: formData.city,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country,
        phonenumber: formData.phone,
        password2: formData.password
      };

      const response = await fetch('/api/client', {
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
      console.log('Client created successfully:', result);

    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate passwords match
  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  setLoading(true);
  setError(null);

  try {
    // 1. Create client
    const clientResponse = await fetch('/api/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        postcode: formData.postcode,
        country: formData.country,
        phone: formData.phone,
        password: formData.password
      }),
    });

    if (!clientResponse.ok) {
      throw new Error('Failed to create client');
    }

    const clientResult = await clientResponse.json();
    console.log('Client creation:', clientResult);

    
    // 2. Create order
    let domainName = '';
    let domainType = '';
    let regPeriod = 0;

    if (useExistingDomain && existingDomain) {
      domainName = existingDomain;
      domainType = '';
    } else if (selectedDomain) {
      domainName = selectedDomain.domain;
      domainType = 'register';
      regPeriod = 1;
    }else {
      throw new Error('No domain selected');
    }

    console.log({useExistingDomain, existingDomain, selectedDomain, domainName, domainType, regPeriod});
    const orderResponse = await fetch('/api/orders', {
      method: 'POST', // MUST be POST
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientId: clientResult.data.clientid,
        pid: hostingPlan.id,
        domain: domainName,
        billingcycle: orderSummary.cycle,
        paymentMethod: formData.paymentMethod,
        domainType: domainType,
        regPeriod: regPeriod
      }),
    });

    if (!orderResponse.ok) {
      throw new Error('Failed to create order');
    }

    const orderResult = await orderResponse.json();
    console.log('Order creation:', orderResult);

    // 3. Handle payment
    if (formData.paymentMethod === 'razorpay') {
      const paymentResponse = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(orderSummary.total * 100),
          currency: orderSummary.currency.code,
          receipt: orderResult.data.orderid
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error('Failed to create payment');
      }

      const paymentResult = await paymentResponse.json();
      console.log('Payment creation:', paymentResult);

      // Initialize Razorpay payment
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: paymentResult.data.amount,
        currency: paymentResult.data.currency,
        name: 'Your Company',
        description: `Order for ${orderSummary.name}`,
        order_id: paymentResult.data.id,
        handler: (response) => {
          router.push(`/success?order_id=${orderResult.data.orderid}`);
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      // For non-Razorpay payments
      //router.push(`/success?order_id=${orderResult.data.orderid}`);
      console.log('Order created successfully:', orderResult);
    }

  } catch (error) {
    console.error('Order processing error:', error);
    setError(error.message || 'An error occurred during order processing');
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
                hostingPlan={hostingPlan}
                selectedDomain={selectedDomain}
                onBack={() => setStep(1)}
                onOrderComplete={handleSubmit}
                useExistingDomain={useExistingDomain}
                existingDomain={existingDomain}
                formData={formData}
                handleInputChange={handleInputChange}
                generatePassword={generatePassword}
                orderSummary={orderSummary}
                handleCurrencyChange={handleCurrencyChange}
                handleBillingCycleChange={handleBillingCycleChange}
                serverLocation={serverLocation}
                setServerLocation={setServerLocation}
                isSubmitting={loading}
                error={error} 
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