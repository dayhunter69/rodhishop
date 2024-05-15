import React from "react";
import img1 from "../../images/tuddrom Birds copy.png";
import img2 from "../../images/Acefast.png";
import img3 from "../../images/ESR.png";

export const ourBrandData = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
];

const OurBrand = () => {
  return (
    <>
      <div className="w-[93%] mt-[90px] mb-0 mx-auto mobile:mt-[45px]">
        <div className="mobile:max-w-[322px] mobile:my-0 mobile:mx-auto">
          <p
            className="font-Arial not-italic font-bold text-Heading text-center uppercase
            text-primary mobile:text-Paragraph2"
          >
            Our Brands
          </p>
        </div>
        <div className="max-w-[1068px] flex items-center justify-between mt-[10px] mb-[10px] mx-auto mobile:my-[12px]">
          {ourBrandData.map((data, index) => {
            return (
              <div key={index}>
                <div className="w-[210px] h-[210px] rounded-[50%] mobile:w-[80px] mobile:h-[80px]">
                  <img
                    src={data.img}
                    alt=""
                    className="w-[208px] h-[208px] rounded-[50%] mobile:w-[80px] mobile:h-[80px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurBrand;
