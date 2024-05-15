import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import WallChargerPageTypes from "./WallChargerPageTypes";
import WallChargerInfo from "./WallChargerInfo";
import { useLocation } from "react-router-dom";

export const wallchargerpageData = [
  {
    title: "Types",
    state: "wallchargerTypes",
    options: [
      {
        featureItem: "Single port",
        value: "Single port",
      },
      { featureItem: "multi port", value: "multi port" },
    ],
  },
  {
    title: "port",
    state: "wallchargerPort",
    options: [
      {
        featureItem: "micro",
        value: "micro",
      },
      { featureItem: "Type c", value: "Type c" },
    ],
  },
  {
    title: "Technology",
    state: "technology",
    options: [
      {
        featureItem: "gan",
        value: "gan",
      },
    ],
  },
  {
    title: "Plug type",
    state: "plugType",
    options: [
      {
        featureItem: "uk plug",
        value: "uk plug",
      },
      { featureItem: "us plug", value: "us plug" },
      { featureItem: "eu plug", value: "eu plug" },
    ],
  },

  {
    title: "fast charging",
    state: "fastCharging",
    options: [
      {
        featureItem: "24 w",
        value: "24 w",
      },
      { featureItem: "30 w", value: "30 w" },
      { featureItem: "45 w", value: "45 w" },
      { featureItem: "65 w", value: "65 w" },
      { featureItem: "100 w", value: "100 w" },
    ],
  },
];
const WallChargerPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const wallchargerTypes = query.get("wallchargerTypes");
  const wallchargerPort = query.get("wallchargerPort");
  const technology = query.get("technology");
  const plugType = query.get("plugType");
  const fastCharging = query.get("fastCharging");

  const [active, setActive] = useState({
    wallchargerTypes,
    wallchargerPort,
    technology,
    plugType,
    fastCharging,
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
        WallCharger
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {wallchargerpageData.map((data, index) => {
            return (
              <WallChargerInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <WallChargerPageTypes />
      </div>
    </>
  );
};

export default WallChargerPage;
