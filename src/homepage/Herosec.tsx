"use client";

import Link from "next/link";
import CustomButton from "@/components/common/customButton";
import { useState, useEffect } from "react";
import Navbar from "@/components/NavigationBar";
import FilterBox from "@/components/filterBox";

const images = [
  "/images/Enovalab.png",
  "/images/heroSlideIn1.png",
  "/images/heroSlideIn2.png",
  "/images/heroSlideIn3.png",
  "/images/heroSlideIn4.png",
];

export const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Function to change the current image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    // Clear the interval when the component unmounts or changes
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="flex-grow justify-center w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            className="w-full h-screen object-cover"
            style={{ minWidth: "100%" }}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [filterBox, setfilterBox] = useState(false);
  const showFilterBox = () => {
    setfilterBox(!filterBox);
  };
  return (
    <div className="flex-col w-full flex items-center outline-red relative h-screen">
      <HeroSlider />
      <Navbar className="absolute" />
      <div className="w-[70%] h-30 flex items-center justify-center absolute px-8 py-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex-col flex items-center gap-6 rounded-md">
          <p className="text-white text-md md:text-[26px] lg:text-lg xl:text-xl text-center mb-4 md:w-[800px] font-medium">
            Find the perfect Vendors for your Events Today
          </p>
          <form>
            <div className="relative">
              <img
                src="/icons/filter-icon.png"
                alt="filtter icon"
                onClick={showFilterBox}
                className="absolute top-[1rem] left-[15rem] z-10 w-9 md:w-10 md:left-[37rem] lg:left-[38rem] cursor-pointer"
              />

              <input
                type="text"
                className=" outline-none pr-[7rem] pl-3 py-4 rounded-md md:pr-[30rem] "
                placeholder="Search"
              />
            </div>
          </form>
          <Link
            href="/vendorsListings"
            className="cursor-pointer items-center text-normal"
          >
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
          {filterBox && <FilterBox />}
        </div>
      </div>
    </div>
  );
};

export default Hero;
