import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../../../../Navbar/Style/Global-Style.css";
import img1 from "../../../../images/bluetooth-headphones.jpg";
import img3 from "../../../../images/bluetooth-headphones-folding.jpg";
import img2 from "../../../../images/bluetooth-headphones-package.jpg";
import NextArrow from "../../Cable/Carousel/NextArrow/NextArrow";
import PreviousArrow from "../../Cable/Carousel/PreviousArrow/PreviousArrow";

export const QiChargerData = [
  {
    id: 1,
    Img: img1,
    hoverImg: img2,
    buttonhoverImg: img3,
    title: "acefast e9",
    productName: "headphone",
    price: "NRS 749",
  },
  //   {
  //     id: 2,
  //     Img: img3,
  //     hoverImg: img2,
  //     buttonhoverImg: img8,
  //     title: "acefast a21",
  //     productName: "Phone holder",
  //     price: "NRS 10999",
  //   },
  //   {
  //     id: 3,
  //     Img: img8,
  //     hoverImg: img2,
  //     buttonhoverImg: img3,
  //     title: "acefast D15",
  //     productName: "Phone holder",
  //     price: "NRS 749",
  //   },
  //   {
  //     id: 4,
  //     Img: img9,
  //     hoverImg: img2,
  //     buttonhoverImg: img3,
  //     title: "acefast D15",
  //     productName: "Phone holder",
  //     price: "NRS 749",
  //   },
  //   {
  //     id: 5,
  //     Img: img10,
  //     hoverImg: img2,
  //     buttonhoverImg: img3,
  //     title: "acefast D15",
  //     productName: "Phone holder",
  //     price: "NRS 749",
  //   },
];
const Headphone = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        breakpoint: 715,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [hoverImage, setHoverImage] = useState();
  const [buttonhoverImage, setButtonHoverImage] = useState();
  return (
    <>
      <div className="w-[93%] my-0 mx-auto">
        <Slider {...settings}>
          {QiChargerData.map((data, index) => {
            return (
              <div key={data.id}>
                <div className="max-w-[320px] h-[460px] flex flex-col items-center justify-between mx-auto my-0 mobile:w-[150px] mobile:h-auto">
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
                    {hoverImage === index ? (
                      <div className="w-[319px] h-[305px] absolute top-0 left-0 right-0 bottom-0">
                        <img
                          src={data.hoverImg}
                          alt="image2"
                          className="mobile:w-[147px] mobile:h-[147px] w-[317px] h-[300px]"
                        />
                      </div>
                    ) : null}
                    {buttonhoverImage === index ? (
                      <div className="w-[319px] h-[305px] absolute top-0 left-0 right-0 bottom-0">
                        <img
                          src={data.buttonhoverImg}
                          className="mobile:w-[147px] mobile:h-[147px] w-[317px] h-[300px]"
                          alt="image3"
                        />
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
                      <button
                        className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-white border border-solid border-primary"
                        onMouseEnter={() => setButtonHoverImage(index)}
                        onMouseLeave={() => setButtonHoverImage()}
                      ></button>
                    </div>
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
export default Headphone;
