import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className=" mb-4 mt-20 pt-4 w-[100vw]  ">
        <div className="  flex justify-center items-center flex-col | lg:flex-row |">
          <div className="w-[60%] flex flex-col items-center lg:w-[22%]">
            <div className="flex items-center ">
              {/* logo */}
              <Image src="/assets/footer/logo.png" height={60} width={60} alt="logo"/>
              <Image
                src="/assets/footer/logo-text.png"
                height={23}
                width={173}
                alt="logo"
              />
            </div>
            {/* text */}
            <p className="text-[18px] font-normal text-center">
              Book your trip in minuts. get full {<br />}Control for much longer
            </p>
          </div>
          <div className="md:flex md:flex-row md:justify-evenly md:w-[100vw] md:my-6 | lg:w-[50vw] |">
            <div className="text-center  mt-4 | lg:text-left |">
              {/* company */}
              <h1 className="font-bold text-xl mb-4 lg:text-[18px]">Company</h1>
              <div className="text-[18px] font-normal lg:text-[15px]">
                <h1>About</h1>
                <h1 className="my-2">Careers</h1>
                <h1>Mobile</h1>
              </div>
            </div>
            <div className="text-center  mt-4 | lg:text-left |">
              {/* contace */}
              <h1 className="font-bold mb-4 text-xl">Contact</h1>
              <div className="text-[18px] font-normal lg:text-[15px]">
                {" "}
                <h1>Help/FAQ</h1>
                <h1 className="my-2">Press</h1>
                <h1>Affiliate</h1>
              </div>
            </div>
            <div className="text-center mt-4 | lg:text-left |">
              {/* more */}
              <h1 className="font-bold mb-4 text-xl ">More</h1>
              <div className="text-[18px] font-normal lg:text-[15px]">
                <h1>Airlinefees</h1>
                <h1 className="my-2">Airline</h1>
                <h1>Low fare tips</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center my-4 ">
            {/* docial */}
            <div className="flex items-center">
              {/* social icons */}
              <Image src="/assets/footer/facebook.png" height={50} width={50} alt = "social icon"/>
              <Image src="/assets/footer/insta.png" height={50} width={50} alt = "social icon"/>
              <Image src="/assets/footer/twitter.png" height={50} width={50} alt = "social icon"/>
            </div>
            <div className="text-[18px] font-normal">
              {/* text */}
              <h1 className="my-3">Discover our app</h1>
            </div>
            <div className="flex justify-evenly w-[250px]">
              {/* buttons */}
              <Image src="/assets/footer/Google.png" height={36} width={107} alt="logo"/>
              <Image src="/assets/footer/app.png" height={36} width={107} alt="logo"/>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pb-4">All rights are reseved © 2022</p>
    </div>
  );
}

export default Footer;