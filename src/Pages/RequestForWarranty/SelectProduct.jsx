import React from "react";
import img1 from "../../Components/images/bluetooth-headphones.jpg";
import img2 from "../../Components/images/headset-ergonomic.jpg";
import img3 from "../../Components/images/headset-ergonomic.jpg";
import img4 from "../../Components/images/bluetooth-headphones.jpg";
import RequestProductDetails from "./RequestProductDetails";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
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
const SelectProduct = ({ handleClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex max-w-[1380px] mx-auto mb-0 mobile:w-[333px]">
        <div
          className=" flex items-center justify-between w-[60px] h-[40px] mobile:w-[21px] mobile:h-[21px]"
          onClick={() => navigate(-1)}
        >
          <div className="border border-solid border-primary flex items-center justify-center cursor-pointer">
            <Icon
              icon="ion:caret-back"
              width="24"
              height="24"
              className="mobile:w-[16px] mobile:h-[16px]"
            />
          </div>
          <p className="font-Arial not-italic text-secondary-darkOpacity text-Paragraph0 capitalize cursor-pointer mobile:hidden">
            back
          </p>
        </div>
        <div className="w-[1260px] mx-auto mb-0">
          <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center mobile:text-Paragraph3">
            request for warranty
          </p>
          <p className="font-Arial not-italic font-bold text-Paragraph3 text-center capitalize text-primary pt-[60px] mobile:pt-[20px] mobile:text-Paragraph0">
            select product
          </p>
          <div className="flex flex-wrap items-center justify-between mobile:justify-around">
            {productList.map((info, index) => {
              return (
                <div
                  className="w-[300px] h-[300px] bg-white cursor-pointer mt-[20px] shadow-custom1 mobile:w-[138px] mobile:h-[138px]"
                  key={index}
                  onClick={() => handleClick("requestProductDetails")}
                >
                  <div className="w-[252px] flex items-center justify-between mx-auto mb-0 mt-[15px] mobile:w-[115px] mobile:mt-[8px]">
                    <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity mobile:text-Paragraph0">
                      {info.productName}
                    </p>
                  </div>
                  <div className="w-[158px] h-[158px] mx-auto mb-0 mt-[26px] flex items-center justify-center mobile:w-[75px] mobile:h-[75px] mobile:mt-[15px]">
                    <img
                      src={info.img}
                      alt=""
                      className="w-[155px] h-[155px] mobile:w-[72.81px] mobile:h-[72.81px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectProduct;
