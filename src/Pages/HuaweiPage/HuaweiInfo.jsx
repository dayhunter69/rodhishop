import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { ClickAwayListener } from "@mui/material";

function HuaweiInfo({ handleClick, options, value, title }) {
  const [clicked, setClicked] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setClicked(false)}>
      <div>
        <div
          className="w-[205px] h-[42px] relative mx-[20px] my-0"
          onClick={() => setClicked(!clicked)}
        >
          <div className="absolute right-[8px] top-[9px] cursor-pointer">
            {clicked ? (
              <i
                className="fa fa-angle-up"
                aria-hidden="true"
                style={{ color: "#ffffff" }}
              ></i>
            ) : (
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            )}
          </div>
          <div
            className={`${
              clicked
                ? "w-[205px] h-[42px]  flex items-center justify-center bg-black text-white font-Arial not-italic font-normal text-Paragraph1 uppercase text-center cursor-pointer rounded-t"
                : "w-[205px] h-[42px] relative cursor-pointer flex items-center justify-center border border-solid border-primary rounded-[5px] text-primary font-Arial not-italic font-normal text-Paragraph1 uppercase text-center"
            }`}
          >
            <p>{value ? value : title}</p>
          </div>
          {clicked ? (
            <div className="relative w-[204px] shadow-custom2 z-[2] bg-white">
              {options.map((info, index) => {
                return (
                  <div key={index}>
                    <div
                      className="flex items-center justify-center w-[204px] h-[42px] font-Arial not-italic font-normal 
                       text-Paragraph1 text-center uppercase cursor-pointer text-primary
                        hover:bg-secondary-greyOpacity hover:text-secondary-white"
                      onClick={() => {
                        handleClick(info);
                      }}
                    >
                      <p>{info.featureItem}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center justify-evenly w-[204px] h-[35px]">
                <div className="flex items-center justify-center h-[22px]">
                  <p className="font-Arial not-italic font-normal text-[11px] text-center capitalize text-secondary-mediumOpacity">
                    learn more about driver size
                  </p>
                </div>
                <div className="flex items-center justify-center h-[22px] cursor-pointer">
                  <Icon icon="ph:info-thin" width="19" height="19" />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default HuaweiInfo;
