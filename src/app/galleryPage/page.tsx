"use client";

import Gallery from "@/components/gallery";
import Footer from '@/components/footer';
import GalleryHero from './hero';

const GalleryVideosPage: React.FC = () => {

  return (
    <div className="center flex-col w-full">
      <GalleryHero />
      <Gallery />
      <Footer />
    </div>
  );
}

export default GalleryVideosPage;
