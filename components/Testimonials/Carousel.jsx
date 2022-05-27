import React from "react";
import Slider from "react-slick";
import { review } from "./reviews";
import Card from "./Card";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
  };
  return (
    <div className="lg:ml-24 mx-auto w-[90vw] sm:w-[80vw] md:w-[80vw] lg:w-[55vw] xl:w-[50vw] ">
      <Slider {...settings}>
        {review.map((rev) => (
          <div>
            <Card
              key={rev.id}
              Card
              text={rev.text}
              name={rev.name}
              location={rev.location}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
