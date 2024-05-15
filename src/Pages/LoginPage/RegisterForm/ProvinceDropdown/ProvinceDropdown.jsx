import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CityDropdown from "../CityDropdown/CityDropdown";

export const categoryA = [
  {
    id: 1,
    Province: "Province",
    option: [
      {
        id: 1,
        ProvinceType: "Province No. 1",
        ProvinceValue: "Province No. 1",
      },
      {
        id: 2,
        ProvinceType: "Province No. 2",
        ProvinceValue: "Province No. 2",
      },
      {
        id: 3,
        ProvinceType: "Bagmati Province",
        ProvinceValue: "Bagmati Province",
      },
      {
        id: 4,
        ProvinceType: "Gandaki Province",
        ProvinceValue: "Gandaki Province",
      },
      {
        id: 5,
        ProvinceType: "Lumbini Province",
        ProvinceValue: "Lumbini Province",
      },
      {
        id: 6,
        ProvinceType: "Karnali Province",
        ProvinceValue: "Karnali Province",
      },
      {
        id: 7,
        ProvinceType: "Sudurpashchim Province",
        ProvinceValue: "Sudurpashchim Province",
      },
    ],
  },
];

const ProvinceDropdown = () => {
  const [provinceclick, setProvinceClick] = useState(false);
  const [provinceselect, setProvinceSelect] = useState("");

  const handleProvinceClick = () => {
    setProvinceClick(!provinceclick);
  };
  const handleProvinceSelect = (info) => {
    setProvinceSelect(info.ProvinceValue);
  };
  return (
    <>
      <div className="flex items-center justify-between mt-[20px]">
        <div
          className="w-[255px] h-[40px] relative border border-solid border-secondary-darkOpacity"
          onClick={handleProvinceClick}
        >
          <div className="flex absolute right-[8px] top-[13px] cursor-pointer">
            {provinceclick ? (
              <i
                className="fa fa-angle-up"
                aria-hidden="true"
                style={{ color: "#ffffff" }}
              ></i>
            ) : (
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            )}
          </div>
          <div className="Provience-Dropdown">
            {categoryA.map((list, index) => {
              return (
                <div key={index}>
                  <div
                    className={`${
                      provinceclick
                        ? "w-[255px] h-[40px] pl-[22px] flex items-center bg-black text-white cursor-pointer capitalize text-center text-Paragraph1 font-normal not-italic font-Arial"
                        : "w-[255px] h-[40px] pl-[22px] flex items-center  text-secondary-darkOpacity cursor-pointer capitalize text-center text-Paragraph1 font-normal not-italic font-Arial"
                    }`}
                  >
                    {provinceselect ? (
                      <p>{provinceselect}</p>
                    ) : (
                      <p>{list.Province}</p>
                    )}
                  </div>
                  {provinceclick ? (
                    <div className="absolute w-[255px] top-[39px] left-[0px] z-[3] bg-white shadow-custom4">
                      {list.option.map((info, index) => {
                        return (
                          <div key={index}>
                            <div
                              className="flex items-center pl-[20px] w-[255px] h-[40px] font-Arial not-italic 
                                font-normal text-Paragraph1 text-center capitalize text-primary hover:text-white
                                hover:bg-secondary-greyOpacity cursor-pointer"
                              onClick={() => {
                                handleProvinceSelect(info);
                              }}
                            >
                              <p>{info.ProvinceType}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center gap-[3px]">
          <NavLink className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
            set on map
          </NavLink>
        </div>
      </div>
      <CityDropdown provinceselect={provinceselect} />
    </>
  );
};

export default ProvinceDropdown;
