import React from "react";

function Card() {
  return (
    <div>
      <div className=" flex justify-center relative mt-8 ">
        <div className="group | lg:mt-32 | relative shadow-lg rounded-2xl h-[400px] w-[80vw] | sm:w-[70vw] | | md:w-[65vw] | | lg:w-[35vw] lg:h-[320px] |  | xl:w-[30vw] | | xl:h-[370px] | | 2xl:w-[26vw] |">
          <img
            className="w-[100%] h-[60%] | lg:h-[50%] | | xl:h-[60%] |"
            src="/assets/nextTrip_img/beach.jpg"
            alt=""
          />
          <h1 className="font-bold ml-8 mt-3 ">Trip To Boracay</h1>
          <p className="ml-8 mt-1 ">14-29 June| by Lei Britz</p>
          <div className="relative">
            <div className="flex w-36 ml-8 mt-2 justify-between ">
              <img
                src="/assets/nextTrip_img/LEAF.png"
                alt=""
                className="sm:h-[25px]"
              />
              <img
                src="/assets/nextTrip_img/map.png"
                alt=""
                className="sm:h-[25px]"
              />
              <img
                src="/assets/nextTrip_img/send.png"
                alt=""
                className="sm:h-[25px]"
              />
            </div>

            <div className="flex mt-4 ml-5 relative">
              <img
                className="mx-4 "
                src="/assets/nextTrip_img/Group.png"
                alt=""
              />
              <p className="">24 people going</p>
              <img
                className="absolute right-8"
                src="/assets/nextTrip_img/heart.png"
                alt=""
              />
            </div>

            {/* progress card */}
            <div className="">
              <div
                className=" absolute -top-[220px] left-[13%] | sm:left-[50%] sm:-top-[120px] | | md:left-[60%] | | lg:left-[50%] | bg-white h-[130px] w-[263px] rounded-2xl shadow-xl hidden group-hover:flex | lg:w-[230px] lg:h-[120px] | | xl:w-[263px]  xl:h-[130px]  xl:left-[60%] |
             "
              >
                <div>
                  <img
                    src="/assets/nextTrip_img/beach.jpg"
                    alt=""
                    className="h-14 w-14 rounded-full ml-4 mt-4 "
                  />
                </div>
                <div className="flex flex-col mx-4 mt-4 ">
                  <p className="sm:text-xs">Ongoing</p>
                  <h1 className="mb-3 font-bold ">Trip to Baguio</h1>
                  <p className="font-bold ">
                    <span className="font-normal sm:text-sm text-purple-700">
                      40%
                    </span>{" "}
                    completed
                  </p>
                  <img
                    src="/assets/nextTrip_img/progress.png"
                    alt=""
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
