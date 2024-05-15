import React, { useState } from "react";
import "./CheckOutCard.css";

const CheckOutCard = () => {
  const [show, setShow] = useState();
  const [shows, setShows] = useState();

  const handleClickGift = () => {
    setShows(!shows);
  };
  const handleClickPromo = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="w-[470px] flex  items-center justify-center bg-white shadow-custom1 rounded-[2px] pb-[40px]">
        <div className="w-[345px] mt-[40px]">
          <div className="flex items-center gap-[19px] mb-[20px]">
            <div className="w-[28px] h-[28px]" onClick={handleClickGift}>
              <input type="checkbox" className="Promo-Checkbox" />
            </div>
            <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-secondary-darkOpacity">
              let’s make this gift
            </p>
          </div>
          {shows && (
            <div className="my-[15px]">
              <textarea
                className="w-[342px] h-[107px] bg-white pl-[14px] pt-[11px] 
             border border-solid border-secondary-darkOpacity outline-0 resize-none
             font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity"
                placeholder="add your message here"
              ></textarea>
            </div>
          )}
          <div className="flex items-center gap-[19px]">
            <div className="w-[28px] h-[28px]" onClick={handleClickPromo}>
              <input type="checkbox" className="Promo-Checkbox" />
            </div>
            <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-secondary-darkOpacity">
              apply a promo code
            </p>
          </div>
          {show && (
            <div className="flex gap-[10px] mt-[15px]">
              <input
                type="text"
                className="w-[284px] h-[40px] bg-white border border-solid border-secondary-darkOpacity outline-0 pl-[10px]"
              />
              <button className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-primary">
                apply
              </button>
            </div>
          )}
          <div className="mt-[30px]">
            <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity">
              order summary
            </p>
            <div className="flex items-center justify-between mt-[15px]">
              <div className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                <p>total</p>
              </div>
              <div className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity">
                <p>rs 749</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[15px]">
              <div className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                <p>promo discount</p>
              </div>
              <div className="font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity">
                <p>- rs 300</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[15px]">
              <div className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                <p>gift wraps</p>
              </div>
              <div className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity">
                <p>rs 0</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[15px]">
              <div className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                <p>grand total</p>
              </div>
              <div className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity">
                <p>rs 749</p>
              </div>
            </div>
          </div>
          <div className="w-[334px] mt-[30px] mx-auto">
            <button
              className="w-[333px] h-[50px] font-Arial not-italic font-normal text-Paragraph3
             uppercase text-secondary-darkOpacity border border-solid border-secondary-darkOpacity"
            >
              check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutCard;
