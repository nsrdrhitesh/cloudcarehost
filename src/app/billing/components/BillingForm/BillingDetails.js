"use client"

export default function BillingDetails({ formData, handleInputChange }) {
  return (
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
  )
}