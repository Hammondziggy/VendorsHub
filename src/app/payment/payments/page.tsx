'use client';
import React, { useState } from 'react';
import Input from '@/components/common/input';
import Link from 'next/link';
import { SideNav } from './sideNav';
import CustomButton from '@/components/common/customButton';

const Payments = () => {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    accountName: '',
    accountNumber: '',
    bankNumber: '',
    totalAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      
      <div className='w-[90%] mx-auto my-4 flex'>
        <aside className='mt-20'>
          <SideNav />
        </aside>
        <form className="w-[58%] mx-auto flex flex-col gap-7 text-white">
          <h2 className='text-yellow text-md font-bold'>BANK TRANSFER</h2>
          <Input
            label="Invoice Number"
            placeholder="12121212121212121212"
            type="text"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
            className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
          />
          <Input
            label="Account Name"
            placeholder="Account Name"
            type="text"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
          />
          <Input
            label="Account Number"
            placeholder="Account Number"
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
          />
          <Input
            label="Bank Number"
            placeholder="Bank Number"
            type="text"
            name="bankNumber"
            value={formData.bankNumber}
            onChange={handleChange}
            className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
          />
          <Input
            label="Total Amount"
            placeholder="Total Amount"
            type="text"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
          />
          <p className='my-6 mx-auto'>Please make a transfer to the account details above</p>
          <div className='flex justify-center'>
            <Link href="/payment/confirmation" className='cursor-pointer min-w-[30%] h-[3.5rem] flex justify-center'>
              <CustomButton
                onClick={() => {}}
                borderRadius="6px"
                textColor="#000"
                padding="16px 70px"
                width="100%"
                height="100%"
                textSize ="text-[1rem] md:text-md lg:text-md xl:text-md"
              >
                I've Sent the Money
              </CustomButton>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Payments;
