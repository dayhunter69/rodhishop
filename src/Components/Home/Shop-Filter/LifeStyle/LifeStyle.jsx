import React, { useState } from "react";
import img1 from "../../../images/Holderpic.jpg";
import img2 from "../../../images/bicycle-phone-holder.jpg";
import img3 from "../../../images/tabletop-holder.jpg";
import img4 from "../../../images/tabletop-holder-package.jpg";
import img5 from "../../../images/bicycle-phone-holder2.jpg";
import img6 from "../../../images/tabletop-holder-rotation.jpg";
import img7 from "../../..//images/tabletop-holder-overview.jpg";
import img8 from "../../..//images/tabletop-holder-interior.jpg";
import img9 from "../../..//images/phone-holder-bike.jpg";
import img10 from "../../../images/holder.png";
import img11 from "../../../images/holder2.png";
import img12 from "../../../images/wear.png";
import img13 from "../../../images/wear2.png";
import Holder from "./Holder/Holder";
import Wear from "./Wear/Wear";
import LifeStyleAllData from "./LifeStyleAllData/LifeStyleAllData";

export const lifestyleCategory = [
  {
    id: 1,
    name: "holders",
    icon1: img10,
    icon2: img11,
  },
  {
    id: 2,
    name: "wear",
    icon1: img12,
    icon2: img13,
  },
];
export const hoderData = [
  {
    id: 1,
    Img: img1,
    hoverImg: img2,
    buttonhoverImg: img5,
    title: "acefast D15",
    productName: "Phone holder",
    price: "NRS 749",
  },
  {
    id: 2,
    Img: img3,
    hoverImg: img4,
    buttonhoverImg: img6,
    title: "acefast a21",
    productName: "Phone holder",
    price: "NRS 10999",
  },
  {
    id: 3,
    Img: img8,
    hoverImg: img2,
    buttonhoverImg: img5,
    title: "acefast D15",
    productName: "Phone holder",
    price: "NRS 749",
  },
  {
    id: 4,
    Img: img9,
    hoverImg: img4,
    buttonhoverImg: img6,
    title: "acefast a21",
    productName: "Phone holder",
    price: "NRS 10999",
  },
  {
    id: 5,
    Img: img7,
    hoverImg: img4,
    buttonhoverImg: img6,
    title: "acefast a21",
    productName: "Phone holder",
    price: "NRS 10999",
  },
];
const LifeStyle = () => {
  const [activeTabMenu, setActiveTabMenu] = useState(null);

  const handleTab = (index) => {
    setActiveTabMenu(index);
  };
  return (
    <>
      <div className="max-w-[630px] h-[90px] mx-auto my-[52px] flex items-center">
        <div className="w-[230px] flex items-center justify-between mx-auto my-0">
          {lifestyleCategory.map((data, index) => {
            return (
              <div key={index}>
                <div className="w-[91px] flex flex-col items-center justify-center">
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
                      width="42"
                      height="42"
                    />
                  </div>
                  <div
                    className="font-Arial not-italic font-normal text-Paragraph0 text-center uppercase 
                       mt-[3px] text-secondary-mediumOpacity"
                  >
                    {data.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {(() => {
        if (activeTabMenu === 0) {
          return <Holder />;
        } else if (activeTabMenu === 1) {
          return <Wear />;
        } else {
          return <LifeStyleAllData />;
        }
      })()}
    </>
  );
};

export default LifeStyle;
