import React from "react";
import Category from "../Categories/Category";
import Info from "./Info";
// import MostPop from "./MostPop";
import Navbar from "./Navbar";

function HeroSection() {
  return (
    <>
      <div className="bg-[url('/assets/hero_sec_img/bg.png')] w-full h-[80vh] bg-no-repeat bg-cover | sm:h-[100vh] | shadow-[#E7AC72]">
        <Navbar />
        <Info />
        {/* <MostPop /> */}
      </div>
      
      <Category />
      
    </>
  );
}

export default HeroSection;
