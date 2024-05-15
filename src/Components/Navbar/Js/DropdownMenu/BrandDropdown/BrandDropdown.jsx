import React from "react";
import img1 from "../../../../images/brand-about-us.png";
import img2 from "../../../../images/brand-employees.png";
import img3 from "../../../../images/tuddrom Birds copy.png";
import img4 from "../../../../images/Acefast.png";
import img5 from "../../../../images/ESR.png";

const BrandDropdown = ({ setMenuHover }) => {
  return (
    <>
      <div
        className="w-[785px] h-[340px] bg-white rounded-[3px] flex 
        items-center justify-center"
        onMouseLeave={() => {
          setMenuHover();
        }}
      >
        <div className="w-[733px] h-[300px] flex flex-col justify-between">
          <div className="w-[398px] h-[127px] my-0 mx-auto flex justify-between">
            <div className="w-[145px] h-[126px] flex items-center flex-col justify-between">
              <div
                className="flex items-center justify-center w-[99px] h-[99px] rounded-[50%] 
                  cursor-pointer bg-secondary-whitesmoke"
              >
                <img src={img1} alt="" width="90" height="90" />
              </div>
              <div className="w-[99px] flex items-center justify-center">
                <p className="font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary">
                  about us
                </p>
              </div>
            </div>
            <div className="w-[145px] h-[126px] flex items-center justify-between flex-col">
              <div
                className="flex items-center justify-center w-[99px] h-[99px] rounded-[50%] 
                  cursor-pointer bg-secondary-whitesmoke"
              >
                <img src={img2} alt="" width="75" height="75" />
              </div>
              <div className="w-[99px] flex items-center justify-center">
                <p className="font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary">
                  us
                </p>
              </div>
            </div>
          </div>
          <p
            className="font-Arial not-italic font-bold text-Paragraph2 
            uppercase text-primary text-center"
          >
            Our Brands
          </p>
          <div className="flex w-[500px] h-[100px]  mx-auto my-0">
            <div className="w-[166px]  flex items-center justify-center">
              <img src={img3} alt="" width="115" height="115" />
            </div>
            <div className="w-[166px] flex items-center justify-center">
              <img src={img4} alt="" width="115" height="115" />
            </div>
            <div className="w-[166px] flex items-center justify-center">
              <img src={img5} alt="" width="115" height="115" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrandDropdown;
