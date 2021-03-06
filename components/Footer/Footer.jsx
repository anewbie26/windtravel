import React from "react";
import Image from "next/image";
// import Carousel from "./Carousel"

function Footer() {
  return (
    <div className=" font-poppins">
      <div className=" mb-4 mt-36 pt-4 w-[98vw] lg:flex lg:justify-center  xl:flex xl:justify-center">
        <div className="  flex justify-center items-center flex-col | lg:flex-row | xl:w-[75vw]">
          <div className="w-[60%] flex flex-col items-center lg:w-[22%]">
            <div className="flex items-center cursor-pointer">
              {/* logo */}
              <Image
                src="/assets/footer/logo.png"
                height={60}
                width={60}
                alt="logo"
              />
              <Image
                src="/assets/footer/logo-text.png"
                height={23}
                width={173}
                alt="logo"
              />
            </div>
            {/* text */}
            <p className="text-[18px] font-normal text-center lg:text-[13px] ">
              Book your trip in minuts. get full {<br />}Control for much longer
            </p>
          </div>
          <div className="md:flex md:flex-row md:justify-evenly md:w-[100vw] md:my-6 | lg:w-[50vw] | ">
            <div className="text-center  mt-4 | lg:text-left |">
              {/* company */}
              <h1 className="font-bold text-xl mb-4 lg:text-[18px] cursor-pointer">
                Company
              </h1>
              <div className="text-[18px] font-normal lg:text-[15px] text-[#5E6282]">
                <h1 className="cursor-pointer">About</h1>
                <h1 className="my-2 cursor-pointer">Careers</h1>
                <h1 className="cursor-pointer">Mobile</h1>
              </div>
            </div>
            <div className="text-center  mt-4 | lg:text-left |">
              {/* contace */}
              <h1 className="font-bold mb-4 text-xl cursor-pointer">Contact</h1>
              <div className="text-[18px] font-normal lg:text-[15px] xl:text-[18px] text-[#5E6282]">
                {" "}
                <h1 className="cursor-pointer">Help/FAQ</h1>
                <h1 className="my-2 cursor-pointer">Press</h1>
                <h1 className="cursor-pointer">Affiliate</h1>
              </div>
            </div>
            <div className="text-center mt-4 | lg:text-left |">
              {/* more */}
              <h1 className="font-bold mb-4 text-xl cursor-pointer">More</h1>
              <div className="text-[18px] font-normal lg:text-[15px] text-[#5E6282]">
                <h1 className="cursor-pointer">Airlinefees</h1>
                <h1 className="my-2 cursor-pointer">Airline</h1>
                <h1 className="cursor-pointer">Low fare tips</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-4 xl:items-start ">
            {/* docial */}
            <div className="flex items-center cursor-pointer">
              {/* social icons */}
              <Image
                src="/assets/footer/facebook.png"
                height={50}
                width={50}
                alt="social icon"
              />
              <Image
                src="/assets/footer/insta.png"
                height={50}
                width={50}
                alt="social icon"
              />
              <Image
                src="/assets/footer/twitter.png"
                height={50}
                width={50}
                alt="social icon"
              />
            </div>
            <div className="text-[18px] font-normal">
              {/* text */}
              <h1 className="my-3 xl:my-4">Discover our app</h1>
            </div>
            <div className="flex justify-evenly w-[250px] xl:justify-between xl:w-[220px] cursor-pointer">
              {/* buttons */}
              <Image
                src="/assets/footer/Google.png"
                height={36}
                width={107}
                alt="logo"
              />
              <Image
                src="/assets/footer/app.png"
                height={36}
                width={107}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-16 pb-2 text-[#5E6282]">
        All rights are reseved ?? 2022
      </p>
      {/* <Carousel/> */}
    </div>
  );
}

export default Footer;
