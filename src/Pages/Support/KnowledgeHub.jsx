import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Components/images/phone-charge.jpg";
import img2 from "../../Components/images/earphone.jpg";
import img3 from "../../Components/images/earphone.jpg";
import img4 from "../../Components/images/phone-charge.jpg";
import img5 from "../../Components/images/phone-charge.jpg";
import img6 from "../../Components/images/earphone-last-longer.jpg";
import img7 from "../../Components/images/music-without-affecting-ear.jpg";
import NextArrow from "../../Components/Home/Shop-Filter/Cable/Carousel/NextArrow/NextArrow";
import PreviousArrow from "../../Components/Home/Shop-Filter/Cable/Carousel/PreviousArrow/PreviousArrow";

export const KnowledgeHubList = [
  {
    id: 1,
    img: img1,
    title: "How to make your phone charge fast?",
    btnName: "intrested ?",
  },
  {
    id: 2,
    img: img2,
    title: "How to make your earphone last longer?",
    btnName: "intrested ?",
  },
  {
    id: 3,
    img: img3,
    title: "How to listen music without affecting your ear?",
    btnName: "Looks Healpful?",
  },
  {
    id: 4,
    img: img4,
    title: "How to make your phone charge fast?",
    btnName: "intrested ?",
  },
  {
    id: 5,
    img: img5,
    title: "How to make your phone charge fast?",
    btnName: "intrested ?",
  },
  {
    id: 6,
    img: img6,
    title: "How to make your earphone last longer?",
    btnName: "intrested ?",
  },
  {
    id: 7,
    img: img7,
    title: "How to listen music without affecting your ear?",
    btnName: "Looks Healpful?",
  },
];

const KnowledgeHub = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="h-[490px] mb-[95px] flex items-center justify-center mobile:h-[236px] mobile:w-[200px]">
        <div className="w-[93%] my-0 mx-auto">
          <Slider {...settings}>
            {KnowledgeHubList.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="w-[275px] h-[400px] flex flex-col justify-between bg-white my-0 mobile:h-[233px] mobile:w-[149px]"
                  >
                    <div className="w-[275px] h-[287px] mobile:w-[148px] mobile:h-[155px]">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[275px] h-[285px] mobile:w-[147px] mobile:h-[154px]"
                      />
                    </div>
                    <div className="w-[275px] mobile:w-[148px] mobile:h-[77px]">
                      <div className="w-[275px] my-0 mobile:w-[148px] mobile:mt-[4px]">
                        <p className="font-arial not-italic font-normal text-Paragraph3 text-primary mobile:text-[11px] mobile:leading-[15px]">
                          {item.title}
                        </p>
                      </div>
                      <div className="max-w-[145px] h-[45px] mt-[10px] mb-0 mx-auto flex items-center justify-center mobile:w-[105px] mobile:h-[31px]">
                        <button
                          type="button"
                          className="w-[141px] h-[41px] font-Arial not-italic bg-white  font-normal
                           text-Paragraph3 capitalize text-secondary-darkOpacity shadow-custom1 border border-solid
                            border-secondary-darkOpacity mobile:w-[104px] mobile:h-[30px] mobile:text-[10px]"
                        >
                          {item.btnName}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default KnowledgeHub;
