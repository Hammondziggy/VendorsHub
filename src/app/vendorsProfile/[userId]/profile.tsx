"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from "@/components/common/customButton";
import Rating from '@/homepage/utils/rating';

interface props {
  vendor: {
    id: number;
    name: string;
    image: string;
    description: string;
    job: string;
    location: string;
    fullname: string;
    phone: string;
    social: string;
    service: string;
    experience: string;
    rating: number;
  };
}

interface ReviewProps {
  starSvg: string;
}

export const Review: React.FC<ReviewProps> = ({ starSvg }) => {
  const star = [];
  for (let i = 0; i < 5; i++) {
    star.push(
      <img
        key={i}
        src={starSvg}
        alt={`star-${i}`}
        style={{ width: "9%", height: "9%", objectFit: "contain" }}
        className="hover:border border-yellow cursor-pointer transition-300"
      />
    );
  }

  return (
    <div className={`inline-flex justify-between items-center w-[50%] mx-auto mt-6`}>
      {star}
    </div>
  );
};


const Profile: React.FC<props> = ({vendor}) => {
  const [textareaValue, setTextareaValue] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = (event :any) => {
    
  }
  const handleTextareaChange = (event :any) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className="w-[90%] mx-auto">
        <div className='flex my-12 relative'>
            <section className='flex flex-col items-center gap-1 w-[70%] mx-auto'>
              <h2 className="font-medium text-md sm-md:text-md md:text-lg lg:text-lg xl:text-xl text-white mx-auto text-center items-center">{vendor.name}</h2>
              <section className="flex items-center justify-between w-[85%] py-2 flex-wrap mx-auto">
                  {vendor.rating ? <Rating rating={vendor.rating} style="sm:text-sm md:text-md lg:text-md xl:text-lg" group="text-center mx-auto" /> : ""}
                  <section className="flex items-center justify-center gap-2 mx-auto">
                      <img src="/svg/location.svg" alt="location-icon" width="7%" height="7%" />
                      <p className="text-white text-[12px] sm-md:text-[13px] md:text-md lg:text-md xl:text-lg font-normal whitespace-nowrap overflow-ellipsis">
                          {vendor.location}
                      </p>
                  </section>
              </section>
              <section className="flex justify-around w-[70%] mb-6">
                <div className='flex flex-col items-center justify-center'>
                  <img
                    src="/svg/chat_icon.svg"
                    alt="chat-icon"
                    className="w-[70%] h-[70%] mx-auto cursor-pointer"
                  />
                  <Link href="/comingsoon" className="flex items-start justify-center w-full cursor-pointer">
                    <p className="text-white font-normal text-[11px] text-center">Message</p>
                  </Link>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img
                    src="/svg/favorite.svg"
                    alt="heart-icon"
                    className="w-[70%] h-[70%] mx-auto cursor-pointer"
                  />
                  <Link href="/comingsoon" className="flex items-start justify-center w-full cursor-pointer">
                    <p className="text-white font-normal text-[11px] text-center">Likes</p>
                  </Link>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img
                    src="/svg/phonecall.svg"
                    alt="telephone-icon"
                    className="w-[70%] h-[70%] mx-auto cursor-pointer"
                  />
                  <Link href="/comingsoon" className="flex items-start justify-center w-full cursor-pointer">
                    <p className="text-white font-normal text-[11px] text-center">Call</p>
                  </Link>
                </div>
              </section>
              <p className="card-text p-3 text-sm md:text-sm lg:text-md w-full mx-auto text-center">{vendor.description}</p>
            </section>
            <section className="flex flex-col justify-start items-end absolute right-0">
                <img
                    src="/svg/Group-socials.svg"
                    alt="facebook-icon"
                    width="65%"
                    height="65%"
                    className="cursor-pointer"
                />
            </section>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full'>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/images/guanfranco-g-82p7JgzKOpo-unsplash.png"
              alt="imgs"
              className="w-full h-full object-cover cursor-pointer"
              width={400}
              height={400}
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/images/vitor-monthay-JL2n-GWXCJo-unsplash.png"
              alt="imgs"
              className="w-full h-full object-cover cursor-pointer"
              width={400}
              height={400}
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/images/arshad-pooloo-GdwWrLHdwpw-unsplash.png"
              alt="imgs"
              className="w-full h-full object-cover cursor-pointer"
              width={400}
              height={400}
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/images/decorated-banquet-hall-with-flowers.png"
              alt="imgs"
              className="w-full h-full object-cover cursor-pointer"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <Link href="/payment" className='cursor-pointer min-w-[30%] h-[4rem] flex justify-center mt-16'>
            <CustomButton
              onClick={() => {}}
              borderRadius="6px"
              textColor="#000"
              padding="10px 30px"
              width="100%"
              height="100%"
              textSize ="text-[1rem] md:text-md lg:text-md xl:text-md"
            >
              Book Now
            </CustomButton>
          </Link>
        </div>
        <div className="flex flex-col mt-16">
          <h4 className="text-white font-normal text-md md:text-lg lg:text-lg xl:text-xl">Leave Review</h4>
          <p className='text-[#888] font-normal text-sm md:text-md lg:text-[1.5rem] xl:text-lg'>Reviews are public and includes your account information</p>
          <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full">
            <Review starSvg="/svg/starPoint.svg" />

            <input
              type="text"
              className="bg-primary text-md font-light border border-white border-opacity-25 w-[60%] h-[2rem] p-8 mt-10 mx-auto text-white rounded-md placeholder-style"
              placeholder="Enter Name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <textarea
              name="message"
              className="bg-primary text-md font-light border border-white border-opacity-25 w-[60%] h-32 p-8 mx-auto mt-10 text-white rounded-md placeholder-style resize-none"
              placeholder={`Type your experience with ${vendor.name}`}
              value={textareaValue}
              onChange={handleTextareaChange}
            />

              <Link 
                href="/comingsoon"
                type="submit"
                className='w-[25%] h-[3.5rem] bg-primary mt-12 text-md font-medium border border-[#F5BD02] border-opacity-25 text-[#F5BD02] rounded-md mx-auto flex items-center justify-center'
              >
                Post
              </Link>
          </form>
        </div>
    </div>
  );
};

Profile.displayName = 'Profile';

export default Profile;