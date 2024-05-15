import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const ForgetLoginDetail = ({ handleClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex max-w-[1380px] mx-auto mb-0 mobile:w-[333px]">
        <div
          className=" flex items-center justify-between w-[60px] h-[40px] mobile:w-[21px] mobile:h-[21px]"
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
          <p className="font-Arial not-italic text-secondary-darkOpacity text-Paragraph0 capitalize cursor-pointer mobile:hidden">
            back
          </p>
        </div>
        <div className="w-[430px] mx-auto mb-0">
          <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center mobile:text-Paragraph3">
            request for warranty
          </p>
          <div
            className="w-[412px] h-[211px] bg-white shadow-custom1 border border-solid
              border-secondary-white mt-[52px] mb-0 mx-auto mobile:w-[268px] mobile:h-[137.51px] mobile:mt-[20px]"
          >
            <div className="w-[319px] mx-auto mb-0 mt-[40px] mobile:w-[206px] mobile:h-[32px]">
              <input
                type="text"
                placeholder="enter phone number"
                className="w-[317px] h-[50px] outline-none border border-solid border-secondary-mediumOpacity 
                  font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity pl-[10px] 
                  mobile:w-[206px] mobile:h-[32px] mobile:text-[11px]"
              />
            </div>
            <div
              className="w-[162px] mx-auto mb-0 mt-[20px] mobile:w-[104px] mobile:h-[32px]"
              onClick={() => handleClick("forgetotpdetail")}
            >
              <button
                className="w-[162px] h-[50px] bg-white border border-solid border-secondary-darkOpacity 
                  shadow-custom1 font-Arial not-italic font-normal capitalize text-secondary-darkOpacity text-Paragraph3 
                  mobile:w-[104px] mobile:h-[32px] mobile:text-[11px]"
              >
                enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetLoginDetail;
