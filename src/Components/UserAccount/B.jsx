import React, { useState } from "react";
import { ClickAwayListener } from "@mui/material";
import "../Navbar/Style/UserProfile.css";

const B = ({ handleClick, option, value, title }) => {
  const [dateclick, setDateClick] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setDateClick(false)}>
      <div>
        <div className="relative" onClick={() => setDateClick(!dateclick)}>
          <div className="absolute top-[15px] right-[15px]">
            <i
              className={`${dateclick ? "fa fa-angle-up" : "fa fa-angle-down"}`}
            ></i>
          </div>
          <div
            className="w-[161px] h-[50px] flex items-center border border-solid border-secondary-textColor pl-[38px] 
              text-Paragraph2 capitalize text-secondary-darkOpacity"
          >
            <p>{value ? value : title}</p>
          </div>
        </div>
        {dateclick ? (
          <div className="UserProfile_Day_Option">
            {option.map((list, index) => {
              return (
                <div key={index}>
                  <div
                    className="h-[50px] flex items-center justify-center font-Arial font-normal not-italic text-Paragraph2 
                      capitalize text-center text-secondary-darkOpacity hover:text-white hover:bg-secondary-greyOpacity"
                    onClick={() => {
                      handleClick(list);
                      setDateClick(false);
                    }}
                  >
                    <p>{list.DateType}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default B;
