'use client';

import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/' className="max-w-[192px] h-[43px] text-yellow font-black text-[32px]">
            <h1>
                VendorsHub
            </h1>
        </Link>
    );
}
 
export default Logo;