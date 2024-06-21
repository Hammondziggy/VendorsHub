import React from 'react';
import './globals.css';
import '../styles/fonts.css';
import 'nprogress/nprogress.css';
import { Analytics } from '@vercel/analytics/react';
import { AuthProvider } from '@/utils/auth';
import SuspenseBoundary from './SuspenseBoundary';
import ErrorBoundary from './ErrorBoundary';
import ProgressProvider from './ProgressProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='satoshi bg-primary text-black transition duration-300'>
        <AuthProvider>
          <ErrorBoundary>
            <SuspenseBoundary>
              <ProgressProvider>
                {children}
              </ProgressProvider>
            </SuspenseBoundary>
          </ErrorBoundary>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
