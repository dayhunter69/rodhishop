import React from 'react';
import { Icon } from '@iconify/react';
import img2 from '../../Components/images/Logo.png';
const RespondCard = ({ list }) => {
  return (
    <>
      <div className="flex items-center justify-center w-[400px] h-[380px] bg-white shadow-custom1">
        <div className="w-[365px]">
          <div className="flex justify-between">
            <div className="flex items-center justify-between h-[53px]">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%]">
                <img
                  src={list.profileImg}
                  alt=""
                  className="w-[48.5px] h-[48.5px] rounded-[50%]"
                />
              </div>
              <div className="flex flex-col justify-around h-[37px] ml-[13px]">
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                  {list.name}
                </p>
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                  {list.address}
                </p>
              </div>
            </div>
            <div className="h-[15px]">
              <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                {list.date}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between w-[115px] mt-[10px]">
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={list.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={list.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={list.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={list.starRating} width="17" height="17" />
            </div>
            <div className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer">
              <Icon icon={list.starRating} width="17" height="17" />
            </div>
          </div>
          <div className="mt-[10px]">
            <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
              {list.paragraph}
            </p>
          </div>
          <div className="flex items-center justify-between w-[100px] mt-[10px]">
            <div className="flex items-center justify-between w-[42px] h-[24px] cursor-pointer">
              <Icon icon={list.likeIocn} width="24" height="24" />
              <div className="flex items-center justify-center h-[18px]">
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                  {list.likeCount}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-around w-[42px] h-[24px] cursor-pointer">
              <Icon icon={list.dislikeIocn} width="24" height="24" rotate={2} />
              <div className="h-[18px] flex items-center justify-center">
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                  {list.dislikeCount}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-[76px] mx-auto mb-0 mt-[10px] bg-secondary-whitesmoke">
            <div className="w-[345px]">
              <div className="flex justify-between">
                <div className="flex items-center justify-between w-[187px] h-[25px]">
                  <div className="w-[30px] h-[17px] bg-white">
                    {/* <img src={img2} alt="" className="RespondReview-yantram-Logo-pic"/> */}
                  </div>
                  <div className="font-Arial not-italic font-normal text-[10px] capitalize text-primary">
                    <p>responded from Yantram store</p>
                  </div>
                </div>
                <div className="w-[62px] h-[25px]">
                  <p className="font-Arial not-italic font-normal text-[10px] lowercase text-primary">
                    3 month ago
                  </p>
                </div>
              </div>
              <p className="pt-[8px] capitalize text-secondary-darkOpacity font-Arial not-italic font-normal text-[10px]">
                thank you so much for your feedback
              </p>
              <div className="flex items-center justify-between w-[23px] h-[15px] mt-[7px]">
                <Icon
                  icon="fluent:thumb-like-48-regular"
                  width="12"
                  height="12"
                />
                <p className="font-Arial not-italic font-normal text-[10px] capitalize text-secondary-darkOpacity ">
                  1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RespondCard;
