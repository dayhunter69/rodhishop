import React, { useState } from "react";
import CancelInfo from "./CancelInfo";

export const cancelList = [
  {
    id: 1,
    title: "ohno! why you want to cancel your order?",
    state: "please clarify",
    options: [
      {
        choose: "Incorrectly placed an order",
        value: "Incorrectly placed an order",
      },
      {
        choose: "Requesting order modification",
        value: "Requesting order modification",
      },
      {
        choose: "Requesting payment method change",
        value: "Requesting payment method change",
      },
      {
        choose: "Requesting delivery address change",
        value: "Requesting delivery address change",
      },
      {
        choose: "Found superior products elsewhere",
        value: "Found superior products elsewhere",
      },
      {
        choose: "Changed plans or mind",
        value: "Changed plans or mind",
      },
      {
        choose: "Item no longer necessary",
        value: "Item no longer necessary",
      },
      {
        choose: "Delivery time too long",
        value: "Delivery time too long",
      },
      {
        choose: "Unexpected financial circumstances",
        value: "Unexpected financial circumstances",
      },
      {
        choose: "Negative reviews after ordering",
        value: "Negative reviews after ordering",
      },
      {
        choose: "Dissatisfactory return or refund policy",
        value: "Dissatisfactory return or refund policy",
      },
      {
        choose: "Incorrect or damaged items received",
        value: "Incorrect or damaged items received",
      },
      {
        choose: "Displeased with company policies or customer service",
        value: "Displeased with company policies or customer service",
      },
      {
        choose: "Concerned about payment security or fraud",
        value: "Concerned about payment security or fraud",
      },
      {
        choose: "other",
        value: "other",
      },
    ],
  },
];
const CancelOrder = () => {
  const [select, setSelect] = useState({});

  const handleClick = (state, info) => {
    setSelect((prev) => ({ ...prev, [state]: info.value }));
  };
  return (
    <>
      <div className="flex flex-col items-center w-[600px] h-[350px] bg-white rounded-[5px] shadow-custom1">
        {cancelList.map((data, index) => {
          return (
            <CancelInfo
              key={index}
              value={select?.[data.state]}
              options={data.options}
              title={data.title}
              handleClick={(info) => handleClick(data.state, info)}
            />
          );
        })}
        <button
          className="w-[137px] h-[50px] font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity
               border border-solid border-secondary-darkOpacity mt-[20px]"
        >
          submit
        </button>
      </div>
    </>
  );
};

export default CancelOrder;
