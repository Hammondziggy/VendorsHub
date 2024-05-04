// Homepage.js
"use client";

import React from 'react';
import Hero from "./Herosec";
import Listings from "./listings";
import VideoGrid from "@/components/videoGrid";
import Testimonial from './Testimonials';
import Register from "@/components/common/register";
import Footer from "@/components/footer";

const Homepage = () => {


  return (
    <>
      <Hero/>
      <Listings />
      <VideoGrid />
      <Testimonial/>
      <Register />
      <Footer />
    </>
  );
};

export default Homepage;
