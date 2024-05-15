import React, { useState } from "react";
import "../CancelOrder/CancelInfo.css";

const CancelInfo = ({ options, handleClick, value, title }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="h-[50px] z-[1] mt-[35px]">
        <div
          className="relative w-[542px] cursor-pointer"
          onClick={() => setClicked(!clicked)}
        >
          <div className="absolute right-[13px] top-[13px] cursor-pointer">
            {clicked ? (
              <i
                className="fa fa-angle-up"
                aria-hidden="true"
                style={{ color: "#FFFFFF" }}
              ></i>
            ) : (
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            )}
          </div>
          <div
            className={`${
              clicked
                ? "flex items-center pl-[9px] w-[542px] h-[50px] bg-black rounded-t-[4px] text-white font-Arial not-italic font-normal text-Paragraph3 capitalize"
                : "flex items-center pl-[9px] w-[542px] h-[50px] border border-solid border-secondary-darkOpacity font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity"
            }`}
          >
            <p>{value ? value : title}</p>
          </div>
          {clicked ? (
            <div className="cancel-option-container">
              {options.map((info, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center h-[50px] border border-solid border-secondary-darkOpacity font-Arial not-italic font-normal 
                     text-Paragraph3  pl-[9px] border-b-0  border-l-0  border-r-0 capitalize cursor-pointer text-secondary-darkOpacity"
                    onClick={() => {
                      handleClick(info);
                    }}
                  >
                    <p>{info.choose}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CancelInfo;
