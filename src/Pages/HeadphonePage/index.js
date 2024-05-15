import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import HeadphoneTypes from "../EarphonePage/HeadphoneTypes";
import { useLocation } from "react-router-dom";
import HeadphoneInfo from "./HeadphoneInfo";

export const HeadphonePageData = [
  {
    title: "bluetooth version",
    state: "bluetoothVersion",
    options: [
      {
        featureItem: "less than 5.0 version",
        value: "less than 5.0 version",
      },
      { featureItem: "more than 5.0 version", value: "more than 5.0 version" },
    ],
  },
  {
    title: "battery life",
    state: "batteryLife",
    options: [
      {
        featureItem: "less than 4 hrs",
        value: "less than 4 hrs",
      },
      { featureItem: "more than 4 hrs", value: "more than 4 hrs" },
    ],
  },
  {
    title: "Noise Cancellation",
    state: "noiseCancellation",
    options: [
      {
        featureItem: "anc",
        value: "anc",
      },
      { featureItem: "enc", value: "enc" },
      { featureItem: "none", value: "none" },
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
      { featureItem: "Less than 6000", value: "Less than 6000" },
    ],
  },
];
const HeadphonePage = () => {
  const query = new URLSearchParams(useLocation().search);
  const bluetoothVersion = query.get("bluetoothVersion");
  const batteryLife = query.get("batteryLife");
  const noiseCancellation = query.get("noiseCancellation");
  const driverPrice = query.get("driverPrice");

  const [active, setActive] = useState({
    bluetoothVersion,
    batteryLife,
    noiseCancellation,
    driverPrice,
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
        Headphone
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {HeadphonePageData.map((data, index) => {
            return (
              <HeadphoneInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <HeadphoneTypes />
      </div>
    </>
  );
};

export default HeadphonePage;
