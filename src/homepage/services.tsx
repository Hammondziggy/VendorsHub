import React, {useState, useEffect} from "react";
import Image from 'next/image';
import { coverageData } from "../app/service/utils";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(visibleCards);
  // borrowed code
  const updateVisibleCards = () => {
    const screenWidth = window.innerWidth;
    let newVisibleCards = 3;

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
    const totalCards = coverageData.length - 2;
  
    // If there are more cards than the visible cards, loop back to the first card
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };
  
  return (
    <div className="w-full border-2 border-green pt-12 pb-12">
      <div className="text-white w-[85%] mx-auto mb-2">
        <h3 className="sm:text-md font-bold mb-6 text-lg">Services We Offer</h3>
        <p className="flex flex-col mb-3 font-light sm:text-normal text-[20px]">
          We are a brand hoping to deliver and become one of the largest <br/>
          networks for clients to find world-class vendors
        </p>
      </div>
      <div className="w-[85%] mx-auto flex gap-2 border-2 border-red">
        {coverageData.slice(startIndex, startIndex + visibleCards).map((data, index) => (
          <div
            key={index}
            className="relative flex-grow transition-transform ease-in-out duration-500 transform translate-x-0 border-2 border-blue"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
              url(${data.backgroundImg}) center/cover no-repeat`,
              width: "328px", // Set a minimum width to ensure it doesn't collapse
              height: "416px", // Set a minimum height to ensure it doesn't collapse
            }}
          >
            <div className="aspect-w-full aspect-h-9 flex flex-col flex-shrink-0 items-start gap-2 text-white p-4 top-60 absolute border-2 border-red">
              <h3 className="font-bold text-[24px] leading-normal">{data.title}</h3>
              <p className="font-light text-[14px]">{data.body}</p>
            </div>
          </div>
        ))}
      </div>
      {/* add nextBtn here */}
      <div className="flex justify-end w-[85%] mx-auto mt-2">
        <div className="hidden lg:block border-2 border-red" onClick={showNextCard}>
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
