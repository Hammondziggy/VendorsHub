'use client';
import { useAuth } from '@/utils/auth';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

// Define the props type for the WrappedComponent
type WithAuthProps = {
  [key: string]: any;
};

// Higher-order component to wrap protected pages
const withAuth = (WrappedComponent: React.ComponentType<WithAuthProps>) => {
  const ComponentWithAuth: React.FC<WithAuthProps> = (props) => {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname(); // Get the current path

    useEffect(() => {
      if (isLoading) return;

      // Allow the user to visit the homepage without redirecting
      if (!user && pathname !== '/') {
        // Save the current path to session storage to redirect after signup
        sessionStorage.setItem('redirectPath', pathname);
        router.push('/auth/signup');
      }
    }, [user, isLoading, pathname, router]);

    // Show loading state while checking authentication
    if (isLoading) {
      return <div>Loading...</div>; // Consider using a loading spinner or animation
    }

    // Show the wrapped component regardless of the user's authentication status on the homepage
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
