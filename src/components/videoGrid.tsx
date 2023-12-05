import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { VideoData } from '../homepage/utils/videodata';

const VideoGrid: React.FC = () => {
  return ( 
    <div className="w-full border-2 border-blue pt-10 pb-20 relative">
      <div className="w-[90%] mx-auto text-white ml-1 mb-4 border-2 border-red">
        <h3 className="font-bold mb-6 text-lg">Gallery</h3>
        <p className="flex flex-col flex-shrink-0 mb-2 font-light text-[20px]">
          Check out our inspiration gallery to get more ideas for your events
        </p>
      </div>
      <div className="flex flex-wrap w-[90%] mx-auto gap-3 border-2 border-yellow">
        {VideoData.slice(0, 6).map((video) => (
          <Link href={video.videoUrl} key={video.id} passHref>
            <div className="relative group cursor-pointer aspect-w-16 aspect-h-9 bg-cover bg-center w-[336px] h-[236px] rounded border-2 border-red bg-black"
              style={{
                backgroundImage: `url(${video.thumbnail})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}>
              <div className="absolute cursor-pointer inset-0 items-center top-24 justify-center">
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
      <div className="w-[90%] mx-auto mt-3 flex justify-end bottom-4 border-2 border-yellow">
        <Link href="./gallery">
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
