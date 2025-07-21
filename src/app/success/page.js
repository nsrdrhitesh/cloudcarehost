"use client"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('order_id')
  const [orderDetails, setOrderDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      // You can fetch order details here if needed
      setLoading(false)
    }
  }, [orderId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <div className="flex justify-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Order Successful!</h1>
          <p className="mt-2 text-lg text-gray-600">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          {orderId && (
            <div className="mt-6 bg-gray-50 p-4 rounded-lg inline-block">
              <p className="text-sm font-medium text-gray-900">Order ID: <span className="font-normal">{orderId}</span></p>
            </div>
          )}
          
          <div className="mt-10">
            <Link
              href="/account"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Go to My Account
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Need help? <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact our support team</Link></p>
          </div>
        </div>
      </div>
    </main>
  )
}