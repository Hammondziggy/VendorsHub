'use client';

const Why = () => {
    return (
        <section className="center md:mt-20 mt-10">
            <div className="flex flex-col lg:w-[80%] w-[90%]">
                <h2 className="md:hidden text-[1.3rem] mb-10">Why</h2>
                {/* DESKTOP DISPLAY */}
                <div className="between md:flex sm:hidden">
                    <div className="w-[33%] font-bold text-[2rem] pl-4">Why</div>
                    <div className="w-[33%] font-bold text-[1.4rem] pl-10">
                        VendorsHub
                    </div>
                    <div className="w-[33%] font-bold text-[1.4rem] pl-10">
                        Real World
                    </div>
                </div>
                <div className="between w-full mt-10 font-medium md:flex sm:hidden">
                    <div className="w-[33%] flex gap-10 flex-col">
                        <div className="flex items-center gap-6">
                            <div className="rounded-full border border-blue text-lg font-bold text-black w-[70px] h-[70px] center">1</div>
                            <p className="text-md">Time to find a vendor</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="rounded-full border border-blue text-lg font-bold text-black w-[70px] h-[70px] center">2</div>
                            <p className="text-md">Quality Guaranteed</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="rounded-full border border-blue text-lg font-bold text-black w-[70px] h-[70px] center">3</div>
                            <p className="text-md">Failure rate</p>
                        </div>
                    </div>
                    <div className="w-[33%] flex gap-[5.2rem] flex-col border-l border-grey pl-10">
                        <div className="flex items-center">
                            <p className="text-md">Time to find a vendor</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-md">Quality Guaranteed</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-md">Failure rate</p>
                        </div>
                    </div>
                    <div className="w-[33%] flex gap-[5.2rem] flex-col border-l border-grey pl-10">
                        <div className="flex items-center">
                            <p className="text-md">Can extend to weeks</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-md">Maybe</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-md">Low</p>
                        </div>
                    </div>
                </div>
                {/* DESKTOP DISPLAY ENDS */}
                {/* MOBILE DISPLAY */}
                <div className="between w-full mt-10 md:hidden">
                    <div className="flex gap-12 flex-col font-medium w-full">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full border border-blue md:text-lg text-md font-bold text-black md:w-[70px] md:h-[70px] w-[50px] h-[50px] center">1</div>
                            <div className="md:text-md w-[80%] flex flex-col gap-3">
                                <h2 className="">Time to find a vendor</h2>
                                <div className="between">
                                    <p className="font-bold text-sm">VendorsHub</p>
                                    <p className="font-bold text-grey text-sm">Less than 2 minutes</p>
                                </div>
                                <div className="between">
                                    <p className="font-bold text-sm">Real World</p>
                                    <p className="font-bold text-grey text-sm">Can extend to weeks</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full border border-blue md:text-lg text-md font-bold text-black md:w-[70px] md:h-[70px] w-[50px] h-[50px] center">2</div>
                            <div className="md:text-md w-[80%] flex flex-col gap-3">
                                <h2>Quality Guaranteed</h2>
                                <div className="between w-full">
                                    <p className="font-bold text-sm">VendorsHub</p>
                                    <p className="font-bold text-grey text-sm">Guaranteed</p>
                                </div>
                                <div className="between">
                                    <p className="font-bold text-sm">Real World</p>
                                    <p className="font-bold text-grey text-sm">Maybe</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full border border-blue md:text-lg text-md font-bold text-black md:w-[70px] md:h-[70px] w-[50px] h-[50px] center">2</div>
                            <div className="md:text-md w-[80%] flex flex-col gap-3">
                                <h2>Failure rate</h2>
                                <div className="between w-full">
                                    <p className="font-bold text-sm">VendorsHub</p>
                                    <p className="font-bold text-grey text-sm">Very Low</p>
                                </div>
                                <div className="between">
                                    <p className="font-bold text-sm">Real World</p>
                                    <p className="font-bold text-grey text-sm">Low</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MOBILE DISPLAY ENDS */}
            </div>
        </section>
    );
}
 
export default Why;