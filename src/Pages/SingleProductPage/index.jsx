import React, { useState } from "react";
import ImageGallary from "./ImageGallary";
import ProductPageDetail from "./ProductPageDetail";
import ProductTab from "./ProductTab";
import img1 from "../../Components/images/headset-earbuds-transparent.jpg";
import img2 from "../../Components/images/hybrid-enc-tws-headset.jpg";
import img3 from "../../Components/images/headset-phone-calls.jpg";
import img4 from "../../Components/images/acefast-earbud.png";
import img5 from "../../Components/images/headset-ergonomic.jpg";

export const imgList = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
];

const SingleProductPage = () => {
  const [imgtab, setImgTab] = useState(0);

  const handleClick = (index) => {
    setImgTab(index);
  };

  return (
    <>
      <div className="max-w-[1072px] mt-[53px] mx-auto mb-0 flex justify-between">
        <div className="flex justify-between w-[572.45px] h-[462px]">
          <div className="w-[83px] flex items-center flex-col justify-between">
            {imgList.map((info, index) => {
              return (
                <ImageGallary
                  info={info}
                  handleClick={handleClick}
                  key={index}
                  index={index}
                  imgtab={imgtab}
                />
              );
            })}
          </div>
          <div className="w-[462px] h-[462px] flex items-center justify-center">
            {(() => {
              if (imgtab === 0) {
                return <img src={img1} className="w-[459px] h-[459px]" />;
              } else if (imgtab === 1) {
                return <img src={img2} className="w-[459px] h-[459px]" />;
              } else if (imgtab === 2) {
                return <img src={img3} className="w-[459px] h-[459px]" />;
              } else if (imgtab === 3) {
                return <img src={img4} className="w-[459px] h-[459px]" />;
              } else if (imgtab === 4) {
                return <img src={img5} className="w-[459px] h-[459px]" />;
              } else {
                return <img src={img1} className="w-[459px] h-[459px]" />;
              }
            })()}
          </div>
        </div>
        <ProductPageDetail />
      </div>
      <div className="mt-[55px]">
        <ProductTab />
      </div>
    </>
  );
};

export default SingleProductPage;
