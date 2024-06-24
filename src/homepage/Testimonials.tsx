import Image from "next/image";
import { Testimonials } from "./utils/testimonial";
import OuterEllipse from "../../public/images/outerEllipse.png";
import InnerEllipse from "../../public/images/innerEllipse.png";
const Testimonial = () => {
  return (
    <div className="w-full center pb-10 mt-20">
      <img
        src={OuterEllipse.src}
        alt="Outer Ellipse"
        style={{
          position: "absolute",
          top: "3100px",
          left: "1160px",
          maxWidth: "100%",
          maxHeight: "50%",
          zIndex: -999,
          // width: "500px",
          // height: "80%",
          // objectFit: 'cover',
        }}
      />
      <img
        src={InnerEllipse.src}
        alt="Inner Ellipse"
        style={{
          position: "absolute",
          top: "3290px",
          left: "1420px",
          zIndex: 999,
          transform: "translate(-50%, -50%)",
          maxWidth: "20%",
          maxHeight: "50%",
        }}
      />
      <div className="w-[90%] flex-col center">
        <h2 className="md:text-lg text-[1.3rem] w-[100%] text-start my-12">
          Testimonials
        </h2>
        <div className="between flex-wrap gap-3 w-full">
          {Testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-xl shadow-[#F5BD0266] lg:w-[32%] md:w-[49%] h-[455px] w-full rounded-sm p-8 flex flex-col justify-center gap-8"
            >
              <div>
                <img src="/images/Stars.svg" alt="ratings" />
              </div>
              <div>
                <p className=" md:text-[1rem] md:w-[279.97px] text-sm   ">
                  {testimonial.testimony}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Image
                  src={testimonial.image}
                  alt="image"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex flex-col text-sm">
                  <p className="font-bold text-[1rem]">{testimonial.name}</p>
                  <p>{testimonial.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
