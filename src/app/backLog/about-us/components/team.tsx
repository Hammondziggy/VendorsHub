'use client';

import Image from "next/image";
import { TeamMembersData } from "../util/team";

const TeamMembers = () => {
    return (
        <div className="flex flex-col lg:w-[80%] w-[90%] mt-20">
            <h2 className="text-lg text-center w-full">Meet the team</h2>
            <div className="flex justify-between flex-wrap">
                {TeamMembersData.map((team, index) => (
                    <div className="md:w-[31%] w-full card-shadow mt-10" key={index}>
                        <div className="w-full h-[350px] bg-grey">
                            <img src={team.headshot} alt="headshot" className="w-full h-full object-cover" />
                        </div>
                        <div className="center flex-col my-8 ">
                            <p className="font-medium">{team.name}</p>
                            <p className="text-grey">{team.role}</p>
                            <a className="text-sm" href={team.connect} target="_blank">Connect with me</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TeamMembers;