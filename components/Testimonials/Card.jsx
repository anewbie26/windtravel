import React from "react";



function Card({img,text,name,location}) {


  return (
    <div className="flex flex-col items-center   hover:scale-105 transition-all duration-200">
    
      <div className="flex flex-col items-center xl:flex xl:flex-row">
        <div className="flex justify-center mb-8">
          <div className="  mt-20 rounded-xl shadow-xl h-[280px] w-[80vw] sm:w-[60vw] | lg:w-[50vw] | | xl:w-[504px] xl:h-[254px] xl:ml-10 |">
            <p className="px-6 pb-6 pt-4 text-base font-medium text-[#5E6282] mt-4">
              {text.substring(0, 200) + "..."}
            </p>
            <h1 className="pl-6 font-bold text-lg text-[#5E6282]">{name}</h1>
            <p className="pl-6  text-[#5E6282] font-medium">{location}</p>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Card;
