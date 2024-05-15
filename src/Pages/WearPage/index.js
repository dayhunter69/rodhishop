import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import { useLocation } from "react-router-dom";
import WearPageTypes from "../LifeStylePage/WearPageTypes";
import Wearinfo from "./Wearinfo";

export const HolderPageData = [
  {
    title: "Sizes",
    state: "sizes",
    options: [
      {
        featureItem: "Medium",
        value: "Medium",
      },
      { featureItem: "Large", value: "Large" },
      { featureItem: "extra large", value: "extra large" },
      { featureItem: "Double Extra Large", value: "Double Extra Large" },
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

const WearPage = () => {
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
        Wear
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[110px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {HolderPageData.map((data, index) => {
            return (
              <Wearinfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <WearPageTypes />
      </div>
      <div className="w-[241px] mx-auto mb-[56px] mobile:w-[141px] mobile:h-[38px]">
        <button
          className="w-[241px] h-[50px] border border-solid border-secondary-darkOpacity  
           font-Arial not-italic font-normal text-Paragraph3 capitalize text-primary
           mobile:w-[141px] mobile:h-[38px] mobile:text-Paragraph0"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default WearPage;
