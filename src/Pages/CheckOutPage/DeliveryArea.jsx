import React, { useState } from "react";
import "../../Components/Navbar/Style/DeliveryArea.css";
import LandMark from "./LandMark";

export const areaList = [
  {
    id: 1,
    Tole: "Tole",
    option: [
      {
        id: 1,
        areaType: "Maitidevi",
        areaValue: "Maitidevi",
      },
      {
        id: 2,
        areaType: "Anamnagar",
        areaValue: "Anamnagar",
      },
      {
        id: 3,
        areaType: "Gaushala",
        areaValue: "Gaushala",
      },
      {
        id: 4,
        areaType: "Sinamangal",
        areaValue: "Sinamangal",
      },
      {
        id: 5,
        areaType: "Ghattekulo",
        areaValue: "Ghattekulo",
      },
      {
        id: 6,
        areaType: "Mitrapark",
        areaValue: "Mitrapark",
      },
    ],
  },
];
const DeliveryArea = ({ cityselect }) => {
  const [areaclick, setAreaClick] = useState(false);
  const [areaselect, setAreaSelect] = useState("");

  const handleAreaClick = () => {
    setAreaClick(!areaclick);
  };
  const handleAreaSelect = (info) => {
    setAreaSelect(info.areaValue);
  };
  return (
    <>
      {cityselect ? (
        <div className="Delivery-Area-Dropdown">
          <div className="Delivery-Area-Box" onClick={handleAreaClick}>
            <div className="Delivery-Area-UpDown-Arrow">
              {areaclick ? (
                <i
                  className="fa fa-angle-up"
                  aria-hidden="true"
                  style={{ color: "#ffffff" }}
                ></i>
              ) : (
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              )}
            </div>
            {areaList.map((list, index) => {
              return (
                <div key={index}>
                  <div
                    className={`${
                      areaclick ? "deliveryActive" : "deliveryDeactive"
                    }`}
                  >
                    {areaselect ? <p>{areaselect}</p> : <p>{list.Tole}</p>}
                  </div>
                  {areaclick ? (
                    <div className="Delivery-Area-List-Type">
                      {list.option.map((info, index) => {
                        return (
                          <div key={index}>
                            <div
                              className="Delivery-Area-List-Type-Option"
                              onClick={() => {
                                handleAreaSelect(info);
                              }}
                            >
                              <p>{info.areaType}</p>
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
       <LandMark areaselect={areaselect} />
    </>
  );
};

export default DeliveryArea;
