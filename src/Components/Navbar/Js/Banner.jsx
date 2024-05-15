import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-laptop bg-no-repeat bg-BgSize w-[100%] h-[633px] mobile:hidden"></div>
      <div className="bg-mobile bg-no-repeat bg-BgSize w-[100%] h-[555px] hidden mobile:block"></div>
    </>
  );
};

export default Banner;
