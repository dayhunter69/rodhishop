import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import banner1 from '../../../banners/banner1.png';
import banner2 from '../../../banners/banner2.png';
import banner3 from '../../../banners/banner3.png';
import banner4 from '../../../banners/banner4.png';
import banner5 from '../../../banners/banner5.png';
import banner6 from '../../../banners/banner6.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

const banners = [
  { image: banner1, link: '' },
  { image: banner2, link: '' },
  { image: banner3, link: '' },
  { image: banner4, link: '' },
  { image: banner5, link: '' },
  { image: banner6, link: '' },
];

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-prev ">
    <FaArrowLeft className="icon" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-next ">
    <FaArrowRight className="icon" />
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    customPaging: (i) => (
      <div
        className="w-[1.5rem] h-[1.5rem] rounded-full"
        style={{
          backgroundColor: 'red',
          opacity: '1',
        }}
      ></div>
    ),
  };

  return (
    <div className="relative h-[85vh] mobile:h-[29vh] w-full overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="h-full">
            <a href={banner.link} target="_blank" rel="noopener noreferrer">
              <img
                src={banner.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover cursor-default"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
