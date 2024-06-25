"use client";

const Promo = () => {
  return (
    <>
      <section className="w-full center">
        <div className="w-[90%] flex-col center">
          <div className="lg:flex items-center md:rounded-r-[300px]">
            <img
              className="promo-img pb-5"
              src="/images/promo-img.png"
              alt="Promo image"
            />
            <div className="bg-[#423F35] relative w-full h-[318px] p-5 rounded-r-[100px] lg:rounded-r-[300px]">
              <div className="flex flex-col gap-2 ">
                <h4 className="lg:text-2xl font-black  lg:text-lg text-start text-yellow ">
                  Best Deals for you!!!
                </h4>
                <p className="md:text-md lg:text-[24px] lg:w-[639px]  font-normal  text-white">
                  Maximize your budget with our exclusive vendor deals. From
                  catering to entertainment and everything in between, our
                  handpicked vendors are offering unbeatable discounts to make
                  your event unforgettable without overspending. Don&rsquo;t settle
                  for less – seize the best deals today and elevate your event
                  experience without breaking the bank!
                </p>
                <img
                  className="w-[56px] absolute top-[300px] lg:left-[500px] cursor-pointer"
                  src="/images/promo-arrow.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
