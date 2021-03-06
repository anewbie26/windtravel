import React from "react";
// import Image from "next/image";
import { Fade } from "react-reveal";

function Cards({ img, location, price, icon, days }) {
  return (
    <div className="flex justify-center mb-10 rounded-">
      <Fade bottom delay={300} timeout={1500}>
        <div className=" rounded-3xl shadow-lg h-[370px] w-[75vw] sm:w-[60vw] | md:w-[35vw] | lg:w-[30vw] | xl:w-[314px] xl:h-[457px] relative z-50 bg-white hover:scale-105 transition-all duration-200 cursor-pointer">
          <div className="rounded-4xl">
            <div className="">
              {/* <Image src={img} height={300} width={400} objectFit="cover" className={{borderRedius : "24px"}}/> */}
              <img
                src={img}
                className="h-[270px] w-full object-cover rounded-t-3xl xl:h-[327px]"
                alt="image"
              />
            </div>
            <div className="flex items-center justify-between my-3 text-[#023F76]">
              <h1 className="font-medium text-[18px] text-[#5E6282] mt-1 ml-6 xl:mt-3">
                {location}
              </h1>
              <h1 className="mr-6 mt-1 font-medium text-[18px] text-[#5E6282] xl:mt-3 ">
                {price}
              </h1>
            </div>
            <div className="flex ml-6  items-center">
              {icon}
              <h3 className="ml-4 font-[16px] font-medium text-[#5E6282]">
                {days}
              </h3>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Cards;
