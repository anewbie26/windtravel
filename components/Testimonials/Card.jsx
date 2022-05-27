import React from "react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import {review} from "./reviews";


function Card({img,text,name,location}) {
  // const [index, setIndex] = useState(0);
  // const { id, text, name, location } = review[index];

  // const checkNumber = (number) => {
  //   if (number > review.length - 1) {
  //     return 0;
  //   } else if (number < 0) {
  //     return review.length - 1;
  //   }
  //   return number;
  // };

  // const nextPerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const prevePerson = () => {
  //   setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  return (
    <div className="flex flex-col items-center   hover:scale-105 transition-all duration-200">
      {/* <div className="relative w-[80vw] sm:w-[60vw] lg:w-[50vw]  xl:w-[50vw] ">
        {" "}
        <img
          src="/assets/nextTrip_img/beach.jpg"
          alt=""
          className="h-16 w-16 rounded-full ml-4 mt-4 object-cover absolute top-8 left-[135px] z-30 | sm:-left-8 | | md:-left-8 | | lg:-left-8 | xl:left-20"
        />
      </div> */}
      <div className="flex flex-col items-center xl:flex xl:flex-row">
        <div className="flex justify-center mb-8">
          <div className="  mt-20 rounded-xl shadow-xl h-[280px] w-[80vw] sm:w-[60vw] | lg:w-[50vw] | | xl:w-[504px] xl:h-[254px] xl:ml-10 |">
            <p className="p-6 text-base font-medium text-[#5E6282] mt-4">
              {text.substring(0, 200) + "..."}
            </p>
            <h1 className="pl-6 font-bold text-lg text-[#5E6282]">{name}</h1>
            <p className="pl-6  text-[#5E6282] font-medium">{location}</p>
          </div>
        </div>
        {/* arrow */}
        {/* <div className="flex justify-between w-[100px] | lg:ml-6 | xl:rotate-90 xl:h-[100px] xl:mt-24">
          <div className="hover:text-black text-gray-500" onClick={prevePerson}>
            <ArrowBackIosIcon />
          </div>
          <div className="hover:text-black text-gray-500" onClick={nextPerson}>
            <ArrowForwardIosIcon />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
