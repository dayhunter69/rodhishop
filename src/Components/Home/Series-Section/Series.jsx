import React from "react";
import Img1 from "../../images/SeriesImg1.png";
import Img2 from "../../images/SeriesImg2.png";
import ChargerCarousel from "./Series-Charger-Carousel/ChargerCarousel";
import EarphoneCarousel from "./Series-Earphone-Carousel/EarphoneCarousel";

const Series = () => {
  return (
    <>
      <div className="mb-[90px] mobile:mb-[50px]">
        <div className="flex items-center justify-center mobile:flex-col">
          <div className="max-w-[720px] h-[450px] mobile:flex mobile:items-center mobile:justify-center mobile:w-[100%] mobile:h-[230px]">
            <img
              src={Img1}
              alt=""
              className="w-[718px] h-[448px] mobile:h-[230px] mobile:w-[100%]"
            />
          </div>
          <div
            className="flex items-center justify-center text-[30px] w-[720px] 
            mobile:max-w-[360px] mobile:mx-0 mobile:my-[10px]"
          >
            <EarphoneCarousel />
          </div>
        </div>
        <div className="flex items-center justify-center mobile:flex-col-reverse">
          <div
            className="flex items-center justify-center text-[30px] w-[720px]  mobile:max-w-[360px] 
              mobile:mx-0 mobile:my-[10px]"
          >
            <ChargerCarousel />
          </div>
          <div className="max-w-[720px] h-[450px] mobile:flex mobile:items-center mobile:justify-center mobile:w-[100%] mobile:h-[230px]">
            <img
              src={Img2}
              alt=""
              className="w-[718px] h-[448px] mobile:h-[230px] mobile:w-[100%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Series;
