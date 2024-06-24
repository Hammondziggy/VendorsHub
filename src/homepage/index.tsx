'use client';

import React from 'react';
import Hero from "./Herosec";
import Listings from "./listings";
import VideoGrid from "@/components/videoGrid";
import Testimonial from './Testimonials';
import Register from "@/components/common/register";
import Footer from '@/components/footer';
import Promo from './promo'
const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
        <Listings />
        <VideoGrid />
        <Promo />
        <Testimonial />
        <Register />
        <Footer />
    </>
  );
};

export default Homepage;
