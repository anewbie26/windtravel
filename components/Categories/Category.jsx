import React from "react";

import CatHeading from "./CatHeading";
import CatCards from "./CatCards";
import { Fade } from "react-reveal";

const array = [
  {
    img: "/assets/category_img/antina.png",
    heading: "Calculated Weather ",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    img: "/assets/category_img/planeE.png",
    heading: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    img: "/assets/category_img/mic.png",
    heading: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    img: "/assets/category_img/setting.png",
    heading: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

function Category() {
  return (
    <div className="">
      <CatHeading />
      <div className="xl:flex xl:justify-center">
        <Fade bottom timeout={1700}>
          <div className="flex flex-col | md:flex-row md:flex-wrap md:justify-evenly | xl:mt-8 xl:w-[85vw] xl:mb-20 ">
            {array.map((card, id) => (
              <CatCards key={id} img={card.img} title={card.heading} text={card.desc} />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Category;
