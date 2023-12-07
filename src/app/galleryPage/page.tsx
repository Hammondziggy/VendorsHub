"use client";

import { FC } from "react";
import Gallery from "@/components/gallery";
import Footer from '@/components/footer';
import GalleryHero from './hero';

const GalleryVideosPage: FC = () => {

  return (
    <div className="center flex-col w-full">
      <GalleryHero />
      <Gallery />
      <Footer />
    </div>
  );
}

export default GalleryVideosPage;
