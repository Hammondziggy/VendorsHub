import React from 'react';
import Gallery from "@/components/gallery";
import GalleryHero from './hero';
import Footer from '@/components/footer';

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
