import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
function Partners() {
  return (
    <div>
      <div className="text-3xl font-bold my-12 ml-8 xl:text-[40px] xl:mt-24 text-[#14183E] font-volk xl:ml-16">
        {/* Heading */}
        <Fade bottom timeout={1300}>
          <h1 className="mt-20">Trusted By Companies</h1>
        </Fade>
      </div>
      <div className="flex justify-center ">
        {/* Logo */}
        <div className="flex flex-col items-center justify-between  h-[380px] | md:flex-row md:justify-evenly md:w-[100vw] || lg:w-[80vw] | xl:h-[200px] xl:w-[70vw]">
          <Fade bottom delay={300} timeout={1500}>
            <Image
              src="/assets/partners_img/logo1.png"
              height={51}
              width={343}
              alt="partners"
            />
          </Fade>
          <Fade bottom delay={300} timeout={1500}>
            <Image
              src="/assets/partners_img/logo2.png"
              height={107}
              width={231}
              alt="partners"
            />
          </Fade>
          <Fade bottom delay={300} timeout={1500}>
            <Image
              src="/assets/partners_img/logo3.png"
              height={125}
              width={125}
              alt="partners"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Partners;
