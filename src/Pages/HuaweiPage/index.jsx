import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import { useLocation } from "react-router-dom";
import HuaweiInfo from "./HuaweiInfo";
import HuaweiPageTypes from "./HuaweiPageTypes";

export const huaweiPageData = [
  {
    title: "Model",
    state: "huaweiModel",
    options: [
      {
        featureItem: "huawei p30",
        value: "huawei p30",
      },
    ],
  },
  {
    title: "Color",
    state: "huaweiColor",
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
    state: "huaweiPrice",
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

const HuaweiPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const huaweiModel = query.get("huaweiModel");
  const huaweiColor = query.get("huaweiColor");
  const huaweiPrice = query.get("huaweiPrice");

  const [active, setActive] = useState({
    huaweiModel,
    huaweiColor,
    huaweiPrice,
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
        Huawei
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {huaweiPageData.map((data, index) => {
            return (
              <HuaweiInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <HuaweiPageTypes />
      </div>
    </>
  );
};

export default HuaweiPage;
