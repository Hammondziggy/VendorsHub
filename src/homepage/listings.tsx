'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { vendorsListings } from '../utils/vendorslistings'; 
import Rating from './utils/rating';

const Listings = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initialize window width on component mount
    setWindowWidth(window.innerWidth);

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  if (windowWidth === null) {
    // Return loading state or render nothing until window width is initialized
    return <p>Loading...</p>;
  }
  
  const xlColumns = windowWidth >= 1280;
  const previewListings = xlColumns ? vendorsListings.slice(0, 8) : vendorsListings.slice(0, 6);

  return (
    <div className="w-full py-12">
      <div className="w-[85%] mx-auto">
        <h2 className='sm:text-lg font-bold mb-6 text-xl text-white'>
          A Trusted Vendors Listing Platform
        </h2>

        <div className='my-6 grid gap-6 sm:grid-cols-1 sm-md:grid-cols-2 sm-md:gap-2 
          md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 relative'>  
          {previewListings.map(listing => (
            <Link 
              key={listing.id} 
              href="/vendorsProfile/[userId]" 
              as={`/vendorsProfile/${listing.id}`}
              className="flex flex-col card-shadow"
            >
              <div className="w-full aspect-w-4 aspect-h-3">
                <Image src={listing.image} alt="image" width={393} height={282} />
              </div>
              <div className="flex items-center justify-between gap-2 py-2 px-3">
                <h3 className="sm:text-sm sm-md:text-sm md:text-sm lg:text-[16px] text-yellow font-bold">{listing.name}</h3>
                <section className="flex flex-col items-start justify-end gap-1 sm-md:gap-2">
                  <section className="text-start">{listing.rating && <Rating rating={listing.rating} style="text-sm md:text-sm lg:text-[16px] xl:text-md"/>}</section>                 
                  <section className="flex items-start justify-start gap-1">
                    <Image src="./svg/location.svg" alt="location-icon" width={7} height={7} className="mt-[1.6px]"/>
                    <p className="text-white text-sm sm-md:text-[8px] md:text-sm lg:text-[10px] font-Satoshi font-normal whitespace-nowrap overflow-ellipsis">
                      {listing.location}
                    </p>
                  </section>
                </section>
              </div>     
              <p className="card-text p-3 text-sm md:text-sm lg:text-md">{listing.description}</p>
            </Link>
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
