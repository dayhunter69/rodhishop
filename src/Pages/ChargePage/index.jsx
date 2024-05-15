import React, { useState } from "react";
import imgA from "../../Components/images/Sound-Page-Top-Banner.jpg";
import img1 from "../../Components/images/charger.png";
import img2 from "../../Components/images/charger2.png";
import img3 from "../../Components/images/cable.png";
import img4 from "../../Components/images/cable2.png";
import img5 from "../../Components/images/powerbank.png";
import img6 from "../../Components/images/powerbank2.png";
import img7 from "../../Components/images/qi charger.png";
import img8 from "../../Components/images/qi charger2.png";
import CableTypes from "../CablePage/CableTypes";
import PowerBankTypes from "../PowerBankPage/PowerBankTypes";
import QiChargerTypes from "../QiChargerPage/QiChargerTypes";
import WallChargerPageTypes from "../WallChargerPage/WallChargerPageTypes";

export const chargeCategory = [
  {
    id: 1,
    name: "Cable",
    icon1: img3,
    icon2: img4,
  },
  {
    id: 2,
    name: "wall charger",
    icon1: img1,
    icon2: img2,
  },
  {
    id: 3,
    name: "power bank",
    icon1: img5,
    icon2: img6,
  },
  {
    id: 4,
    name: "qi charger",
    icon1: img7,
    icon2: img8,
  },
];

const ChargePage = () => {
  const [activeTabMenu, setActiveTabMenu] = useState(null);

  const handleTab = (index) => {
    setActiveTabMenu(index);
  };
  return (
    <>
      <p
        className="font-Arial not-italic font-bold text-Heading uppercase text-primary text-center pt-[35px] pb-[50px]
         mobile:pt-[20px] mobile:pb-[20px] mobile:text-Subheading2"
      >
        Charge
      </p>
      <div className="flex items-center justify-center mb-[45px] w-[100%]">
        <img src={imgA} alt="" width="100%" />
      </div>
      <div className="flex items-center  max-w-[630px] h-[81px] mb-[35px] mx-auto mt-0 mobile:w-[325px] mobile:h-[66px]">
        <div className="w-[600px] flex items-center justify-around mobile:justify-between mx-auto my-0">
          {chargeCategory.map((data, index) => {
            return (
              <div className="flex items-center flex-col" key={index}>
                <div
                  className={`${
                    activeTabMenu === index
                      ? "w-[60px] h-[60px] flex items-center justify-center bg-black rounded-[50%] cursor-pointer mobile:w-[47px] mobile:h-[47px]"
                      : "w-[60px] h-[60px] flex items-center justify-center bg-secondary-whitesmoke rounded-[50%] cursor-pointer mobile:w-[47px] mobile:h-[47px]"
                  }`}
                  onClick={() => handleTab(index)}
                >
                  <img
                    src={activeTabMenu === index ? data.icon2 : data.icon1}
                    width="39"
                    height="39"
                    className="w-[29.5px] h-[29.5px]"
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
      <div className="w-[1350px] mx-auto mb-[160px] mobile:w-[333px]">
        {(() => {
          if (activeTabMenu === 0) return <CableTypes />;
          else if (activeTabMenu === 1) {
            return <WallChargerPageTypes />;
          } else if (activeTabMenu === 2) {
            return <PowerBankTypes />;
          } else if (activeTabMenu === 3) {
            return <QiChargerTypes />;
          } else {
            return <CableTypes />;
          }
        })()}
      </div>
    </>
  );
};

export default ChargePage;
