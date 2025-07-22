"use client"
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export default function AccountSecurity({ 
  formData, 
  handleInputChange, 
  generatePassword 
}) {
  return (
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
  )
}