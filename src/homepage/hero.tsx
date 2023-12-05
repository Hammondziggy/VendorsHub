"use client";

import Link from 'next/link'
import CustomButton from "@/components/common/customButton";
import React from "react";
import Navbar from '@/components/navbar';

const Hero = () => {
    return (
        <div className="flex-col w-full flex items-center relative h-screen"
            style={{
                background: `
                    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
                    url("./images/Enovalab.png") center center no-repeat
                `,
                backgroundSize: 'cover',
                overflow: 'hidden', // Add overflow: hidden to prevent child overflow
            }}
        >
            <Navbar />
            <div className="w-[70%] h-30 flex items-center justify-center absolute px-8 py-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Use rgba for both color and opacity
                }}
            >
                <div className="flex-col flex items-center gap-6 rounded-md">
                    <p className="text-white text-md md:text-[26px] lg:text-lg xl:text-xl text-center mb-4 w-full">
                        Simplify Your Vendor Search – Discover, Compare, and Choose with Ease
                    </p>
                    <Link href="@/vendorsListings" className='cursor-pointer text-normal'>
                        <CustomButton
                            onClick={() => {}}
                            padding="15px 40px"
                            borderRadius="5px"
                            textColor="#000"
                            width="12rem"
                            height="4rem"
                        >
                            Hire Now
                        </CustomButton>
                    </Link>
                </div>
            </div>
        </div>

    );
}
 
export default Hero;
