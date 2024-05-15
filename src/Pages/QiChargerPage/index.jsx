import React, { useState } from "react";
import imgA from "../../Components/images/Earphone-Banner.jpg";
import QiChargerTypes from "./QiChargerTypes";
import QiChargerInfo from "./QiChargerInfo";
import { useLocation } from "react-router-dom";

export const qichargerpageData = [
  {
    title: "Types",
    state: "qiChargerTypes",
    options: [
      {
        featureItem: "for single device",
        value: "for single device",
      },
      { featureItem: "for multi device", value: "for multi device" },
    ],
  },
  {
    title: "Output",
    state: "outPut",
    options: [
      {
        featureItem: "5 w",
        value: "5 w",
      },
      { featureItem: "7 w", value: "7 w" },
      { featureItem: "10 w", value: "10 w" },
      { featureItem: "15 w", value: "15 w" },
    ],
  },
  {
    title: "Compatible with",
    state: "compatibleWith",
    options: [
      {
        featureItem: "magsafe",
        value: "magsafe",
      },
    ],
  },
];
const QiChargerPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const qiChargerTypes = query.get("qiChargerTypes");
  const outPut = query.get("outPut");
  const compatibleWith = query.get("compatibleWith");

  const [active, setActive] = useState({
    qiChargerTypes,
    outPut,
    compatibleWith,
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
        Qi Charger
      </p>
      <div className="w-[100%] mb-[45px] flex items-center justify-center">
        <img src={imgA} alt="" />
      </div>
      <div className="max-w-[1350px] flex flex-col mx-auto mb-[80px]">
        <div className="w-[1280px] flex mx-auto justify-center">
          {qichargerpageData.map((data, index) => {
            return (
              <QiChargerInfo
                key={index}
                value={active?.[data.state]}
                options={data.options}
                title={data.title}
                handleClick={(info) => handleClick(data.state, info)}
              />
            );
          })}
        </div>
        <QiChargerTypes />
      </div>
    </>
  );
};

export default QiChargerPage;
