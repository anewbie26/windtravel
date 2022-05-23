import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function MostPop() {
  return (
    <div>
        {/* most popular text and arrow */}
      <div className='flex text-white justify-center '>
<h1 className="">MOST POPULAR</h1>
<ArrowCircleRightOutlinedIcon /> 
      </div>

      {/* cards */}
      <div>
      <div className="h-[250px] w-[70vw] m-8 py-4 rounded-xl bg-white opacity-80 lg:h-[220px]">
        <img
          src=""
          alt=""
          className="m-auto h-[154px] w-[156px] rounded lg:h-[145px]"
        />
        <div className="flex flex-col  text-[#023F76]">
        <h1 className="font-medium text-[16px] mt-1 ml-3 lg:font-bold sm:font-bold">{}</h1>
        <div className="flex ml-3 mt- items-center">
          {}
          <h3 className=" font-[12px] font-light lg:text-[12px] sm:text-[10px]">{}</h3>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default MostPop
