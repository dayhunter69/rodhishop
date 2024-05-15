import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import PowerBankTypes from "./PowerBankTypes";
import { useLocation } from "react-router-dom";
import PowerBankInfo from "./PowerBankInfo";

export const powerbankpageData = [
  {
    title: "fast charge",
    state: "fastCharge",
    options: [
      {
        featureItem: "yes",
        value: "yes",
      },
      { featureItem: "no", value: "no" },
    ],
  },
  {
    title: "capacity",
    state: "powerbankCapacity",
    options: [
      {
        featureItem: "10000 mah",
        value: "10000 mah",
      },
      { featureItem: "20000 mah", value: "20000 mah" },
    ],
  },
  {
    title: "port (input)",
    state: "portInput",
    options: [
      {
        featureItem: "1 port",
        value: "1 port",
      },
      { featureItem: "2 port", value: "2 port" },
    ],
  },
  {
    title: "port (output)",
    state: "portOutput",
    options: [
      {
        featureItem: "1 port",
        value: "1 port",
      },
      { featureItem: "2 port", value: "2 port" },
    ],
  },
  {
    title: "Price",
    state: "powerbankPrice",
    options: [
      {
        featureItem: "Less than 2000",
        value: "Less than 2000",
      },
      { featureItem: "Less than 3000", value: "Less than 3000" },
    ],
  },
];
const PowerBankPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const fastCharge = query.get("fastCharge");
  const powerbankCapacity = query.get("powerbankCapacity");
  const portInput = query.get("portInput");
  const portOutput = query.get("portOutput");
  const powerbankPrice = query.get("powerbankPrice");

  const [active, setActive] = useState({
    fastCharge,
    powerbankCapacity,
    portInput,
    powerbankPrice,
    portOutput,
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
        PowerBank
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {powerbankpageData.map((data, index) => {
            return (
              <PowerBankInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <PowerBankTypes />
      </div>
    </>
  );
};

export default PowerBankPage;
