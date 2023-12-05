'use client';

import Hero from "./hero";
import Listings from "./listings";
import Services from "./services";
import VideoGrid from "@/components/videoGrid";
import Footer from "@/components/footer";
import Register from "@/components/common/register";

const Homepage = () => {
    return (
        <>
            <Hero />
            <Listings />
            <Services />
            <VideoGrid />
            <Register />
            <Footer />
        </>
    );
}
 
export default Homepage;