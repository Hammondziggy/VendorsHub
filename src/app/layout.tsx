//my RootLayout

import React from 'react';
import './globals.css';
import '../styles/fonts.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Vendors Hub',
  description: 'Resolve issues around hiring vendors for your event.',
  openGraph: {
    images: '/images/opengraph-image.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='satoshi bg-primary text-black transition duration-300'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
