import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";

function CatHeading() {
  return (
    <div className="flex relative -z-[10]">
      {/* top heading container */}
      {/* w-full to below container for md and large screeens */}
      <div className="flex flex-col justify-center items-center w-full  | lg:w-full lg:items-center | | sm:justify-start sm:mt-2 |">
        {/* heading text */}
      <Fade bottom timeout={1200}>
        <p className="xl:text-[18px] mt-4 font-semibold text-[#5E6282] font-poppins ">CATEGORY</p>
        <h1 className="text-2xl mt-2 font-volk | sm:mt-0 sm:text-3xl | md:text-3xl  | xl:text-[50px] xl:font-bold text-[#14183E] xl:mt-6 |">
          We Offer Best Services
        </h1>
      </Fade>
      </div>
      <div className="absolute top-0 right-0">
        {/* decore image right */}
        <Image src="/assets/category_img/decore.png" height={153} width={166} alt="decoration"/>
      </div>
    </div>
  );
}

export default CatHeading;
// w-[30vw] | lg:w-fit | flex  justify-end