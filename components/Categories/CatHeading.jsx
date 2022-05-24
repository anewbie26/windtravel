import React from "react";
import Image from "next/image";

function CatHeading() {
  return (
    <div className="flex">
      {/* top heading container */}
      {/* w-full to below container for md and large screeens */}
      <div className="flex flex-col justify-center w-[70vw] pl-8 | lg:w-full lg:items-center | | sm:justify-start sm:mt-2 |">
        {/* heading text */}
        <p>CATEGORY</p>
        <h1 className="text-2xl mt-2 | sm:mt-0 sm:text-3xl |">
          We Offer Best Services
        </h1>
      </div>
      <div className="w-[30vw] | lg:w-fit | flex  justify-end">
        {/* decore image right */}
        <Image src="/assets/category_img/decore.png" height={153} width={166} alt="decoration"/>
      </div>
    </div>
  );
}

export default CatHeading;
