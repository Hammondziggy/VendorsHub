'use client'

import { useState } from 'react';
import Image from 'next/image';
import { faq } from "../utils/faq";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleOpenClick = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="center w-full my-20">
            <div className="lg:w-[80%] w-[90%] gap-10 flex flex-col">
                <h2 className="md:text-[2rem] text-[1.3rem]">Frequently Asked Questions</h2>
                <div className="center flex-col gap-6">
                    {faq.map((item, index) => (
                        <div key={index} className='border border-grey p-4 md:p-8 w-full'>
                            <div className='between cursor-pointer'>
                                <div className="w-full font-bold" onClick={() => handleOpenClick(index)}>
                                    {item.question}
                                </div>
                                <div>
                                <Image
                                        src={openIndex === index ? "/images/close.png" : "/images/open.png"}
                                        alt="open and close"
                                        width={30}
                                        height={30}
                                        onClick={() => handleOpenClick(index)}
                                    />
                                </div>
                            </div>
                            {openIndex === index && <div className='text-grey mt-10'>{item.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
