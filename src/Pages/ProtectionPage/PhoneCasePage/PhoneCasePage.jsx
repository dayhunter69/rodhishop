import React, { useState } from "react";
import { Icon } from "@iconify/react";
// import "../../SoundPage/Common-Page-Style.css";
// import "../../../../Navbar/Style/Apple.css";
// import "../../../Components/Navbar/Style/Apple.css";
import Img1 from "../../../Components/images/Apple.png";
import Img2 from "../../../Components/images/Samsung.png";
import Img3 from "../../../Components/images/Huawei.png";
import Img4 from "../../../Components/images/Google.png";

export const brand = [
  {
    id: 1,
    Img: Img1,
  },
  {
    id: 2,
    Img: Img2,
  },
  {
    id: 3,
    Img: Img3,
  },
  {
    id: 4,
    Img: Img4,
  },
];
const PhoneCasePage = ({ tabactive, handleBackClick, show }) => {
  const [select, setSelect] = useState("");
  const [clicked, setClicked] = useState(false);
  const [nestedclicked, setNestedClicked] = useState(true);
  const [active, setActive] = useState();
  const [leav, setLeav] = useState(true);

  const handleClick = (index) => {
    setClicked(true);
    setActive(index);
  };
  const handleHideClick = () => {
    setLeav(!leav);
  };
  const handleSelectClick = (info) => {
    setSelect(info.value);
  };
  const handleNestedClick = (index) => {
    setNestedClicked(index);
  };
  return (
    <>
      {leav ? (
        <div className="max-w-[1350px] my-0 mx-auto flex flex-col items-center">
          <div className="h-[67px] flex items-center justify-center">
            {brand.map((name, index) => {
              return (
                <div key={index}>
                  <div
                    className="flex items-center justify-center w-[60px] h-[60px] mx-[55px] my-0 rounded-[50%] cursor-pointer bg-secondary-whitesmoke"
                    onClick={() => {
                      handleBackClick();
                      handleHideClick();
                    }}
                  >
                    <img src={name.Img} alt="" width="38" height="38" />
                  </div>
                </div>
              );
            })}
            {/* <div className="samsungIconDiv">
              <img src={Img2} alt="" width="50" height="47" />
            </div> */}
            {/* <div className="huaweiIconDiv">
              <img src={Img3} alt="" width="38" height="38" />
            </div> */}
            {/* <div className="googleIconDiv">
              <img src={Img4} alt="" width="38" height="38" />
            </div> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PhoneCasePage;
