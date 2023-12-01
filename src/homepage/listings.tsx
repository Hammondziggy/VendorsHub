'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { vendorsListings } from '../utils/vendorslistings'; 

// ... (existing imports)
const Listings = () => {
  const previewListings = vendorsListings.slice(0, 6);

  return (
    <div>
      <h2 className='font-bold text-white my-8 text-md ml-14'>
        A Trusted Vendors Listing Platform
      </h2>

      <div className='w-full my-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:w-[90%] mx-auto pb-4 relative'>
      
        {previewListings.map((listing, index) => (
          <div key={index} className="card-shadow w-full">
            <div className="w-full h-[285px]">
              <Image src={listing.image} alt="image" width={393} height={282} />
            </div>
            <div className="flex flex-col p-3">
              <h3 className="text-[1.3rem] text-yellow font-bold">{listing.name}</h3>
            </div>
            <p className="card-text p-3">{listing.description}</p>
          </div>
        ))}

        <div className='absolute -bottom-16 -right-0'>
          <Link href='/vendorsListings'>
            <CustomButton
              textColor='#1E1E1E'
              width='202px'
              height='46px'
              padding='8px 40px'
              background='#FFF'
              borderRadius='2px'
              onClick={() => {}}
            >
              See More
            </CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Listings;
