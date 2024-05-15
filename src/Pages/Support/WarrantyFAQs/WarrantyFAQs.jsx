import React, { useState } from "react";
import WarrantyFAQInfo from "./WarrantyFAQInfo";
import "../WarrantyFAQs/WarrantyFAQs.css";
import { warrantyList } from "./WarrantyFAQsList";

const WarrantyFAQs = () => {
  const [select, setSelect] = useState("");

  const handleClick = (info) => {
    setSelect(info.value);
  };
  return (
    <>
      {/* <div
        className=" flex items-center justify-center"
        style={{ border: "1px solid red" }}
      > */}
      <div
        className="w-[600px] h-[350px] bg-white rounded-[5px] shadow-custom1"
        // style={{ border: "1px solid blue" }}
      >
        <p
          className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-primary pt-[20px] pl-[10px]"
          // style={{ border: "1px solid blue" }}
        >
          Warranty FAQs
        </p>
        <div
          className="WarrantyFAQ-option-container"
          // style={{ border: "1px solid blue" }}
        >
          {warrantyList.map((data, index) => {
            return (
              <WarrantyFAQInfo
                options={data.options}
                // value={select?.data.state}
                data={data}
                select={select}
                handleClick={handleClick}
                key={index}
              />
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default WarrantyFAQs;
