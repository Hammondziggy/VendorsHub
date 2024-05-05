"use client";

import { dashboardData } from "../utils"

export const Dashboard = () => {
    return (
        <section>
            <div className='grid grid-cols-2 gap-3 text-center w-[100%] md:grid-cols-3'>
                {
                    dashboardData?.map(({title, body, textColor, bgColor, icon}, index) => (
                        <div key={index} style={{backgroundColor: bgColor}} className={`bg-[${bgColor}] text-black col-4 px-1 py-6 cursor-default rounded-sm md:py-8 md:p-3`}>
                            <p className='center text-[16px] gap-3 mb-10 font-bold md:gap-4'>{title} <span className='text-green'>{icon && icon}</span></p>
                            <h4 className='text-[1.4rem] font-bold md:text-xl' style={{color: textColor}}>{body}</h4>
                        </div>
                    ))               
                }
            </div>
        </section>
    );
};