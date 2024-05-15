import React, { useState } from "react";
import icon1 from "../../../../../images/Apple.png";
import icon2 from "../../../../../images/Samsung.png";
import icon3 from "../../../../../images/Huawei.png";
import icon4 from "../../../../../images/Google.png";
import PhoneCaseMenuUI from "./PhoneCaseMenuUI";

export const phoneCaseList = [
  {
    id: 1,
    icon: icon1,
    list: "apple",
  },
  {
    id: 2,
    icon: icon2,
    list: "samsung",
  },
  {
    id: 3,
    icon: icon3,
    list: "huawei",
  },
  {
    id: 4,
    icon: icon4,
    list: "google",
  },
];

const PhoneCase = ({ setMenuHover, setLeave, handleClose }) => {
  const [phonecaseType, setPhoneCaseType] = useState("");

  const handleClick = (state) => {
    setPhoneCaseType(state);
  };
  const handleShowClick = () => {
    setPhoneCaseType("");
  };
  return (
    <>
      {!phonecaseType ? (
        <div
          className="w-[785px] h-[249px] rounded-[4px] flex items-center justify-center bg-white"
          onMouseLeave={() => {
            setLeave();
            setMenuHover();
          }}
        >
          <div className="w-[733px] flex">
            {phoneCaseList.map((infoList, index) => {
              return (
                <div key={index}>
                  <div className="w-[183px] h-[140px] flex items-center justify-between flex-col">
                    <div
                      className="w-[99px] h-[99px] flex items-center justify-center rounded-[50%]
                       bg-secondary-whitesmoke cursor-pointer"
                      onClick={() => handleClick(infoList.list)}
                    >
                      <img src={infoList.icon} alt="" width="60" height="60" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <PhoneCaseMenuUI
          phonecaseType={phonecaseType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default PhoneCase;
