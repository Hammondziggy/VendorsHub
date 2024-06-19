'use client';

import Loading from '@/app/loading';
import { useAuth } from '@/utils/auth';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

type WithAuthProps = {
  [key: string]: any;
};

const withAuth = (WrappedComponent: React.ComponentType<WithAuthProps>) => {
  const ComponentWithAuth: React.FC<WithAuthProps> = (props) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (isLoading) {
        console.log('Loading...');
        return;
      }

      console.log('User:', user);
      console.log('Pathname:', pathname);

      if (!user && pathname !== '/') {
        console.log('Setting redirect path and adding event listeners');
        sessionStorage.setItem('redirectPath', pathname);

        const handleInteraction = (): void => {
          console.log('Interaction detected, redirecting to login');
          router.push('/auth/login');
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('keydown', handleInteraction);

        return () => {
          console.log('Cleaning up event listeners');
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('keydown', handleInteraction);
        };
      }
    }, [user, isLoading, pathname, router]);

    if (isLoading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
