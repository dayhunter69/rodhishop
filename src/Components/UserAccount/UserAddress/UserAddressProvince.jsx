import React, { useState } from "react";
import UserCity from "./UserCity";

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
const UserAddressProvince = () => {
  const [addressclick, setAddressClick] = useState();
  const [choose, setChoose] = useState("");
  const handleClick = () => {
    setAddressClick(!addressclick);
  };
  const handleSelect = (info) => {
    setChoose(info.ProvinceValue);
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
                {choose ? (
                  <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px] text-secondary-darkOpacity">
                    {choose}
                  </p>
                ) : (
                  <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px] text-secondary-darkOpacity">
                    {list.Province}
                  </p>
                )}
                {addressclick ? (
                  <div className="UserAddress-Province-Option-Container">
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
      <UserCity />
    </>
  );
};

export default UserAddressProvince;
