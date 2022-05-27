import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

function CatCards({ img, title, text }) {
  return (
    <Fade delay={300} bottom timeout={1500}>
      <div className="mt-24  relative flex justify-center cursor-pointer">
        <div className="group flex justify-center items-center hover:z-50  relative ">
          <div className=" flex flex-col items-center bg-white rounded-3xl h-[270px] w-[75vw] sm:w-[60vw] | md:w-[35vw] | lg:w-[30vw] | xl:w-[267px] xl:h-[314px] | hover:shadow-xl hover:scale-105 transition-all duration-200">
            <div className="my-6 flex items-center justify-center">
              <Image src={img} height={75} width={88} alt="categories" />
              {/* <div className="h-10 w-10 bg-orange-500 rounded"></div> */}
            </div>
            <h2 className=" text-[20px] font-semibold mb-4 text-[#1E1D4C]">
              {title}
            </h2>
            <p className="text-center text-base font-medium w-5/6 font-poppins text-[#5E6282] | xl:w-[181px] |">
              {text}
            </p>
          </div>
        </div>
        <div className="h-[50px] w-[90%] bg-[#E0A973] absolute bottom-2 rounded-t-3xl hidden group-hover:-z-10 group-hover:block"></div>
      </div>
    </Fade>
  );
}

export default CatCards;
