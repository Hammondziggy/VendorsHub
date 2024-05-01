"use client";
import { useState } from "react";
const FilterBox = () => {
  const [filter, setFilter] = useState(false);
  // const [location, setLocations] = useState(false);
  const fIlter = () => {
    setFilter(!filter);
  };
  return (
    <>
      <section className="filter-container top-[220px] h-[450px] md:left-[390px] lg:left-[470px] xl:top-[280px] xl:left-[690px]">
        <div className="relative">
          <div className="btn-box ">
            <div className="btn-underline"></div>
            <button className="filter-btn" onClick={fIlter}>
              Cartigories
            </button>
            <button className="filter-btn" onClick={fIlter}>
              Location
            </button>
          </div>
          {filter ? (
            <ul className="filter-group">
              <li className="active">All</li>
              <li>Baking</li>
              <li>Decoration</li>
              <li>Hair stylist</li>
              <li>Barbing</li>
              <li>Makeup Artist</li>
              <li>Photographer</li>
              <li>Cinematographer</li>
              <li>Tailoring</li>
            </ul>
          ) : (
            <ul className="filter-group">
              <li>Lagos State</li>
              <li>Oyo State</li>
              <li>Abuja</li>
              <li>Ogun State</li>
              <li>Ekiti State</li>
              <li>Kwara State</li>
              <li>Osun State</li>
              <li>Sokoto State</li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default FilterBox;
