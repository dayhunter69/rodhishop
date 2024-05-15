import React, { useState } from "react";
import icon1 from "../../../../images/phone case.png";
import icon2 from "../../../../images/screen protector.png";
import PhoneCase from "./PhoneCase/PhoneCase";

export const dropdownList = [
  {
    id: 1,
    list: "phone case",
    icon: icon1,
    indexing: "PhoneCase",
  },
  {
    id: 2,
    list: "screen protector",
    icon: icon2,
    indexing: "ScreenProtector",
  },
];
const ProtectionDropdown = ({ setMenuHover, handleClose }) => {
  const [phonehover, setPhoneHover] = useState(true);
  const [iconhover, setIconHover] = useState(false);
  const [leave, setLeave] = useState(true);

  const handleClick = (index) => {
    setIconHover(index);
    setPhoneHover(!phonehover);
  };
  return (
    <>
      {!iconhover && phonehover && leave ? (
        <div
          className="w-[785px] h-[249px] rounded-[4px] flex items-center justify-center bg-white"
          onMouseLeave={() => {
            setLeave();
            setMenuHover();
          }}
        >
          <div className="w-[733px] flex">
            {dropdownList.map((item, index) => {
              return (
                <div key={index}>
                  <div className="w-[183px] h-[140px] flex items-center justify-between flex-col">
                    <div
                      className="w-[99px] h-[99px] flex items-center justify-center rounded-[50%]
                       bg-secondary-whitesmoke cursor-pointer"
                      onClick={() => handleClick(index)}
                    >
                      <img src={item.icon} width="70" height="70" />
                    </div>
                    <p
                      className="font-Arial not-italic font-normal text-Paragraph2 uppercase
                        text-primary cursor-pointer"
                    >
                      {item.list}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      {(() => {
        if (iconhover === 0) {
          return (
            <PhoneCase
              setMenuHover={setMenuHover}
              setLeave={setLeave}
              handleClose={handleClose}
            />
          );
        } else if (iconhover === 1) {
          return (
            <PhoneCase
              setMenuHover={setMenuHover}
              setLeave={setLeave}
              handleClose={handleClose}
            />
          );
        }
      })()}
    </>
  );
};

export default ProtectionDropdown;
