"use client";
import { useState } from "react";
import FilterData from "@/utils/filterBoxData";
const FilterBox = () => {
  const [filters, setFilter] = useState(FilterData);
  const [value, setValue] = useState(0);
  const { filter, filterItems } = filters[value];
  return (
    <>
      <section className="filter-container top-[220px] rounded-[10px] md:left-[390px] lg:left-[470px] xl:top-[240px] xl:left-[690px]">
        <div className="relative">
          <div className="btn-box ">
            {/* <div className="btn-underline"></div> */}
            {filters.map((item, index) => {
              return (
                <button
                  key={item.id}
                  className={`filter-btn ${index === value && "active-btn"}`}
                  onClick={() => setValue(index)}
                >
                  {item.filter}
                </button>
              );
            })}
          </div>

          {filterItems.map((items, index) => {
            return (
              <div>
                <ul key={index} className="filter-group">
                  <li>{items}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FilterBox;
