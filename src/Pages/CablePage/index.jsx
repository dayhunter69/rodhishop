import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import CableTypes from "./CableTypes";
import { useLocation } from "react-router-dom";
import CableInfo from "./CableInfo";

export const cablePageData = [
  {
    title: "Cable Types",
    state: "cableTypes",
    options: [
      {
        featureItem: "usb-micro usb",
        value: "usb-micro usb",
      },
      { featureItem: "usb-type c", value: "usb-type c" },
      { featureItem: "usb-lightning", value: "usb-lightning" },
      { featureItem: "type c-type c", value: "type c-type c" },
      { featureItem: "type c-lightning", value: "type c-lightning" },
      { featureItem: "type c-3.5mm female", value: "type c-3.5mm female" },
      {
        featureItem: "lightning-3.5mm female",
        value: "lightning-3.5mm female",
      },
    ],
  },
  {
    title: "Cable Length",
    state: "cableLength",
    options: [
      {
        featureItem: "1 meter",
        value: "1 meter",
      },
      { featureItem: "1.2 meter", value: "1.2 meter" },
      { featureItem: "1.8 meter", value: "1.8 meter" },
      { featureItem: "2 meter", value: "2 meter" },
    ],
  },
  {
    title: "Price",
    state: "cablePrice",
    options: [
      {
        featureItem: "Less than 1000",
        value: "Less than 1000",
      },
      { featureItem: "Less than 2000", value: "Less than 2000" },
      { featureItem: "Less than 3000", value: "Less than 3000" },
      { featureItem: "Less than 4000", value: "Less than 4000" },
    ],
  },
];
const CablePage = () => {
  const query = new URLSearchParams(useLocation().search);
  const cableTypes = query.get("cableTypes");
  const cableLength = query.get("cableLength");
  const cablePrice = query.get("cablePrice");

  const [active, setActive] = useState({
    cableTypes,
    cableLength,
    cablePrice,
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
        Cable
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {cablePageData.map((data, index) => {
            return (
              <CableInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <CableTypes />
      </div>
    </>
  );
};

export default CablePage;
