import Image from "next/image";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div className="h-[100px]  flex justify-between items-center px-4 pt-10 font-hero relative z-[20]">
      <div className="flex xl:ml-10">
        {/* logo */}
        <div className="flex items-center cursor-pointer">
          <Image src="/assets/hero_sec_img/logo.png" height={60} width={60}  alt="logo"/>
          <Image src="/assets/hero_sec_img/logoT.png" height={23} width={176} alt="logo"/>
        </div>
      </div>
      <div>
        {/* Big screeen buttons*/}
        <div className="scale-0 flex w-[50vw] text-[20px] font-bold  | lg:w-[65vw] | xl:w-[52vw] | 2xl:w-[50vw] |  justify-between px-4 text-white items-center | lg:scale-100 |">
          <p className = "cursor-pointer">Home</p>
          <p className = "cursor-pointer">About Us</p>
          <p className = "cursor-pointer">Premium</p>
          <p className = "cursor-pointer">Blogs</p>
          <div className ="relative">
          <p className="text-black flex items-end text-[17px] font-semibold cursor-pointer" onClick={() => setSubMenuOpen(!subMenuOpen)} >
            EN
            <span className="-ml-1 font-medium">
            <KeyboardArrowDownIcon />
            </span>
          </p>
          <div
            className={` h-24 w-24 mr-8 rounded-md text-gray-600 justify-evenly -ml-10 bg-white flex flex-col lg:absolute ${
              !subMenuOpen ? "hidden" : "flex"
            }`}
          >
            <p className = "pl-2 cursor-pointer hover:text-white hover:bg-[#EBB076] rounded">English</p>
            <p className = "pl-2 cursor-pointer hover:text-white hover:bg-[#EBB076] rounded">Hindi</p>{" "}
          </div>
          </div>
          <button className="border-2 px-4 py-3 -ml-10 rounded-xl text-[20px] font-bold hover:text-white hover:bg-[#EBB076] transition-all duration-200">Book Now</button>
        </div>
        <div className="lg:scale-0 relative">
          {!isOpen ? (
            <button
              className="absolute -top-[54px] right-6 z-[15]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              className=" text-3xl font-bold absolute -top-[58px] right-6  z-[15]"
              onClick={() => setIsOpen(!isOpen)}
            >
              x
            </button>
          )}
{/* small screeen buttons (Sidebar) */}
          <div
            className={`fixed top-0 right-0 h-screen w-[50%] sm:w-[40%] bg-white flex flex-col px-10 pt-28 text-left ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ease-in-out duration-300`}
          >
            <p className="p-2 rounded hover:text-white hover:bg-[#EBB076] cursor-pointer">Home</p>
            <p className="p-2 rounded hover:text-white hover:bg-[#EBB076] cursor-pointer">About Us</p>
            <p className="p-2 rounded hover:text-white hover:bg-[#EBB076] cursor-pointer">Premium</p>
            <p className="p-2 rounded hover:text-white hover:bg-[#EBB076] cursor-pointer">Blogs</p>
            <div className="mr-4 p-2 ">
              <button className="cursor-pointer" onClick={() => setSubMenuOpen(!subMenuOpen)}>
                EN
                <KeyboardArrowDownIcon />
              </button>
              <div
                className={` pt-2 w-20 bg-white flex flex-col ${
                  !subMenuOpen ? "hidden" : "flex"
                }`}
              >
                <p className="mb-2 hover:text-white cursor-pointer hover:bg-[#EBB076]">English</p>
                <p className="hover:text-white cursor-pointer hover:bg-[#EBB076]">Hindi</p>{" "}
              </div>
            </div>
            <p className="p-2 rounded hover:text-white hover:bg-[#EBB076] cursor-pointer">Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
