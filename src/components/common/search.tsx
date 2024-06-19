'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CustomButton from './customButton';

const Search = ({ onSearch }: any) => {

  const handleSearch = (e: any) => {
    e.preventDefault();
    const searchText = e.target.elements.searchInput.value;
    onSearch(searchText);
  };

  return (
    <div>
      <label htmlFor="search" className="block text-white mb-2">
        Search
      </label>
      <form onSubmit={handleSearch} className="p-1 center border border-white w-full rounded-[6px]">
        <input
          id="searchInput"
          type="text"
          className="w-full bg-primary pl-4 outline-none border-none text-white"
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className='p-[10px] bg-primary border border-primary rounded-full left-4'
        >
          <Image src="/svg/Search.svg" width={25} height={25} alt="search" priority />
        </button>
      </form>
    </div>
  );
};

export default Search;
