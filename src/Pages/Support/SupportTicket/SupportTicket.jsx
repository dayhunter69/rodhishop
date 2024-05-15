import React, { useState } from "react";
import DontWorry from "../DontWorry/DontWorry";

const SupportTicket = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {!show ? (
        <div className="w-[98.9vw] h-[100vh] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-[600px] h-[350px] bg-white rounded-[5px] shadow-custom1">
            <input
              type="text"
              placeholder="add your ticket number"
              className="w-[450px] h-[50px] pl-[20px] bg-white border border-solid border-secondary-darkOpacity 
             font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity outline-0"
            />
            <button
              onClick={() => setShow(true)}
              className=" w-[175px] h-[50px] mt-[20px] border border-solid border-secondary-darkOpacity
             font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity"
            >
              submit
            </button>
          </div>
        </div>
      ) : (
        <DontWorry />
      )}
    </>
  );
};

export default SupportTicket;
