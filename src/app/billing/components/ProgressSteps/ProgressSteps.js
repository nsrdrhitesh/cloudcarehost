"use client"
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function ProgressSteps({ step }) {
  return (
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
  )
}