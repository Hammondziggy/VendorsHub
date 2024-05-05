"use client";

import CustomButton from "@/components/common/customButton";
import Logo from "@/components/common/logo";
import Search from "@/components/common/search";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
    return (
        <nav className="between ">
            <div className="md:hidden">
                <Logo />
            </div>
            <div className="hidden md:block">
                <Search />
            </div>
            <div className="center text-[.9rem] md:gap-8">
                <Link href='/about-us' className="hidden lg:block">About Us</Link>
                
                <div className="hidden lg:block">
                    <Link href="/vendorsListings">
                        <CustomButton onClick={() => {}} background="#FFF" textColor="#1E1E1E" textSize=".8rem">Book Vendor</CustomButton>
                    </Link>
                </div>

                <div className="border-white border center gap-1 p-1 cursor-pointer w-[4.5rem] rounded-[60px]">
                    <div className="">
                        <Image
                            src='/svg/hamburgerMenu.svg'
                            alt="hamburgermenu"
                            width={15}
                            height={15}
                        />
                    </div>
                    <div>
                        <Image
                            src='/images/profilePicture.png'
                            alt="hamburgermenu"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
            </div>
                    
        </nav>
    );
};