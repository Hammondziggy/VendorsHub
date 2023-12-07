import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { VideoData } from '../homepage/utils/videodata';

const VideoGrid: React.FC = () => {
  return ( 
    <div className="w-full pt-10 pb-20 relative">
      <div className="w-[90%] mx-auto text-white mb-4">
        <h3 className="font-bold mb-6 text-md">Gallery</h3>
        <p className="flex flex-col flex-shrink-0 mb-2 font-light text-[20px]">
          Check out our inspiration gallery to get more ideas for your events
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-[90%] mx-auto">
        {VideoData.slice(0, 6).map((video) => (
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
                  width={50}
                  height={50}
                  style={{ margin: 'auto' }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-[90%] mx-auto mt-3 flex justify-end bottom-4">
        <Link href="/galleryPage">
          <CustomButton
            textColor="#1E1E1E"
            width="202px"
            height="46px"
            padding="8px 40px"
            background="#FFF"
            borderRadius="2px"
            onClick={() => {}}
          >
            See More
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default VideoGrid;
