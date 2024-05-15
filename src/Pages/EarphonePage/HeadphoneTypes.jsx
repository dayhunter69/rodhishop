import React, { useState } from "react";
import img3 from "../../Components/images/hybrid-enc-tws-headset.jpg";
import img4 from "../../Components/images/bluetooth-headphones.jpg";
import img5 from "../../Components/images/bluetooth-headphones-package.jpg";

export const headphoneData = [
  {
    id: 1,
    Img: img4,
    hoverImg: img5,
    buttonhoverImg: img3,
    title: "acefast h1",
    productName: "Headphone",
    price: "NRS 10999",
  },
];
const HeadphoneTypes = () => {
  const [hoverImage, setHoverImage] = useState();
  const [buttonhoverImage, setButtonHoverImage] = useState();

  const [imageLength, setImageLength] = useState(4);

  const handleLoadMore = () => {
    if (headphoneData.length === imageLength) return;
    setImageLength((prev) => prev + 4);
  };
  return (
    <>
      <div className="w-[1349px] flex flex-wrap justify-center gap-[22px] mt-[10px] mobile:w-[333px]">
        {headphoneData.map((data, index) => {
          if (index + 1 > imageLength) return null;
          return (
            <div
              key={data.id}
              className="max-w-[320px] h-[460px] mt-[50px] flex flex-col items-center justify-between mb-0 mobile:mt-[0px]
                mobile:w-[153px] mobile:h-[246px]"
            >
              <div
                className="w-[318px] h-[305px] relative mobile:w-[151px] mobile:h-[151px]"
                onMouseEnter={() => setHoverImage(index)}
                onMouseLeave={() => setHoverImage()}
              >
                <img
                  src={data.Img}
                  className="w-[317px] h-[300px] mobile:w-[149px] mobile:h-[149px]"
                  alt="image1"
                />
                {hoverImage === index ? (
                  <div className="w-[319px] h-[305px] absolute top-0 left-0 right-0 bottom-0">
                    <img
                      src={data.hoverImg}
                      alt="image2"
                      className="w-[317px] h-[300px] mobile:w-[149px] mobile:h-[149px]"
                    />
                  </div>
                ) : null}
                {buttonhoverImage === index ? (
                  <div className="w-[319px] h-[305px] absolute top-0 left-0 right-0 bottom-0 ">
                    <img
                      src={data.buttonhoverImg}
                      className="w-[317px] h-[300px] mobile:w-[149px] mobile:h-[149px]"
                      alt="image3"
                    />
                  </div>
                ) : null}
              </div>
              <div className="max-w-[320px] max-h-[125px] mt-[15px] mobile:w-[72px] mobile:h-[75px] mobile:mt-[5px]">
                <p
                  className="font-Arial not-italic font-bold text-Paragraph3 text-center uppercase
                     text-primary mobile:text-[10px] mobile:leading-[11px]"
                >
                  {data.title}
                </p>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph2 text-center uppercase pt-[8px] text-primary
                mobile:text-[10px] mobile:leading-[11px]"
                >
                  {data.productName}
                </p>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph2 text-center
                       text-primary pt-[8px] mobile:text-[10px] mobile:leading-[11px]"
                >
                  {data.price}
                </p>
                <div className="w-[48px] mx-auto mt-[8px] mb-[3px] flex items-center justify-around mobile:w-[25px] mobile:h-[12px]">
                  <button className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-black border border-solid border-primary mobile:w-[10px] mobile:h-[10px]"></button>
                  <button
                    className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-white border border-solid border-secondary-darkOpacity mobile:w-[10px] mobile:h-[10px]"
                    onMouseEnter={() => setButtonHoverImage(index)}
                    onMouseLeave={() => setButtonHoverImage()}
                  ></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="w-[241px] mx-auto my-[90px] mobile:w-[141px] mobile:h-[38px]"
        onClick={handleLoadMore}
      >
        <button
          className="w-[241px] h-[50px] border border-solid border-secondary-darkOpacity  
           font-Arial not-italic font-normal text-Paragraph3 capitalize text-primary mobile:w-[141px] mobile:h-[38px]
           mobile:text-Paragraph0"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default HeadphoneTypes;
