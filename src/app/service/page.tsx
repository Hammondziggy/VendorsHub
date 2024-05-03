import Footer from "@/components/footer";
import NavHero from "./navHero";
import Register from "@/components/common/register"
import { coverageData, serviceInfo } from "../../homepage/utils/serviceUtils";


interface CoverageProps {
    item: {
      id: number;
      title: string;
      body: string;
      backgroundImg: string;
    };
};


const Service = () => {

    return (
        <div className="w-full center flex-col">
            <NavHero />
            <section className="text-center bg-white w-[90%] py-12">
                <h3 className="md:text-[2rem] text-[1.3rem] text-black">Partnering with you on your business Journey</h3>
                <p className="md:text-[1rem] text-sm text-grey">From registration to getting clients we are here to help you get your business desired result</p>

                <p className="lg:w-[80%] w-[90%] mx-auto md:text-left mt-6 text-black md:text-[1.3rem] text-[.9rem]">{serviceInfo}</p>

                <h3 className="mt-10 md:text-[2rem] text-[1.3rem] text-black">Our goal is simple</h3>
                <p className="md:text-[1rem] text-sm text-grey">to create  a seamless connection between vendors and clients</p>

                <h3 className="md:text-[2rem] my-10 text-[1.3rem] text-black">Our coverage </h3>

                <div className="lg:w-[80%] w-[90%] mx-auto">
                    {
                        coverageData?.map((item, index) => (
                            <Coverage item={item} key={`item-${index}`} />
                        ))
                    }
                </div>
            </section>

            <Register />
            <Footer />
        </div>
    );
};

export default Service;


const Coverage: React.FC<CoverageProps> = ({item}) => {
    const { id, title, body, backgroundImg  } = item;
    
    return (
        <section className={`h-[450px] text-white center gap-x-16 mb-12 cursor-default bg-center bg-cover  md:px-12 p-6 md:py-20 flex-col ${id % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} style={{backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), ${backgroundImg}`}}>
            <p className="w-[100%] md:w-[40%] md:text-[2.2rem] text-[1.6rem]">
                {title}
            </p>
            <p className="w-[100%] md:w-[60%] mt-6 md:mt-0 text-justify md:text-[1rem] text-sm">{body}</p>
        </section>
    );
};