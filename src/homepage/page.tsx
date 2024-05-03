// Homepage.js
"use client";

import React, { useRef } from 'react';
// import Hero from "./hero";
import Hero from "./Herosec";
import Listings from "./listings";
import VideoGrid from "@/components/videoGrid";
import Promo from "./promo"
import Testimonial from './Testimonials';
import Register from "@/components/common/register";
import Footer from "@/components/footer";

const Homepage = () => {
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToServices={scrollToServices} />
      <Listings />
      <VideoGrid />
      <Promo/>
      <Testimonial/>
      <Register />
      <Footer />
    </>
  );
};

export default Homepage;
