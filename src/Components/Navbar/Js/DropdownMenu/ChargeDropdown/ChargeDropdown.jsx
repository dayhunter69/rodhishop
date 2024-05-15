import React, { useState } from "react";
import icon1 from "../../../../images/cable.png";
import icon2 from "../../../../images/charger.png";
import icon3 from "../../../../images/powerbank.png";
import icon4 from "../../../../images/qi charger.png";
import ChargeMenuUI from "./ChargeMenuUI";

export const dropdownList = [
  {
    id: 1,
    list: "cable",
    icon: icon1,
  },
  {
    id: 2,
    list: "wallCharger",
    icon: icon2,
  },
  {
    id: 3,
    list: "powerBank",
    icon: icon3,
  },
  {
    id: 4,
    list: "qiCharger",
    icon: icon4,
  },
];

const ChargeDropdown = ({ handleClose }) => {
  const [chargeType, setChargeType] = useState("");

  const handleClick = (state) => {
    setChargeType(state);
  };

  const handleShowClick = () => {
    setChargeType("");
  };

  return (
    <>
      {!chargeType ? (
        <div className="w-[785px] h-[249px] rounded-[4px] flex items-center justify-center bg-white">
          <div className="w-[733px] flex">
            {dropdownList.map((chargeitem) => {
              return (
                <div key={chargeitem.list}>
                  <div
                    className="w-[183px] h-[140px] flex items-center justify-between flex-col"
                    title={
                      chargeitem.indexing === "Speaker" ? "coming Soon" : ""
                    }
                  >
                    <div
                      className="w-[99px] h-[99px] flex items-center justify-center rounded-[50%]
                       bg-secondary-whitesmoke cursor-pointer"
                      onClick={() => handleClick(chargeitem.list)}
                    >
                      <img
                        src={chargeitem.icon}
                        alt=""
                        width="70"
                        height="70"
                      />
                    </div>
                    <p
                      className="font-Arial not-italic font-normal text-Paragraph2 uppercase
                       text-primary cursor-pointer"
                    >
                      {chargeitem.list}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <ChargeMenuUI
          chargeType={chargeType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default ChargeDropdown;
