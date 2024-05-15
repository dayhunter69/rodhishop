import React from "react";
import icon1 from "../../../../../images/Apple.png";
import icon2 from "../../../../../images/Samsung.png";
import icon3 from "../../../../../images/Huawei.png";
import icon4 from "../../../../../images/Google.png";
import icon5 from "../../../../../images/Apple2.png";
import icon6 from "../../../../../images/Samsung2.png";
import icon7 from "../../../../../images/Huawei2.png";
import icon8 from "../../../../../images/Google2.png";

export const productIcon = [
  {
    id: 1,
    iconA: icon1,
    iconB: icon5,
    product_name: "apple",
  },
  {
    id: 2,
    iconA: icon2,
    iconB: icon6,
    product_name: "samsung",
  },
  {
    id: 3,
    iconA: icon3,
    iconB: icon7,
    product_name: "huawei",
  },
  {
    id: 4,
    iconA: icon4,
    iconB: icon8,
    product_name: "google",
  },
];

function PhoneCaseSideNav({ phonecaseType, handleClick }) {
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
                phonecaseType === info.product_name
                  ? "Allicon-Circle2"
                  : "Allicon-Circle1"
              }`}
            >
              <img
                src={
                  phonecaseType === info.product_name ? info.iconB : info.iconA
                }
                alt=""
                width="40"
                height="40"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PhoneCaseSideNav;
