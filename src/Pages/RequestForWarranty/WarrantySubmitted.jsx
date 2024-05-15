import React from "react";
import img1 from "../../Components/images/okGotIt.jpg";
const WarrantySubmitted = () => {
  return (
    <>
      <div className="w-[713px] h-[642px] bg-white shadow-custom1 mx-auto border border-solid border-white">
        <div className="w-[220px] h-[198px] mx-auto mt-[40px]">
          <img src={img1} alt="" />
        </div>
        <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-center text-secondary-darkOpacity pt-[22px] px-[50px]">
          we received your request for warranty! we will get back to you soon,
          till then
        </p>
        <p className="font-Arial not-italic font-bold text-Paragraph3 text-secondary-darkOpacity capitalize text-center pt-[9px]">
          review your request
        </p>
        <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-center pt-[9px] text-secondary-darkOpacity">
          Ticket Number: TN0001
        </p>
        <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-center pt-[9px] text-secondary-darkOpacity">
          product name: tuddrom mo1
        </p>
        <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-center pt-[9px] text-secondary-darkOpacity">
          purchase by: arbin khadka
        </p>
        <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-center pt-[9px] text-secondary-darkOpacity">
          purchase from:yantram nepal
        </p>
        <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-center pt-[9px] text-secondary-darkOpacity">
          purchase date:2023/01/02
        </p>
        <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-center pt-[9px] text-secondary-darkOpacity">
          problem: the earphone is not working{" "}
        </p>
      </div>
    </>
  );
};

export default WarrantySubmitted;
