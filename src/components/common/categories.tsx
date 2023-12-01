'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { categories } from '@/utils/categories';
import Search from '@/components/common/search';
import { vendorsListings } from '@/utils/vendorslistings';
import CustomButton from '@/components/common/customButton';

const Categories = () => {
  const [visibleCategories, setVisibleCategories] = useState(6);
  const [startIndex, setStartIndex] = useState(0);
  const [filteredVendorsListings, setFilteredVendorsListings] = useState(vendorsListings);
  const [selectedListing, setSelectedListing] = useState<any>(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  const handleSearch = (searchText: string) => {
    setSearchText(searchText); // Update the search text state

    if (searchText.trim() === '') {
      // Empty search text, show all categories
      setFilteredVendorsListings(vendorsListings);
    } else {
      // Non-empty search text, filter the listings
      const filteredListings = vendorsListings.filter(
        (listing) =>
          listing.name.toLowerCase().includes(searchText.toLowerCase()) ||
          listing.job.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredVendorsListings(filteredListings);
    }
  };

  const updateVisibleCategories = () => {
    const screenWidth = window.innerWidth;
    let newVisibleCategories = 9;

    if (screenWidth < 480) {
      newVisibleCategories = 1;
    } else if (screenWidth < 768) {
      newVisibleCategories = 2;
    } else if (screenWidth < 1024) {
      newVisibleCategories = 3;
    }

    setVisibleCategories(newVisibleCategories);
  };

  useEffect(() => {
    updateVisibleCategories();

    window.addEventListener('resize', updateVisibleCategories);

    return () => {
      window.removeEventListener('resize', updateVisibleCategories);
    };
  }, []);

  const showNextCategories = () => {
    const nextIndex = startIndex + 1;
    const maxVisibleCategories = nextIndex + visibleCategories;
    if (maxVisibleCategories <= categories.length) {
      setStartIndex(nextIndex);
    } else {
      setStartIndex(categories.length - visibleCategories);
    }
  };

  const showPreviousCategories = () => {
    const previousIndex = startIndex - 1;
    if (previousIndex >= 0) {
      setStartIndex(previousIndex);
    }
  };

  const handleHireClick = (listing: any) => {
    setSelectedListing(listing);
  };

  const closeModal = () => {
    setSelectedListing(null);
  };
  
  return (
    <div className="w-full mb-6">
      <div className="border-t border-b border-white w-full">
        <div className="flex items-center justify-between mx-6">
          <div onClick={showPreviousCategories}>
            <Image
              src="/svg/leftArrow.svg"
              alt="icon"
              width={25}
              height={25}
              className={`cursor-pointer transition duration-300 ease-in-out hover:border-yellow ${startIndex === 0 ? 'hidden' : ''}`}
            />
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {categories.slice(startIndex, startIndex + visibleCategories).map((category, index) => (
              <div key={index} className="text-center flex flex-col items-center cursor-pointer group">
                <div
                  className="border border-white flex items-center justify-center category my-1 rounded-[50%] transition duration-300 ease-in-out transform hover:scale-105 hover:border-yellow border-1 border-transparent group-hover:border-yellow"
                  style={{
                    background: `url(../../images/${category.img}) center/cover no-repeat`,
                    width: "40px",
                    height: "40px",
                  }}
                ></div>
                <p
                  className="card-text group-hover:text-yellow h-6 overflow-hidden"
                  title={category.job}
                >
                  {category.job}
                </p>
              </div>
            ))}
          </div>

          <div onClick={showNextCategories} className="mx-2">
            <Image
              src="/svg/Next_button.svg"
              alt="Next-icon"
              width={25}
              height={25}
              className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:border-yellow ${
                startIndex + visibleCategories >= categories.length ? 'hidden' : ''
              }`}
            />
          </div>

          <div className="border border-white cursor-pointer rounded-[20px] w-[130px] h-[28px] flex items-center mx-2 justify-around">
            <Image
              src="/svg/filter_icon.svg"
              alt="filter-icon"
              width={20}
              height={20}
            />
            <p className="text-[16px] card-text">Location Filter</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto my-10">
        <div className="md:w-[40%]">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className='w-full my-6 grid grid-cols-2 gap-6 md:grid-cols-3 md:w-[90%] mx-auto pb-4 relative'>
        {filteredVendorsListings.length > 0 ? (

          filteredVendorsListings.map((listing, index) => (
            <div key={index} className="card-shadow cursor-pointer">
              <div className="w-full h-[285px]">
                <Image src={listing.image} alt="image" width={393} height={282} />
              </div>
              <div className="flex flex-col p-3">
                <h3 className="text-[1.3rem] text-yellow font-bold">{listing.name}</h3>
              </div>
              <p className="card-text p-3">{listing.description}</p>
            </div>
          ))
        ) : (
          <h2 className="text-center text-black text-lg mb-10">Vendor does not exist.</h2>
        )}
      </div>
      {selectedListing && (
        <div className="modal fixed top-0 left-0 w-full h-full center">
          <div className="w-full md:w-[70%] h-[90%] bg-white center flex-col md:px-[40px] px-[20px] pb-10 rounded-[5px] overflow-y-scroll">
            <div className="flex items-end justify-end w-full md:mt-[rem] sm:mt-[15rem]">
              <img src="/svg/cancel.svg" alt="cancel button" width="30px" className="cursor-pointer" onClick={closeModal} />
            </div>
            <h3 className="md:text-[2rem] text-[1.3rem] text-blue font-bold">{selectedListing?.name}</h3>
            <p className="font-bold">{selectedListing?.location}</p>
            <img src={selectedListing?.image} alt="vendors image" className="my-10 h-[200px]" />
            <div className="flex flex-col gap-4">
              <p className="font-bold">Business Owner: {selectedListing?.fullname}</p>
              <p className="font-bold">Year of experience: {selectedListing?.experience}</p>
              <p className="font-bold">Services offered: {selectedListing?.service}</p>
              <div className="text-md mt-4 gap-2">
                <p className="font-bold">Biography</p>
                <p className="text-black text-sm md:text-[1rem]">{selectedListing?.description}</p>
              </div>
              <p className="font-bold text-sm">Contact details: {selectedListing?.phone}</p>
              <p className="font-bold text-sm">Social media: {selectedListing?.social}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
