import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { VideoData } from '../homepage/utils/videodata';

const Gallery: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-6 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-[85%] mx-auto my-16">
            {VideoData.map((video) => (
                <Link href={video.videoUrl} key={video.id} passHref>
                    <div className="relative group cursor-pointer bg-cover bg-center rounded"
                        style={{
                            backgroundImage: `url(${video.thumbnail})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            paddingBottom: '56.25%', // 16:9 aspect ratio (h/w * 100)
                        }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/svg/playBtn.svg"
                                alt="Play-btn"
                                width={40}
                                height={40}
                                style={{ margin: 'auto' }}
                            />
                        </div>
                    </div>
                </Link>
            ))}            
        </div>      
    );
}

export default Gallery;