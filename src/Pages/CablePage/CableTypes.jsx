import React, { useState } from "react";
import img1 from "../../Components/images/headphones-adapter-cable.jpg";
import img2 from "../../Components/images/headphones-adapter-cable-flexible.jpg";
import img3 from "../../Components/images/cable-packages-black.jpg";
import img4 from "../../Components/images/Cablepic.jpg";
import img5 from "../../Components/images/headphones-adapter-cable-interior.jpg";

export const cableData = [
  {
    id: 1,
    Img: img1,
    title: "acefast c1-05",
    productName: "audio cable",
    price: "NRS 749",
    btnSize: "select size",
    cableName: "lighting",
    cableType: "3.5mm",
  },
  {
    id: 2,
    Img: img2,
    title: "acefast c1-07",
    productName: "audio cable",
    price: "NRS 10999",
    btnSize: "select size",
    cableName: "type c",
    cableType: "3.5mm",
  },
  {
    id: 3,
    Img: img3,
    title: "ACEFAST c2-04",
    productName: "audio cable",
    price: "NRS 4599",
    btnSize: "select size",
    cableName: "usb-a",
    cableType: "usb-c",
  },
  {
    id: 4,
    Img: img4,
    title: "ACEFAST c3-01",
    productName: "cable",
    price: "NRS 699",
    btnSize: "select size",
    cableName: "usb-c",
    cableType: "lighting",
  },
  {
    id: 5,
    Img: img5,
    title: "acefast c1-07",
    productName: "audio cable",
    price: "NRS 10999",
    btnSize: "select size",
    cableName: "type c",
    cableType: "3.5mm",
  },
];
const CableTypes = () => {
  const [hoverImage, setHoverImage] = useState();
  const [imageLength, setImageLength] = useState(4);

  const handleLoadMore = () => {
    if (cableData.length === imageLength) return;
    setImageLength((prev) => prev + 4);
  };
  return (
    <>
      <div className="w-[1349px] flex flex-wrap gap-[22px] mt-[10px]">
        {cableData.map((data, index) => {
          if (index + 1 > imageLength) return null;
          return (
            <div key={data.id}>
              <div className="max-w-[320px] h-[460px] mt-[40px] flex flex-col items-center justify-between my-0">
                <div
                  className="w-[318px] h-[305px] relative"
                  onMouseEnter={() => setHoverImage(index)}
                  onMouseLeave={() => setHoverImage()}
                >
                  <img
                    src={data.Img}
                    className="w-[317px] h-[300px]"
                    alt="image1"
                  />
                  {hoverImage == index ? (
                    <div className="w-[319px] h-[305px] absolute top-0 left-0 right-0 bottom-0">
                      <div className="w-[319px] h-[300px] bg-secondary-lightOpacity flex flex-col items-center justify-center">
                        <div className="w-[256px] flex items-center justify-between">
                          <div className="w-[104px] h-[35px] flex items-center justify-center font-Arial font-bold not-italic text-Paragraph2 uppercase text-white">
                            {data.btnSize}
                          </div>
                        </div>
                        <div className="w-[256px] mt-[10px] flex items-center justify-between">
                          <div
                            className="w-[120px] h-[35px] flex items-center justify-center border border-solid border-white font-Arial font-normal text-Paragraph2 uppercase
                               text-white cursor-pointer hover:bg-black hover:border-primary"
                          >
                            {data.cableName}
                          </div>
                          <div
                            className="w-[120px] h-[35px] flex items-center justify-center border border-solid border-white font-Arial font-normal text-Paragraph2 uppercase
                               text-white cursor-pointer hover:bg-black hover:border-primary"
                          >
                            {data.cableType}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="max-w-[320px] max-h-[125px] mt-[15px]">
                  <p
                    className="font-Arial not-italic font-bold text-Paragraph3 text-center uppercase
                     text-primary"
                  >
                    {data.title}
                  </p>
                  <p className="font-Arial not-italic font-normal text-Paragraph2 text-center uppercase pt-[8px] text-primary">
                    {data.productName}
                  </p>
                  <p
                    className="font-Arial not-italic font-normal text-Paragraph2 text-center
                       text-primary pt-[8px]"
                  >
                    {data.price}
                  </p>
                  <div className="w-[48px] mx-auto mt-[8px] mb-[3px] flex items-center justify-around">
                    <button className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-black border border-solid border-primary"></button>
                    <button className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-white border border-solid border-primary"></button>
                  </div>
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

export default CableTypes;
