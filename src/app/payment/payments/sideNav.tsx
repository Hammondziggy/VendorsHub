'use client';
import React from 'react';

interface SideNavProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

export const SideNav = ({ activeIndex, setActiveIndex }: SideNavProps) => {
    const options = [
        { name: "Bank Transfer", href: "/payment/payments/bankTransfer" },
        { name: "Internet Banking", href: "/payment/payments/comingsoon" },
        { name: "Card", href: "/payment/payments/comingsoon" }
    ];

    return (
        <div className="w-full h-auto card-shadow text-white rounded-sm flex flex-col mt-20 p-4 md:p-6 lg:p-8 xl:p-8">
            <ul className="space-y-8">
                {options.map((option, index) => (
                    <li key={index} className={`text-base md:text-base lg:text-md xl:text-md ${index === activeIndex ? 'text-yellow' : ''}`}>
                        <span onClick={() => setActiveIndex(index)}>{option.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
