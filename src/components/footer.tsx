'use client';

import Link from 'next/link';
import Logo from "./common/logo";
import Image from 'next/image';
// import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="center bg-primary text-white flex-col w-full pt-24">
            <div className="w-[90%] flex justify-between md:flex-row flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <Logo />
                    <p className="text-sm w-[13rem]">
                        We are an organization that brings together different event vendors for your beautiful events.
                    </p>
                    <div className="flex gap-3">
                        <Image
                            src="/svg/04-facebook.svg"
                            alt="facebook-icon"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/svg/_x37__stroke.svg"
                            alt="x-icon"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                        <Image
                            src="/svg/IG.svg"
                            alt="ig-icon"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="font-bold">Services</h4>
                    <ul className="text-sm flex-col flex gap-1 mt-4">
                        <Link href="/vendorsListings"><li>Event Planner</li></Link>
                        <Link href="/vendorsListings"><li>Catering</li></Link>
                        <Link href="/vendorsListings"><li>DJ&apos;s</li></Link>
                        <Link href="/vendorsListings"><li>Rentals</li></Link>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Company</h4>
                    <ul className="text-sm flex-col flex gap-1 mt-4">
                        <Link href="/about-us"><li>About Us</li></Link>
                        <Link href="/about-us"><li>Join Us</li></Link>
                        <Link href="/about-us"><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
            <hr className=" w-[90%] my-8"/>
            <div className="w-[90%] flex justify-between text-sm mb-6">
                <p>&copy; {currentYear}</p>
                <div className="flex gap-4">
                    <p>Term of use</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;