"use client";

import Navbar from '@/components/navbar';
import Link from 'next/link';

const ErrorVendorPage = () => {
    return (
        <div className='flex-col center'>
            <Navbar />
            <div className='h-[85vh] w-screen gap-4 center flex-col'>
                <h2 className="font-bold text-lg text-secondary">Vendor not found</h2>
                <p className='text-sm text-white'>The vendor you are looking for does not exist.</p>
                <div className="center gap-4">
                    <Link href="/">
                        <button className="px-6 font-bold py-4 rounded-[25px] text-sm text-black bg-secondary">Go Back Home</button>
                    </Link>
                    <Link href="/vendorsListings">
                        <button className="bg-transparent border border-secondary px-6 py-4 rounded-[25px] text-secondary text-sm">Vendors Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default ErrorVendorPage;