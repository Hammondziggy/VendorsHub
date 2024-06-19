'use client';

const Offer = () => {
    return (
        <div className="lg:w-[80%] w-[90%] flex-col center">
            <h1 className="text-lg">
                What we Offer
            </h1>
            <p className="text-grey text-center text-sm md:text-[1rem]">
                We connect clients with quality services from vendors
            </p>
            <div className="md:w-[80%] mt-10 flex-col sm:gap-10 md:gap-0 md:flex-row between">
                <div className="center flex-col md:w-[30%] w-full">
                    <h3 className="text-lg font-bold text-center text-blue">95%</h3>
                    <p className="text-grey text-center">Vendors success rate</p>
                </div>
                <div className="center flex-col md:w-[30%] w-full">
                    <h3 className="text-lg font-bold text-center text-blue">4.5 rating</h3>
                    <p className="text-grey text-center">Our vendors have a rating of 4.5 stars and above</p>
                </div>
                <div className="center flex-col md:w-[30%] w-full">
                    <h3 className="text-lg font-bold text-center text-blue">Over 15 +</h3>
                    <p className="text-grey text-center">World class businesses registered on our platform</p>
                </div>
            </div>
        </div>
    );
}
 
export default Offer;