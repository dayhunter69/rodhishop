import React from "react";
import Img1 from "../../images/Audio Cable.png";
import Img2 from "../../images/fast charge powerbank.png";
import CableCarousel from "../TrendingProduct/CableCarousel/CableCarousel";
import PowerBankCarousel from "../TrendingProduct/PowerBankCarousel/PowerBankCarousel";

const ProductSeries = () => {
  return (
    <>
      <div className="mb-[100px] mobile:mb-[50px]">
        <div className="flex items-center justify-center mobile:flex-col-reverse">
          <div className="flex items-center justify-center text-[30px] w-[720px]  mobile:max-w-[360px]  mobile:mx-0 mobile:my-[10px]">
            <CableCarousel />
          </div>
          <div className="max-w-[720px] h-[450px] mobile:flex mobile:items-center mobile:justify-center mobile:w-[100%] mobile:h-[230px]">
            <img
              src={Img1}
              alt=""
              className="w-[718px] h-[448px] mobile:w-[100%] mobile:h-[230px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mobile:flex-col">
          <div className="max-w-[720px] h-[450px] mobile:flex mobile:items-center mobile:justify-center mobile:w-[100%] mobile:h-[230px]">
            <img
              src={Img2}
              alt=""
              className="w-[718px] h-[448px] mobile:w-[100%] mobile:h-[230px]"
            />
          </div>
          <div className="flex items-center justify-center text-[30px] w-[720px]  mobile:max-w-[360px]  mobile:mx-0 mobile:my-[10px]">
            <PowerBankCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSeries;
