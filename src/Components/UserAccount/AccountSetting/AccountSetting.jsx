import React, { useState } from "react";
import ContactPreference from "./ContactPreference";
import SecurityTab from "./SecurityTab";

export const tabMenuList = [
  {
    id: 1,
    title: "security",
  },
  {
    id: 2,
    title: "contact preference",
  },
  {
    id: 3,
    title: "theme",
  },
];
const AccountSetting = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
    console.log("index is ", index);
  };
  return (
    <>
      <div className="w-[923px] h-[100%] my-0 mx-auto">
        <p
          className="font-Arial not-italic font-bold text-[32px] leading-[37px] text-center capitalize
           text-primary pt-[25px]"
        >
          my account setting
        </p>
        <div className="w-[600px] mt-[30px] mb-0 mx-auto flex items-center justify-around">
          {tabMenuList.map((info, index) => {
            return (
              <div key={index}>
                <button
                  className={`${
                    activeTab === index
                      ? "h-[50px] font-Arial not-italic font-bold  uppercase text-primary border-b-2 border-primary"
                      : "h-[50px] font-Arial not-italic font-normal  uppercase text-primary"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {info.title}
                </button>
              </div>
            );
          })}
        </div>
        {(() => {
          if (activeTab === 0) {
            return <SecurityTab />;
          } else if (activeTab === 1) {
            return <ContactPreference />;
          } else if (activeTab === 2) {
            return null;
          } else {
            return <SecurityTab />;
          }
        })()}
      </div>
    </>
  );
};

export default AccountSetting;
