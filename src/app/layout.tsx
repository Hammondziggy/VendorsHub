'use client';

import React, { Suspense } from 'react';
import './globals.css';
import '../styles/fonts.css';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from '@/utils/auth';
import ErrorBoundary from './ErrorBoundary';
import useNProgress from '@/components/useNProgress';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useNProgress();

  return (
    <html lang="en">
      <body className='satoshi bg-primary text-black transition duration-300'>
        <AuthProvider>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </ErrorBoundary>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
