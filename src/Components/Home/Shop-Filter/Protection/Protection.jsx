import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../Cable/Carousel/NextArrow/NextArrow";
import Button from "./Button/Button";
import { protectionData } from "./ProtectionData";
import PreviousArrow from "../Cable/Carousel/PreviousArrow/PreviousArrow";

const Protection = ({ protectionState }) => {
  const filteredData = protectionData.filter((p) => {
    if (!protectionState.mobileDeviceType && !protectionState.category)
      return true;

    if (!protectionState.category)
      return p.deviceType === protectionState.mobileDeviceType;

    return (
      p.deviceType === protectionState.mobileDeviceType &&
      p.category === protectionState.category
    );
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: filteredData.length < 3 ? filteredData.length : 4,
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

  return (
    <>
      <div className="Protection">
        <Slider {...settings}>
          {filteredData.map((pro, index) => {
            return (
              <div key={index}>
                <Button item={pro} index={index} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Protection;
