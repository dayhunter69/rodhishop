import React, { useState } from "react";
import { Icon } from "@iconify/react";

const RecommendProduct = ({ list }) => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div
        className="w-[748px] h-[295px] bg-white mb-[20px] shadow-custom1 flex items-center justify-center
        mobile:w-[333px] mobile:h-[160px]"
      >
        <div className="w-[685px] h-[240px] flex items-center justify-between mobile:w-[316px] mobile:h-[145px]">
          <div className="w-[190px] h-[184px] mobile:w-[93px] mobile:h-[93px]">
            <img
              src={list.img}
              alt=""
              className="w-[187px] h-[182px] mobile:w-[91px] mobile:h-[91px]"
            />
          </div>
          <div className="h-[240px] flex flex-col items-center justify-between mobile:h-[145px]">
            <p className="font-Arial not-italic font-bold text-Paragraph2 text-center uppercase text-primary mobile:text-Paragraph0">
              {list.productName}
            </p>
            <p
              className="font-Arial not-italic font-normal text-Paragraph1 uppercase text-secondary-darkOpacity
            mobile:text-[10px] mobile:leading-[11px]"
            >
              {list.productType}
            </p>
            <div className="flex items-center justify-between w-[60.58px] h-[30px] mobile:w-[29px] mobile:h-[15px]">
              <div className="w-[22px] h-[22px] bg-white shadow-custom1 rounded-[50%] cursor-pointer mobile:w-[10.67px] mobile:h-[10.67px]"></div>
              <div className="w-[22px] h-[22px] bg-black shadow-custom1 rounded-[50%] cursor-pointer mobile:w-[10.67px] mobile:h-[10.67px]"></div>
            </div>
            <div
              className=" w-[80.93px] h-[31.7px] bg-white border border-solid border-secondary-darkOpacity 
                flex items-center justify-evenly mobile:w-[45px] mobile:h-[20px]"
            >
              <Icon
                icon="ri:subtract-fill"
                width="18"
                height="18"
                className="cursor-pointer text-secondary-darkOpacity"
                onClick={handleDecrement}
              />
              <div className="w-[20px] flex items-center justify-center">
                <p
                  className="font-Arial not-italic font-normal text-Paragraph2 
                     uppercase text-secondary-darkOpacity"
                >
                  {count}
                </p>
              </div>
              <Icon
                icon="material-symbols:add"
                width="18"
                height="18"
                className="cursor-pointer text-secondary-darkOpacity"
                onClick={handleIncrement}
              />
            </div>
            <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-primary mobile:text-Paragraph0">
              rs.{list.price}
            </p>
            <button
              className="w-[219px] h-[50px] bg-white border border-solid border-primary 
              shadow-custom1 font-Arial not-italic font-normal text-Paragraph3 uppercase text-primary
              mobile:w-[129px] mobile:h-[30px] mobile:text-[9px] mobile:leading-[10px]"
            >
              {list.btn}
            </button>
          </div>
          <div className="w-[20px] h-[20px] border border-solid border-secondary-white"></div>
        </div>
      </div>
    </>
  );
};

export default RecommendProduct;
