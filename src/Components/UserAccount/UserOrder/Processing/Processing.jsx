import React from "react";
import img1 from "../../../images/headset-earbuds-transparent.jpg";

const Processing = () => {
  return (
    <>
      <div className="w-[369px] h-[415px] flex items-center justify-center bg-white mt-[15px] shadow-custom1">
        <div className="w-[320px]">
          <div className="h-[68px] flex items-center justify-between">
            <div className="w-[185px]">
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-mediumOpacity">
                order number: yN0123
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-mediumOpacity">
                ordered on: jan 26, 2023
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-mediumOpacity">
                ordered delivered: jan 26, 2023
              </p>
            </div>
            <button
              className="w-[88px] h-[30px] bg-white border border-solid border-primary shadow-custom1 
                 font-Arial not-italic font-normal text-Paragraph0 capitalize text-primary"
            >
              Processing
            </button>
          </div>
          <div className="w-[283px] h-[150px] mt-[15px] flex items-center justify-between">
            <div className="w-[150px] h-[150px] flex items-center justify-center">
              <img src={img1} alt="" className="w-[144px] h-[144px]" />
            </div>
            <div className="w-[113px] flex flex-col gap-[5px] font-Arial not-italic font-normal text-Paragraph0 capitalize text-primary">
              <p>tuddrom m01 black</p>
              <p>black</p>
              <p>qty: 1</p>
              <p>rs.749</p>
              <p>paid by</p>
            </div>
          </div>
          <div className="h-[135.77px] mt-[13px]">
            <div className="flex justify-between">
              <p className="font-Arial not-italic font-normal text-Paragraph0  capitalize text-secondary-darkOpacity">
                Track Your order
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph0  capitalize text-secondary-darkOpacity">
                Canceled?
              </p>
            </div>
            <div className="mt-[47px]">
              <p className="font-Arial not-italic font-normal text-Paragraph0  capitalize text-secondary-darkOpacity text-center">
                need help with this order?
              </p>
            </div>
            <div className="mt-[20px]">
              <p className="font-Arial not-italic font-normal text-Paragraph0  capitalize text-primary text-center">
                Better call us
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Processing;
