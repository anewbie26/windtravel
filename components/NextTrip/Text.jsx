import React from "react";

function Text() {
  return (
    <div>
      <div className="flex flex-col mt-16 ml-8 font-poppins | lg:w-[55vw] |">
        <div className="mb-4">
          <p>Easy and Fast</p>
          <h1 className="text-3xl">Book your next trip {<br/>} in 3 easy steps</h1>
        </div>
        <div className="flex mb-8 | sm:ml-4 | | md:ml-8 |">
          <div className="flex justify-center items-center h-14 w-14 rounded-2xl bg-[#F0BB1F]">
            {" "}
            <img
              className=" h-8 w-8 "
              src="/assets/nextTrip_img/Vector1.png"
              alt=""
            />
          </div>

          <div className="w-[75vw] ml-4 | lg:w-[45vw] |">
            <h2 className="font-bold">Choose Destination</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              exercitationem sunt dolor ipsum id ducimus labore dolorem,{" "}
            </p>
          </div>
        </div>
        <div className="flex mb-8 | sm:ml-4 | | md:ml-8 |">
          <div className="h-14 w-14 flex justify-center items-center rounded-2xl bg-[#E65D33]">
            {" "}
            <img
              className=" h-8 w-8 "
              src="/assets/nextTrip_img/Vector2.png"
              alt=""
            />
          </div>
        
          <div className="w-[75vw] ml-4 | lg:w-[45vw] |"> 
            <h2 className="font-bold">Make Payments</h2>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              exercitationem sunt dolor ipsum id ducimus labore dolorem,
            </p>
          </div> 
        </div>
        <div className="flex | sm:ml-4 | | md:ml-8 | ">
          <div className="h-14 w-14 flex justify-center items-center rounded-2xl bg-[#186077]">
            {" "}
            <img
              className=" h-8 w-8 "
              src="/assets/nextTrip_img/Vector3.png"
              alt=""
            />
          </div>

          <div className="w-[75vw] ml-4 | lg:w-[45vw] |">
            <h2 className="font-bold">Reach Airport on Selected Date</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              exercitationem sunt dolor ipsum id ducimus labore dolorem,{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
