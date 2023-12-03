'use client';

import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/'>
            <div className="max-w-[192px] h-[43px] text-yellow font-black text-[32px] font-['Satoshi']">
                VendorsHub
            </div>
        </Link>
    );
}
 
export default Logo;