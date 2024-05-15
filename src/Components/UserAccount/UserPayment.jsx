import React from "react";
import img2 from "../images/esewa-icon-large.png";
import img3 from "../images/user-payment-ime-pay.png";
import { Icon } from "@iconify/react";

export const cardList = [
  {
    id: 1,
    img: img2,
    name: "arbin khadka",
    date: "2023/04/24",
    icon1: "material-symbols:edit-square-outline",
    icon2: "ic:round-delete-outline",
  },
  {
    id: 2,
    img: img3,
    name: "pradeep adhikari",
    date: "2023/04/24",
    icon1: "material-symbols:edit-square-outline",
    icon2: "ic:round-delete-outline",
  },
  {
    id: 3,
    img: img2,
    name: "bikal shrestha",
    date: "2023/04/24",
    icon1: "material-symbols:edit-square-outline",
    icon2: "ic:round-delete-outline",
  },
  // {
  //   id: 4,
  //   img: img3,
  //   name: "ritu karki",
  //   date: "2023/04/24",
  //   icon1: "material-symbols:edit-square-outline",
  //   icon2: "ic:round-delete-outline",
  // },
];
const UserPayment = () => {
  return (
    <>
      <div className="w-[963px] h-[270px] mt-[19px] mb-0 mx-auto">
        <p className="font-Arial not-italic font-bold text-[32px] leading-[37px] capitalize text-center pt-[6px] text-primary">
          my cards
        </p>
        <div className="flex items-center mt-[40px]">
          {cardList.map((list, index) => {
            return (
              <div
                key={index}
                className="w-[231px] h-[142px] bg-white shadow-custom1 mr-[12px]"
              >
                <div className="w-[144.41px] h-[82px] mt-[10px] mb-0 mx-auto flex items-center justify-center">
                  <img src={list.img} alt="" />
                </div>
                <div className="mt-[7px]">
                  <p
                    className="font-Arial font-normal not-italic text-[10px] leading-[11px] uppercase text-center
                     text-secondary-mediumOpacity"
                  >
                    {list.name}
                  </p>
                </div>
                <div className="flex items-center w-[200px] h-[22px] mt-[6px] mx-auto mb-0">
                  <p className="font-Arial font-normal not-italic text-[10px] leading-[11px] uppercase text-secondary-mediumOpacity">
                    {list.date}
                  </p>
                  <div className="w-[19px] ml-[98px] cursor-pointer">
                    <Icon
                      icon={list.icon1}
                      color="#545454"
                      width="16"
                      height="16"
                    />
                  </div>
                  <div className="w-[19px] ml-[10px] cursor-pointer">
                    <Icon
                      icon={list.icon2}
                      color="#545454"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex items-center justify-center w-[231px] h-[142px] bg-white shadow-custom1">
            <div className="flex items-center w-[90px] h-[38px] gap-[7px]">
              <div className="flex items-center h-[28px] cursor-pointer">
                <Icon
                  icon="material-symbols:add-circle-outline-rounded"
                  width="24"
                  height="24"
                  color="#545454"
                />
              </div>
              <div className="h-[28px]">
                <button
                  className="h-[28px] cursor-pointer font-Arial not-italic font-normal text-[10px] leading-[11px] 
                   uppercase text-secondary-darkOpacity"
                >
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPayment;
