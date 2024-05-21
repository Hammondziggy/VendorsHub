"use client";
import { useState } from "react";
import { vendorsListings } from "@/utils/vendorslistings";
const allVendors = ['All',
  ...new Set(vendorsListings.map((vendor) => vendor.location)),
];
const LocationFilterBox = () => {
  const [vendors, setVendors] = useState(allVendors);
  const [filteredVendorsListings, setFilteredVendorsListings] =
    useState(vendorsListings);

  const filterVendors = (location: string) => {
    if (location === 'All') {
      setFilteredVendorsListings(vendorsListings);
      return;
    }
    // filter vendors by location 
    const newVendors = vendorsListings.filter(
      (vendors) => vendors.location === location
    );
    setFilteredVendorsListings(newVendors);
  };
  return (
    <>
      <section className="location-filter rounded-[20px] top-[850px] h-[360px]  left-[110px] md:left-[600px] md:top-[670px] lg:left-[810px] lg:top-[670px] xl:left-[1200px]">
        <div>
          {vendors.map((location, index) => {
            return (
              <ul key={index} className="locations-group">
                <li onClick={() => filterVendors(location)}>{location}</li>
              </ul>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default LocationFilterBox;
