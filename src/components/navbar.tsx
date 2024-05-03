'use client';
//Navbar

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from './common/logo';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  className?: string;
  scroll?: () => void;
  // scrollToServices: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ className, scroll }) => {

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleScrollToServices = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default link behavior
    scroll?.(); // Call scrollToServices function
  };
 
  
  return (
    <nav className={`center mt-8 w-full text-white ${className}`}>
      <div className="between w-[90%]">
        <LogoImage />
        <div className="hidden md:flex items-center gap-6 text-[1.4rem] font-medium">
          <Link href="/vendorsListings">Categories</Link>
          <Link href="/galleryPage">Gallery</Link>
          <Link href="/auth/signup">Sign up</Link>
          <Link href="/auth/login">
            <button className="bg-yellow text-black px-14 py-3 text-[24px] font-medium rounded-[5px] cursor-pointer">
              Log In
            </button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleOpenMenu}>
          <Image src="/svg/menu.svg" alt="menu" width={27} height={27} />
        </div>
      </div>
      {openMenu && (
        <div className="w-full bg-white text-black absolute top-0 right-0 left-0 center py-6 z-50">
          <div className="w-[90%] flex-col flex cursor-pointer">
            <div className="flex items-end justify-end cursor-pointer" onClick={handleCloseMenu}>
              <FaTimes className="text-[1.5rem] hover:text-yellow cursor-pointer" />
            </div>
            <div className="md:hidden flex flex-col text-[1rem] mt-4">
              <Link href="/vendorsListings" onClick={handleCloseMenu}>
                Categories
              </Link>
              {/* LInk to the gallery section is below */}
              <Link href="/galleryPage"> {/* Add onClick handler */}
                Gallery
              </Link>
              <Link href="/auth/signup"> {/* Add onClick handler */}
                Sign up
              </Link>
              <Link href="/auth/login" onClick={handleCloseMenu}>
                <button className="bg-yellow text-black text-normal font-bold rounded cursor-pointer mt-4">
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
