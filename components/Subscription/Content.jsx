import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Content() {
  return (
    <div className="flex flex-col items-center h-[400px] justify-evenly">
      <div className="">
        <h1 className=" text-center text-xl font-semibold text-[#5E6282]">
          Subscribe to get information, latest news and other {<br />}{" "}
          interesting offers about WindTravels
        </h1>
      </div>
      <div className="flex bg-white relative z-50 w-[90%] h-[58px] items-center rounded-md | md:w-[60%] | | lg:w-[50%] | | xl:w-[40%] | | 2xl:w-[30%] |">
        <div className="ml-4 text-gray-600">
          <MailOutlineIcon />
        </div>

        <input
          className="bg-transparent outline-none p-2 w-[90%] ml-2"
          type="email"
          placeholder="Your email"
        />
      </div>

      <button className="py-4 px-12 bg-[#FF8C6C] rounded-md  text-white text-xl">
        Subscribe
      </button>
    </div>
  );
}

export default Content;
