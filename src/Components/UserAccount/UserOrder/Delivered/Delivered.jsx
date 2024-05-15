import React from "react";

const Delivered = ({ item }) => {
  return (
    <>
      {item.map((info, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center w-[369px] h-[415px] mt-[15px] shadow-custom1 bg-white"
          >
            <div className="w-[320px]">
              <div className="h-[68px] flex items-center justify-between">
                <div className="w-[185px]">
                  <p className="font-Arial font-normal not-italic text-Paragraph0 capitalize text-secondary-mediumOpacity">
                    order number:{info.orderNumber}
                  </p>
                  <p className="font-Arial font-normal not-italic text-Paragraph0 capitalize text-secondary-mediumOpacity">
                    ordered on: {info.orderOn}
                  </p>
                  <p className="font-Arial font-normal not-italic text-Paragraph0 capitalize text-secondary-mediumOpacity">
                    ordered delivered: {info.orderDelivered}
                  </p>
                </div>
                <button
                  className="w-[88px] h-[30px] bg-white border border-solid border-primary shadow-custom1 
                   font-Arial font-normal not-italic text-Paragraph0 capitalize text-primary"
                >
                  {info.btnName}
                </button>
              </div>
              <div className="flex items-center justify-between w-[283px] h-[150px] mt-[15px]">
                <div className="flex items-center justify-center w-[150px] h-[150px]">
                  <img src={info.img} alt="" className="w-[144px] h-[144px]" />
                </div>
                <div
                  className="w-[113px] flex flex-col gap-[1px] font-Arial not-italic font-normal 
                    text-Paragraph0 capitalize text-primary"
                >
                  <p>{info.productName}</p>
                  <p>{info.productColor}</p>
                  <p>qty: {info.Qty}</p>
                  <p>rs.{info.Rs}</p>
                  <p>{info.paidBy}</p>
                </div>
              </div>
              <div className="h-[135.77px] mt-[13px]">
                <div className="flex justify-between">
                  <p
                    className="font-Arial not-italic font-normal 
                    text-Paragraph0 text-secondary-darkOpacity"
                  >
                    Ready to review?
                  </p>
                  <p
                    className="font-Arial not-italic font-normal 
                    text-Paragraph0 text-secondary-darkOpacity"
                  >
                    order again?
                  </p>
                </div>
                <div className="mt-[15px]">
                  <p
                    className="font-Arial not-italic font-normal 
                    text-Paragraph0 text-secondary-darkOpacity"
                  >
                    warranty claim period end on
                  </p>
                </div>
                <div className="flex justify-between mt-[15px]">
                  <p
                    className="font-Arial font-bold not-italic text-[17.0079px] leading-[20px] capitalize
                     text-secondary-darkOpacity"
                  >
                    20 days
                  </p>
                  <p
                    className="font-Arial font-bold not-italic text-[17.0079px] leading-[20px] capitalize
                     text-secondary-darkOpacity"
                  >
                    14 hour
                  </p>
                  <p
                    className="font-Arial font-bold not-italic text-[17.0079px] leading-[20px] capitalize
                     text-secondary-darkOpacity"
                  >
                    21 min
                  </p>
                  <p
                    className="font-Arial font-bold not-italic text-[17.0079px] leading-[20px] capitalize
                     text-secondary-darkOpacity"
                  >
                    8 sec
                  </p>
                </div>
                <div className="mt-[20px]">
                  <p
                    className="font-Arial not-italic font-normal text-Paragraph0 capitalize
                     text-primary text-center"
                  >
                    request for warranty
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Delivered;
