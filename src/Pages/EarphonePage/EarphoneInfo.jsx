import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ClickAwayListener } from "@mui/material";
import "../EarphonePage/EarphoneInfo.css";
function EarphoneInfo({ handleClick, options, value, title }) {
  const [clicked, setClicked] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setClicked(false)}>
      <div>
        <div
          className="w-[205px] mobile:w-[99px] h-[42px] relative my-0  mobile:h-[24px]"
          // style={{ border: "1px solid red" }}
          onClick={() => setClicked(!clicked)}
        >
          <div className="absolute right-[8px] top-[9px] cursor-pointer mobile:top-[1px] mobile:right-[5px]">
            {clicked ? (
              <i
                className="fa fa-angle-up text-[#ffffff] mobile:w-[12px] mobile:h-[12px]"
                aria-hidden="true"
              ></i>
            ) : (
              <i
                className="fa fa-angle-down mobile:w-[12px] mobile:h-[12px]"
                aria-hidden="true"
              ></i>
            )}
          </div>
          <div
            className={`${
              clicked
                ? "w-[205px] mobile:w-[100px] mobile:h-[24px] h-[42px]  flex items-center justify-center bg-black text-white font-Arial not-italic font-normal text-Paragraph1 uppercase text-center cursor-pointer rounded-t mobile:text-[10px] mobile:leading-[11px]"
                : "w-[205px] mobile:w-[100px] mobile:h-[24px] h-[42px] relative cursor-pointer flex items-center justify-center border border-solid border-primary rounded-[5px] text-primary font-Arial not-italic font-normal text-Paragraph1 uppercase text-center mobile:text-[10px] mobile:leading-[11px]"
            }`}
          >
            <p>{value ? value : title}</p>
          </div>
          {clicked ? (
            <div className="relative w-[204px] mobile:w-[99px] shadow-custom2 z-[3] bg-white">
              {options.map((info, index) => {
                return (
                  <div key={index}>
                    <div
                      className="flex items-center justify-center w-[204px] mobile:w-[99px] mobile:h-[24px] h-[42px] font-Arial not-italic font-normal 
                       text-Paragraph1 text-center uppercase cursor-pointer text-primary
                        hover:bg-secondary-greyOpacity hover:text-secondary-white mobile:text-[9px] mobile:leading-[11px]"
                      onClick={() => {
                        handleClick(info);
                      }}
                    >
                      <p>{info.featureItem}</p>
                    </div>
                  </div>
                );
              })}
              <div
                className="flex items-center justify-evenly w-[204px] mobile:w-[91px] h-[35px]
                mobile:h-[22px] mobile:mx-auto"
                // style={{ border: "1px solid red" }}
              >
                <div
                  className="flex items-center justify-center h-[22px]"
                  // style={{ border: "1px solid red" }}
                >
                  <p
                    className="font-Arial not-italic font-normal text-[11px] text-center capitalize text-secondary-mediumOpacity
                    mobile:text-[6px]"
                  >
                    learn more about driver size
                  </p>
                </div>
                <div className="flex items-center justify-center h-[22px] cursor-pointer">
                  <Icon
                    icon="ph:info-thin"
                    width="19"
                    height="19"
                    className="mobile:h-[16px]"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default EarphoneInfo;
