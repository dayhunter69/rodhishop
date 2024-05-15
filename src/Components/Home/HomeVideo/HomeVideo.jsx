import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Navbar/Style/OurBlog.css";
import img1 from "../../images/Tuddrom__A_Hub_For_Best.jpg";
import img2 from "../../images/Tuddrom_Dual_Driver_Earphone.jpg";
import img3 from "../../images/Tuddrom_Earphones_Unboxing.jpg";
import img6 from "../../images/REALME 10 Hands-On Impression.jpg";
import img4 from "../../images/Tech Sathi.png";
import img5 from "../../images/gadgets in nepal.png";
import introVideoA from "../../images/movie.mp4";
import introVideoB from "../../images/movie.mp4";
import introVideoC from "../../images/movie.mp4";
import introVideoD from "../../images/movie.mp4";
import NextArrow from "../Shop-Filter/Cable/Carousel/NextArrow/NextArrow";
import PreviousArrow from "../Shop-Filter/Cable/Carousel/PreviousArrow/PreviousArrow";
import Video from "./Video";

export const ourBlogList = [
  {
    id: 1,
    img: img1,
    title: "“ Tuddrom:A Hub For Best Affordable earphones in Nepal ”",
    bottomImg: img4,
    video: introVideoA,
  },
  {
    id: 2,
    img: img2,
    title:
      "“ Tuddrom  H3 Dual Driver earphone Review in Nepal | 3 Lucky Winners will get gift voucher Don't miss 🔥 ”",
    bottomImg: img4,
    video: introVideoB,
  },
  {
    id: 3,
    img: img6,
    title: "“ Tuddrom earphones Unboxing & Price | Gadgets In Nepal ”",
    bottomImg: img5,
    video: introVideoC,
  },
  {
    id: 4,
    img: img3,
    title: "“ Tuddrom earphones Unboxing & Price | Gadgets In Nepal ”",
    bottomImg: img5,
    video: introVideoD,
  },
];

const HomeVideo = () => {
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
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-[858px] mx-auto my-0 mobile:w-[275px]">
        <p
          className="font-Arial not-italic font-bold text-Heading text-center 
           uppercase pb-[20px] text-primary mobile:text-Subheading1 mobile:pb-0"
        >
          our products are the buzz, praised by many
        </p>
      </div>
      <div className="mb-[95px] mx-auto  mobile:mb-[40px]">
        <div className="w-[93.5%] my-0 mx-auto">
          <Slider {...settings}>
            {ourBlogList.map((item, index) => {
              return <Video key={index} pro={item} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
