import { Suspense } from 'react';
import BillingClientPage from './BillingClientPage';

export default function BillingPage() {
  return (
    <Suspense fallback={<div>Loading billing page...</div>}>
      <BillingClientPage />
    </Suspense>
  );
}

