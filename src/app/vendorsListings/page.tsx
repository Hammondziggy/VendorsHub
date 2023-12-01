"use client";

import { FC } from "react";
import Categories from "@/components/common/categories";
import Footer from '@/components/footer';
import VendorsHero from './hero';

const VendorsListings: FC = () => {

  return (
    <div className="center flex-col w-full">
      <VendorsHero />
      <Categories />
      <Footer />
    </div>
  );
}

export default VendorsListings;
