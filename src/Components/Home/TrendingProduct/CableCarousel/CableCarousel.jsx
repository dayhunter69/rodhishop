import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../../../Navbar/Style/Global-Style.css";
import img1 from "../../../images/headphones-adapter-cable.jpg";
import img2 from "../../../images/headphones-adapter-cable-flexible.jpg";
import img3 from "../../../images/cable-packages-black.jpg";
import img4 from "../../../images/Cablepic.jpg";
import img5 from "../../../images/headphones-adapter-cable-interior.jpg";
import NextArrow from "../../Shop-Filter/Cable/Carousel/NextArrow/NextArrow";
import PreviousArrow from "../../Shop-Filter/Cable/Carousel/PreviousArrow/PreviousArrow";

export const cableCarouselData = [
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
const CableCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [hoverImage, setHoverImage] = useState();

  return (
    <>
      <div className="w-[93%] my-0 mx-auto">
        <Slider {...settings}>
          {cableCarouselData.map((data, index) => {
            return (
              <div
                key={index}
                className="max-w-[320px]  flex flex-col items-center justify-between mx-auto my-0 mobile:w-[150px] mobile:h-auto"
              >
                <div
                  className="w-[319px] h-[305px] relative mobile:flex mobile:items-center mobile:justify-center mobile:w-[150px] mobile:h-[150px]"
                  onMouseEnter={() => setHoverImage(index)}
                  onMouseLeave={() => setHoverImage()}
                >
                  <img
                    src={data.Img}
                    className="mobile:w-[147px] mobile:h-[147px] w-[317px] h-[300px]"
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
                <div className="max-w-[320px] max-h-[125px] mt-[15px] mobile:mt-[5px] mobile:w-[146px]">
                  <p
                    className="font-Arial not-italic font-bold text-Paragraph3 text-center uppercase
                     text-primary mobile:text-Paragraph1 mobile:font-semibold"
                  >
                    {data.title}
                  </p>
                  <p
                    className="font-Arial not-italic font-normal text-Paragraph2 text-center uppercase pt-[8px] text-primary 
                       mobile:text-Paragraph0 mobile:pt-[2px]"
                  >
                    {data.productName}
                  </p>
                  <p
                    className="font-Arial not-italic font-normal text-Paragraph2 text-center
                       text-primary pt-[8px] mobile:text-Paragraph0 mobile:pt-[2px]"
                  >
                    {data.price}
                  </p>
                  <div className="w-[48px] mx-auto mt-[8px] mb-[3px] flex items-center justify-around">
                    <button className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-black border border-solid border-primary"></button>
                    <button className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-white border border-solid border-primary"></button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default CableCarousel;
