import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import { useLocation } from "react-router-dom";
import Appleinfo from "./Appleinfo";
import ApplePageTypes from "./ApplePageTypes";

export const applePageData = [
  {
    title: "Model",
    state: "appleModel",
    options: [
      {
        featureItem: "iphone 11 series",
        value: "iphone 11 series",
      },
      { featureItem: "iphone 12 series", value: "iphone 12 series" },
      { featureItem: "iphone 13 series", value: "iphone 13 series" },
      { featureItem: "iphone 14 series", value: "iphone 14 series" },
    ],
  },
  {
    title: "Color",
    state: "appleColor",
    options: [
      {
        featureItem: "black",
        value: "black",
      },
      { featureItem: "transparent", value: "transparent" },
      { featureItem: "other color", value: "other color" },
    ],
  },
  {
    title: "Price",
    state: "applePrice",
    options: [
      {
        featureItem: "Less than 2000",
        value: "Less than 2000",
      },
      { featureItem: "Less than 3000", value: "Less than 3000" },
      { featureItem: "Less than 4000", value: "Less than 4000" },
    ],
  },
];

const ApplePage = () => {
  const query = new URLSearchParams(useLocation().search);
  const appleModel = query.get("appleModel");
  const appleColor = query.get("appleColor");
  const applePrice = query.get("applePrice");

  const [active, setActive] = useState({
    appleModel,
    appleColor,
    applePrice,
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
        Apple
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {applePageData.map((data, index) => {
            return (
              <Appleinfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <ApplePageTypes />
      </div>
    </>
  );
};

export default ApplePage;
