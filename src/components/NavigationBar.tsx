'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "./common/logo";
import { FaTimes, FaBars } from "react-icons/fa";
import SideNav from "@/components/sideNav";
import { NavList } from "./navList";
import { useRouter } from 'next/navigation';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className } : NavbarProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  }

  return (
    <div className={`center mt-8 w-full text-white ${className}`}>
      <div className="flex justify-between w-[90%] mx-auto">
        <LogoImage />
        <div className="hidden md:flex justify-end items-center gap-3 text-[1.4rem] font-medium w-full">
          <NavList />
          <div className="flex w-80 justify-between items-center ">
            <button onClick={handleLogin} className="bg-yellow text-black flex-grow py-3 text-[24px] font-medium rounded-[5px] cursor-pointer mr-2">
              Login
            </button>
            {/* Single parent div for the ellipsis icon and dropdown */}
            <SideNav />
          </div>
        </div>
        <div className="md:hidden cursor-pointer flex items-center justify-center" onClick={handleMenu}>
          <FaBars className='w-6 h-6 text-white hover:text-yellow' />
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
          <div className="flex items-end justify-end" onClick={handleMenu}>
            <FaTimes className="text-[1.5rem] hover:text-yellow cursor-pointer" />
          </div>
          <div className="md:hidden flex flex-col gap-[1rem] mt-4">
            <Link href="/vendorsListings">Categories</Link>
            <Link href="/galleryPage">Gallery</Link>
            <Link href="/auth/signup">Sign Up</Link>
            <Link href="/auth/login">
              <button className="bg-yellow text-black text-normal font-bold rounded cursor-pointer mt-4 py-2 px-2">
                Login
              </button>
            </Link>
            <Link href=''>Sign Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
