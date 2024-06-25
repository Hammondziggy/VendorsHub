"use client";

import React from 'react';
import FilterBox from "@/components/filterBox";
import { useState } from 'react';

const HeroSearchInput = () => {
  const [filterBox, setfilterBox] = useState(false);
  const showFilterBox = () => {
    setfilterBox(!filterBox);
  };

  
  return (
    <>
      <form>
        <div className="relative">
          <img
            src="/icons/filter-icon.png"
            alt="filtter icon"
            onClick={showFilterBox}
            className="absolute top-[1rem] left-[16rem] z-10 w-9 md:w-10 md:left-[39rem] lg:left-[38rem] cursor-pointer"
          />

          <input
            type="text"
            className=" outline-none pr-[7rem] pl-3 py-4 rounded-md md:pr-[30rem] "
            placeholder="Search"
          />
        </div>
      </form>
      {filterBox && <FilterBox />}
    </>
  );
};

export default HeroSearchInput;
