import React from "react";
import icon1 from "../../../../images/earphone.png";
import icon2 from "../../../../images/earbud.png";
import icon3 from "../../../../images/headphone.png";
import icon4 from "../../../../images/speaker.png";
import icon5 from "../../../../images/earphone2.png";
import icon6 from "../../../../images/earbud2.png";
import icon7 from "../../../../images/headphone2.png";
import icon8 from "../../../../images/speaker2.png";

export const productIcon = [
  {
    id: 1,
    iconA: icon1,
    iconB: icon5,
    product_name: "earphone",
  },
  {
    id: 2,
    iconA: icon2,
    iconB: icon6,
    product_name: "earbud",
  },
  {
    id: 3,
    iconA: icon3,
    iconB: icon7,
    product_name: "headphone",
  },
  {
    id: 4,
    iconA: icon4,
    iconB: icon8,
    product_name: "speaker",
  },
];

function SoundSIdeNav({ soundType, handleClick }) {
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
                soundType === info.product_name
                  ? "Allicon-Circle2"
                  : "Allicon-Circle1"
              }`}
            >
              <img
                src={soundType === info.product_name ? info.iconB : info.iconA}
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

export default SoundSIdeNav;
