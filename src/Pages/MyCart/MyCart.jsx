import React, { useState } from "react";
import { Icon } from "@iconify/react";

const MyCart = ({ info }) => {
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
        className="w-[748px] h-[235px] bg-white mb-[15px] flex  items-center justify-center shadow-custom1 
        mobile:w-[333px] mobile:h-[130px] mobile:mb-[3px]"
      >
        <div className="w-[650px] flex items-center justify-between mobile:w-[316px] mobile:h-[116px]">
          <div className="w-[190px] h-[190px] mobile:w-[93px] mobile:h-[93px]">
            <img
              src={info.img}
              alt=""
              className="w-[187px] h-[182px] mobile:w-[91px] mobile:h-[91px]"
            />
          </div>
          <div className="flex flex-col items-center w-[117px] h-[184px] mobile:h-[116px] ">
            <p
              className="font-Arial not-italic font-bold text-Paragraph2  
               uppercase text-primary text-center mobile:text-Paragraph0"
            >
              {info.productName}
            </p>
            <p
              className="font-Arial not-italic font-normal text-Paragraph1 uppercase
                text-secondary-darkOpacity pt-[10px] mobile:text-[10px] mobile:leading-[11px] mobile:pt-[5px]"
            >
              {info.productType}
            </p>
            <button className="w-[22.3px] h-[22.3px] bg-black rounded-[50%] cursor-pointer mobile:h-[10px] mobile:w-[10px] mt-[18px] mobile:mt-[7px]"></button>
            <div
              className="w-[80.93px] h-[31.7px] flex items-center justify-evenly bg-white 
                border border-solid border-secondary-darkOpacity mobile:w-[45px] mobile:h-[20px] mt-[18px] mobile:mt-[7px]"
            >
              <Icon
                icon="ri:subtract-fill"
                width="18"
                height="18"
                className="text-secondary-darkOpacity cursor-pointer"
                onClick={handleDecrement}
              />
              <div
                className="w-[20px] font-Arial not-italic font-normal text-Paragraph2 
                  text-center uppercase text-secondary-darkOpacity"
              >
                <p>{count}</p>
              </div>
              <Icon
                icon="material-symbols:add"
                width="18"
                height="18"
                className="text-secondary-darkOpacity cursor-pointer"
                onClick={handleIncrement}
              />
            </div>
            <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-primary mobile:text-Paragraph0 pt-[10px] mobile:pt-[7px]">
              rs. {info.price}
            </p>
          </div>
          <div
            className="w-[27px] h-[27px] cursor-pointer mobile:w-[18px] mobile:h-[18px]"
            // style={{ border: "1px solid red" }}
          >
            <Icon
              icon={info.icon}
              width="26"
              height="26"
              color=" rgba(0, 0, 0, 0.71)"
              className="mobile:w-[14px] mobile:h-[14px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
