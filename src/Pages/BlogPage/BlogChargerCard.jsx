import React from "react";
import img1 from "../../Components/images/blog-charger-img1.jpg";
import img2 from "../../Components/images/blog-charger-img2.jpg";

export const chargerCardList = [
  {
    img: img1,
    heading: "How to make your phone charge fast?",
  },
  {
    img: img2,
    heading: "How to make your phone charge fast?",
  },
];

const BlogChargerCard = () => {
  return (
    <>
      <p
        className="font-Arial not-italic font-bold text-Heading text-primary 
           text-center capitalize pt-[56px] mobile:text-Paragraph3 mobile:pt-[30px]"
      >
        charger
      </p>
      <div className="flex items-center justify-between flex-wrap w-[969px] h-[393px] mx-auto mt-[40px] mobile:w-[332px] mobile:h-[178px] mobile:mt-[15px]">
        {chargerCardList.map((info, index) => {
          return (
            <div
              className="w-[450px] h-[392px] bg-secondary-white mobile:h-[175px] mobile:w-[152px]"
              key={index}
            >
              <div className="flex items-center justify-center h-[301px] mobile:w-[152px] mobile:h-[122px]">
                <img
                  src={info.img}
                  alt=""
                  className="w-[449px] h-[299px] mobile:w-[152px] mobile:h-[122px]"
                />
              </div>
              <div
                className="flex items-center justify-center h-[88px] font-Arial not-italic 
                font-normal text-Paragraph3 text-primary  mobile:h-[45px] mobile:text-Paragraph0 mobile:mt-[4px]"
              >
                <p>{info.heading}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogChargerCard;
