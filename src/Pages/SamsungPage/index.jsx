import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import { useLocation } from "react-router-dom";
import SamsungPageTypes from "./SamsungPageTypes";
import Samsunginfo from "./Samsunginfo";

export const HolderPageData = [
  {
    title: "Model",
    state: "samsungModel",
    options: [
      {
        featureItem: "Samsung galaxy s21 series",
        value: "Samsung galaxy s21 series",
      },
      {
        featureItem: "Samsung galaxy s22 series",
        value: "Samsung galaxy s22 series",
      },
      {
        featureItem: "Samsung galaxy s23 series",
        value: "Samsung galaxy s23 series",
      },
      {
        featureItem: "Samsung galaxy s24 series",
        value: "Samsung galaxy s24 series",
      },
    ],
  },
  {
    title: "Color",
    state: "samsungColor",
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
    state: "samsungPrice",
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

const SamsungPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const samsungModel = query.get("samsungModel");
  const samsungColor = query.get("samsungColor");
  const samsungPrice = query.get("samsungPrice");

  const [active, setActive] = useState({
    samsungModel,
    samsungColor,
    samsungPrice,
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
        samsung
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {HolderPageData.map((data, index) => {
            return (
              <Samsunginfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <SamsungPageTypes />
      </div>
    </>
  );
};

export default SamsungPage;
