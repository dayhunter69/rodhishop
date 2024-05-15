import React, { useState } from "react";
import img1 from "../../Components/images/headset-earbuds-transparent.jpg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const RequestProductForm = ({ handleClick }) => {
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
          <p className="font-Arial not-italic text-secondary-darkOpacity text-Paragraph0 capitalize cursor-pointer mobile:hidden">
            back
          </p>
        </div>
        <div className="w-[1128px] mx-auto mb-0 mobile:w-[309px]">
          <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center pb-[40px] mobile:text-Paragraph3 mobile:pb-[5px]">
            request for warranty
          </p>
          <div className="flex justify-between mobile:justify-center flex-wrap">
            <div className="w-[305px] h-[368px] mobile:w-[212px] mobile:h-[262px] mobile:mb-[20px]">
              <div className="h-[305px] mobile:h-[210px] mobile:w-[210px]">
                <img
                  src={img1}
                  alt=""
                  className="w-[301px] h-[302px] mobile:h-[207px] mobile:w-[207px]"
                />
              </div>
              <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-center text-secondary-darkOpacity mobile:text-Paragraph0">
                Acefast t2 Earphone
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize pt-[10px] mobile:text-Paragraph0 mobile:pt-[5px]">
                Rs. 799
              </p>
            </div>
            <div className="w-[644px] mobile:w-[307px]">
              <input
                type="text"
                placeholder="full name"
                className="w-[643px] h-[50px] border border-solid border-secondary-mediumOpacity 
                    capitalize pl-[20px] mb-[20px] outline-none font-Arial not-italic font-normal text-Paragraph3 mobile:w-[307px] mobile:h-[40px] mobile:text-Paragraph0 mobile:pl-[9px] mobile:mb-[9px]"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-[643px] h-[50px] border border-solid border-secondary-mediumOpacity 
                    capitalize pl-[20px] mb-[20px] outline-none font-Arial not-italic font-normal text-Paragraph3 mobile:w-[307px] mobile:h-[40px] mobile:text-Paragraph0 mobile:pl-[9px] mobile:mb-[9px]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-[643px] h-[50px] border border-solid border-secondary-mediumOpacity 
                    capitalize pl-[20px] mb-[20px] outline-none font-Arial not-italic font-normal text-Paragraph3 mobile:w-[307px] mobile:h-[40px] mobile:text-Paragraph0 mobile:pl-[9px] mobile:mb-[9px]"
              />
              <input
                type="text"
                placeholder="Date of Purchase"
                className="w-[643px] h-[50px] border border-solid border-secondary-mediumOpacity 
                    capitalize pl-[20px] mb-[20px] outline-none font-Arial not-italic font-normal text-Paragraph3 mobile:w-[307px] mobile:h-[40px] mobile:text-Paragraph0 mobile:pl-[9px] mobile:mb-[9px]"
              />
              <textarea
                placeholder="what’s your problem?"
                className="w-[643px] h-[160px] border border-solid border-secondary-mediumOpacity outline-none 
                    capitalize font-Arial not-italic font-normal text-Paragraph3 mb-[20px] pl-[20px] pt-[20px] resize-none mobile:w-[307px] mobile:h-[93px] mobile:text-Paragraph0 mobile:pt-[9px] mobile:pl-[9px] mobile:mb-[10px]"
              ></textarea>
              <div
                className="w-[230px] h-[50px] flex items-center justify-center cursor-pointer
                    mx-auto font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-lightGrey mobile:w-[154.67px] mobile:h-[24.18px] mobile:text-Paragraph0"
              >
                <p>upload warranty card</p>
              </div>
              <div
                className="w-[184px] mx-auto mb-0 mt-[20px] mobile:w-[114px] mobile:h-[40px] mobile:mt-[10px]"
                onClick={() => handleClick("warrantySubmitted")}
              >
                <button
                  className="w-[182px] h-[50px] border border-solid border-secondary-darkOpacity 
                    shadow-custom1 font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity mobile:w-[114px] mobile:h-[40px] mobile:text-Paragraph0"
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestProductForm;
