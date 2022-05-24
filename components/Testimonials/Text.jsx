import React from "react";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Text() {
  return (
    <div className="mt-8 ml-8">
      <div className="">
        <h1 className="font-semibold text-[18px] ">TESTIMONIAL</h1>

        <h1 className="text-3xl font-bold mt-4 mb-12 font-volk ">
          What Poeple Say {<br />}About Us.
        </h1>
      </div>
      <div className="text-gray-800 text-center -mb-8 mr-8">
        <FiberManualRecordIcon />
        <FiberManualRecordOutlinedIcon />
        <FiberManualRecordOutlinedIcon />
      </div>
    </div>
  );
}

export default Text;
