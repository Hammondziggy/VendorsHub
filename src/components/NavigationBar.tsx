"use client";
//Navbar

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "./common/logo";
import { FaBars, FaTimes } from "react-icons/fa";

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

  const handleScrollToServices = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // Prevent default link behavior
    scroll?.(); // Call scrollToServices function
  };

  return (
    <nav className={`center mt-8 w-full text-white ${className}`}>
      <div className="between w-[90%]">
        <LogoImage />
        <div className="hidden md:flex items-center gap-6 text-[1.4rem] font-medium">
          <Link href="/vendorsListings">Categories</Link>
          <Link href="/#services" onClick={scroll}>
            Services
          </Link>
          <Link
            href="https://docs.google.com/forms/d/1diP-bM8dIQaQngA4dmq4E1laLlVLltujahS6osRTjpM/edit?usp=sharing_eil_se_dm&ts=64abcbfc"
            target="_blank"
          >
            <button className="bg-yellow text-black px-12 py-3 text-[24px] font-medium rounded-[5px] cursor-pointer">
              Register
            </button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleOpenMenu}>
          <Image src="/svg/menu.svg" alt="menu" width={27} height={27} />
        </div>
      </div>

      <div
        className={
          openMenu
            ? "fixed w-[250px] bg-white text-black top-0 right-0  ease-in duration-500 h-screen pl-5 pt-5 z-50"
            : "fixed right-[-100%] top-0 ease-in duration-[850ms]"
        }
      >
        <div className="w-[90%] flex-col flex cursor-pointer">
          <div className="flex items-end justify-end" onClick={handleCloseMenu}>
            <FaTimes className="text-[1.5rem] hover:text-yellow cursor-pointer" />
          </div>
          <div className="md:hidden flex flex-col gap-[1rem] mt-4">
            <Link href="/vendorsListings" onClick={handleCloseMenu}>
              Categories
            </Link>
            {/* LInk to the services section is below */}
            <Link href="/service">
              {" "}
              {/* Add onClick handler */}
              Services
            </Link>
            <Link
              href="https://docs.google.com/forms/d/1diP-bM8dIQaQngA4dmq4E1laLlVLltujahS6osRTjpM/edit?usp=sharing_eil_se_dm&ts=64abcbfc"
              target="_blank"
              onClick={handleCloseMenu}
            >
              <button className="bg-yellow text-black text-normal font-bold rounded cursor-pointer mt-4 py-2 px-2">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;