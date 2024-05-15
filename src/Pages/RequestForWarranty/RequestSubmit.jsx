import React from "react";
import "../RequestForWarranty/RequestSubmit.css";
import { Stack } from "@mui/material";

const RequestSubmit = ({ handleClick, fromSupport = false }) => {
  return (
    <>
      <div className="max-w-[1105px] mx-auto">
        <p
          className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center pb-[14px] 
             mobile:text-Paragraph3 mobile:pb-[10px]"
        >
          request for warranty
        </p>
        <div className="mobile:w-[330px] mx-auto">
          <p
            className="font-Arail not-italic font-normal text-Paragraph3 text-center 
             capitalize text-secondary-darkOpacity mobile:text-[10px] mobile:leading-[18px]"
          >
            We appreciate your investment in our products and want to make the
            warranty claim process as smooth as possible. By providing proof of
            purchase and ensuring that your product is in its original,
            undamaged condition, we can quickly process your claim and provide
            you with an exchange if eligible. If there are any issues, we will
            regretfully return the product to you without an exchange. Thank you
            for your understanding.
          </p>
        </div>

        <Stack direction={fromSupport ? "row" : "column"}>
          <div
            className=" w-[250px] h-[50px] mx-[auto] mb-[0] mt-[20px] border border-solid border-secondary-darkOpacity
          flex items-center justify-center gap-[10px] mobile:w-[170px] mobile:h-[40px] mobile:mt-[10px]"
          >
            <input type="checkbox" className="RequestForWarranty-Radio-btn" />
            <p
              className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity
                mobile:text-Paragraph0"
            >
              yes, i understand
            </p>
          </div>
          <button
            className="flex items-center justify-center w-[162px] h-[50px] mt-[20px] mx-auto mb-0 
              border border-solid border-secondary-darkOpacity shadow-custom1 font-Arial 
              not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity 
              mobile:w-[104px] mobile:h-[40px] mobile:text-Paragraph0 mobile:mt-[10px]"
            onClick={() => handleClick("whereyoubuy")}
          >
            submit
          </button>
        </Stack>
      </div>
    </>
  );
};

export default RequestSubmit;
