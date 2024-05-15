import React from "react";
import img1 from "../../Components/images/bluetooth-headphones.jpg";
import img2 from "../../Components/images/headset-ergonomic.jpg";
import img3 from "../../Components/images/headset-ergonomic.jpg";
import img4 from "../../Components/images/bluetooth-headphones.jpg";

export const productList = [
  {
    id: 1,
    productName: "Acefast h1",
    img: img1,
  },
  {
    id: 2,
    productName: "Acefast t2",
    img: img2,
  },
  {
    id: 3,
    productName: "Acefast t3",
    img: img3,
  },
  {
    id: 4,
    productName: "Acefast t4",
    img: img4,
  },
];
const ProductCardData = ({ handleClick }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between mobile:justify-around">
        {productList.map((info, index) => {
          return (
            <div
              className="w-[300px] h-[300px] bg-white cursor-pointer mt-[20px] shadow-custom1 mobile:w-[138.25px] mobile:h-[138.25px]"
              key={index}
              onClick={() => handleClick("requestproductform")}
            >
              <div className="w-[252px] flex items-center justify-between mx-auto mb-0 mt-[15px] mobile:w-[110px] mobile:mt-[6px]">
                <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity mobile:text-Paragraph0">
                  {info.productName}
                </p>
              </div>
              <div className="w-[158px] h-[158px] mx-auto mb-0 mt-[26px] flex items-center justify-center mobile:w-[75px] mobile:h-[76px] mobile:mt-[16px]">
                <img
                  src={info.img}
                  alt=""
                  className="w-[155px] h-[155px] mobile:w-[72px] mobile:h-[72px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCardData;
