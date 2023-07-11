'use client'

import { LevrageVendors, List, event, Why } from "./utils/vendors";

const WhyUs = () => {
    return (
        <div className="w-full center my-10 flex-col">
            <h2 className="text-black md:text-lg text-[1.3rem] w-[70%] text-center">Leveraging World Class Vendors</h2>
            <p className="md:w-2/3 text-center w-[80%] sm:text-sm md:text-[1rem]">
                We are a brand hoping to deliver and become on of the largest network for clients to find world class Vendors  
            </p>
            <div className="w-full center mt-10">
                <div className="bg-[#CDCDCD] center w-[90%]">
                    <div className="w-full center flex-wrap gap-1">
                    {LevrageVendors.map((vendors, index) => (
                        <div
                            key={index}
                            className="lg:w-[33%] md:w-[49.5%] w-full flex items-start justify-center gap-3 md:pl-10 sm:pl-4 flex-col bg-[#F0F0F0] h-[300px] hover:bg-[#234D9F] hover:text-white duration-300 transition-all custom-card"
                        >
                            <img src={vendors.icon} alt="icon" height={85} />
                            <h3 className="font-bold text-md">{vendors.name}</h3>
                            <p className="text-sm md:text-[1rem]">{vendors.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2 className="text-black md:text-lg text-[1.3rem] w-[80%] text-center mt-16">Achieve amazing results for your events</h2>
            <p className="md:w-2/3 text-center w-[80%] sm:text-sm md:text-[1rem]">
                Quickly connect with a Vendor to create the perfect ending for your events  
            </p>
            <div className="lg:w-[50%] sm:w-[90%] between mt-16">
                {event.map((event, index) => (
                    <div key={index} className="center flex-col gap-2">
                        <img src={event.icon} alt="icon" className="sm:w-8 md:w-12" />
                        <p className="text-sm">{event.name}</p>
                    </div>
                ))}
            </div>
            <h2 className="text-black md:text-lg text-[1.3rem] w-[80%] text-center mt-20">Why Clients/Organisations choose VendorsHub</h2>
            <div className="w-[90%] center mt-10 bg-[#CDCDCD]">
                <div className="w-full center flex-wrap gap-1">
                    {Why.map((why, index) => (
                        <div
                            key={index}
                            className="lg:w-[33%] w-full center gap-3 flex-col bg-[#F0F0F0] h-[300px] hover:bg-[#234D9F] hover:text-white duration-300 transition-all custom-card"
                        >
                            <h3 className="font-bold text-[1.4rem] text-center w-[80%]">{why.heading}</h3>
                            <p className="text-center w-2/3">{why.text}</p>
                        </div>
                        ))}
                </div>
            </div>
            <h2 className="text-black md:text-lg text-[1.3rem] w-[80%] text-center mt-20">Why Vendors list with us</h2>
            <div className="w-[90%] center mt-10 bg-[#CDCDCD]">
                <div className="w-full center flex-wrap gap-1">
                    {List.map((why, index) => (
                        <div
                            key={index}
                            className="lg:w-[33%] w-full center gap-3 flex-col bg-[#F0F0F0] h-[300px] hover:bg-[#234D9F] hover:text-white duration-300 transition-all custom-card"
                        >
                            <h3 className="font-bold text-[1.4rem] text-center w-[80%]">{why.heading}</h3>
                            <p className="text-center w-2/3">{why.text}</p>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
 
export default WhyUs;