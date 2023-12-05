import Link from 'next/link';
import Image from 'next/image';
import CustomButton from '@/components/common/customButton';
import { VideoData } from '../homepage/utils/videodata';

const VideoGrid: React.FC = () => {
  return (
    <div className='w-full border-2 border-yellow'>
      <div className="w-[90%] border-2 border-blue mx-auto my-18 relative">
        <div className="text-white ml-1 mb-4">
          <h3 className="font-bold mb-6 text-lg">Gallery</h3>
          <p className="flex flex-col flex-shrink-0 mb-2 font-light text-[20px]">
            Check out our inspiration gallery to get more ideas for your events
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {VideoData.slice(0, 6).map((video) => (
            <Link href={video.videoUrl} key={video.id} passHref>
              <div className="relative group cursor-pointer w-[336px] h-[236px] rounded bg-black">
                <div
                  className="relative aspect-w-16 aspect-h-9 bg-cover bg-center group-hover:opacity-80"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={video.thumbnail}
                    alt="Video Thumbnail"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 top-20 items-center justify-center">
                    <Image
                      src="/svg/playBtn.svg"
                      alt="Play-btn"
                      width={16}
                      height={16}
                      style={{ margin: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="absolute -bottom-20 -right-0">
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
    </div>
  );
};

export default VideoGrid;
