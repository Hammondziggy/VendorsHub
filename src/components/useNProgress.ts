'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import nprogress from 'nprogress';

// Initialize nprogress settings
const useNProgress = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      nprogress.start();
      nprogress.done();
    };

    handleRouteChange();

    return () => {
      nprogress.done();
    };
  }, [pathname, searchParams]);
};

export default useNProgress;
