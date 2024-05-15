import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Img1 from "../../../../images/Apple.png";
import Img2 from "../../../../images/Samsung.png";
import Img3 from "../../../../images/Huawei.png";
import Img4 from "../../../../images/Google.png";
import Protection from "../Protection";
import MiddleApple from "./MiddleApple/MiddleApple";

const Apple = () => {
  const [protectionState, setProtectionState] = useState({
    mobileDeviceType: "",
    category: "",
  });
  const handleClickDevice = (deviceType) => () => {
    setProtectionState((prev) => ({
      ...prev,
      mobileDeviceType: deviceType,
      category: "",
    }));
  };

  const handleClickModel = (model) => {
    setProtectionState((prev) => ({
      ...prev,
      category: model === prev.category ? "" : model,
    }));
  };

  return (
    <>
      <div className="w-[93%] mx-auto my-0 mobile:mt-[15px] mobile:mb-0">
        <div className="mx-auto my-[52px] h-[70px] mobile:hidden mobile:my-0 flex items-center justify-center">
          {/* OuterApple start */}
          {!protectionState.mobileDeviceType ? (
            <div className="h-[67px] flex items-center justify-center">
              <div
                className="w-[60px] h-[60px] flex items-center justify-center rounded-[50%] cursor-pointer bg-secondary-whitesmoke"
                onClick={handleClickDevice("apple")}
              >
                <img src={Img1} alt="" width="38" height="38" />
              </div>
              <div
                className="w-[60px] h-[60px] flex items-center justify-center rounded-[50%] cursor-pointer bg-secondary-whitesmoke 
                ml-[100px]"
                onClick={handleClickDevice("samsung")}
              >
                <img src={Img2} alt="" width="50" height="47" />
              </div>
              <div
                className="w-[60px] h-[60px] flex items-center justify-center rounded-[50%] cursor-pointer bg-secondary-whitesmoke 
                ml-[100px]"
                onClick={handleClickDevice("huawei")}
              >
                <img src={Img3} alt="" width="38" height="38" />
              </div>
              <div
                className="w-[60px] h-[60px] flex items-center justify-center rounded-[50%] cursor-pointer bg-secondary-whitesmoke 
                ml-[100px]"
                onClick={handleClickDevice("google")}
              >
                <img src={Img4} alt="" width="38" height="38" />
              </div>
            </div>
          ) : (
            <div className="w-[93%] flex items-center relative mx-auto my-0">
              <div className="min-w-[630px] flex items-center mx-auto my-0 h-[50px] ">
                {protectionState.category && (
                  <div
                    className="w-[35px] h-[47px] flex items-center justify-center cursor-pointer"
                    onClick={() => handleClickModel("")}
                  >
                    <Icon
                      icon="system-uicons:cross-circle"
                      width="31"
                      height="31"
                    />
                  </div>
                )}
                <div className="absolute ml-[45px]">
                  <MiddleApple
                    deviceType={protectionState.mobileDeviceType}
                    category={protectionState.category}
                    handleClickIcon={handleClickDevice("")}
                    handleClickModel={handleClickModel}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <Protection protectionState={protectionState} />
      </div>
    </>
  );
};

export default Apple;
