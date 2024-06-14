'use client';

const How = () => {
    return (
        <section className="center mt-20">
            <div className="flex flex-col lg:w-[80%] w-[90%]">
                <h2 className="md:text-[2rem] text-[1.3rem]">How</h2>
                
                <div className="between w-full mt-10">
                    <div className="flex gap-10 flex-col font-medium">
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="rounded-full border border-blue md:text-lg text-md font-bold text-black md:w-[70px] md:h-[70px] w-[50px] h-[50px] center">1</div>
                            <p className="md:text-md text-sm w-[80%]">Visit vendorsHub website</p>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="rounded-full border border-blue md:text-lg text-md font-bold text-black md:w-[70px] md:h-[70px] w-[50px] h-[50px] center">2</div>
                            <p className="md:text-md text-sm w-[80%]">Pick your desired vendor from the categories</p>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="rounded-full border border-blue md:text-lg text-md font-bold text-black md:w-[70px] md:h-[70px] w-[50px] h-[50px] center">3</div>
                            <p className="md:text-md text-sm w-[80%]">Chat them up</p>
                        </div>
                        <div className="flex items-center gap-4 md:gap-6">
                            <div className="rounded-full border border-blue md:text-lg text-md font-bold text-black md:w-[70px] md:h-[70px] w-[50px] h-[50px] center">4</div>
                            <p className="md:text-md text-sm w-[80%]">A happy ending to your event, and a smooth business transaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default How;