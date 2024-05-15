import React, { useState } from "react";
import imgA from "../../Components/images/Sound-Page-Top-Banner.jpg";
import img1 from "../../Components/images/holder.png";
import img2 from "../../Components/images/holder2.png";
import img3 from "../../Components/images/wear.png";
import img4 from "../../Components/images/wear2.png";
import HoldersPageTypes from "./HoldersPageTypes";
import WearPageTypes from "./WearPageTypes";

export const lifestyleCategory = [
  {
    id: 1,
    name: "holders",
    icon1: img1,
    icon2: img2,
  },
  {
    id: 2,
    name: "wear",
    icon1: img3,
    icon2: img4,
  },
];

const LifeStylePage = () => {
  const [activeTabMenu, setActiveTabMenu] = useState();

  const handleTab = (index) => {
    setActiveTabMenu(index);
  };
  return (
    <>
      <p
        className="font-Arial not-italic font-bold text-Heading uppercase text-center text-primary pt-[35px] pb-[51px] 
        mobile:text-Subheading2 mobile:pt-[22px] mobile:pb-[22px]"
      >
        lifestyle
      </p>
      <div className="flex items-center justify-center mb-[45px] w-[100%] mobile:mb-[22px]">
        <img src={imgA} alt="" width="100%" />
      </div>
      <div className="flex items-center max-w-[630px] h-[81px] mb-[35px] mx-auto mt-0 mobile:w-[325px] mobile:h-[66px]">
        <div className="w-[600px] flex items-center gap-x-[32px] justify-center mobile:justify-center mx-auto my-0">
          {lifestyleCategory.map((data, index) => {
            return (
              <div className="flex items-center flex-col" key={index}>
                <div
                  className={`${
                    activeTabMenu === index
                      ? "w-[60px] h-[60px] flex items-center justify-center bg-black rounded-[50%] cursor-pointer mobile:w-[47px] mobile:h-[47px]"
                      : "w-[60px] h-[60px] flex items-center justify-center bg-secondary-whitesmoke rounded-[50%] cursor-pointer mobile:w-[47px] mobile:h-[47px]"
                  }`}
                  onClick={() => handleTab(index)}
                  title={index === 0 || index === 3 ? "Out of stock" : ""}
                >
                  <img
                    src={activeTabMenu === index ? data.icon2 : data.icon1}
                    className="w-[40px] h-[40px] mobile:w-[33px] mobile:h-[33px]"
                  />
                </div>
                <div
                  className="font-Arial not-italic font-normal text-[10px] text-center uppercase mt-[3px]
                     text-secondary-mediumOpacity mobile:text-[10px] mobile:leading-[11px]"
                >
                  {data.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[1350px] mx-auto mb-[80px] mobile:w-[333px]">
        {(() => {
          if (activeTabMenu === 0) return <HoldersPageTypes />;
          else if (activeTabMenu === 1) {
            return <WearPageTypes />;
          } else {
            return <HoldersPageTypes />;
          }
        })()}
      </div>
    </>
  );
};

export default LifeStylePage;
