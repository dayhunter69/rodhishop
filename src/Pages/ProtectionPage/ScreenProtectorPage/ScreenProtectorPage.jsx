import React, { useState } from "react";
import { Icon } from "@iconify/react";
// import "../../SoundPage/Common-Page-Style.css";
import imgA from "../../../Components/images/earphone.png";
import imgB from "../../../Components/images/screen protector2.png";

export const productname = [
  {
    id: 1,
    product: "Screen Protection",
  },
];
export const category = [
  {
    id: 1,
    select: "Brand",
    option: [
      {
        id: 1,
        productype: "apple",
        value: "apple",
      },
      {
        id: 2,
        productype: "samsung",
        value: "samsung",
      },
      {
        id: 3,
        productype: "huawei",
        value: "huawei",
      },
      {
        id: 4,
        productype: "google pixel",
        value: "google pixel",
      },
    ],
  },
  {
    id: 2,
    select: "color",
    option: [
      {
        id: 1,
        productype: "black",
        value: "black",
      },
      {
        id: 2,
        productype: "transparent",
        value: "transparent",
      },
      {
        id: 3,
        productype: "other color",
        value: "other color",
      },
    ],
  },
  {
    id: 3,
    select: "price",
    option: [
      {
        id: 1,
        productype: "more than 1000",
        value: "more than 1000",
      },
      {
        id: 2,
        productype: "more than 2000",
        value: "more than 2000",
      },
      {
        id: 3,
        productype: "more than 3000",
        value: "more than 3000",
      },
      {
        id: 4,
        productype: "more than 4000",
        value: "more than 4000",
      },
    ],
  },
];
const ScreenProtectionPage = ({ tabactive, handleBackClick, show }) => {
  const [select, setSelect] = useState("");
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState();
  const [leav, setLeav] = useState(true);

  const handleClick = (index) => {
    setClicked(!clicked);
    setActive(index);
  };
  const handleHideClick = () => {
    setLeav(!leav);
  };
  const handleSelectClick = (info) => {
    setSelect(info.value);
  };
  return (
    <>
      {leav ? (
        <div className="max-w-[1350px] mx-auto my-0 flex flex-col items-center">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-[78px]">
              {productname.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="flex items-center justify-center w-[57px] h-[57px] bg-black rounded-[50%] cursor-pointer mx-auto my-0"
                      onClick={() => {
                        handleBackClick();
                        handleHideClick();
                      }}
                    >
                      <img src={imgB} alt="" className="w-[40px] h-[40px]" />
                    </div>
                    <p
                      className="font-Arial not-italic font-normal text-[10px] text-center uppercase
                       text-secondary-mediumOpacity pt-[5px]"
                    >
                      {item.product}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex">
              {category.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-[205px] h-[42px] my-0 mx-[20px]"
                    onClick={() => handleClick(index)}
                  >
                    <div className="absolute cursor-pointer right-[8px] top-[9px]">
                      <i
                        className={
                          clicked && active === index
                            ? "fa fa-angle-up text-white"
                            : "fa fa-angle-down"
                        }
                      ></i>
                    </div>
                    <div
                      className={`${
                        clicked && active === index
                          ? "w-[205px] h-[42px] flex items-center justify-center bg-black text-white font-Arial not-italic font-normal text-Paragraph1 text-center uppercase cursor-pointer rounded-t-[5px]"
                          : "border border-solid border-primary rounded-[5px] w-[205px] h-[42px] flex items-center justify-center  text-black font-Arial not-italic font-normal text-Paragraph1 text-center uppercase cursor-pointer"
                      }`}
                    >
                      {select ? <p>{select}</p> : <p>{data.select}</p>}
                    </div>
                    {clicked && active === index ? (
                      <div className="relative w-[204px] shadow-custom4">
                        {data.option.map((info, index) => {
                          return (
                            <div key={index}>
                              <div
                                className="w-[204px] h-[42px] flex items-center justify-center font-Arial not-italic font-normal text-Paragraph1 
                                  text-center uppercase text-primary cursor-pointer"
                                // onClick={(e) => setSelect(info.value)}
                                onClick={() => {
                                  handleSelectClick(info);
                                }}
                              >
                                <p>{info.productype}</p>
                              </div>
                            </div>
                          );
                        })}
                        <div className="w-[204px] h-[35px] flex items-center justify-evenly">
                          <div className="h-[22px] flex items-center justify-center">
                            <p className="font-Arial not-italic font-normal text-[10px] text-center capitalize text-secondary-mediumOpacity">
                              learn more about driver size
                            </p>
                          </div>
                          <div className="h-[22px] flex items-center justify-center cursor-pointer">
                            <Icon icon="ph:info-thin" width="19" height="19" />
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ScreenProtectionPage;
