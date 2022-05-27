import React, { useState } from "react";
import Cards from "./Cards";
import Info from "./Info";
import Navbar from "./Navbar";
import Search from "./Search";
import Slider from "react-slick";
import data from "./data";
import Fade from "react-reveal/Fade";

function HeroSection() {
  // const [width, setWidth] = useState(window.innerWidth)
  // console.log(width)
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",
  };
  // if (window.innerWidth > 1024) {
  // settings.slidesToShow = 2;
  // }
  return (
    <>
      <div className="bg-[url('/assets/hero_sec_img/bg.png')] w-full h-[80vh] bg-no-repeat bg-cover | sm:h-auto | shadow-xl shadow-[#E7AC72] md:h-auto lg:h-auto">
        <Fade>
          <Navbar />
        </Fade>
        <Info />
        <h1 className="text-white ml-8 mb-2 font-semibold text-[20px] -mt-2 | sm:pb-0 | sm:-mt-8 md:mb-4 | lg:ml-8 lg:mb-0 | xl:text-[24px] font-poppins xl:ml-16">
          MOST POPULAR
        </h1>
        <div>
          <div className="w-[80vw] md:ml-8 sm:pb-10 sm:w-[91vw] sm:ml-8 lg:w-[70vw] xl:w-[45vw] xl:ml-16 lg:ml-8 mt-2">
            <Slider {...settings}>
              {data.map((card, id) => (
                <div className="">
                  <Cards
                    key={id}
                    img={card.img}
                    title={card.title}
                    icon={card.icon}
                    people={card.people}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Search />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
