import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/phone-charge.jpg';
import img2 from '../../images/earphone.jpg';
import img3 from '../../images/earphone.jpg';
import img4 from '../../images/phone-charge.jpg';
import img5 from '../../images/phone-charge.jpg';
import img6 from '../../images/earphone-last-longer.jpg';
import img7 from '../../images/music-without-affecting-ear.jpg';
import NextArrow from '../Shop-Filter/Cable/Carousel/NextArrow/NextArrow';
import PreviousArrow from '../Shop-Filter/Cable/Carousel/PreviousArrow/PreviousArrow';
import { NavLink } from 'react-router-dom';

export const ourBlogList = [
  {
    id: 1,
    img: img1,
    title: 'How to make your phone charge fast?',
    btnName: 'intrested ?',
  },
  {
    id: 2,
    img: img2,
    title: 'How to make your earphone last longer?',
    btnName: 'intrested ?',
  },
  {
    id: 3,
    img: img3,
    title: 'How to listen music without affecting your ear?',
    btnName: 'Looks Healpful?',
  },
  {
    id: 4,
    img: img4,
    title: 'How to make your phone charge fast?',
    btnName: 'intrested ?',
  },
  {
    id: 5,
    img: img5,
    title: 'How to make your phone charge fast?',
    btnName: 'intrested ?',
  },
  {
    id: 6,
    img: img6,
    title: 'How to make your earphone last longer?',
    btnName: 'intrested ?',
  },
  {
    id: 7,
    img: img7,
    title: 'How to listen music without affecting your ear?',
    btnName: 'Looks Healpful?',
  },
];

const OurBlog = () => {
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
      <div className="max-w-[971px] mx-auto mt-0 mb-[20px] mobile:max-w-[324px]">
        <p
          className="font-Arial not-italic font-bold text-Heading 
            uppercase text-center rodhiRed mobile:text-Subheading1"
        >
          Our Blogs
        </p>
      </div>
      <div
        className="h-[490px] mb-[95px] flex items-center mobile:mb-[30px] mobile:h-[380px]"
        // style={{ border: "1px solid red" }}
      >
        <div className="w-[93.5%] my-0 mx-auto">
          <Slider {...settings}>
            {ourBlogList.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    className="w-[335px] h-[475px] flex flex-col justify-between
                     bg-white mx-auto my-0 mobile:w-[255.5px] mobile:h-[360px] mobile:my-[6px] mobile:shadow-custom1"
                  >
                    <div className="w-[335px] h-[340px] mobile:w-[256px] mobile:h-[268.26px]">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[335px] h-[338px] mobile:w-[256px] mobile:h-[266px]"
                      />
                    </div>
                    <div className="w-[334px] h-[110px] mobile:w-[255px] mobile:my-[5px]">
                      <div className="w-[294px] my-0 mx-auto mobile:w-[225px]">
                        <p
                          className="font-arial not-italic font-normal text-Paragraph3 text-primary 
                            mobile:text-Paragraph0"
                        >
                          {item.title}
                        </p>
                      </div>
                      <div
                        className="max-w-[145px] h-[45px] mt-[10px] mb-0 mx-auto flex items-center justify-center
                          mobile:w-[111px] mobile:h-[32px] mobile:mt-[7px]"
                      >
                        <NavLink
                          to="/blogpage"
                          className="flex items-center justify-center w-[141px] h-[41px] font-Arial not-italic  bg-white mobile:w-[109px] font-normal
                           text-Paragraph3 capitalize text-secondary-darkOpacity shadow-custom1 border border-solid
                            border-secondary-darkOpacity mobile:h-[31px] mobile:text-Paragraph1 mobile:mb-[5px]"
                        >
                          {item.btnName}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurBlog;
