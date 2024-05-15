import React, { useState } from "react";
import ProductCompareTab from "./ProductCompareTab";
import "../../Components/Navbar/Style/SingleBrandCompare.css";
import img1 from "../../Components/images/headset-ergonomic.jpg";
import img2 from "../../Components/images/headset-earbuds-transparent.jpg";
import img3 from "../../Components/images/recommend-img2.png";
import img4 from "../../Components/images/recommend-img.png";
import img5 from "../../Components/images/crystal-color-tws-earbuds.jpg";

export const brandList = [
  {
    brandName: "Acefast T1",
    img: img1,
    rs: "799",
  },
  {
    brandName: "Acefast T2",
    img: img2,
    rs: "799",
  },
  {
    brandName: "Acefast T3",
    img: img3,
    rs: "799",
  },
  {
    brandName: "Acefast T4",
    img: img4,
    rs: "799",
  },
  {
    brandName: "Acefast T8",
    img: img5,
    rs: "799",
  },
];

const SelectBrandCompare = () => {
  const [state, setState] = useState({
    checkState: {},
  });
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleChangeCheckBox = (type) => (e) => {
    console.log(type);
    setState((prev) => ({
      ...prev,
      checkState: { ...prev.checkState, [type]: e.target.checked },
    }));
  };

  return (
    <>
      {!show ? (
        <div className="w-[710px] h-[618px] bg-white shadow-custom1 mx-auto">
          <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-primary pl-[37px] pt-[19px]">
            select brand you want to compare
          </p>
          <div className="flex flex-wrap w-[646px] gap-[22px] mt-[10px] mx-auto">
            {brandList.map((info, index) => {
              return (
                <div className="w-[200px] h-[200px] bg-white border border-solid border-secondary-lightGrey">
                  <input
                    type="checkbox"
                    className="brandlist-Checkbox"
                    checked={state.checkState?.[info.brandName]}
                    onChange={handleChangeCheckBox(info.brandName)}
                  />
                  <div className="w-[101px] h-[101px] mx-auto">
                    <img src={info.img} alt="" className="w-[99px] h-[99px]" />
                  </div>
                  <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-mediumOpacity text-center ">
                    {info.brandName}
                  </p>
                  <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize  text-secondary-mediumOpacity text-center ">
                    rs {info.rs}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="w-[127px] h-[50px] mx-auto mt-[36px]">
            <button
              onClick={handleClick}
              className="w-[127px] h-[50px] font-Arial not-italic font-normal
                capitalize text-Paragraph3 text-secondary-lightGrey border border-solid border-secondary-darkOpacity"
              disabled={(() => {
                const length = Object.values(state.checkState).filter(
                  (s) => s
                ).length;
                console.log(length);
                if (length > 1 && length < 5) return false;
                return true;
              })()}
            >
              compare
            </button>
          </div>
        </div>
      ) : (
        <ProductCompareTab
          checkState={Object.entries(state.checkState)
            .filter(([_, value]) => value)
            .map(([key, _]) => key)}
          goBack={() => setShow(false)}
        />
      )}
    </>
  );
};

export default SelectBrandCompare;
