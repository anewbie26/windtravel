import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Content() {
  return (
    <div className="flex flex-col items-center h-[400px] justify-evenly font-poppins">
      <div className="">
      
        <h1 className="px-4 text-center text-lg mt-8 font-semibold text-[#5E6282] xl:text-[33px] xl:leading-[54px]">
          Subscribe to get information, latest news and other {<br />}{" "}
          interesting offers about WindTravels
        </h1>

      </div>
      <div className="flex flex-col w-[80%] items-center justify-evenly h-[200px] xl:flex-row xl:w-[60%]">
      <div className="flex bg-white relative z-50 w-[90%] h-[58px] items-center rounded-md | md:w-[60%] | | lg:w-[50%] | | xl:w-[421px] xl:h-[68px] | | 2xl:w-[30%] | shadow-lg">
        <div className="ml-4 text-gray-600">
          <MailOutlineIcon />
        </div>

        <input
          className="bg-transparent outline-none p-2 w-[90%] ml-2"
          type="email"
          placeholder="Your email"
        />
      </div>

      <button className="py-4 px-12 xl:py-5 bg-[#FF8C6C] rounded-md  text-white text-[17px] font-semibold relative z-50 hover:text-[#FF8C6C] hover:bg-white transition-all duration-200">
        Subscribe
      </button>
      </div>
    </div>
  );
}

export default Content;
