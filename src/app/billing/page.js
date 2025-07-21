import { Suspense } from 'react';
import BillingClient from './BillingClient';

export default function BillingPage() {
  return (
    <Suspense fallback={<div>Loading billing page...</div>}>
      <BillingClient />
    </Suspense>
  );
}
