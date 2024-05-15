import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ReviewForm from "./ReviewForm";
import ReviewFilter from "./ReviewFilter";

const Review = ({ select, setSelect }) => {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      {!flag ? (
        <>
          <ReviewFilter select={select} setSelect={setSelect} />
          <div className="flex flex-col w-[960px] h-[233px] mt-[125px]">
            <div className="w-[890px] mx-auto mb-0">
              <p className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize text-primary">
                Well, well, well, it seems like you haven’t reviewed any
                products. We know you're a busy person, but surely you can spare
                a few moments to share your thoughts on our products. And hey,
                we're feeling extra generous today - we'll give you a juicy 10%
                discount on your first review! It's almost like we're paying you
                to talk about products. Almost.
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
                Add new review
              </p>
            </div>
          </div>
        </>
      ) : null}
      {flag && <ReviewForm />}
    </>
  );
};

export default Review;
