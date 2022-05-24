import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const review = [
  {
    id: 1,
    text: "My boyfriend and I met Haroon Baktoo as soon as we arrived to Delhi. We were a little lost and overwhelmed in such a chaotic city and meeting him was the best thing that could possibly ever happen tobus. He organized perfectly our itinerary for 14 days: Delhi, Rajastán, Agra and Varanasi. We stayed in hotels and havelis that were clean and precious..",
    name: "la callin",
    location: "Phillipines",
  },
  {
    id: 2,
    text: "Services of travel agent was not that good. He promised alot of things but we're not up to the mark One of the best enjoyable trip of Nepal, arranged by Ashirwad team. Our group was comprised of 14 people and had visited Nepal in mid of October19.",
    name: "Ashfaque Ahmed",
    location: "India",
  },
  {
    id: 3,
    text: "Haroon always gives us great service and has surpassed himself in the tour we have just finished. We started in .Veranasi and worked our way down to Aurangabad, seeing such a wide variety of sights along the way. Our driver, Rohit, was a very nice young man who we got along with very well.",
    name: "James Carter",
    location: "England",
  },
  {
    id: 4,
    text: "My wife and I wanted to visit India and learn about the life, culture and religions of the country. We love Indian cooking and were interested in taking a cooking className and eating authentic Indian cuisine, not eating at “restaurants” that cater to tourists. ",
    name: "Hulk Hogan",
    location: "WashingTon America",
  },
];

function Card() {
  const [index, setIndex] = useState(0);
  const { id, text, name, location } = review[index];

  const checkNumber = (number) => {
    if (number > review.length - 1) {
      return 0;
    } else if (number < 0) {
      return review.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="flex flex-col items-center mb-8 ">
      <div className="relative w-[80vw] lg:w-[50vw] xl:w-[40vw]">
        {" "}
        <img
          src="/assets/nextTrip_img/beach.jpg"
          alt=""
          className="h-16 w-16 rounded-full ml-4 mt-4 object-cover absolute top-8 left-[135px] z-30 | sm:-left-8 | | md:-left-8 | | lg:-left-8 |"
        />
      </div>

      <div className="flex justify-center mb-8">
        <div className="  mt-20 rounded-xl drop-shadow-xl bg-gray-200 h-[250px] w-[80vw]  | lg:w-[50vw] | | xl:w-[40vw] |">
          <p className="p-6 text-base font-medium text-[#5E6282] mt-4">
            {text.substring(0, 200) + "..."}
          </p>
          <h1 className="pl-6 font-bold text-lg text-[#5E6282]">{name}</h1>
          <p className="pl-6  text-[#5E6282] font-medium">{location}</p>
        </div>
      </div>
      {/* arrow */}
      <div className="flex justify-between w-[100px] | lg:ml-6 |">
        <div className="" onClick={prevePerson}>
          <ArrowBackIosIcon />
        </div>
        <div className="" onClick={nextPerson}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Card;
