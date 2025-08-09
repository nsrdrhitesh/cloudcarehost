import { Suspense } from 'react'
import Loading from '@/app/components/Loading'
import BillingContent from './BillingContent'

export default function BillingPage() {
  return (
    <Suspense fallback={<Loading />}>
      <BillingContent />
    </Suspense>
  )
}