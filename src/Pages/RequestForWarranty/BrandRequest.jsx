import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../../Components/images/tuddrom Birds copy.png";
import img2 from "../../Components/images/Acefast.png";
import img3 from "../../Components/images/ESR.png";

import { useNavigate } from "react-router-dom";

const BrandRequest = ({ handleClick }) => {
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
            choose a brand
          </p>
          <div className="w-[557px] mx-auto mb-0 mt-[16px] relative mobile:w-[309px] mobile:h-[40px]">
            <div className="absolute w-[24px] h-[24px] cursor-pointer top-[13px] right-[25px] mobile:w-[18px] mobile:h-[18px] mobile:right-[11px]">
              <Icon
                icon="ic:baseline-search"
                width="24"
                height="24"
                className="mobile:w-[18px] mobile:h-[18px]"
              />
            </div>
            <input
              placeholder="know you model number?"
              className="w-[555px] h-[50px] border border-solid border-secondary-darkOpacity 
              outline-0 pl-[20px] font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity
              mobile:w-[309px] mobile:h-[40px]"
            />
          </div>
          <div className="flex items-center justify-between mt-[63px]">
            <div
              className="w-[126px] h-[126px] flex items-center justify-center cursor-pointer rounded-[50%] 
                mobile:w-[56.94px] mobile:h-[56.94px]"
              onClick={() => handleClick("requestchooseproduct")}
            >
              <img
                src={img1}
                alt=""
                className="w-[120px] h-[120px] mobile:w-[56.94px] mobile:h-[56.94px]"
              />
            </div>
            <div
              className="w-[126px] h-[126px] flex items-center justify-center cursor-pointer rounded-[50%] 
                mobile:w-[56.94px] mobile:h-[56.94px]"
              onClick={() => handleClick("requestchooseproduct")}
            >
              <img
                src={img2}
                alt=""
                className="w-[120px] h-[120px] mobile:w-[56.94px] mobile:h-[56.94px]"
              />
            </div>
            <div
              className="w-[126px] h-[126px] flex items-center justify-center cursor-pointer rounded-[50%] 
                mobile:w-[56.94px] mobile:h-[56.94px]"
              onClick={() => handleClick("requestchooseproduct")}
            >
              <img
                src={img3}
                alt=""
                className="w-[120px] h-[120px] mobile:w-[56.94px] mobile:h-[56.94px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandRequest;
