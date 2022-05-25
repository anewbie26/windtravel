import React from "react";

function Text() {
  return (
    <div>
      <div className="flex flex-col mt-16 xl:ml-[127px] font-poppins | lg:w-[55vw] | xl:w-[43vw]">
        <div className="mb-4">
          <p className="xl:text-[18px] font-semibold text-[#5E6282] font-poppins">Easy and Fast</p>
          <h1 className="text-3xl xl:text-[50px] xl:font-bold xl:my-5 text-[#14183E] xl:leading-[64px] font-volk">Book your next trip {<br/>} in 3 easy steps</h1>
        </div>
        <div className="flex mb-8 | sm:ml-4 | | md:ml-8 | xl:ml-0">
          <div className="flex justify-center items-center h-[48px] w-[47px] rounded-2xl bg-[#F0BB1F]">
            {" "}
            <img
              className=" h-[20px] w-[22px] "
              src="/assets/nextTrip_img/Vector1.png"
              alt=""
            />
          </div>

          <div className="w-[75vw] ml-4 text-[16px] | lg:w-[45vw] | xl:w-[380px]">
            <h2 className="font-bold">Choose Destination</h2>
            <p className="font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              exercita ducimus labore,{" "}
            </p>
          </div>
        </div>
        <div className="flex mb-8 | sm:ml-4 | | md:ml-8 | xl:ml-0 xl:mt-4 ">
          <div className="h-[48px] w-[47px] flex justify-center items-center rounded-2xl bg-[#E65D33]">
            {" "}
            <img
              className=" h-[18px] w-[22px]"
              src="/assets/nextTrip_img/Vector2.png"
              alt=""
            />
          </div>
        
          <div className="w-[75vw] ml-4 text-[16px] | lg:w-[45vw] | xl:w-[380px]"> 
            <h2 className="font-bold">Make Payments</h2>
            <p className="font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              exercita,
            </p>
          </div> 
        </div>
        <div className="flex | sm:ml-4 | | md:ml-8 | xl:ml-0 xl:mt-4">
          <div className="h-[48px] w-[47px] flex justify-center items-center rounded-2xl bg-[#186077]">
            {" "}
            <img
              className=" h-[18px] w-[22px] "
              src="/assets/nextTrip_img/Vector3.png"
              alt=""
            />
          </div>

          <div className="w-[75vw] ml-4 text-[16px] | lg:w-[45vw] | xl:w-[380px]">
            <h2 className="font-bold">Reach Airport on Selected Date</h2>
            <p className="font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              exerci,{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
