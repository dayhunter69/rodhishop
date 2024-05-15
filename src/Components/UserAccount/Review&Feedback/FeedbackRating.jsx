import React, { useState } from "react";
import { Icon } from "@iconify/react";
import FeedbackForm from "./FeedbackForm";

export const feedbackList = [
  {
    id: 1,
    feedbackContent:
      "“ The product pages on Yantram are well-designed and provide plenty of information about the products. However, adding more customer reviews and ratings could help increase visitor confidence and encourage them to make a purchase.”",
    feedbackSubTitle: "product page review section",
    icon1: "ic:baseline-delete-outline",
  },
  {
    id: 2,
    feedbackContent:
      "“ The checkout process on Yantram is smooth and easy to use. However, consider offering more payment options, such as PayPal or Apple Pay, to give visitors more flexibility.”",
    feedbackSubTitle: "checkout section ",
    icon1: "ic:baseline-delete-outline",
  },
  {
    id: 3,
    feedbackContent:
      "“ The product pages on Yantram are well-designed and provide plenty of information about the products. However, adding more customer reviews and ratings could help increase visitor confidence and encourage them to make a purchase.”",
    feedbackSubTitle: "product page review section",
    icon1: "ic:baseline-delete-outline",
  },
  {
    id: 4,
    feedbackContent:
      "“ The checkout process on Yantram is smooth and easy to use. However, consider offering more payment options, such as PayPal or Apple Pay, to give visitors more flexibility.”",
    feedbackSubTitle: "checkout section ",
    icon1: "ic:baseline-delete-outline",
  },
];
const FeedbackRating = () => {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      {!flag ? (
        <div className="w-[962px] flex justify-evenly mt-[25px]">
          <div className="flex flex-col w-[886.12px]">
            <div className="flex justify-between">
              {feedbackList.map((pro, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center w-[211px] h-[272px] bg-white shadow-custom8"
                  >
                    <div className="w-[188.14px] h-[152px] mt-[20px]">
                      <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                        {pro.feedbackContent}
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px] w-[181px] h-[19px] mt-[20px]">
                      <div className="w-[16px] border border-solid border-secondary-darkOpacity"></div>
                      <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity">
                        {pro.feedbackSubTitle}
                      </p>
                    </div>
                    <div className="w-[185px] mt-[29px]">
                      <div className="flex items-center justify-center w-[20px] h-[20px] cursor-pointer ml-auto">
                        <Icon
                          icon={pro.icon1}
                          width="18"
                          height="18"
                          color="rgba(0, 0, 0, 0.71)"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-[8px] w-[202px] h-[50px] bg-white mt-[40px] border border-solid border-secondary-darkOpacity">
              <div
                className="flex items-center justify-center w-[24px] h-[24px] ml-[5px] cursor-pointer"
                onClick={handleClick}
              >
                <Icon icon="material-symbols:add" width="22" height="22" />
              </div>
              <div
                className="flex items-center justify-center h-[24px] cursor-pointer"
                onClick={handleClick}
              >
                <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                  add new feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {flag && <FeedbackForm />}
    </>
  );
};

export default FeedbackRating;
