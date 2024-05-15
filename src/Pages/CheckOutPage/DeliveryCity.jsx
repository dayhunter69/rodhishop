import React, { useState } from "react";
import "../../Components/Navbar/Style/DeliveryCity.css";
import DeliveryArea from "./DeliveryArea";

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
const DeliveryCity = ({ provinceselect }) => {
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
        <div className="Delivery-City-Dropdown">
          <div className="Delivery-City-Box" onClick={handleCityClick}>
            <div className="Delivery-City-UpDown-Arrow">
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
                      cityclick ? "deliveryActive" : "deliveryDeactive"
                    }`}
                  >
                    {cityselect ? <p>{cityselect}</p> : <p>{list.City}</p>}
                  </div>
                  {cityclick ? (
                    <div className="Delivery-City-List-Type">
                      {list.option.map((info, index) => {
                        return (
                          <div key={index}>
                            <div
                              className="Delivery-City-List-Type-Option"
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
      <DeliveryArea cityselect={cityselect} />
    </>
  );
};

export default DeliveryCity;
