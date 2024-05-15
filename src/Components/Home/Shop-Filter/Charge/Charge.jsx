import React, { useState } from "react";
import Cable from "../Cable/Cable";
import Power from "../Power/Power";
import QiCharger from "../QiCharger/QiCharger";
import WallCharger from "../WallCharger/WallCharger";
import img1 from "../../../images/charger.png";
import img2 from "../../../images/charger2.png";
import img3 from "../../../images/cable.png";
import img4 from "../../../images/cable2.png";
import img5 from "../../../images/powerbank.png";
import img6 from "../../../images/powerbank2.png";
import img7 from "../../../images/qi charger.png";
import img8 from "../../../images/qi charger2.png";

export const chargeCategory = [
  {
    id: 1,
    name: "wall charger",
    icon1: img1,
    icon2: img2,
  },
  {
    id: 2,
    name: "Cable",
    icon1: img3,
    icon2: img4,
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

const Charge = () => {
  const [activeTabMenu, setActiveTabMenu] = useState(null);

  const handleTab = (index) => {
    setActiveTabMenu(index);
  };
  return (
    <>
      <div className="max-w-[630px] h-[81px] flex items-center mx-auto my-[52px] mobile:hidden mobile:my-0">
        <div className="w-[600px] flex items-center justify-around mx-auto my-0">
          {chargeCategory.map((data, index) => {
            return (
              <div
                className="w-[91px] flex items-center justify-center flex-col"
                key={index}
              >
                <div
                  className={`${
                    activeTabMenu === index
                      ? "w-[60px] h-[60px] flex items-center justify-center bg-black rounded-[50%] cursor-pointer"
                      : "w-[60px] h-[60px] flex items-center justify-center bg-secondary-whitesmoke rounded-[50%] cursor-pointer"
                  }`}
                  onClick={() => handleTab(index)}
                >
                  <img
                    src={activeTabMenu === index ? data.icon2 : data.icon1}
                    width="39"
                    height="39"
                  />
                </div>
                <div
                  className="font-Arial not-italic font-normal text-[10px] text-center uppercase 
                    mt-[3px] text-secondary-mediumOpacity"
                >
                  {data.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {(() => {
        if (activeTabMenu === 0) return <WallCharger />;
        else if (activeTabMenu === 1) {
          return <Cable />;
        } else if (activeTabMenu === 2) {
          return <Power />;
        } else if (activeTabMenu === 3) {
          return <QiCharger />;
        } else {
          return <Cable />;
        }
      })()}
    </>
  );
};

export default Charge;
