import React from "react";
import img1 from "../../../Components/images/headset-earbuds-transparent.jpg";

const RequestWarranty = ({ item }) => {
  return (
    <>
      {item.map((info, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center w-[369px] h-[425px] mt-[46px] bg-white shadow-custom1"
          >
            <div className="w-[320px]">
              <div className="h-[68px] flex items-center justify-between">
                <div className="w-[160px]">
                  <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-mediumOpacity">
                    ticket number: {info.ticketNumber}
                  </p>
                  <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-mediumOpacity">
                    request date:{info.requestDate}
                  </p>
                </div>
                <button
                  className="w-[132px] h-[30px] border border-solid border-primary shadow-custom1 font-Arial not-italic 
                     font-normal text-Paragraph0 bg-white capitalize text-primary"
                >
                  {info.btnName}
                </button>
              </div>
              <div className="w-[283px] h-[150px] mt-[15px] flex items-center justify-between">
                <div className="flex items-center justify-center w-[150px] h-[150px]">
                  <img src={img1} alt="" className=" w-[144px] h-[144px]" />
                </div>
                <div className="w-[113px] h-[53px] flex flex-col  font-Arial not-italic font-normal text-Paragraph0 capitalize text-primary">
                  <p> {info.productName}</p>
                  <p> {info.productColor}</p>
                  <p>rs.{info.Rs}</p>
                </div>
              </div>
              <div className="w-[220px] flex flex-col mt-[10px] font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                <p>Order Date: {info.orderDate}</p>
                <p>request for warranty: {info.requestforwarranty}</p>
                <p>problem: {info.problem}</p>
                <p>status: {info.status}</p>
              </div>
              <div className="w-[102px]  mt-[25px] flex flex-col gap-[4px]">
                <p className="font-Arial not-italic font-normal text-Paragraph1 capitalize text-primary">
                  {info.needHelp}
                </p>
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                  {info.callUs}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RequestWarranty;
