import React, {useState, useEffect} from "react";
import Image from 'next/image';
import { coverageData } from "../app/service/utils";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
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
    const nextIndex = startIndex + 1;
    const maxVisibleCategories = nextIndex + visibleCards;
    if (maxVisibleCategories <= coverageData.length) {
      setStartIndex(nextIndex);
    } else {
      setStartIndex(coverageData.length - visibleCards);
    }
  };

  const showPreviousCard = () => {
    const previousIndex = startIndex - 1;
    if (previousIndex >= 0) {
      setStartIndex(previousIndex);
    }
  };

  // const showPreviousCard = () => {
  //   setCurrentCard((prevCard) => (prevCard === 0 ? coverageData.length - 1 : prevCard - 1));
  // };

  // const showNextCard = () => {
  //   setCurrentCard((prevCard) => (prevCard === coverageData.length - 1 ? 0 : prevCard + 1));
  // };

  return (
    <div className="w-full border-2 border-green pt-12 pb-16">
      <div className="text-white w-[90%] mx-auto mb-2">
        <h3 className="sm:text-md font-bold mb-6 text-lg">Services We Offer</h3>
        <p className="flex flex-col mb-3 font-light sm:text-normal text-[20px]">
          We are a brand hoping to deliver and become one of the largest <br/>
          networks for clients to find world-class vendors
        </p>
      </div>
      <div className="w-[90%] mx-auto flex gap-3 border-2 border-red">
        {coverageData.slice(startIndex, startIndex + visibleCards).map((data, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 box-border border-2 border-blue"
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
              url(${data.backgroundImg}) center/cover no-repeat`,
              width: "297px",
              height: "425px",
              transition: "transform 0.3s ease-in-out", // Optional for smooth transitions
              transform: startIndex + visibleCards > index && index >= startIndex ? 'translateX(-1rem)' : 'translateX(0)',
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
      <div className="flex justify-between w-[90%] mx-auto mt-2">
        <div className="hidden lg:block border-2 border-red" onClick={showPreviousCard}>
          <Image
            src="/svg/prevBtn.svg"
            alt="prev-icon"
            width={30}
            height={30}
            className={`cursor-pointer transition duration-300 ease-in-out hover:border-yellow ${startIndex === 0 ? 'hidden' : ''}`}
          />
        </div>
        <div className="hidden lg:block border-2 border-red" onClick={showNextCard}>
          <Image
            src="/images/nextBtn.png"
            alt="Next-icon"
            width={30}
            height={30}
            className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:border-yellow ${
              startIndex + visibleCards >= coverageData.length ? 'hidden' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
