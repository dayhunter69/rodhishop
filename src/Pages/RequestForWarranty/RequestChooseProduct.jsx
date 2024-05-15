import React, { useState } from "react";
import { Icon } from "@iconify/react";
import img1 from "../../Components/images/bluetooth-headphones.jpg";
import img2 from "../../Components/images/headset-ergonomic.jpg";
import img3 from "../../Components/images/headset-ergonomic.jpg";
import img4 from "../../Components/images/bluetooth-headphones.jpg";
import ProductCardData from "./ProductCardData";
import { useNavigate } from "react-router-dom";

export const productList = [
  {
    id: 1,
    productName: "Acefast h1",
    img: img1,
  },
  {
    id: 2,
    productName: "Acefast t2",
    img: img2,
  },
  {
    id: 3,
    productName: "Acefast t3",
    img: img3,
  },
  {
    id: 4,
    productName: "Acefast t4",
    img: img4,
  },
];

export const productTabList = [
  {
    productName: "sound",
  },
  {
    productName: "charge",
  },
  {
    productName: "protection",
  },
  {
    productName: "lifestyle",
  },
];

const RequestChooseProduct = ({ handleClick }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  const handleClickTab = (index) => {
    setTab(index);
  };

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
        <div className="w-[1260px] mx-auto mb-0">
          <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center mobile:text-Paragraph3">
            request for warranty
          </p>
          <p
            className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-center text-primary pt-[40px] 
             mobile:text-Paragraph0 mobile:pt-[20px]"
          >
            choose your product
          </p>
          <div className="relative w-[557px] mx-auto mb-0 mt-[16px] mobile:w-[309px] mobile:h-[40px]">
            <div className="w-[24px] h-[24px] absolute top-[13px] right-[25px] cursor-pointer text-secondary-darkOpacity">
              <Icon icon="ic:baseline-search" width="24" height="24" />
            </div>
            <input
              type="text"
              placeholder="know you model number?"
              className="w-[555px] outline-0 h-[50px] border border-solid border-secondary-lightOpacity 
               font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity pl-[20px] mobile:w-[309px] mobile:h-[40px]"
            />
          </div>
          <div className="w-[930px] h-[40px] mt-[30px] mb-[20px] mx-auto flex items-center justify-around mobile:w-[309px]">
            {productTabList.map((info, index) => {
              return (
                <p
                  className={`${
                    tab === index
                      ? "font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary cursor-pointer border-b-2 border-black mobile:text-Paragraph0"
                      : "font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary cursor-pointer border-b-2 border-transparent mobile:text-Paragraph0"
                  }`}
                  onClick={() => handleClickTab(index)}
                >
                  {info.productName}
                </p>
              );
            })}
          </div>
          <ProductCardData handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default RequestChooseProduct;
