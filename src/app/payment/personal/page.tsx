'use client';
import React, { useState } from 'react';
import Input from '@/components/common/input';
import Link from 'next/link';
import CustomButton from '@/components/common/customButton';

const Personal = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address: '',
    vendorsName: '',
    eventDetails: '',
    amount: '',
    eventDuration: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    return (
      <form className="w-[62%] mx-auto flex flex-col gap-5 text-white">
        <Input
          label="Name"
          placeholder="Enter your full Name"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />
        <Input
          label="Email"
          placeholder="Enter your email address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />
        <Input
          label="Phone Number"
          placeholder="Enter your mobile number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />
        <Input
          label="Address"
          placeholder="Enter your address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />
        <Input
          label="Vendor's Name"
          placeholder="Enter vendor's name"
          type="text"
          name="vendorsName"
          value={formData.vendorsName}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />
        <Input
          label="Enter event details"
          placeholder="Enter full event details"
          type="text"
          name="eventDetails"
          value={formData.eventDetails}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />
        <Input
          label="Amount"
          placeholder="Enter agreed amount"
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />
        <Input
          label="Event Duration"
          placeholder="Enter start time and end time"
          type="text"
          name="eventDuration"
          value={formData.eventDuration}
          onChange={handleChange}
          className='min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px]'
        />

        <div className='flex justify-center mt-10'>
          <Link href="/payment/payments" className='cursor-pointer min-w-[30%] h-[3.5rem] flex justify-center'>
            <CustomButton
              onClick={() => {}}
              borderRadius="6px"
              textColor="#000"
              padding="16px 70px"
              width="100%"
              height="100%"
              textSize ="text-[1rem] md:text-md lg:text-md xl:text-md"
            >
              Generate Invoice
            </CustomButton>
          </Link>
        </div>
      </form>
    );
  };
  
  export default Personal;
  