import React from "react";

import CatHeading from "./CatHeading";
import CatCards from "./CatCards";

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
      <div className="flex flex-col | md:flex-row md:flex-wrap md:justify-evenly |">
      {array.map((card) => (
        <CatCards img={card.img} title={card.heading} text={card.desc} />
      ))}
   </div>
    </div>
  );
}

export default Category;
