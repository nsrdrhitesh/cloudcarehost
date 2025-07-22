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
  const [domainOptions, setDomainOptions] = useState([])
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
        if (!planId) {
          router.push('/hosting')
          return
        }
        
        const response = await fetch(`/api/hosting/${planId}`)
        const data = await response.json()
        
        if (data.success) {
          setHostingPlan(data.data)
          // Initialize order summary with default values
          const defaultPricing = data.data.pricing.find(p => p.currency.code === 'USD') || data.data.pricing[0]
          setSelectedCurrency(defaultPricing.currency.code)
          
          setOrderSummary({
            id: data.data.id,
            name: data.data.name,
            type: data.data.hosting_type,
            cycle: 'yearly',
            price: parseFloat(defaultPricing.yearly.discount_price.replace(/[^\d.-]/g, '')),
            originalPrice: parseFloat(defaultPricing.yearly.price.replace(/[^\d.-]/g, '')),
            cycleText: 'Yearly',
            domainPrice: 14.99,
            total: parseFloat(defaultPricing.yearly.discount_price.replace(/[^\d.-]/g, '')) + 14.99,
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

  const createOrderRecord = async () => {
    try {
      const orderData = {
        plan_id: orderSummary.id,
        domain_name: useExistingDomain ? existingDomain : selectedDomain?.name,
        domain_type: useExistingDomain ? 'existing' : 'new',
        billing_cycle: orderSummary.cycle,
        server_location: serverLocation,
        amount: orderSummary.total,
        currency: orderSummary.currency.code,
        payment_method: formData.paymentMethod,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        postcode: formData.postcode,
        account_password: formData.password
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to create order record');
      }

      return result.order_id;

    } catch (error) {
      console.error('Error creating order record:', error);
      throw error;
    }
  };

  // Update the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setLoading(true);
    
    try {
      // Create order record in database first
      const orderId = await createOrderRecord();
      console.log('Order created with ID:', orderId);

      // Prepare Razorpay order data
      const orderData = {
        amount: Math.round(orderSummary.total * 100), // Convert to paise
        currency: orderSummary.currency.code,
        receipt: orderId
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

      const orderResult = await orderResponse.json();
      
      if (!orderResult.success) {
        throw new Error(orderResult.error || 'Failed to create payment order');
      }

      // Prepare Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_1DP5mmOlF5G5ag',
        amount: 300,
        // amount: orderResult.order.amount,
        currency: orderResult.order.currency,
        name: 'Cloud Care Host',
        description: `${orderSummary.type} - ${orderSummary.name}`,
        image: '/logo.png',
        order_id: orderResult.order.id,
        handler: async function(response) {
          console.log('Payment success:', response);
          
          // Update order status to success
          try {
            const updateResponse = await fetch(`/api/orders/${orderId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                payment_status: 'success',
                payment_id: response.razorpay_payment_id,
                payment_response: response
              })
            });

            const updateResult = await updateResponse.json();
            
            if (!updateResult.success) {
              console.error('Failed to update order status:', updateResult.error);
            }
          } catch (updateError) {
            console.error('Error updating order status:', updateError);
          }

          router.push(`/success?order_id=${orderId}`);
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: `${formData.street}, ${formData.city}, ${formData.country}`,
          order_id: orderId,
          domain: useExistingDomain ? existingDomain : selectedDomain?.name
        },
        theme: {
          color: '#2563eb'
        }
      };

      // Handle payment failure
      options.modal = {
        ondismiss: async function() {
          // Update order status to failed if payment is dismissed
          try {
            const updateResponse = await fetch(`/api/orders/${orderId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                payment_status: 'failed',
                payment_response: { reason: 'user_dismissed' }
              })
            });

            const updateResult = await updateResponse.json();
            
            if (!updateResult.success) {
              console.error('Failed to update order status:', updateResult.error);
            }
          } catch (updateError) {
            console.error('Error updating order status:', updateError);
          }
        }
      };

      // Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
      
      rzp.on('payment.failed', async function(response) {
        console.error('Payment failed:', response);
        
        // Update order status to failed
        try {
          const updateResponse = await fetch(`/api/orders/${orderId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              payment_status: 'failed',
              payment_id: response.error.metadata.payment_id,
              payment_response: response.error
            })
          });

          const updateResult = await updateResponse.json();
          
          if (!updateResult.success) {
            console.error('Failed to update order status:', updateResult.error);
          }
        } catch (updateError) {
          console.error('Error updating order status:', updateError);
        }

        alert(`Payment failed: ${response.error.description}`);
      });

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
                domainOptions={domainOptions}
                domainLoading={domainLoading}
                selectedDomain={selectedDomain}
                handleDomainSearch={handleDomainSearch}
                handleSelectDomain={handleSelectDomain}
                handleNextStep={handleNextStep}
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