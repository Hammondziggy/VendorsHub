'use client';

import Image from "next/image";
import { StakeholdersData } from "../util/stakeholders";

const StakeHolders = () => {
    return (
        <div className="flex flex-col lg:w-[80%] w-[90%] my-20">
            <h2 className="text-lg text-center w-full">Stakeholders</h2>
            <div className="flex justify-between flex-wrap">
                {StakeholdersData.map((sth, index) => (
                    <div className="md:w-[31%] w-full card-shadow mt-10" key={index}>
                        <div className="w-full h-[240px] bg-grey card-shadow">
                            <Image
                                src={sth.headshot}
                                alt={`${sth.name}'s headshot`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="center flex-col my-6">
                            <p className="font-medium">{sth.name}</p>
                            <p className="text-grey">{sth.role}</p>
                            <a className="text-sm" href={sth.connect} target="_blank" rel="noopener noreferrer">
                                Connect with me
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default StakeHolders;
