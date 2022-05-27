import React from "react";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Fade } from "react-reveal";

function Text() {
  return (
    <div className="mt-8 ml-8 xl:mt-16 xl:ml-16 ">
      <div className="">
        <Fade bottom timeout={1300}>
        <h1 className=" text-[18px] font-semibold text-[#5E6282] font-poppins">TESTIMONIAL</h1>
        <h1 className="text-3xl font-bold mt-4 mb-4 xl:text-[50px] xl:font-bold xl:my-5  text-[#14183E] xl:leading-[64px] font-volk ">
          What Poeple Say {<br />}About Us.
        </h1>
        </Fade>
      </div>
      {/* <div className="text-gray-800 text-center -mb-8 mr-8 xl:text-left xl:mt-24 lg:text-left lg:mt-24">
        <FiberManualRecordIcon />
        <FiberManualRecordOutlinedIcon />
        <FiberManualRecordOutlinedIcon />
      </div> */}
    </div>
  );
}

export default Text;
