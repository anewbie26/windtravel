import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Info() {
  return (
    <div className="font-hero">
      <div className="flex flex-col   py-10 | lg:items-start | -z-10">
        <Fade bottom timeout={1300}>
          <p className="text-white ml-8 mb-2 | sm:pb-0 | | lg:ml-8 lg:mb-0 | xl:text-[16p] xl:font-medium font-hero xl:mt-[75px] xl:ml-16">
            MOUNTAINS | PLAINS | BEACHES
          </p>
        </Fade>
        <div className="flex items-center h-auto">
          <Fade bottom timeout={1300}>
            <h1 className="text-3xl text-white -mr-10 ml-8 font-bold xl:leading-[57px] | md:text-4xl sm:-mt-6 | | lg:text-5xl lg:ml-8 | | xl:text-[47px] xl:ml-16 xl:-mt-8|">
              Spend your vacation <br /> with our activities
            </h1>
          </Fade>
          <div className="lg:mt-4 ">
            {" "}
            <Fade left big timeout={2000}>
              <div className="hidden sm:flex sm:-mt-4">
                <Image
                  src="/assets/hero_sec_img/plane.png"
                  height={130}
                  width={140}
                  alt="plane"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
