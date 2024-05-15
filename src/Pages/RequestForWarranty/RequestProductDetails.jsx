import React from "react";
import img1 from "../../Components/images/bluetooth-headphones.jpg";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const RequestProductDetails = ({ handleClick }) => {
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
        <div className="w-[700px] mx-auto mb-0 ">
          <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center mobile:text-Paragraph3">
            request for warranty
          </p>
          <div
            className="flex flex-col items-center w-[442px] h-[305px] bg-white shadow-custom1 mx-auto mb-0 mt-[40px]
              mobile:w-[234px] mobile:h-[161px] mobile:mt-[28px]"
          >
            <p
              className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-center
              text-secondary-darkOpacity pt-[29px] pb-[21px] mobile:text-Paragraph0 mobile:pt-[13px] mobile:pb-[14px]"
            >
              Acefast t2 earbud
            </p>
            <div className="w-[406px] flex justify-between mobile:w-[209.96px]">
              <div className="flex items-center justify-center w-[135px] h-[135px] mobile:w-[65px] mobile:h-[65px]">
                <img
                  src={img1}
                  alt=""
                  className="w-[132px] h-[132px] mobile:w-[63.22px] mobile:h-[63.22px]"
                />
              </div>
              <div className="h-[135px] mobile:h-[71.2px]">
                <p
                  className="font-Arial not-italic font-normal text-Paragraph3 capitalize
                  text-secondary-darkOpacity mobile:text-[10px] mobile:leading-[11px]"
                >
                  arbin khadka
                </p>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph3 capitalize
               text-secondary-darkOpacity pt-[10px] mobile:text-[10px] mobile:leading-[11px] mobile:pt-[6px]"
                >
                  arbinkhadka@gmail.com
                </p>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph3 capitalize
               text-secondary-darkOpacity pt-[10px] mobile:text-[10px] mobile:leading-[11px] mobile:pt-[6px]"
                >
                  9804360634
                </p>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph3 capitalize
               text-secondary-darkOpacity pt-[10px] mobile:text-[10px] mobile:leading-[11px] mobile:pt-[6px]"
                >
                  Kapan, kathmandu, Bagmati
                </p>
              </div>
            </div>
            <p
              className="font-Arial not-italic font-normal text-Paragraph3 text-center 
               capitalize text-secondary-darkOpacity pt-[40px] mobile:text-[9px] mobile:leading-[10px] mobile:pt-[18px]"
            >
              Purchased Date:2023/02/02
            </p>
          </div>
          <div className="w-[692px] mx-auto mb-0 mt-[40px] mobile:w-[310px] mobile:h-[115px] mobile:mt-[15px]">
            <textarea
              type="textarea"
              className="w-[690px] h-[210px] border border-solid border-secondary-darkOpacity 
                outline-none resize-none font-Arial not-italic font-normal text-Paragraph3 capitalize
               text-secondary-darkOpacity pl-[20px] pt-[20px] mobile:w-[310px] mobile:h-[115px] mobile:text-Paragraph0 
                mobile:pl-[8px] mobile:pt-[8px]"
              placeholder="what’s your problem?"
            ></textarea>
          </div>
          <div
            className=" flex items-center justify-center cursor-pointer w-[205px] mx-auto mt-[32px]
            font-Arial not-italic text-Paragraph3 capitalize text-secondary-lightGrey mobile:w-[158.46px] 
            mobile:h-[21.74px] mobile:text-Paragraph0 mobile:mt-[12px]"
          >
            <p>upload warranty card</p>
          </div>
          <div
            className="w-[184px] mt-[21px] mx-auto mb-0 mobile:w-[118px] mobile:h-[40px] mobile:mt-[10px]"
            onClick={() => handleClick("warrantySubmitted")}
          >
            <button
              className="w-[182px] h-[50px] border border-solid border-secondary-darkOpacity 
               font-Arial not-italic text-Paragraph3 capitalize text-secondary-darkOpacity mobile:w-[118px] mobile:h-[40px] mobile:text-Paragraph0"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestProductDetails;
