import React, {useState, useEffect} from "react";
import Image from 'next/image';
import { coverageData } from "../app/service/utils";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  
  const updateVisibleCards = () => {
    const screenWidth = window.innerWidth;
    let newVisibleCards = 4;

    if (screenWidth < 480) {
      newVisibleCards = 1;
    } else if (screenWidth < 768) {
      newVisibleCards = 2;
    } else if (screenWidth < 1024) {
      newVisibleCards = 3;
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
    setStartIndex((prevIndex) => (prevIndex + 1) % coverageData.length);
  };

  return (
    <div className="w-full overflow-hidden py-16">
      <div className="text-white w-[90%] mx-auto mb-2">
        <h3 className="sm:text-md font-bold mb-6 text-lg">Services We Offer</h3>
        <p className="flex flex-col mb-3 font-light sm:text-normal text-[20px]">
          We are a brand hoping to deliver and become one of the largest <br/>
          networks for clients to find world-class vendors
        </p>
      </div>
      <div className="w-[90%] mx-auto flex gap-3">
        {coverageData.slice(startIndex, startIndex + visibleCards).map((data, index) => (
          <div
            key={index}
            className="relative flex-shrink-0"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
              url(${data.backgroundImg}) center/cover no-repeat`,
              width: "297px",
              height: "425px",
            }}
          >
            <div className="aspect-w-full aspect-h-9 flex flex-col flex-shrink-0 items-start gap-2 text-white p-4 top-60 absolute">
              <h3 className="font-bold text-[24px] leading-normal">{data.title}</h3>
              <p className="font-light text-[14px]">{data.body}</p>
            </div>
          </div>
        ))}     
      </div>
      {/* add nextBtn here */}
      <div className="flex justify-end w-[90%] mx-auto mt-2">
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
};

export default Services;
