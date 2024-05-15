import React, { useState } from "react";
import UserArea from "./UserArea";

export const categoryA = [
  {
    id: 1,
    City: "City",
    option: [
      {
        id: 1,
        CityType: "Biratnagar",
        CityValue: "Biratnagar",
      },
      {
        id: 2,
        CityType: "Birgunj",
        CityValue: "Birgunj",
      },
      {
        id: 3,
        CityType: "Kathmandu",
        CityValue: "Kathmandu",
      },
      {
        id: 4,
        CityType: "Pokhara",
        CityValue: "Pokhara",
      },
      {
        id: 5,
        CityType: "Butwal",
        CityValue: "Butwal",
      },
      {
        id: 6,
        CityType: "Humla",
        CityValue: "Humla",
      },
    ],
  },
];
const UserCity = () => {
  const [addressclick, setAddressClick] = useState();
  const [choosecity, setChooseCity] = useState("");
  const handleClick = () => {
    setAddressClick(!addressclick);
  };
  const handleSelect = (info) => {
    setChooseCity(info.CityValue);
  };
  return (
    <>
      <div className="relative cursor-pointer mt-[20px]" onClick={handleClick}>
        <div className="flex absolute top-[18px] right-[15px]">
          <i
            className={addressclick ? "fa fa-angle-up" : "fa fa-angle-down"}
          ></i>
        </div>
        <div className="flex items-center w-[382px] h-[50px] border border-solid border-secondary-darkOpacity">
          {categoryA.map((list, index) => {
            return (
              <div key={index}>
                {choosecity ? (
                  <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px] text-secondary-darkOpacity">
                    {choosecity}
                  </p>
                ) : (
                  <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px] text-secondary-darkOpacity">
                    {list.City}
                  </p>
                )}
                {addressclick ? (
                  <div className="UserAddress-District-Option-Container">
                    {list.option.map((info, index) => {
                      return (
                        <div key={index}>
                          <div
                            className="flex items-center h-[50px] font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px]
                            text-secondary-darkOpacity hover:text-white hover:bg-secondary-greyOpacity"
                            onClick={() => {
                              handleSelect(info);
                            }}
                          >
                            <p>{info.CityType}</p>
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
      <UserArea />
    </>
  );
};

export default UserCity;
