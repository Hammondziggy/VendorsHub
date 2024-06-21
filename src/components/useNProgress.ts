// src/hooks/useNProgress.ts
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const useNProgress = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => nprogress.start();
    const handleComplete = () => nprogress.done();

    handleStart();
    handleComplete();

    return () => {
      handleComplete();
    };
  }, [pathname, searchParams]);
};

export default useNProgress;
