'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoImage from '@/components/common/logo';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='w-full h-full'>
      <div className='mt-6 mb-10 w-[85%] mx-auto'>
        <LogoImage />
      </div>     
      <nav className='border-b-4 border-white pb-4 text-white w-[85%] mx-auto my-10'>
        <ul className='flex items-center justify-around'>
            {['personal', 'payments', 'confirmation'].map((item) => (
            <li key={item} className="relative" style={{ width: 'calc(100% / 3)' }}>
                <Link href={`/payment/${item}`}>
                    <span 
                        className={`cursor-pointer pb-2 flex items-center justify-center ${
                            pathname === `/payment/${item}` ? 'text-yellow' : ''
                        }`}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                </Link>
                {pathname === `/payment/${item}` && (
                    <span className="absolute -bottom-5 left-0 right-0 h-1 bg-yellow"></span>
                )}
            </li>
            ))}
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
