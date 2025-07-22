"use client"

export default function PaymentMethod({ formData, handleInputChange }) {
  return (
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
  )
}