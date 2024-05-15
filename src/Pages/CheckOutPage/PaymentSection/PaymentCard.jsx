import React from "react";

const PaymentCard = ({ info }) => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white w-[176px] h-[150px] shadow-custom1">
        <button
          className="w-[13px] h-[13px] bg-white rounded-[50%] border border-solid border-primary 
              ml-[20px] mb-[20px]"
        ></button>
        <div className="w-[126px] h-[77px]">
          <img
            src={info.img}
            alt=""
            width="124"
            height="75"
            className="ml-[20px]"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
