import React, { useState } from "react";

const WhereYouBuy = ({ handleClick }) => {
  return (
    <>
      <div className="max-w-[802px] mx-auto mb-0 mobile:w-[333px]">
        <p
          className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center 
              mobile:text-Paragraph3"
        >
          request for warranty
        </p>
        <p
          className="font-Arial not-italic text-center font-bold text-Paragraph3 
            capitalize text-primary pt-[40px] mobile:text-Paragraph0 mobile:pt-[20px]"
        >
          where do you buy this product?
        </p>
        <div className="flex items-center justify-between mt-[40px] mobile:w-[330px] mobile:mx-auto mobile:mt-[17px]">
          <div
            className="w-[126px] h-[126px] rounded-[50%] border border-solid border-secondary-lightOpacity 
              cursor-pointer mobile:w-[68px] mobile:h-[68px]"
            onClick={() => handleClick("findproduct")}
          ></div>
          <div
            className="w-[126px] h-[126px] rounded-[50%] border border-solid border-secondary-lightOpacity 
              cursor-pointer mobile:w-[68px] mobile:h-[68px]"
            onClick={() => handleClick("findproduct")}
          ></div>
          <button
            className="w-[250px] h-[50px] border border-solid border-secondary-darkOpacity 
                shadow-custom1 font-Arial not-italic font-normal text-Paragraph3 uppercase
                 text-secondary-darkOpacity mobile:w-[136.6px] mobile:h-[27.32px] mobile:text-[10px] mobile:leading-[15px]"
            onClick={() => handleClick("findproduct")}
          >
            other ecommerce
          </button>
        </div>
      </div>
    </>
  );
};

export default WhereYouBuy;
