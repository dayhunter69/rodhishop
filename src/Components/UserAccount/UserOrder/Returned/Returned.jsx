import React from "react";
import img1 from "../../../images/headset-earbuds-transparent.jpg";

const Returned = () => {
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
              Returned
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
          <div className="mt-[13px]">
            <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity text-center">
              returned reason: get damaged product
            </p>
            <div className="flex justify-between mt-[15px]">
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity text-center">
                Refunded?
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity text-center">
                order again?
              </p>
            </div>
            <div className="mt-[15px]">
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity text-center">
                we want to improve to ensure hassle free return and return
                process experience for you.
              </p>
            </div>
            <div className="mt-[15px]">
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity text-center">
                feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Returned;
