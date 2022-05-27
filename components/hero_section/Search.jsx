import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Search() {
  return (
    <div>
      <div className=" mt-20  relative">
        <div className="absolute rounded-xl -top-10 left-[55px] h-[150px] w-[92vw] bg-white opacity-40"></div>
        <div className=" flex items-center justify-center">
          <div className="flex rounded-xl ml-[88px] lg:ml-[80px] mb-20 bg-white lg:h-[72px] lg:w-[72vw]  xl:w-[75vw]">
            <div className="flex items-center w-[37%] border-r-2">
              <div className="ml-4 cursor-pointer">
                <HomeOutlinedIcon />
              </div>
              <div className="ml-5">
                <h3 className="text-sm font-normal lg:text-[10px] xl:text-sm">
                  Accomodation
                </h3>
                <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">
                  Aklam,Bacaracy
                </h1>
              </div>
              <div className="ml-[30%] cursor-pointer">
                <KeyboardArrowDownOutlinedIcon />
              </div>
            </div>
            <div className="flex justify-evenly w-1/5  items-center border-r-2">
              <DateRangeOutlinedIcon />
              <div className="">
                <h3 className="text-sm font-normal sm:text-[10px]  xl:text-sm md:text-[12px]">
                  Check-In
                </h3>
                <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">
                  04.12.2021
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-evenly  w-1/5 border-r-2">
              <DateRangeOutlinedIcon />

              <div className="">
                <h3 className="text-sm font-normal sm:text-[10px] xl:text-sm md:text-[12px]">
                  Check-Out
                </h3>
                <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">
                  05.12.2021
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-evenly w-1/4">
              <PersonOutlineOutlinedIcon />
              <div>
                <h3 className="text-sm font-normal sm:text-[10px] xl:text-sm md:text-[12px]">
                  Guests
                </h3>
                <h1 className="text-base font-bold sm:text-[12px] xl:text-base md:text-[13px]">
                  2 sdults
                </h1>
              </div>
              <KeyboardArrowDownOutlinedIcon />
            </div>
          </div>
          <button className="border ml-6 bg-[#E7AC72] rounded-xl h-[72px] w-[175px] text-lg font-bold text-white  xl:h-[72px] xl:w-[175px] lg:ml-4 lg:w-[135px] xl:mb-20 xl:ml-6 lg:mb-20">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
