import React from "react";
// import Card from './Card'
import Text from "./Text";
import Carousel from "./Carousel";

function Testimonial() {
  return (
    <div className="lg:flex xl:justify-start lg:justify-start">
      <Text />
      {/* <Card /> */}
      <Carousel />
    </div>
  );
}

export default Testimonial;
