import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const FindProduct = ({ handleClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex max-w-[1380px] mx-auto mb-0 mobile:w-[333px]">
        <div
          className="flex items-center justify-between w-[60px] h-[40px] mobile:w-[21px] mobile:h-[21px]"
          onClick={() => navigate(-1)}
        >
          <div className="border border-solid border-primary flex items-center justify-center cursor-pointer">
            <Icon
              icon="ion:caret-back"
              width="24"
              height="24"
              className="mobile:w-[16px] mobile:h-[16px]"
            />
          </div>
          <p className="font-Arial not-italic text-secondary-darkOpacity text-Paragraph0 capitalize cursor-pointer mobile:text-[11px] mobile:hidden">
            back
          </p>
        </div>
        <div className="mx-auto">
          <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center mobile:text-Paragraph3">
            request for warranty
          </p>
          <p
            className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-center text-primary pt-[40px] 
               mobile:text-Paragraph0 mobile:pt-[20px]"
          >
            find your product
          </p>
          <div className="flex flex-wrap justify-center items-center mt-[40px] mobile:mt-[29px] mobile:mx-auto ">
            <div className="flex mobile:flex-col justify-center">
              <button
                className="w-[250px] h-[100px] shadow-custom1 border border-solid border-secondary-darkOpacity 
                flex items-center justify-center font-Arial not-italic font-normal text-Paragraph3  capitalize
                 text-secondary-darkOpacity px-[43px] mobile:w-[215px] mobile:h-[86px] mobile:text-Paragraph0"
                onClick={() => handleClick("brandrequest")}
              >
                identify your product
              </button>
              <div className=" flex justify-center items-center mobile:my-[16px] mx-[36px]">
                <p className="font-Arial not-italic font-normal text-Paragraph3 uppercase text-secondary-darkOpacity">
                  or
                </p>
              </div>
            </div>
            <div className="flex mobile:flex-col justify-center">
              <button
                className="w-[250px] h-[100px] shadow-custom1 border border-solid border-secondary-darkOpacity 
                flex items-center justify-center font-Arial not-italic font-normal text-Paragraph3 capitalize
                 text-secondary-darkOpacity px-[33px] mobile:w-[215px] mobile:h-[86px] mobile:text-Paragraph0"
              >
                login and review your order history
              </button>
              <div className="flex justify-center items-center mobile:my-[16px] mx-[36px]">
                <p className="font-Arial not-italic font-normal text-Paragraph3 uppercase text-secondary-darkOpacity">
                  or
                </p>
              </div>
            </div>
            <button
              className="w-[250px] h-[100px] shadow-custom1 border border-solid border-secondary-darkOpacity 
                flex items-center justify-center font-Arial not-italic font-normal text-Paragraph3  capitalize
                 text-secondary-darkOpacity px-[32px] mobile:w-[215px] mobile:h-[86px] mobile:text-Paragraph0"
              onClick={() => handleClick("forgetlogin")}
            >
              Forget all details? let’s verify with your phone number
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindProduct;
