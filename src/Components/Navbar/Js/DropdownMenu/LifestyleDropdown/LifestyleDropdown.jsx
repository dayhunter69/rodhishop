import React from "react";
// import "../../../Style/GlobalDropdown.css";
import icon1 from "../../../../images/holder.png";
import icon2 from "../../../../images/wear.png";
import { NavLink } from "react-router-dom";

export const dropdownList = [
  {
    id: 1,
    list: "holder",
    url: "/holder",
    icon: icon1,
  },
  {
    id: 2,
    list: "wear",
    url: "/wear",
    icon: icon2,
  },
];

const LifestyleDropdown = ({ setMenuHover }) => {
  return (
    <>
      <div
        className="w-[785px] h-[249px] rounded-[4px] flex items-center justify-center bg-white"
        onMouseLeave={() => {
          setMenuHover();
        }}
      >
        <div className="w-[733px] flex">
          {dropdownList.map((item, index) => {
            return (
              <div
                className="w-[183px] h-[140px] flex items-center justify-between flex-col"
                key={index}
              >
                <NavLink
                  to={item.url}
                  className="w-[99px] h-[99px] flex items-center justify-center rounded-[50%]
                       bg-secondary-whitesmoke cursor-pointer"
                >
                  <img src={item.icon} width="71" height="71" />
                </NavLink>
                <NavLink
                  className="font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary cursor-pointer"
                  to={item.url}
                >
                  {item.list}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LifestyleDropdown;
