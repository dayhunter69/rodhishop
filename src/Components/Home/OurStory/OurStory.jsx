import React from "react";
import img2 from "../../images/OurStory-Top-Banner.png";

const OurStory = () => {
  return (
    <>
      <div className="max-w-[710px] mobile:w-[263px] mt-0 mb-[25px] mx-auto">
        <p
          className="font-Arial not-italic font-bold text-Heading text-center 
           uppercase text-primary mobile:text-Subheading1 mobile:p-0"
        >
          so who we are? let’s read our story
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto my-0 mobile:max-w-[360px] mobile:h-[220px]">
        <img
          src={img2}
          alt=""
          className="h-[450px] mobile:w-[355px] mobile:h-[217px]"
        />
      </div>
      <div className="flex flex-wrap justify-between mx-auto mt-[5px] mb-[95px] mobile:mb-[55px]">
        <div className="max-w-[1172px] mx-auto my-0 mobile:max-w-[337px]">
          <p
            className="font-Arial not-italic font-normal text-Paragraph3 text-center
             text-secondary-darkOpacity pt-[30px] mobile:text-Paragraph0 mobile:pt-0"
          >
            It all began in 2017 when we were working at a mobile shop in the
            Tamrakar complex NewRoad Kathmandu. We were in the sales department
            and we noticed a gap between customers and genuine mobile
            accessories products with reasonable prices. Customers were being
            sold low-quality products at high prices, with no after-sales
            services and no accurate information about the products. We knew
            that this was a real problem and we wanted to make a change.
          </p>
          <div
            className="w-[192px] h-[47px] bg-white flex items-center justify-center border border-solid
             border-primary mt-[20px] mb-0 mx-auto cursor-pointer mobile:w-[131px] mobile:h-[37px] mobile:mt-[13px]"
          >
            <button
              type="button"
              className="font-Arial not-italic font-normal text-Paragraph3 text-center 
              capitalize text-secondary-darkOpacity bg-white mobile:font-bold mobile:text-Paragraph0"
            >
              wanna know more?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
