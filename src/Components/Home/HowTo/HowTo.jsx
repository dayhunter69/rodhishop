import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Navbar/Style/OurBlog.css';
import img1 from './assets/img1.png';
import introVideoA from './assets/Howto.mp4';
import introVideoB from './assets/Howto.mp4';
import introVideoC from './assets/Howto.mp4';
import introVideoD from './assets/Howto.mp4';
import NextArrow from '../Shop-Filter/Cable/Carousel/NextArrow/NextArrow';
import PreviousArrow from '../Shop-Filter/Cable/Carousel/PreviousArrow/PreviousArrow';
import VideoPlayer from './VideoPlayer';

export const VideoList = [
  {
    id: 1,
    img: img1,
    title: '“ Puluz 40cm Foldable and Portable Studio Box with Ring Light ”',
    video: introVideoA,
  },
  {
    id: 2,
    img: img1,
    title: '“ Puluz 40cm Foldable and Portable Studio Box with Ring Light ”',
    video: introVideoB,
  },
  {
    id: 3,
    img: img1,
    title: '“ Puluz 40cm Foldable and Portable Studio Box with Ring Light”',
    video: introVideoC,
  },
  {
    id: 4,
    img: img1,
    title: '“ Puluz 40cm Foldable and Portable Studio Box with Ring Light ”',
    video: introVideoD,
  },
];

const HowTo = () => {
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
      <div className="max-w-[858px] mx-auto my-0 mobile:w-[275px] mt-12">
        <p
          className="font-Arial not-italic font-bold text-Heading text-center 
           uppercase pb-[20px] text-primary mobile:text-Subheading1 mobile:pb-0"
        >
          How To?
        </p>
      </div>
      <div className="mb-[95px] mx-auto  mobile:mb-[40px]">
        <div className="w-[93.5%] my-0 mx-auto">
          <Slider {...settings}>
            {VideoList.map((item, index) => {
              return <VideoPlayer key={index} pro={item} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HowTo;
