import React from "react";
import icon1 from "../../../../images/question.png";
import icon2 from "../../../../images/Request for warranty.png";
import icon3 from "../../../../images/talk to us.png";
import { NavLink } from "react-router-dom";

export const dropdownList = [
  {
    id: 1,
    list: "faqs",
    url: "/support",
    icon: icon1,
  },
  {
    id: 2,
    list: "request for warranty",
    url: "/warrantyrequest",
    icon: icon2,
  },
  {
    id: 3,
    list: "talk to us",
    url: "/",
    icon: icon3,
  },
];

const SupportDropdown = ({ setMenuHover }) => {
  return (
    <>
      <div
        className="w-[785px] h-[249px] rounded-[4px] flex items-center justify-center bg-white"
        onMouseLeave={() => {
          setMenuHover();
        }}
      >
        <div className="w-[733px] flex">
          {dropdownList.map((info, index) => {
            return (
              <div
                key={index}
                className="w-[183px] h-[160px] flex items-center  flex-col"
              >
                <NavLink
                  to={info.url}
                  className="w-[99px] h-[99px] flex items-center justify-center rounded-[50%]
                       bg-secondary-whitesmoke cursor-pointer"
                >
                  <img src={info.icon} width="71" height="71" />
                </NavLink>
                <NavLink
                  to={info.url}
                  className="cursor-pointer pt-[8px] font-Arial not-italic font-normal text-Paragraph2 
                     uppercase text-primary text-center"
                >
                  {info.list}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SupportDropdown;
