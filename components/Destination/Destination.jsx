import React from "react";
import Cards from "./Cards";
import Heading from "./Heading";
import NearMeIcon from "@mui/icons-material/NearMe";

const cards = [
  {
    id: 1,
    img: "/assets/destination_img/des1.png",
    location: "Cebu,Philippines",
    price: "$1.2k",
    icon: <NearMeIcon />,
    days: "10 days Trip",
  },
  {
    id: 2,
    img: "/assets/destination_img/des2.jpg",
    location: "Manalian,Philippines",
    price: "$2.2k",
    icon: <NearMeIcon />,
    days: "12 days Trip",
  },
  {
    id: 3,
    img: "/assets/destination_img/des3.png",
    location: "Davao,Philippines",
    price: "$3.1k",
    icon: <NearMeIcon />,
    days: "28 days Trip",
  },
];

function Destination() {
  return (
    <div>
      <Heading />

<div className="flex flex-col | md:flex-row md:flex-wrap md:justify-evenly |">
      {cards.map((card) => (
        <Cards
          key={card.id}
          img={card.img}
          location={card.location}
          price={card.price}
          icon={card.icon}
          days={card.days}
        />
      ))}
      </div>
    </div>
  );
}

export default Destination;
