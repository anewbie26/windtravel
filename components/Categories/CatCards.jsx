import React from "react";
import Image from "next/image";

function CatCards({ img, title, text }) {
  return (
    <div className="my-8 relative flex justify-center ">
      <div className="group flex justify-center items-center hover:z-50  relative ">
        <div className=" flex flex-col items-center bg-gray-200 rounded-3xl h-[270px] w-[80vw] | md:w-[35vw] | | xl:w-[20vw] | hover:shadow-xl hover:scale-105 transition-all duration-200">
          <div className="my-6 flex items-center justify-center">
            <Image src={img} height={75} width={88} />
            {/* <div className="h-10 w-10 bg-orange-500 rounded"></div> */}
          </div>
          <h2 className=" text-xl font-semibold mb-4">{title}</h2>
          <p className="text-center text-base font-medium w-5/6">{text}</p>
        </div>
      </div>
      <div className="h-[50px] w-[90%] bg-[#E0A973] absolute bottom-2 rounded-t-3xl hidden group-hover:-z-10 group-hover:block"></div>
    </div>
  );
}

export default CatCards;
