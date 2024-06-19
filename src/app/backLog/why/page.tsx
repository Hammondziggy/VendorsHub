'use client';

import WhyHero from "./components/whyHero";
import Why from "./components/why";
import Register from "@/components/common/register";
import Footer from "@/components/footer";
import How from "./components/how";
import What from "./components/what";
import FAQ from "./components/faq";

const WhyPage = () => {
    return (
        <div>
            <WhyHero />
            <Why />
            <How />
            <What />
            <FAQ />
            <Register />
            <Footer />
        </div>
    );
}
 
export default WhyPage;