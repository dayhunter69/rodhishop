import React, { useState } from "react";
import imgA from "../../Components/images/Sound-Page-Top-Banner.jpg";
import img1 from "../../Components/images/earphone.png";
import img2 from "../../Components/images/earphone2.png";
import img3 from "../../Components/images/earbud.png";
import img4 from "../../Components/images/earbud2.png";
import img5 from "../../Components/images/headphone.png";
import img6 from "../../Components/images/headphone2.png";
import img7 from "../../Components/images/speaker.png";
import img8 from "../../Components/images/speaker2.png";
import Earbud from "../../Components/Home/Shop-Filter/Sound/Earbud/Earbud";
import Headphone from "../../Components/Home/Shop-Filter/Sound/HeadPhone/HeadPhone";
import AllEarBuds from "../../Components/Home/Shop-Filter/Sound/AllEarBuds/AllEarBuds";
import SoundAllType from "../EarphonePage/SoundAllType";
import HeadphoneTypes from "../EarphonePage/HeadphoneTypes";
import EarbudPageTypes from "../EarbudPage/EarbudPageTypes";
import EmailBox from "../../Components/Home/Shop-Filter/Sound/EmailBox";

export const soundCategory = [
  {
    id: 1,
    name: "earphone",
    icon1: img1,
    icon2: img2,
  },
  {
    id: 2,
    name: "earbud",
    icon1: img3,
    icon2: img4,
  },
  {
    id: 3,
    name: "headphone",
    icon1: img5,
    icon2: img6,
  },
  {
    id: 4,
    name: "speaker",
    icon1: img7,
    icon2: img8,
  },
];

const SoundPage = () => {
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
        Sound
      </p>
      <div className="flex items-center justify-center mb-[45px] w-[100%] mobile:mb-[22px]">
        <img src={imgA} alt="" width="100%" />
      </div>
      <div className="flex items-center max-w-[630px] h-[81px] mb-[35px] mx-auto mt-0 mobile:w-[325px] mobile:h-[66px]">
        <div className="w-[600px] flex items-center justify-around mobile:justify-between mx-auto my-0">
          {soundCategory.map((data, index) => {
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
          if (activeTabMenu === 0) return <EmailBox />;
          else if (activeTabMenu === 1) {
            return <EarbudPageTypes />;
          } else if (activeTabMenu === 2) {
            return <HeadphoneTypes />;
          } else if (activeTabMenu === 3) {
            return <EmailBox />;
          } else {
            return <SoundAllType />;
          }
        })()}
      </div>
    </>
  );
};

export default SoundPage;
