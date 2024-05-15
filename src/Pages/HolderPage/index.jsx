import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import { useLocation } from "react-router-dom";
import Holderinfo from "./Holderinfo";
import HoldersPageTypes from "../LifeStylePage/HoldersPageTypes";

export const HolderPageData = [
  {
    title: "Types",
    state: "Type",
    options: [
      {
        featureItem: "Mobile holder",
        value: "Mobile holder",
      },
      { featureItem: "Laptop holder", value: "Laptop holder" },
      { featureItem: "Tablet", value: "Tablet" },
      { featureItem: "Bicycle", value: "Bicycle" },
    ],
  },
  {
    title: "Price",
    state: "driverPrice",
    options: [
      {
        featureItem: "Less than 2000",
        value: "Less than 2000",
      },
      { featureItem: "Less than 3000", value: "Less than 3000" },
      { featureItem: "Less than 4000", value: "Less than 4000" },
      { featureItem: "Less than 5000", value: "Less than 5000" },
    ],
  },
];

const HolderPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const driverType = query.get("driverType");
  const jackType = query.get("jackType");
  const driverSize = query.get("driverSize");
  const driverPrice = query.get("driverPrice");
  const driverBrand = query.get("driverBrand");

  const [active, setActive] = useState({
    driverType,
    jackType,
    driverSize,
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
        Holders
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {HolderPageData.map((data, index) => {
            return (
              <Holderinfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <HoldersPageTypes />
      </div>
    </>
  );
};

export default HolderPage;
