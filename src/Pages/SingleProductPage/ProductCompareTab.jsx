import React from "react";
import img1 from "../../Components/images/recommend-img2.png";
import img2 from "../../Components/images/acefast-earbud.png";
import img3 from "../../Components/images/headset-phone-calls.jpg";
import img4 from "../../Components/images/crystal-color-tws-earbuds.jpg";
import img5 from "../../Components/images/hybrid-enc-tws-headset.jpg";
import {
  bluetoothRange,
  driverSize,
  listeningtTime,
  noiseCancelation,
  portableCharging,
} from "./setup";
import DeatailComparisonUI from "./DeatailComparisonUI";
import { Box, Stack } from "@mui/material";
import { Icon } from "@iconify/react";

export const compareTabBtn = [
  {
    id: 1,
    productName: "Acefast T1",
    img: img1,
  },
  {
    id: 2,
    productName: "Acefast T2",
    img: img2,
  },
  {
    id: 3,
    productName: "Acefast T8",
    img: img3,
  },
  {
    id: 4,
    productName: "Acefast T3",
    img: img4,
  },
  {
    id: 5,
    productName: "Acefast T4",
    img: img5,
  },
];
const ProductCompareTab = ({ checkState, goBack }) => {
  const filteredData = compareTabBtn.filter((c) =>
    checkState.includes(c.productName)
  );
  return (
    <>
      <div className="flex w-[1255px] mx-auto items-center justify-evenly sticky top-[0px] z-[1]  bg-white h-[65px]">
        {filteredData.map((btn, index) => {
          return (
            <Stack alignItems="center" flex={1}>
              <Stack direction="row" alignItems="center">
                <button
                  key={index}
                  className="w-[186px] h-[50px] bg-white font-Arial not-italic font-normal text-Paragraph3 capitalize
                text-secondary-darkOpacity border border-solid border-secondary-darkOpacity"
                >
                  {btn.productName}
                </button>
                <Icon
                  onClick={goBack}
                  icon="material-symbols:switch-access-shortcut-add"
                  width="30"
                  height="30"
                  className="cursor-pointer"
                  color="rgba(0,0,0,0.56)"
                />
              </Stack>
            </Stack>
          );
        })}
      </div>
      <div className="flex flex-wrap w-[1255px] mx-auto justify-between">
        {filteredData.map((info, index) => {
          return (
            <div style={{ flex: 1 }} className="w-[279px]" key={index}>
              <div className="w-[235px] h-[235px] mx-auto mt-[30px] mb-[23px] ">
                <img
                  src={info.img}
                  alt={info.productName}
                  width="232.92px"
                  height="232.92px"
                />
              </div>
              <div className="flex items-center justify-between w-[43px] h-[19px] mx-auto">
                <button className="w-[16px] h-[16px] bg-black rounded-[50%]"></button>
                <button className="w-[16px] h-[16px] bg-white border border-solid border-primary rounded-[50%]"></button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[1102px] mx-auto mt-[60px] h-[68px] border-b border-solid border-secondary-lightGrey">
        <p className="font-Arial not-italic font-bold text-Subheading2 capitalize text-primary pb-[40px]">
          detail comparison
        </p>
      </div>
      <div className="flex w-[1255px] mx-auto justify-between">
        {checkState.map((each) => (
          <React.Fragment key={each}>
            <DeatailComparisonUI type={each} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ProductCompareTab;
