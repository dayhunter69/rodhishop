import React, { useState } from "react";
import "../../Components/Navbar/Style/DeliveryProvince.css";
import DeliveryCity from "./DeliveryCity";

export const provinceList = [
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
const DeliveryProvince = () => {
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
      <div className="DeliveryProvince-Container">
        <div className="DeliveryProvince-Box" onClick={handleProvinceClick}>
          <div className="DeliveryProvince-UpDown-Arrow">
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
          {provinceList.map((list, index) => {
            return (
              <div key={index}>
                <div
                  className={`${
                    provinceclick ? "deliveryActive" : "deliveryDeactive"
                  }`}
                >
                  {provinceselect ? (
                    <p>{provinceselect}</p>
                  ) : (
                    <p>{list.Province}</p>
                  )}
                </div>
                {provinceclick ? (
                  <div className="DeliveryProvince-List-Type">
                    {list.option.map((info, index) => {
                      return (
                        <div key={index}>
                          <div
                            className="DeliveryProvince-List-Type-Option"
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
      <DeliveryCity provinceselect={provinceselect} />
    </>
  );
};

export default DeliveryProvince;
