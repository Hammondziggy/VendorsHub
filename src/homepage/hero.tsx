"use client";

import Link from 'next/link';
import CustomButton from "@/components/common/customButton";
import { useState, useEffect } from "react";
// import Navbar from '@/components/NavigationBar';
import Navbar from '@/components/NavigationBar';
const images = [
    "/images/Enovalab.png",
    "./images/heroSlideIn1.png",
    "./images/heroSlideIn2.png",
    "./images/heroSlideIn3.png",
    "./images/heroSlideIn4.png",
 ];

 export const HeroSlider = () => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        // Function to change the current image every 5 seconds
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);
    
        // Clear the interval when the component unmounts or changes
        return () => clearInterval(interval);
    }, [currentImage]);

    return(
      <div className="flex-grow justify-center w-full h-screen overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className="w-full h-screen object-cover"
              style={{ minWidth: '100%' }}
              alt=""
            />
          ))}
        </div>
      </div>
    )
}

interface HeroProps {
  scrollToServices: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToServices }) => {

  return (
    <div className="flex-col w-full flex items-center outline-red relative h-screen z-[1]">
      <HeroSlider />
      <Navbar className="absolute"/>
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
              onClick={() => { }}
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