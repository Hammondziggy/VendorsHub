import React from 'react';
import Navbar from './navbar';
import Footer from '@/components/footer'

const PaymentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentLayout;
