import React from "react";
// import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Cards({img,title,svg,people}) {
    return (
      <div>
        <div className="h-[230px] w-[176px] m-8 py-4 rounded-xl bg-white opacity-80 lg:h-[220px]">
          <img
            src={img}
            alt=""
            className="m-auto h-[154px] w-[156px] rounded lg:h-[145px]"
          />
          <div className="flex flex-col  text-[#023F76]">
          <h1 className="font-medium text-[16px] mt-1 ml-3 lg:font-bold sm:font-bold">{title}</h1>
          <div className="flex ml-3 mt- items-center">
            {svg}
            <h3 className=" font-[12px] font-light lg:text-[12px] sm:text-[10px]">{people}</h3>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;
{/* <ArrowCircleRightOutlinedIcon />  */}
  