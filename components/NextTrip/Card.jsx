import React from "react";

function Card() {
  return (
    <div>
      <div className=" flex justify-center mt-8 ">
      {/* <div className="relative">
        <div className="h-80 w-80 rounded-full bg-[#59B1E6] filter blur-3xl absolute top-0 left-24 z-10 "></div>
      </div> */}
        <div className="group z-50 | lg:mt-32 | relative shadow-lg rounded-2xl h-[400px] w-[80vw] | sm:w-[70vw] | | md:w-[65vw] | | lg:w-[35vw] lg:h-[320px] |  | xl:w-[370px] | | xl:h-[400px] | | 2xl:w-[26vw] |">
          <img
            className="w-[100%] h-[60%] | lg:h-[50%] | | xl:h-[161px] xl:w-[321px] xl:mx-auto xl:my-[20px] |"
            src="/assets/nextTrip_img/beach.jpg"
            alt=""
          />
          <h1 className="font-medium text-[19px] ml-8 mt-3 ">
            Trip To Boracay
          </h1>
          <p className="ml-8 mt-1 text-[16px] font-medium text-[#84829A] xl:mt-3">
            14-29 June| by Lei Britz
          </p>
          <div className="relative">
            <div className="flex w-36 ml-8 mt-2 justify-between xl:mt-3">
              <img
                src="/assets/nextTrip_img/LEAF.png"
                alt=""
                className="sm:h-[25px]  xl:h-[36px] xl:w-[36px]"
              />
              <img
                src="/assets/nextTrip_img/map.png"
                alt=""
                className="sm:h-[25px] xl:h-[36px] xl:w-[36px]"
              />
              <img
                src="/assets/nextTrip_img/send.png"
                alt=""
                className="sm:h-[25px] xl:h-[36px] xl:w-[36px]"
              />
            </div>

            <div className="flex mt-4 ml-5 relative xl:mt-6">
              <img
                className="mx-4 "
                src="/assets/nextTrip_img/Group.png"
                alt=""
              />
              <p className="text-[#84829A] text-[16px] font-medium">
                24 people going
              </p>
              <img
                className="absolute right-8"
                src="/assets/nextTrip_img/heart.png"
                alt=""
              />
            </div>

            {/* progress card */}
            <div className="">
              <div
                className=" absolute -top-[220px] left-[13%] | sm:left-[50%] sm:-top-[120px] | | md:left-[60%] | | lg:left-[50%] | bg-white h-[130px] w-[263px] rounded-2xl shadow-xl flex group-hover:flex | lg:w-[230px] lg:h-[120px] | | xl:w-[263px]  xl:h-[130px]  xl:left-[57%] xl:-top-[75px] |
             "
              >
                <div>
                  <img
                    src="/assets/nextTrip_img/beach.jpg"
                    alt=""
                    className="h-14 w-14 rounded-full ml-4 mt-4 object-cover"
                  />
                </div>
                <div className="flex flex-col mx-4 mt-4 ">
                  <p className="sm:text-xs xl:text-[16px] xl:font-medium text-[#84829A]">
                    Ongoing
                  </p>
                  <h1 className="mb-3 font-bold ">Trip to Baguio</h1>
                  <p className="font-medium text-[14px]">
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
        {/* <div className="h-[367px] w-[354px] bg-[#59B1E6] -z-20 absolute top-0"></div> */}
      </div>
    </div>
  );
}

export default Card;
