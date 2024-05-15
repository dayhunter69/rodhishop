import React from "react";
import { Icon } from "@iconify/react";

const ReviewCard = ({ info }) => {
  return (
    <>
      <div className="flex items-center justify-center w-[400px] h-[285px] bg-white shadow-custom1">
        <div className="w-[365px] h-[240px]">
          <div className="flex justify-between">
            <div className="flex items-center justify-between h-[53px]">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%]">
                <img
                  src={info.profileImg}
                  alt=""
                  className="w-[48.5px] h-[48.5px] rounded-[50%]"
                />
              </div>
              <div className="flex flex-col justify-around h-[37px] ml-[13px]">
                <p
                  className="font-Arial not-italic font-normal text-Paragraph0 
                  capitalize text-secondary-darkOpacity"
                >
                  {info.name}
                </p>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph0 
                  capitalize text-secondary-darkOpacity"
                >
                  {info.address}
                </p>
              </div>
            </div>
            <div
              className="h-[15px] font-Arial not-italic font-normal text-Paragraph0 
                  capitalize text-secondary-darkOpacity"
            >
              <p>{info.date}</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-[115px] mt-[10px]">
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={info.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={info.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={info.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={info.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={info.starRating} width="17" height="17" />
            </div>
          </div>
          <div className="mt-[8px]">
            <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
              {info.paragraph}
            </p>
          </div>
          <div className="flex items-center justify-between w-[100px] mt-[9px]">
            <div className="flex items-center justify-around w-[42px] h-[24px] cursor-pointer">
              <Icon icon={info.likeIocn} width="24" height="24" />
              <div className="flex items-center justify-center h-[18px]">
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                  {info.likeCount}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-around w-[42px] h-[24px] cursor-pointer">
              <Icon icon={info.dislikeIocn} width="24" height="24" rotate={2} />
              <div className="flex items-center justify-center h-[18px]">
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                  {info.dislikeCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
