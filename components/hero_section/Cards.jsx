import React from "react";
// import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Cards({img,title,icon,people}) {
    return (
      <div>
        
        <div className="h-[215px] w-[160px] md:h-[230px] md:w-[176px] xl:h-[230px] xl:w-[176px] sm:h-[200px] sm:w-[160px] py-4 rounded-xl bg-white opacity-80 lg:h-[220px]">
          <img
            src={img}
            alt=""
            className="m-auto h-[140px] w-[140px] md:h-[154px] md:w-[156px]  xl:h-[154px] xl:w-[156px] sm:h-[130px] sm:w-[145px] rounded lg:h-[145px]"
          />
          <div className="flex flex-col  text-[#023F76]">
          <h1 className="font-medium text-[16px] mt-1 ml-3 lg:font-bold sm:font-bold">{title}</h1>
          <div className="flex ml-3 mt- items-center">
            {icon}
            <h3 className=" font-[12px] font-light lg:text-[12px] sm:text-[10px]">{people}</h3>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;

  