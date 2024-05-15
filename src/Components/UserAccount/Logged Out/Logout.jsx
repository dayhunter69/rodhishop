import React from "react";
import { Icon } from "@iconify/react";

const Logout = ({ handleClose }) => {
  return (
    <>
      <div
        className="absolute top-[50%] left-[50%] "
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative w-[445px] h-[250px] bg-white shadow-custom1">
          <div
            className="flex items-center justify-center w-[25px] h-[25px] absolute cursor-pointer top-[10px] right-[13px]"
            onClick={handleClose}
          >
            <Icon icon="akar-icons:cross" width="18" height="18" />
          </div>
          <div className="w-[237px] my-0 mx-auto">
            <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-primary pt-[20px]">
              Logged out successfully
            </p>
          </div>
          <div className="w-[423px] mt-[25px] mb-0 mx-auto">
            <p className="font-Arial not-italic font-normal text-center text-Paragraph3 capitalize text-primary">
              It's never goodbye, it just sees you later! Make sure to come back
              and visit us soon. 
            </p>
          </div>
          <div className="w-[355px] h-[50px] mt-[25px] mb-0 mx-auto flex items-center justify-between">
            <p className="font-Arial not-italic font-normal text-center text-Paragraph3 capitalize text-secondary-darkOpacity">
              Forget something?
            </p>
            <button
              className="w-[182px] h-[50px] border border-solid border-secondary-darkOpacity bg-white 
                 font-Arial not-italic font-normal text-center text-Paragraph3 capitalize text-secondary-darkOpacity"
              onClick={handleClose}
            >
              log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
