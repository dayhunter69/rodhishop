import React from "react";

const YouMadeIt = () => {
  return (
    <>
      <p
        className="font-Arial not-italic font-bold text-Heading text-center 
           pt-10 text-secondary-darkOpacity mobile:text-Paragraph3"
      >
        You made it!
      </p>
      <div className="w-[981px] mx-auto mt-[16px] mobile:w-[332px]">
        <p
          className="font-Arial not-italic font-normal text-Paragraph3 text-center
               text-secondary-darkOpacity mobile:text-Paragraph0"
        >
          Congrats on finding our hidden gem of a blog. We're thrilled, but not
          surprised, that you're one of the select few who appreciate our
          brilliance.
        </p>
        <div className="mobile:w-[248px] mx-auto mt-[24px] mobile:mt-[12px]">
          <p
            className="font-Arial not-italic font-normal text-Paragraph3 text-center
             text-primary  mobile:text-Paragraph0"
          >
            Don't like it? Suggest a better topic, our writer is eagerly waiting
            for something to do.
          </p>
        </div>
        <div className="w-[565px] mx-auto mt-[20px] mobile:w-[327px]">
          <div className="w-[562px]  mobile:w-[326px]">
            <input
              type="text"
              placeholder="write your topic"
              className="w-[562px] h-[50px] border border-solid border-secondary-darkOpacity
              font-Arial not-italic font-normal text-Paragraph3 capitalize
               text-secondary-darkOpacity pl-5 outline-0 mobile:w-[325px] mobile:text-[13px]"
            />
          </div>
          <div className="w-[562px] flex items-center justify-between ml-auto mt-3 mobile:w-[326px]">
            <div className="w-[186px] mobile:w-[95px]">
              <p className="font-Arial not-italic text-Paragraph3 text-center capitalize mobile:text-Paragraph1">
                suggested by:
              </p>
            </div>
            <div className="w-[373px] mobile:w-[214px]">
              <input
                type="text"
                placeholder="your name"
                className="w-[370px] h-[50px] font-Arial not-italic font-normal 
                text-Paragraph3 capitalize text-secondary-darkOpacity pl-5 outline-0 border 
                border-solid border-secondary-darkOpacity mobile:w-[212px] mobile:text-[13px]"
              />
            </div>
          </div>
          <div className="w-[562px] mt-[16px] mobile:w-[325px]">
            <div className="w-[370px] ml-auto mobile:w-[138px] mobile:h-[41px] flex items-center justify-center">
              <button
                className="w-[182px] h-[50px] border border-solid mobile:w-[138px] mobile:h-[40px]
               border-secondary-darkOpacity font-Arial not-italic font-normal capitalize
                text-Paragraph3 text-secondary-darkOpacity mobile:text-[13px]"
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouMadeIt;
