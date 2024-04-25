"use client";

const FilterBox = () => {
  return (
    <>
      <div className="filter-container h-96 bg-white top-[210px] right-0 md:top-[210px] md:right-[-80px] xl:top-[295px] xl:right-[90px]">
        <div className="filter-content">
          <div className="flex gap-5 mt-7 *block">
            <button>Catigories</button>
            <button>Locations</button>
          </div>
          <div className="mt-2.5">
            <ul className="flex flex-col gap-3 *cursor-pointer *hover:bg-violet-600">
              <li>All</li>
              <li>Baking</li>
              <li>Decoration</li>
              <li>Barbing</li>
              <li>Makeup Artist</li>
              <li>Photographer</li>
              <li>Cinematographer</li>
              <li>Tailoring</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBox;
