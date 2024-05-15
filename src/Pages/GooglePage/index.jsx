import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import { useLocation } from "react-router-dom";
import GoogleInfo from "./GoogleInfo";
import GooglePageTypes from "./GooglePageTypes";

export const googlePageData = [
  {
    title: "Model",
    state: "googleModal",
    options: [
      {
        featureItem: "google p30",
        value: "google p30",
      },
    ],
  },
  {
    title: "Color",
    state: "googleColor",
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
    state: "googlePrice",
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

const GooglePage = () => {
  const query = new URLSearchParams(useLocation().search);
  const googleModal = query.get("googleModal");
  const googleColor = query.get("googleColor");
  const googlePrice = query.get("googlePrice");

  const [active, setActive] = useState({
    googleModal,
    googleColor,
    googlePrice,
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
        Google
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {googlePageData.map((data, index) => {
            return (
              <GoogleInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <GooglePageTypes />
      </div>
    </>
  );
};

export default GooglePage;
