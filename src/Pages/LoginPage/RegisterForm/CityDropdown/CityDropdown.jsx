import React, { useState } from "react";
import AreaDropdown from "../AreaDropdown/AreaDropdown";

export const categoryB = [
  {
    id: 1,
    City: "City",
    option: [
      {
        id: 1,
        cityType: "Biratnagar",
        cityValue: "Biratnagar",
      },
      {
        id: 2,
        cityType: "Birgunj",
        cityValue: "Birgunj",
      },
      {
        id: 3,
        cityType: "Kathmandu",
        cityValue: "Kathmandu",
      },
      {
        id: 4,
        cityType: "Pokhara",
        cityValue: "Pokhara",
      },
      {
        id: 5,
        cityType: "Butwal",
        cityValue: "Butwal",
      },
      {
        id: 6,
        cityType: "Humla",
        cityValue: "Humla",
      },
    ],
  },
];
const CityDropdown = ({ provinceselect }) => {
  const [cityclick, setCityClick] = useState(false);
  const [cityselect, setCitySelect] = useState("");

  const handleCityClick = () => {
    setCityClick(!cityclick);
  };
  const handleCitySelect = (info) => {
    setCitySelect(info.cityValue);
  };
  return (
    <>
      {provinceselect ? (
        <div className="w-[331px] h-[40px] mt-[20px]">
          <div
            className="w-[255px] h-[40px] relative border border-solid border-secondary-darkOpacity"
            onClick={handleCityClick}
          >
            <div className="flex absolute right-[8px] top-[13px] cursor-pointer">
              {cityclick ? (
                <i
                  className="fa fa-angle-up"
                  aria-hidden="true"
                  style={{ color: "#ffffff" }}
                ></i>
              ) : (
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              )}
            </div>
            {categoryB.map((list, index) => {
              return (
                <div key={index}>
                  <div
                    className={`${
                      cityclick
                        ? "w-[255px] h-[40px] pl-[22px] flex items-center bg-black text-white cursor-pointer capitalize text-center text-Paragraph1 font-normal not-italic font-Arial"
                        : "w-[255px] h-[40px] pl-[22px] flex items-center  text-secondary-darkOpacity cursor-pointer capitalize text-center text-Paragraph1 font-normal not-italic font-Arial"
                    }`}
                  >
                    {cityselect ? <p>{cityselect}</p> : <p>{list.City}</p>}
                  </div>
                  {cityclick ? (
                    <div className="w-[255px] absolute top-[39px] left-[0px] z-[2] bg-white shadow-custom4">
                      {list.option.map((info, index) => {
                        return (
                          <div key={index}>
                            <div
                              className="flex items-center pl-[20px] w-[255px] h-[40px] font-Arial not-italic 
                                 font-normal text-Paragraph1 text-center capitalize text-primary hover:text-white
                                 hover:bg-secondary-greyOpacity cursor-pointer"
                              onClick={() => {
                                handleCitySelect(info);
                              }}
                            >
                              <p>{info.cityType}</p>
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
      ) : null}
      <AreaDropdown cityselect={cityselect} />
    </>
  );
};

export default CityDropdown;
