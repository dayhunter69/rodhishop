import React from "react";
import { Icon } from "@iconify/react";
import { categoryOptions, protectionData } from "../../ProtectionData";

const MiddleApple = ({
  handleClickIcon,
  handleClickModel,
  deviceType,
  category,
}) => {
  console.log(deviceType);

  return (
    <>
      <div className="flex items-center">
        <div
          className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] cursor-pointer mr-[18px] bg-black"
          onClick={handleClickIcon}
        >
          {deviceType === "apple" ? (
            <Icon icon="ri:apple-fill" color="#FFFFFF" width="32" height="32" />
          ) : deviceType === "samsung" ? (
            <Icon
              icon="simple-icons:samsung"
              color="#FFFFFF"
              width="32"
              height="32"
            />
          ) : deviceType === "google" ? (
            <Icon icon="mdi:google" color="#FFFFFF" width="32" height="32" />
          ) : (
            <Icon
              icon="simple-icons:huawei"
              color="#FFFFFF"
              width="32"
              height="32"
            />
          )}
        </div>
        <div className="flex gap-[18px]">
          {categoryOptions[deviceType].map((data, index) => {
            return (
              <>
                <button
                  key={index}
                  className={`${
                    category === data.value
                      ? "h-[31px] px-[13px] bg-black text-white border border-solid border-primary rounded-[5px] font-Arial not-italic font-normal uppercase text-Paragraph1"
                      : "h-[31px] px-[13px] bg-white text-secondary-mediumOpacity border border-solid border-primary rounded-[5px] font-Arial not-italic font-normal uppercase text-Paragraph1"
                  }`}
                  onClick={() => {
                    handleClickModel(data.value);
                  }}
                >
                  {data.title}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MiddleApple;
