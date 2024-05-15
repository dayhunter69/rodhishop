import React from "react";
import { Icon } from "@iconify/react";

const InnerApple = ({ data, filterItem, active, state, iphoneClick }) => {
  console.log("filter is >>", state);

  const middleappleinfo = data;
  console.log("innerApple active is >>", active);

  return (
    <>
      <div className="Applecompany">
        <Icon icon="ri:apple-fill" color="white" width="25" height="25" />
      </div>
      <div className="iphoneSeries">
        {middleappleinfo.map((collection, index) => {
          return (
            <div key={index}>
              <h5>{index}</h5>
              <button
                className={`${
                  active === index ? "activeItem" : "iphone12MaxPro"
                }`}
                onClick={() => {
                  filterItem(collection);
                  // iphoneClick(index)
                }}
              >
                {collection.appleModelName}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InnerApple;
