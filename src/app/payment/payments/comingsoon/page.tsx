import Image from 'next/image';

function ComingSoon () {
    return (
        <div className="text-[#F5BD0280] flex flex-col items-center mt-10">
            <Image src="/images/Ellipse 28.png" alt="ellipse-icon" width={100} height={100} className=""/> 
            <Image src="/images/Ellipse 29.png" alt="ellipse-icon" width={50} height={50} className=""/>
            <p className="font-bold text-lg mt-5">Coming Soon</p>
        </div>
    )
}

export default ComingSoon;