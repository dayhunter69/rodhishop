import React from "react";
import { details } from "./setup";

function DeatailComparisonUI({ type, checkState }) {
  return (
    <>
      <div
        style={{ flex: 1, alignItems: "center" }}
        className="w-[1060px] flex flex-col gap-x-[19px] gap-y-[45px] flex-wrap  mx-auto mt-[60px]"
      >
        {details.map((each, i) => {
          if (!each.options.includedCategory.includes(type)) return <p>no</p>;
          return (
            <div
              key={i}
              className="flex gap-y-[15px] flex-col items-center  w-[250px]"
            >
              <div
                className="flex items-center justify-center w-[84px] h-[84px] rounded-[8px] border border-solid border-secondary-lightGrey"
                style={{
                  filter:
                    "drop-shadow(0px 3.37297px 3.37297px rgba(0, 0, 0, 0.25))",
                }}
              >
                <img
                  src={each.options.img}
                  alt=""
                  className="w-[58.8px] h-[58.8px]"
                />
              </div>
              <p className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize px-[35px] text-primary">
                {each.options.feature}
              </p>
            </div>
          );
        })}
        <button
          className="w-[183.03px] h-[43.17px] font-Arial not-italic font-normal text-Paragraph1 text-primary uppercase
          border border-solid border-secondary-darkOpacity"
        >
          buy now
        </button>
      </div>
    </>
  );
}

export default DeatailComparisonUI;
