'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { vendorsListings } from '../utils/vendorslistings'; 
import Rating from './utils/rating';

// ... (existing imports)
const Listings = () => {
  const previewListings = vendorsListings.slice(0, 6);

  return (
    <div className="w-full py-12">
      <div className="w-[85%] mx-auto">
        <h2 className='font-bold text-white text-md'>
          A Trusted Vendors Listing Platform
        </h2>

        <div className='my-6 grid gap-6 sm:grid-cols-1 sm-md:grid-cols-2 sm-md:gap-2 
          md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 relative'>  
          {previewListings.map((listing, index) => (
            <div key={index} className="flex flex-col card-shadow w-full">
              <div className="w-full aspect-w-4 aspect-h-3">
                <Image src={listing.image} alt="image" width={393} height={282} />
              </div>
              <div className="flex items-center justify-between px-3">
                <h3 className="sm:text-sm sm-md:text-[10px] md:text-sm lg:text-[16px] text-yellow font-bold">{listing.name}</h3>
                <section className="flex flex-col items-start justify-end gap-1 sm-md:gap-2">
                  {listing.rating && <Rating rating={listing.rating} />}
                  <div className="flex items-center justify-start gap-2">
                    <Image src="./svg/location.svg" alt="location-icon" width={8} height={8}/>
                    <p className="text-white text-sm sm-md:text-[8px] md:text-sm lg:text-[10px] font-['Satoshi'] font-normal">{listing.location}</p>
                  </div>
                </section>
              </div>     
              <p className="card-text p-3 text-sm md:text-sm lg:text-md">{listing.description}</p>
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
    </div>
  );
};

export default Listings;
