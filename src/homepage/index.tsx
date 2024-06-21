'use client';

import React from 'react';
import Hero from "./Herosec";
import Listings from "./listings";
import VideoGrid from "@/components/videoGrid";
import Testimonial from './Testimonials';
import Register from "@/components/common/register";

const Homepage: React.FC = () => {
  return (
    <>
      <Hero />
      <Listings />
      <VideoGrid />
      <Testimonial />
      <Register />
    </>
  );
};

export default Homepage;
