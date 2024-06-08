// homepage/page.tsx
'use client';

import React, { useEffect } from 'react';
import Hero from "./Herosec";
import Listings from "./listings";
import VideoGrid from "@/components/videoGrid";
import Testimonial from './Testimonials';
import Register from "@/components/common/register";
import Footer from "@/components/footer";
import withAuth from '@/utils/withAuth';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/auth';

const Homepage: React.FC = () => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      const handleInteraction = () => {
        sessionStorage.setItem('redirectPath', '/');
        router.push('/auth/signup');
      };

      // Add event listeners to capture user interactions
      document.addEventListener('click', handleInteraction);
      document.addEventListener('keydown', handleInteraction);

      // Clean up event listeners on component unmount
      return () => {
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      };
    }
  }, [user, isLoading, router]);

  return (
    <>
      <Hero />
      <Listings />
      <VideoGrid />
      <Testimonial />
      <Register />
      <Footer />
    </>
  );
};

export default withAuth(Homepage);
