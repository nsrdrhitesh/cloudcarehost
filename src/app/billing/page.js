"use client"

import { useRouter } from 'next/router';

export default function BillingPage() {
  const router = useRouter();
  const plan = router.get('plan');
  const cycle = router.get('cycle');

  // Plan details based on selection
  const planDetails = {
    starter: {
      monthly: { price: 2.99, final: 2.99 },
      yearly: { price: 2.49, final: 29.88 },
      biennially: { price: 1.99, final: 47.76 }
    },
    basic: {
      monthly: { price: 4.99, final: 4.99 },
      yearly: { price: 3.99, final: 47.88 },
      biennially: { price: 3.49, final: 83.76 }
    },
    business: {
      monthly: { price: 7.99, final: 7.99 },
      yearly: { price: 6.49, final: 77.88 },
      biennially: { price: 5.49, final: 131.76 }
    },
    premium: {
      monthly: { price: 10.99, final: 10.99 },
      yearly: { price: 8.99, final: 107.88 },
      biennially: { price: 7.49, final: 179.76 }
    }
  };

  // Get cycle label
  const cycleLabel = {
    monthly: 'Monthly',
    yearly: 'Yearly',
    biennially: '2 Years'
  };

  // Calculate savings
  const calculateSavings = () => {
    if (cycle === 'monthly') return 0;
    const monthlyPrice = planDetails[plan].monthly.price;
    const currentPrice = planDetails[plan][cycle].price;
    return ((monthlyPrice - currentPrice) / monthlyPrice * 100).toFixed(0);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold">Complete Your Purchase</h1>
            <p className="opacity-90">You're signing up for {plan} hosting ({cycleLabel[cycle]})</p>
          </div>
          
          {/* Plan Summary */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-blue-900 capitalize">{plan} Plan</h2>
                <p className="text-gray-600">{cycleLabel[cycle]} Billing</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 line-through">
                  {cycle === 'monthly' ? '' : `$${planDetails[plan].monthly.price * (cycle === 'yearly' ? 12 : 24)}`}
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  ${planDetails[plan][cycle].final}
                </p>
                {cycle !== 'monthly' && (
                  <p className="text-green-600 font-medium">Save {calculateSavings()}%</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Billing Form */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">Billing Information</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-1">Payment Method</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" id="credit-card" name="payment" className="h-4 w-4 text-blue-600 focus:ring-blue-500" defaultChecked />
                    <label htmlFor="credit-card" className="ml-2 block text-gray-700">Credit Card</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="paypal" name="payment" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="paypal" className="ml-2 block text-gray-700">PayPal</label>
                  </div>
                </div>
              </div>
              
              {/* Credit Card Fields (shown when credit card is selected) */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Expiration Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">CVV</label>
                    <input type="text" placeholder="123" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
             
              
              {/* Terms and Submit */}
              <div className="flex items-start">
                <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 focus:ring-blue-500 mt-1" required />
                <label htmlFor="terms" className="ml-2 block text-gray-700 text-sm">
                  I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-bold transition shadow-md hover:shadow-lg"
              >
                Complete Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}