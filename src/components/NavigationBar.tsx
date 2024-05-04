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
          <Link href="/#gallery" onClick={scroll}>
            Gallery
          </Link>
          <Link href="/auth/signup">Sign Up</Link>
          <Link
            href="/auth/login"
          >
            <button className="bg-yellow text-black px-[5rem] py-3 text-[24px] font-medium rounded-[5px] cursor-pointer">
              Login
            </button>
          </Link>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handleOpenMenu}>
          <Image src="/svg/menu.svg" alt="menu" width={27} height={27} />
        </div>
      </div>

      <div
        className={
          openMenu
            ? "fixed w-[250px] text-black top-0 right-0  ease-in duration-500 h-screen pl-5 pt-5 z-50"
            : "fixed right-[-100%] top-0 ease-in duration-[850ms]"
        }
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="w-[90%] flex-col flex cursor-pointer">
          <div className="flex items-end justify-end" onClick={handleCloseMenu}>
            <FaTimes className="text-[1.5rem] hover:text-yellow cursor-pointer" />
          </div>
          <div className="md:hidden flex flex-col gap-[1rem] mt-4">
            <Link href="/vendorsListings">
              Categories
            </Link>
            {/* LInk to the services section is below */}
            <Link href="/gallery">
              Gallery
            </Link>
            <Link href="/auth/signup">Sign Up</Link>
            <Link
              href="/auth/login"
            >
              <button className="bg-yellow text-black text-normal font-bold rounded cursor-pointer mt-4 py-2 px-2">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
