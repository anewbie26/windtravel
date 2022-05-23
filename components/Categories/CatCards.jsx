import React from "react";
import Image from "next/image"




function CatCards({img, title, text}) {
  return (
    <div className="my-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center bg-gray-200 rounded-3xl h-[270px] w-[80%]">
          {/* <div className="flex flex-col bg-orange-300 h-64 w-60 rounded-xl items-center justify-center"> */}
            <div className="my-6 flex items-center justify-center">
              <Image src={img} height={75} width={88} />
              {/* <div className="h-10 w-10 bg-orange-500 rounded"></div> */}
            </div>
            <h2 className=" text-xl font-semibold mb-4">{title}</h2>
            <p className="text-center text-base font-medium w-5/6">{text}</p>
          {/* </div> */}
        </div>
      </div>
      {/* <img
        src=""
        alt=""
        className="absolute -bottom-10 -left-10 hidden group-hover:-z-10  group-hover:block animate-bounce"
      /> */}
    </div>
  );
}

export default CatCards;
