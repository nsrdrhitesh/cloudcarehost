"use client"
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import OrderItem from './OrderItem'

export default function OrderSummary({ 
  orderSummary, 
  hostingPlan, 
  useExistingDomain, 
  existingDomain, 
  selectedDomain 
}) {
  // Calculate total including domain price
  const calculateTotal = () => {
    const hostingPrice = orderSummary.price || 0
    const domainPrice = selectedDomain ? parseFloat(selectedDomain.price) : 0
    return hostingPrice + domainPrice
  }
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <OrderItem 
            title="Hosting Plan"
            value={`${hostingPlan.name} - ${hostingPlan.hosting_type}`}
            price={orderSummary.price}
            originalPrice={orderSummary.originalPrice > orderSummary.price ? orderSummary.originalPrice : null}
            currency={orderSummary.currency}
            description={`${orderSummary.cycleText} Billing`}
          />
          
          <OrderItem 
            title="Domain"
            value={useExistingDomain ? existingDomain || 'No domain selected' : selectedDomain?.domain || 'No domain selected'}
            price={selectedDomain ? parseFloat(selectedDomain.price) : 0}
            currency={orderSummary.currency}
            description={selectedDomain ? (
              useExistingDomain ? 'Existing domain' : '1 year registration'
            ) : 'No domain selected'}
          />
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{orderSummary.currency.symbol}{calculateTotal().toFixed(2)}</span>
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
            {hostingPlan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}