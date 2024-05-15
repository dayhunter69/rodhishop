import React from "react";
import icon1 from "../../../../images/cable.png";
import icon2 from "../../../../images/charger.png";
import icon3 from "../../../../images/powerbank.png";
import icon4 from "../../../../images/qi charger.png";
import icon5 from "../../../../images/cable2.png";
import icon6 from "../../../../images/charger2.png";
import icon7 from "../../../../images/powerbank2.png";
import icon8 from "../../../../images/qi charger2.png";

export const productIcon = [
  {
    id: 1,
    iconA: icon1,
    iconB: icon5,
    product_name: "cable",
  },
  {
    id: 2,
    iconA: icon2,
    iconB: icon6,
    product_name: "wallCharger",
  },
  {
    id: 3,
    iconA: icon3,
    iconB: icon7,
    product_name: "powerBank",
  },
  {
    id: 4,
    iconA: icon4,
    iconB: icon8,
    product_name: "qiCharger",
  },
];

function ChargeSideNav({ chargeType, handleClick }) {
  return (
    <div className="Allicon-Container">
      {productIcon.map((info) => {
        return (
          <div
            onClick={() => {
              window.localStorage.isNavbarItemSelected = "";
              handleClick(info.product_name);
            }}
            key={info.product_name}
            className="Allicon-Circle-Box"
          >
            <div
              className={`${
                chargeType === info.product_name
                  ? "Allicon-Circle2"
                  : "Allicon-Circle1"
              }`}
            >
              <img
                src={chargeType === info.product_name ? info.iconB : info.iconA}
                alt=""
                width="40"
                height="40"
              />
            </div>
            <div className="icon-product-name">{info.product_name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ChargeSideNav;
