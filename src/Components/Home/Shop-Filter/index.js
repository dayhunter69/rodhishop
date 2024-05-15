import React, { useState } from "react";
import LifeStyle from "./LifeStyle/LifeStyle";
import Sound from "./Sound/Sound";
import Charge from "./Charge/Charge";
import Apple from "./Protection/Apple/Apple";
import AllEarbuds from "./Sound/AllEarBuds/AllEarBuds";

export const category = [
  {
    id: 1,
    name: "Sound",
  },
  {
    id: 2,
    name: "Charge",
  },
  {
    id: 3,
    name: "Protection",
  },
  {
    id: 4,
    name: "LifeStyle",
  },
];

const ShopFilter = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="w-[93%] mt-[70px] mb-0 mx-auto mobile:mt-[35px] mobile:w-[95%]">
        <div className=" mb-[55px] mobile:mb-[24px] mobile:mt-0">
          <p
            className="font-Arial not-italic font-bold text-Heading uppercase text-primary  text-center
              mobile:text-Paragraph2"
          >
            shop by your need
          </p>
        </div>
        <div className="flex justify-evenly mb-[50px] mobile:mb-0 mobile:justify-between">
          {category.map((item, index) => {
            return (
              <div key={item.id}>
                <button
                  className={
                    activeTab === index
                      ? "flex items-center justify-center w-[200px] h-[60px] bg-white border border-solid border-primary font-Arial not-italic font-normal text-Subheading1 shadow-custom5 uppercase mobile:w-[75px] mobile:h-[30px] mobile:text-[11px] mobile:shadow-custom6"
                      : "flex items-center justify-center w-[200px] h-[60px] bg-white border border-solid border-primary shadow-custom1 font-Arial not-italic font-normal text-Subheading1 uppercase text-primary  mobile:w-[75px] mobile:h-[30px] mobile:text-[11px]"
                  }
                  onClick={() => handleTab(index)}
                >
                  <p>{item.name}</p>
                </button>
              </div>
            );
          })}
        </div>
        {(() => {
          if (activeTab === 0) return <Sound />;
          else if (activeTab === 1) {
            return <Charge />;
          } else if (activeTab === 2) {
            return <Apple />;
          } else if (activeTab === 3) {
            return <LifeStyle />;
          } else {
            return <AllEarbuds />;
          }
        })()}
      </div>
    </>
  );
};

export default ShopFilter;