import { Icon } from "@iconify/react";
import React, { useState } from "react";
// import "../../Navbar/Style/ReviewFeedback.css";
import FeedbackForm from "./FeedbackForm";
import ReviewFilter from "./ReviewFilter";

const Feedback = ({ select, setSelect }) => {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      {!flag ? (
        <>
          <ReviewFilter select={select} setSelect={setSelect} />
          <div className="w-[960px] h-[233px] flex flex-col mt-[125px]">
            <div className="w-[890px] mx-auto mb-0">
              <p className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize text-primary">
                We've put our hearts and souls into creating a shopping
                experience that's as unique and special as you are. We'd be
                thrilled if you could share your feedback with us through a
                review.
              </p>
            </div>
            <div className="flex items-center justify-around h-[34px] gap-[7px] mt-[20px] mb-0 mx-auto">
              <div
                className="flex items-center justify-center w-[26px] h-[26px] cursor-pointer"
                onClick={handleClick}
              >
                <Icon
                  icon="material-symbols:add-circle-outline"
                  width="24"
                  height="24"
                  color="rgba(0, 0, 0, 0.71)"
                />
              </div>
              <p
                onClick={handleClick}
                className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize text-secondary-darkOpacity 
              cursor-pointer"
              >
                Add new Feedback
              </p>
            </div>
            {/* <Verified/>  */}
          </div>
        </>
      ) : null}
      {flag && <FeedbackForm />}
    </>
  );
};

export default Feedback;
