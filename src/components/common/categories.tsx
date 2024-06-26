"use client";

// Categories.tsx
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/utils/categories";
import Search from "@/components/common/search";
import { vendorsListings } from "@/utils/vendorslistings";
import Rating from "../../homepage/utils/rating";
import CustomButton from "@/components/common/customButton";
import LocationFilter from "@/components/locationFilterBox";
import handler from "@/app/auth/api/signout";


const Categories = () => {
  // const [vendors, setVendors] = useState(allVendors);
  const [visibleCategories, setVisibleCategories] = useState(6);
  const [startIndex, setStartIndex] = useState(0);
  const [filteredVendorsListings, setFilteredVendorsListings] =
    useState(vendorsListings);
  const [selectedListing, setSelectedListing] = useState<any>(null);
  const [searchText, setSearchText] = useState("");
  const [filterLocation, setFilterLocation] = useState(false);
  useEffect(() => {
    if (searchText.trim() === "" || searchText.length === 1) {
      // Empty search text or just one character, show all vendor listings
      setFilteredVendorsListings(vendorsListings);
    } else {
      // Non-empty search text, filter the listings
      const filteredListings = vendorsListings.filter(
        (listing) =>
          // listing.name.toLowerCase().includes(searchText.toLowerCase()) ||
          listing.service.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredVendorsListings(filteredListings);
    }
   
  }, [searchText]);
   
  let locationRef = useRef<T>(null);
   useEffect(() => {
    let handler = (event: any) =>{
      if (!locationRef.current.contains(event.target)) {
        setFilterLocation(false);
      }
    }
     document.addEventListener("mousedown", handler) 
   
     return () => {
       document.removeEventListener("mousedown", handler);  
     }
   },)
   

  const updateVisibleCategories = () => {
    const screenWidth = window.innerWidth;
    let newVisibleCategories = 6;

    if (screenWidth < 375) {
      newVisibleCategories = 1;
    } else if(screenWidth < 480){
      newVisibleCategories = 2;
    }
     else if (screenWidth < 768) {
      newVisibleCategories = 2;
    } else if (screenWidth < 1024) {
      newVisibleCategories = 3;
    }

    setVisibleCategories(newVisibleCategories);
  };

  useEffect(() => {
    updateVisibleCategories();

    window.addEventListener("resize", updateVisibleCategories);

    return () => {
      window.removeEventListener("resize", updateVisibleCategories);
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
const showLocations = () =>{
  setFilterLocation(!filterLocation)
}
  return (
    <div className="w-full mb-6 mt-[85px]">
      <div ref={locationRef} className="w-full">
        <h4 className="title sm:text-lg font-normal mb-6 text-xl text-white">
          Explore popular Categories
        </h4>
        <div className="flex flex-col md:flex-row  center items-center gap-3  mx-6 mt-5">
          <div className="flex justify-center relative flex-wrap gap-10">
            <div onClick={showPreviousCategories}>
              <Image
                src="/icons/prev icon.png"
                alt="icon"
                width={30}
                height={25}
                className={`cursor-pointer absolute z-50 top-[45px]  transition duration-300 ease-in-out hover:border-yellow ${
                  startIndex === 0 ? "hidden" : ""
                }`}
              />
            </div>
            {categories
              .slice(startIndex, startIndex + visibleCategories)
              .map((category, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center cursor-pointer group"
                >
                  <div
                    className="border border-white flex items-center justify-center category my-1 rounded-[50%] transition duration-300 ease-in-out transform hover:scale-105 hover:border-yellow border-1 border-transparent group-hover:border-yellow"
                    style={{
                      background: `url(../../images/${category.img}) center/cover no-repeat`,
                      width: "100px",
                      height: "100px",
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
            <div onClick={showNextCategories} className="mx-2">
              <Image
                src="/icons/next icon.png"
                alt="Next-icon"
                width={30}
                height={25}
                className={`cursor-pointer absolute top-[45px] left-[310px] md:left-[440px] lg:left-[860px] transition duration-300 ease-in-out transform hover:scale-105 hover:border-yellow ${
                  startIndex + visibleCategories >= categories.length
                    ? "hidden"
                    : ""
                }`}
              />
            </div>
          </div>

          <div
            onClick={showLocations}
            className="border border-white cursor-pointer rounded-[10px] px-4  py-5 h-[28px] flex items-center gap-1 mx-2 justify-around"
          >
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
      {filterLocation && (
        <LocationFilter
        // filter={vendors}
        // filterVendors={filterVendorsByLocation}
        />
      )}

      <div className="w-[90%] mx-auto my-10">
        <div className="md:w-[40%]">
          <Search onSearch={setSearchText} />
        </div>
      </div>
      <div
        className="w-[90%] mx-auto my-6 grid gap-6 sm:grid-cols-1 sm-md:grid-cols-2 sm-md:gap-2 
          md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 relative"
      >
        {filteredVendorsListings.length > 0 ? (
          filteredVendorsListings.map((listing, index) => (
            <Link
              key={listing.id}
              href="/vendorsProfile/[userId]"
              as={`/vendorsProfile/${listing.id}`}
              className="flex flex-col card-shadow"
            >
              <div className="w-full aspect-w-4 aspect-h-3">
                <Image
                  src={listing.image}
                  alt="image"
                  width={393}
                  height={282}
                />
              </div>
              <div className="flex items-center justify-between gap-2 py-2 px-3">
                <h3 className="sm:text-sm sm-md:text-sm md:text-sm lg:text-[16px] text-yellow font-bold">
                  {listing.name}
                </h3>
                <section className="flex flex-col items-start justify-end gap-1 sm-md:gap-2">
                  <section className="text-start">
                    {listing.rating && (
                      <Rating
                        rating={listing.rating}
                        style="text-sm md:text-sm lg:text-[16px] xl:text-md"
                      />
                    )}
                  </section>
                  <section className="flex items-start justify-start gap-1">
                    <Image
                      src="./svg/location.svg"
                      alt="location-icon"
                      width={7}
                      height={7}
                      className="mt-[1.6px]"
                    />
                    <p className="text-white text-sm sm-md:text-[8px] md:text-sm lg:text-[10px] font-Satoshi font-normal whitespace-nowrap overflow-ellipsis">
                      {listing.location}
                    </p>
                  </section>
                </section>
              </div>
              <p className="card-text p-3 text-sm md:text-sm lg:text-md">
                {listing.description}
              </p>
            </Link>
          ))
        ) : (
          <h2 className="text-center text-black text-lg mb-10">
            Vendor does not exist.
          </h2>
        )}
      </div>
    </div>
  );
};

export default Categories;
