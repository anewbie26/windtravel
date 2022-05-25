import React from "react";
import Image from "next/image";
import Content from "./Content";
import SendIcon from '@mui/icons-material/Send';

function Subscribe() {
  return (
    <div className="flex justify-center xl:justify-start xl:ml-16 my-12 relative">
      <div className="relative h-[400px] w-[80vw] bg-[#f7f4ff] rounded-2xl xl:w-[1170px] xl:h-[407px] rounded-tl-[129px] ">
          <div className="h-14 w-14 rounded-full bg-[#FF8C6C] flex items-center justify-center absolute -top-4 -right-4 z-20">
              <div className="text-white -rotate-45 mb-1.5 ml-1">
             <SendIcon fontSize="large"/>
             </div>
          </div>
        <div className="absolute top-0 right-0 opacity-20">
          <Image
            src="/assets/subscribe_img/circle1.png"
            alt=""
            height={300}
            width={280}
          />
        </div>
        <Content />
        <div className="absolute -bottom-2 left-6 opacity-20">
          <Image src="/assets/subscribe_img/circle2.png" alt="circle" height={300} width={300} />
        </div>
      </div>
      <div className = "absolute -bottom-[75px] right-0 | lg:right-5 | | xl:right-24 | | 2xl:right-20 |">
          <Image src= "/assets/subscribe_img/decoreB.png" height={150} width ={150} />
      </div>
    </div>
  );
}

export default Subscribe;

