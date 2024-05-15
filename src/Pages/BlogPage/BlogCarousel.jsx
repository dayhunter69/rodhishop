import React from "react";
import img1 from "../../Components/images/blog-coin-view.jpg";

const BlogCarousel = () => {
  return (
    <>
      <p
        className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center pt-[56px] 
         mobile:text-Paragraph3 mobile:pt-[15px]"
      >
        recently uploaded
      </p>
      <div
        className="w-[645px] h-[468px] bg-secondary-white mb-0 mt-[32px] mx-auto shadow-custom1
        mobile:w-[210px] mobile:h-[266px] mobile:mt-[20px]"
      >
        <div className="w-[645px] h-[325px] flex items-center justify-center mobile:w-[210px] mobile:h-[176px]">
          <img
            src={img1}
            alt=""
            className="w-[645px] h-[325px] mobile:w-[210px] mobile:h-[175px]"
          />
        </div>
        <p className="font-Arial not-italic font-normal text-Paragraph3 text-primary pt-[24px] text-center mobile:text-Paragraph0 mobile:pt-[10px]">
          How to make your phone charge fast?
        </p>
        <div className="w-[184px] mx-auto mt-[20px] mobile:mt-[8px] mobile:w-[82px]  mobile:h-[27px]">
          <button
            className="w-[182px] h-[50px] border border-solid
           border-secondary-darkOpacity text-secondary-darkOpacity 
           capitalize not-italic font-Arial font-normal text-Paragraph1 cursor-pointer mobile:w-[81px] mobile:h-[26px]"
          >
            intrested?
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCarousel;
