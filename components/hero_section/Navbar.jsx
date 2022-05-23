import Image from "next/image";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div className="h-[100px]  flex justify-between items-center px-4">
      <div className="flex ">
        {/* logo */}
        <div className="flex items-center">
          <Image src="/assets/hero_sec_img/logo.png" height={60} width={60} />
          <Image src="/assets/hero_sec_img/logoT.png" height={23} width={176} />
        </div>
      </div>
      <div>
        {/* Big screeen buttons*/}
        <div className="scale-0 flex w-[50vw] justify-between px-4 text-white items-center | lg:scale-100 |">
          <p>Home</p>
          <p>About Us</p>
          <p>Premium</p>
          <p>Blogs</p>
          <div className ="relative">
          <button  onClick={() => setSubMenuOpen(!subMenuOpen)} >
            EN
            <KeyboardArrowDownIcon />
          </button>
          <div
            className={` h-28 w-16 bg-white flex flex-col lg:absolute ${
              !subMenuOpen ? "hidden" : "flex"
            }`}
          >
            <p>English</p>
            <p>Hindi</p>{" "}
          </div>
          </div>
          <button className="border-2 px-6 py-2 rounded-xl">Book Now</button>
        </div>
        <div className="lg:scale-0">
          {!isOpen ? (
            <button
              className="fixed top-8 right-6 z-40"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              className=" text-2xl fixed top-8 right-6 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              x
            </button>
          )}
{/* small screeen buttons (Sidebar) */}
          <div
            className={`fixed top-0 right-0 h-screen w-[50%] bg-white flex flex-col px-10 pt-28 text-left ${
              isOpen ? "translate-x-0" : "translate-x-full z-40"
            } ease-in-out duration-300`}
          >
            <p className="p-2 rounded hover:text-white hover:bg-[#EBB076]">Home</p>
            <p className="p-2">About Us</p>
            <p className="p-2">Premium</p>
            <p className="p-2">Blogs</p>
            <div className="mr-4 p-2">
              <button onClick={() => setSubMenuOpen(!subMenuOpen)}>
                EN
                <KeyboardArrowDownIcon />
              </button>
              <div
                className={` h-28 w-16 bg-white flex flex-col ${
                  subMenuOpen ? "hidden" : "flex"
                }`}
              >
                <p>English</p>
                <p>Hindi</p>{" "}
              </div>
            </div>
            <p className="p-2">Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
