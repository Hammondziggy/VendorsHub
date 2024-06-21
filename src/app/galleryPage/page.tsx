"use client";

import Gallery from "@/components/gallery";
import GalleryHero from './hero';

const GalleryVideosPage: React.FC = () => {

  return (
    <div className="center flex-col w-full">
      <GalleryHero />
      <Gallery />
    </div>
  );
}

export default GalleryVideosPage;
