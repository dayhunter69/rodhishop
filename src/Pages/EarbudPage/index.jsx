import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import EarbudInfo from "./EarbudInfo ";
import { useLocation } from "react-router-dom";
import EarbudPageTypes from "./EarbudPageTypes";

export const EarbudPageData = [
  {
    title: "Driver Types",
    state: "driverType",
    options: [
      {
        featureItem: "Single Driver",
        value: "Single Driver",
      },
      { featureItem: "Dual Driver", value: "Dual Driver" },
    ],
  },
  {
    title: "Bluetooth Version",
    state: "bluetoothVersion",
    options: [
      {
        featureItem: "Less than 5.0 version",
        value: "Less than 5.0 version",
      },
      { featureItem: "More than 5.0 version", value: "More than 5.0 version" },
    ],
  },
  {
    title: "Battery life",
    state: "batteryLife",
    options: [
      {
        featureItem: "Less than 4 hrs",
        value: "Less than 4 hrs",
      },
      { featureItem: "More than 4 hrs", value: "More than 4 hrs" },
    ],
  },
  {
    title: "Price",
    state: "driverPrice",
    options: [
      {
        featureItem: "Less than 3000",
        value: "Less than 3000",
      },
      { featureItem: "Less than 4000", value: "Less than 4000" },
      { featureItem: "Less than 5000", value: "Less than 5000" },
      { featureItem: "Less than 6000", value: "Less than 6000" },
    ],
  },
  {
    title: "Brand",
    state: "driverBrand",
    options: [
      { featureItem: "Tuddrom", value: "Tuddrom" },
      {
        featureItem: "Acefast",
        value: "Acefast",
      },
    ],
  },
];
const EarbudPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const driverType = query.get("driverType");
  const bluetoothVersion = query.get("bluetoothVersion");
  const batteryLife = query.get("batteryLife");
  const driverPrice = query.get("driverPrice");
  const driverBrand = query.get("driverBrand");

  const [active, setActive] = useState({
    driverType,
    bluetoothVersion,
    batteryLife,
    driverPrice,
    driverBrand,
  });

  const handleClick = (name, info) => {
    setActive((prev) => ({ ...prev, [name]: info.value }));
  };
  return (
    <>
      <p
        className="font-Arial not-italic font-bold text-Heading uppercase text-primary text-center
        pt-[35px] pb-[51px] mobile:text-Subheading2 mobile:pt-[20px] mobile:pb-[20px]"
      >
        Earbud
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {EarbudPageData.map((data, index) => {
            return (
              <EarbudInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <EarbudPageTypes />
      </div>
    </>
  );
};

export default EarbudPage;
