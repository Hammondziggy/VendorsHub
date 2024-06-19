// "use client";

import Image from 'next/image';
import Footer from "@/components/footer";
import { FC } from "react";
import TeamMembers from './components/team';
import AboutNavHero from "./navHero";
import Offer from './components/offer';
import StakeHolders from './components/stakeholders';
import Register from '@/components/common/register';

interface AboutUsProps {}
 
const AboutUs: FC<AboutUsProps> = () => {
    return (
        <div className="w-full center flex-col">
            <AboutNavHero />
            <div className="flex items-center flex-col my-10">
                <div className="lg:w-[80%] w-[90%] mx-auto md:text-left mt-6 text-black md:text-[1.3rem] text-[.9rem]">
                        VendorsHub is a platform for vendors to showcase their products and connect with a wide customer base. we understand the challenges that vendors face in today&apos;s competitive marketplace. That&apos;s why we have developed a user-friendly and innovative platform specifically designed to meet your needs. We are dedicated to empowering vendors like you to maximize your reach, boost sales, and build lasting relationships with customers, we also believe that clients deserve a wide range of options and exceptional service. Whether you&apos;re an individual seeking a specific product or a business in need of reliable services, our platform is designed with you in mind. We bring together a diverse community of vendors, ensuring you can find the right match for your requirements
                </div>
                <div className="md:w-[80%] w-[90%] md:flex-row flex-col center mt-10">
                    <div className="md:w-[50%] center bg-blue rounded-lg p-10 flex-col">
                        <h2 className="text-secondary font-bold md:text-lg text-[1.3rem]">Our Mission</h2>
                        <p className="text-sm md:text-[1rem] text-white md:w-[80%] pb-6 mt-3">
                            To enable a fast,easy, safe and secure platform for event vendors to showcase their product and services that will enable clients to easily navigate and choose the best and affordable vendors for their events as fast as they need them
                        </p>
                    </div>
                    <div className="md:w-[50%] center">
                        <Image src="/images/mission.png" alt="mission image" width={400} height={300} />
                    </div>
                </div>
                <div className="md:w-[80%] w-[90%] center md:flex-row flex-col-reverse gap-10 mt-10">
                    <div className="md:w-[50%] center">
                        <Image src="/images/vision.png" alt="mission image" width={500} height={300} />
                    </div>
                    <div className="md:w-[50%] center bg-blue rounded-lg p-10 flex-col">
                        <h2 className="text-secondary font-bold md:text-lg text-[1.3rem]">Our Vision</h2>
                        <p className="text-sm md:text-[1rem] text-white md:w-[80%] pb-6 mt-3">
                            To be the global go-to event vendors platform for event management
                        </p>
                    </div>
                </div>
            </div>
            <Offer />
            <TeamMembers />
            <StakeHolders />
            <Register />
            <Footer />
        </div>
    );
}
 
export default AboutUs;