import React, { useState } from "react";
import icon1 from "../../../../images/earphone.png";
import icon2 from "../../../../images/earbud.png";
import icon3 from "../../../../images/headphone.png";
import icon4 from "../../../../images/speaker.png";
import SoundMenuUI from "./SoundMenuUI";

export const dropdownList = [
  {
    id: 1,
    list: "earphone",
    icon: icon1,
  },
  {
    id: 2,
    list: "earbud",
    icon: icon2,
  },
  {
    id: 3,
    list: "headphone",
    icon: icon3,
  },
  {
    id: 4,
    list: "speaker",
    icon: icon4,
  },
];

const SoundDropdown = ({ handleClose }) => {
  const [soundType, setSoundType] = useState("");

  const handleClick = (state) => {
    setSoundType(state);
  };

  const handleShowClick = () => {
    setSoundType("");
  };

  return (
    <>
      {!soundType ? (
        <div className="w-[785px] h-[249px] rounded-[4px] flex items-center justify-center bg-white">
          <div className="w-[733px] flex">
            {dropdownList.map((sounditem) => {
              return (
                <div key={sounditem.list}>
                  <div
                    className="w-[183px] h-[140px] flex items-center justify-between flex-col"
                    title={
                      sounditem.indexing === "Speaker" ? "coming Soon" : ""
                    }
                  >
                    <div
                      className="w-[99px] h-[99px] flex items-center justify-center rounded-[50%]
                       bg-secondary-whitesmoke cursor-pointer"
                      onClick={() => handleClick(sounditem.list)}
                    >
                      <img src={sounditem.icon} alt="" width="70" height="70" />
                    </div>
                    <p
                      className="font-Arial not-italic font-normal text-Paragraph2 uppercase
                       text-primary cursor-pointer"
                    >
                      {sounditem.list}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <SoundMenuUI
          soundType={soundType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default SoundDropdown;
