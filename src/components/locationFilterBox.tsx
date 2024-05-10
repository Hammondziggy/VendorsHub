"use client";
const LocationFilterBox = () => {
  
  return (
    <>
      <section className="location-filter rounded-[20px] top-[780px] h-[360px] top-[480px] left-[210px] md:left-[600px] md:top-[670px] lg:left-[810px] lg:top-[670px] xl:left-[1200px]">
        <div className="relative">
          <ul className="locations-group">
            <li>Lagos State</li>
            <li>Oyo State</li>
            <li>Abuja</li>
            <li>Ogun State</li>
            <li>Ekiti State</li>
            <li>Kwara State</li>
            <li>Osun State</li>
            <li>Sokoto State</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default LocationFilterBox;
