"use client";
import React from "react";
import Navbar from '@/components/NavigationBar';

const GalleryHero = () => {
  return (
    <div className="flex-col w-screen flex items-center h-[25rem] relative"
      style={{
        background: `
          linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
          url("/images/vendorListingsBg.png") center center no-repeat
        `,
        backgroundSize: 'cover',
      }}
    >
      <Navbar />
      <div
        className="w-[90%] text-white flex flex-col items-start md:justify-start justify-center my-auto absolute left-14 bottom-8 bg-black bg-opacity-90 p-8 rounded-sm"
        style={{ maxWidth: "45%" }}
      >
        <h1 className="hero-text md:text-[2.5rem] text-[1.3rem] sm:text-center md:text-left mb-3">
            Gallery <br/> Listing
        </h1>
        <p className="md:text-md text-sm mb-6 lg:w-4/5 sm:text-center md:text-left">
            We create a seamless expereince for both clients and vendors
        </p>
      </div>
    </div>
  );
}

export default GalleryHero;
