"use client";

import { inboxData, truncateText } from "../utils";
import Image from "next/image";

const Inbox = () => {
    return (
        <section>
            {
                inboxData?.map(({name, message, image}, index) => (
                    <div key={index} className='mb-[2px] flex items-center gap-4 bg-white text-black py-4 px-6 cursor-pointer'>
                        <Image src={image} className=' ' alt='image' width={60} height={60} />
                        <div className='flex flex-col'>
                            <p className='font-bold'>{name}</p>
                            <small>{truncateText({message})}</small>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default Inbox;