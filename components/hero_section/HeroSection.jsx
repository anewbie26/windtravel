import React from "react";
import Cards from "./Cards";
import Info from "./Info";
import Navbar from "./Navbar";
import Search from "./Search";
import Slider from "react-slick";
import data from "./data";
import Fade from "react-reveal/Fade";
// import { useWindowWidth } from "@react-hook/window-size/throttled"; ?// this giving miss match ui error 

import { useState, useEffect } from "react";
 
function HeroSection() {
  // const onlyWidth = useWindowWidth(); react/hook

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();
  // console.log(size)

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

  if (size.width < 640) {
    settings.slidesToShow = 2;
  }
  return (
    <div>
      <div className="bg-[url('/assets/hero_sec_img/bg.png')] w-full h-[80vh] bg-no-repeat bg-cover | sm:h-auto | shadow-xl shadow-[#E7AC72] md:h-auto lg:h-auto relative z-[1] ">
        <Fade>
          <Navbar />
        </Fade>
        <Info />
        <h1 className="text-white ml-8 mb-2 font-semibold text-[20px] -mt-2 | sm:pb-0 | sm:-mt-8 md:mb-4 | lg:ml-8 lg:mb-0 | xl:text-[24px] font-poppins xl:ml-16">
          MOST POPULAR
        </h1>
        <div>
          <div className=" w-[85vw] ml-8 md:ml-8 sm:pb-10 sm:w-[85vw] md:w-[78vw] sm:ml-8 lg:w-[57vw] xl:w-[45vw] xl:ml-16 lg:ml-8 mt-2 relative -z-[1]">
            <Slider {...settings}>
              {data.map((card, id) => (
                <Cards
                  key={id}
                  img={card.img}
                  title={card.title}
                  icon={card.icon}
                  people={card.people}
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
