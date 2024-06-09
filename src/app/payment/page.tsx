'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/payment/personal');
  }, [router]);

  return null;
};

export default PaymentPage;
