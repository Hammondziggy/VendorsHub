"use client";
//Services component

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { coverageData } from "./utils/serviceUtils";

const Services = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(visibleCards);
  const [isMobile, setIsMobile] = useState(false);

  const updateVisibleCards = () => {
    const screenWidth = window.innerWidth;
    let newVisibleCards = 4;

    if (screenWidth < 389) {
      newVisibleCards = 1;
      setIsMobile(true);
    } else if (screenWidth <= 480) {
      newVisibleCards = 2;
      setIsMobile(false);
    } else {
      setIsMobile(false);
    }

    setVisibleCards(newVisibleCards);
  };

  useEffect(() => {
    updateVisibleCards();

    window.addEventListener('resize', updateVisibleCards);

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  const showNextCard = () => {
    const totalCards = coverageData.length - 2;
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  return (
    <div ref={ref} className="w-full pt-12 pb-12">
      <div className="text-white w-[85%] mx-auto mb-2">
        <h3 className="sm:text-lg font-bold mb-6 text-xl text-white">Services We Offer</h3>
        <p className="flex flex-col flex-shrink-0 mb-2 font-light text-[20px]">
          We are a brand hoping to deliver and become one of the largest <br />
          networks for clients to find world-class vendors
        </p>
      </div>
      <div className={`w-[85%] mx-auto border border-yellow`}>
        <div className={`w-full flex gap-2 ${ isMobile ? 'flex-col overflow-hidden' : ''}`}>
          {coverageData.map((data, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0`}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${data.backgroundImg}) center/cover no-repeat`,
                width: '328px',
                height: '416px',
              }}
            >
              <div className={`aspect-w-full aspect-h-9 flex flex-col items-start gap-2 text-white p-4 absolute text-lg top-60`}>
                <h3 className="font-bold text-[24px] leading-normal">{data.title}</h3>
                <p className="font-light text-[14px]">{data.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* add nextBtn here */}
      <div className="flex justify-end w-[85%] mx-auto mt-2">
        <div className="hidden lg:block" onClick={showNextCard}>
          <Image
            src="/images/nextBtn.png"
            alt="Next-icon"
            width={30}
            height={30}
            className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:border-yellow"
          />
        </div>
      </div>
    </div>
  );
});
Services.displayName = 'Services';

export default Services;