// Homepage.js
"use client";

import React, { useRef } from 'react';
import Hero from "./hero";
import Listings from "./listings";
import Services from "./services";
import VideoGrid from "@/components/videoGrid";
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
      <Services ref={servicesSectionRef} />
      <VideoGrid />
      <Testimonial/>
      <Register />
      <Footer />
    </>
  );
};

export default Homepage;
