import React from "react";
import VideoData from "./videoGrid";
import Navbar from "./navbar";

const Gallery: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className=""
                style={{
                    background: `url(../../public/images/GalleryHero.png) cover/center no-repeat`,
                }}    
            >
                <h2>Gallery</h2>
                <p>We create a seamless expereince for both clients and vendors</p>
            </div>
        </div>
    );
}

export default Gallery;