"use client";

import Image from "next/image";
import { BsPencil, BsEnvelope } from "react-icons/bs";
import { userProfileInfo } from "../utils";


export const Profile = () => {
    const {name, email, address, image} = userProfileInfo;

    return (
        <section>
            <h4 className="text-secondary text-center mt-6 mb-4 md:hidden">Welcome back!!</h4>
                <div className='relative flex flex-col items-center gap-6 mb-14 md:mb-32 md:mt-8 md:flex-row'>
                    <Image src={image} alt='image' width={100} height={100} />
                    <div className='flex flex-col gap-2 items-center md:items-start'>
                        <h4 className="text-secondary hidden md:block">Welcome back!!</h4>
                        <p className='font-bold items-center gap-24 md:flex'>{name} <BsPencil className='text-secondary hidden md:block cursor-pointer'/></p>
                        <small className='underline'>{email}</small>
                        <p>{address}</p>
                    </div>

                    <div className="absolute right-6 top-0 flex flex-col gap-5">
                        <BsPencil className='text-secondary cursor-pointer md:hidden block'/>
                        <BsEnvelope className='text-white cursor-pointer md:hidden block'/>
                    </div>
                </div>
        </section>
    );
};