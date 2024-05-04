'use client';
import React, { useState} from 'react';
import { Input } from '../input';
import CustomButton from "@/components/common/customButton";
import Link from 'next/link';

type IndexType = {
    logo: string;
    title: string;
}

export const Signup = ({logo, title} : IndexType) => {

    return (
        <div className="bg-white w-[65%] md:max-w-xl lg:max-w-2xl h-fit mx-auto px-6 py-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl">
            <div className="flex flex-col gap-9 mx-auto max-w-sm h-fit">
                <div>
                    <h3 className='text-yellow xl:text-xl lg:text-lg md:text-lg text-[24px] font-black text-center'>{logo}</h3>
                    <h6 className='xl:text-lg md:text-md text-[16px] font-bold text-center mt-4'>{title}</h6>
                </div>
                <form className='flex flex-col gap-3'>
                    <Input 
                        label="Username" 
                        placeholder="Enter Username" 
                        type="text" 
                        name="username" 
                    />
                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        type="password"
                        name="pwd"
                    />
                    <Input 
                        label="Confirm Password" 
                        placeholder="Confirm Password" 
                        type="password"
                        name="pwd" 
                    />
                </form>
                <CustomButton
                    onClick={() => {}}
                    borderRadius="4px"
                    width='100%'
                    className='py-1 text-black text-sm md:text-md lg:text-md xl:text-md'
                >
                    Sign Up
                </CustomButton>
                <Link href="" className="flex items-center gap-2 justify-center cursor-pointer md:gap-2 lg:gap-4">
                    <div className='w-[1.4rem] h-[1.4rem] rounded-sm bg-white flex items-center justify-center shadow-lg p-1'>
                        <img src="/icons/google-favicon.png" alt="Google Favicon" className="inline-block max-w-full max-h-full" />
                    </div>
                    <p className="text-[12px] md:text-sm lg:text-[14px] xl:text-[16px]">Continue with Google</p>
                </Link>
            </div>
        </div>

    );
}