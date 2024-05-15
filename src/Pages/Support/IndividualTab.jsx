import React, { useState } from "react";
import { Icon } from "@iconify/react";
import WarrantyFAQs from "./WarrantyFAQs/WarrantyFAQs";
import SupportTicket from "./SupportTicket/SupportTicket";
import CancelOrder from "./CancelOrder/CancelOrder";
import RequestForWarranty from "Pages/RequestForWarranty";
import RequestSubmit from "Pages/RequestForWarranty/RequestSubmit";
import WhereYouBuy from "Pages/RequestForWarranty/WhereYouBuy";

const showAnotherField = [
  "supportTicket",
  "warrantyFAQs",
  "cancelOrder",
  "warrantyrequest",
];

function IndividualTab({ list }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="flex items-center justify-center w-[600px] h-[350px] bg-white shadow-custom1 
          mb-9 rounded mobile:w-[328px] mobile:h-[190px]"
      >
        {!show ? (
          <div className="w-[480px] mobile:w-[320px]">
            <>
              <div className="w-[171px] h-[171px] mx-auto mt-7 mb-5 mobile:w-[90px] mobile:h-[90px] mobile:mt-[5px] mobile:mb-[5px]">
                <img
                  src={list.img}
                  alt=""
                  className="w-[169px] h-[169px] mobile:w-[88.44px] mobile:h-[88.44px]"
                />
              </div>
              <div className="flex items-center justify-center gap-[12px] cursor-pointer">
                <p
                  className="font-Arial not-italic font-bold text-Paragraph3 capitalize
                    text-secondary-darkOpacity text-center mobile:text-[11px]"
                  onClick={() => {
                    if (!showAnotherField.includes(list.value)) return;
                    setShow(true);
                  }}
                >
                  {list.infoA}
                </p>
                <Icon icon={list.icon} width="27" className="mobile:w-[22px]" />
              </div>
              {list.infoD && (
                <p
                  className="font-Arial not-italic font-bold text-Paragraph3 capitalize
                   text-secondary-darkOpacity text-center pt-5 mobile:text-Paragraph0 mobile:pt-[2px]"
                >
                  {list.infoD}
                </p>
              )}
              {list.infoB && (
                <p
                  className="font-Arial not-italic font-normal text-Paragraph3 text-center 
                 capitalize text-secondary-darkOpacity mobile:text-Paragraph0"
                >
                  {list.infoB}
                </p>
              )}
              {list.infoC && (
                <p
                  className="font-Arial not-italic font-normal text-Paragraph1
                  capitalize text-center pt-5 text-secondary-darkOpacity mobile:text-[9px] mobile:pt-[0px]"
                >
                  {list.infoC}
                </p>
              )}
            </>
          </div>
        ) : (
          <>
            {list.value === "warrantyFAQs" ? (
              <WarrantyFAQs />
            ) : list.value === "supportTicket" ? (
              <SupportTicket />
            ) : list.value === "cancelOrder" ? (
              <CancelOrder />
            ) : list.value === "warrantyrequest" ? (
              <RequestSubmitFromSupport />
            ) : null}
          </>
        )}
      </div>
    </>
  );
}

const RequestSubmitFromSupport = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(true);

  return (
    <>
      {show ? (
        <WhereYouBuy />
      ) : (
        <RequestSubmit handleClick={handleClick} fromSupport={true} />
      )}
    </>
  );
};

export default IndividualTab;
