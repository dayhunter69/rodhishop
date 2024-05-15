import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import { useLocation } from "react-router-dom";
import EarphoneInfo from "./EarphoneInfo";
import SoundAllType from "./SoundAllType";
import "../EarphonePage/EarphoneInfo.css";

export const EarphonePageData = [
  {
    title: "Driver Type",
    state: "driverType",
    options: [
      {
        featureItem: "Single Driver",
        value: "Single Driver",
      },
      { featureItem: "Dual driver", value: "Dual Driver" },
      { featureItem: "hybrid", value: "hybrid" },
    ],
  },
  {
    title: "Jack Type",
    state: "jackType",
    options: [
      {
        featureItem: "3.5 mm",
        value: "3.5 mm",
      },
      { featureItem: "Type c", value: "Type c" },
      { featureItem: "Lighting", value: "Lighting" },
    ],
  },
  {
    title: "Driver Size",
    state: "driverSize",
    options: [
      {
        featureItem: "6 mm",
        value: "6 mm",
      },
      { featureItem: "10 mm", value: "10 mm" },
      { featureItem: "lighting", value: "Lighting" },
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
  {
    title: "Brand",
    state: "driverBrand",
    options: [
      {
        featureItem: "Tuddrom",
        value: "tuddrom",
      },
      { featureItem: "Acefast", value: "acefast" },
    ],
  },
];

const EarphonePage = () => {
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
        Earphone
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div
        className="max-w-[1350px] flex flex-col mx-auto mb-[80px]"
        // style={{ border: "1px solid red" }}
      >
        <div className="earphonePage-Options-carousel">
          {EarphonePageData.map((data, index) => {
            return (
              <EarphoneInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <SoundAllType />
      </div>
    </>
  );
};

export default EarphonePage;
