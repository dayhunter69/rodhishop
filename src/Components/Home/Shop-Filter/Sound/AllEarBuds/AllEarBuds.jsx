import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../../../../images/headset-earbuds-transparent.jpg';
// import img2 from '../../../../images/headset-package.jpg';
// import img3 from '../../../../images/hybrid-enc-tws-headset.jpg';
// import img4 from '../../../../images/bluetooth-headphones.jpg';
// import img5 from '../../../../images/bluetooth-headphones-package.jpg';
// import img6 from '../../../../images/headset-ergonomic.jpg';
// import img7 from '../../../../images/tws-headset-package.jpg';
// import img8 from '../../../../images/crystal-color-tws-earbuds.jpg';
// import img9 from '../../../../images/crystal-color-tws-earbuds-packaging.jpg';
// import img10 from '../../../../images/crystal-color-tws-earbuds-case.jpg';
import NextArrow from '../../Cable/Carousel/NextArrow/NextArrow';
import PreviousArrow from '../../Cable/Carousel/PreviousArrow/PreviousArrow';
import { useNavigate } from 'react-router-dom';
// import ScrollToTop from "../../../ScrollToTop/ScrollToTop";
// LightBox
import img1 from '../../../../../StudioBoxImage/LightBox/img1.webp';
import img2 from '../../../../../StudioBoxImage/LightBox/img2.webp';
import img3 from '../../../../../StudioBoxImage/LightBox/img3.webp';
// Studio Box
import img4 from '../../../../../StudioBoxImage/StudioBox/img1.webp';
import img5 from '../../../../../StudioBoxImage/StudioBox/img2.webp';
import img6 from '../../../../../StudioBoxImage/StudioBox/img3.webp';
import img7 from '../../../../../StudioBoxImage/Backdrop/img1.jpg';
// export const earBudsData = [
//   {
//     id: 1,
//     Img: img1,
//     hoverImg: img2,
//     buttonhoverImg: img3,
//     title: 'acefast t2',
//     productName: 'earphone',
//     price: 'NRS 749',
//   },
//   {
//     id: 2,
//     Img: img4,
//     hoverImg: img5,
//     buttonhoverImg: img3,
//     title: 'acefast h1',
//     productName: 'Headphone',
//     price: 'NRS 749',
//   },
//   {
//     id: 3,
//     Img: img6,
//     hoverImg: img7,
//     buttonhoverImg: img3,
//     title: 'acefast t1',
//     productName: 'earbud',
//     price: 'NRS 749',
//   },
//   {
//     id: 4,
//     Img: img8,
//     hoverImg: img9,
//     buttonhoverImg: img10,
//     title: 'acefast t8',
//     productName: 'headphone',
//     price: 'NRS 749',
//   },
//   {
//     id: 5,
//     Img: img1,
//     hoverImg: img2,
//     buttonhoverImg: img3,
//     title: 'acefast t2',
//     productName: 'headphone',
//     price: 'NRS 749',
//   },
// ];

export const earBudsData = [
  {
    id: 1,
    Img: img1,
    hoverImg: img2,
    buttonhoverImg: img3,
    title: 'All ok Puluz 40cm Foldable',
    productName: 'Studio Box with Ring Light',
    price: 'NRS 4999',
  },
  {
    id: 2,
    Img: img4,
    hoverImg: img5,
    buttonhoverImg: img6,
    title: 'Puluz 40cm 480 LED 600D',
    productName: 'Foldable and Portable Studio Box',
    price: 'NRS 7999',
  },
  {
    id: 3,
    Img: img7,
    hoverImg: img7,
    buttonhoverImg: img7,
    title: 'Portable 6feet height Backdrop stand',
    productName: 'With Backdrop Clothes',
    price: 'NRS 1999',
  },
];
const AllEarBuds = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/productpage');
  };
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [hoverImage, setHoverImage] = useState();
  const [buttonhoverImage] = useState();
  return (
    <>
      <div className="w-[93%] mx-auto mt-0  mobile:w-[100%] mobile:mt-[12px]">
        <Slider {...settings}>
          {earBudsData.map((data, index) => {
            return (
              <div key={data.id}>
                <div className="max-w-[320px] h-[460px] flex flex-col items-center justify-between mx-auto my-0 mobile:w-[150px] mobile:h-auto">
                  <div
                    className="w-[319px] h-[305px] relative mobile:flex mobile:items-center mobile:justify-center mobile:w-[150px] mobile:h-[150px] cursor-pointer"
                    onMouseEnter={() => setHoverImage(index)}
                    onMouseLeave={() => setHoverImage()}
                    onClick={handleClick}
                  >
                    <img
                      src={data.Img}
                      className="mobile:w-[147px] mobile:h-[147px] w-[317px] h-[250px] rounded-md"
                      alt="image1"
                    />
                    {hoverImage === index ? (
                      <div className="w-[319px] h-[305px] absolute top-0 left-0 right-0 bottom-0 ">
                        <img
                          src={data.hoverImg}
                          alt="image2"
                          className="mobile:w-[147px] mobile:h-[147px] w-[317px] h-[250px] rounded-md"
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
                  <div className="max-w-[320px] min-h-[125px] mt-[15px] mobile:mt-[5px] mobile:w-[146px]">
                    <p
                      className="font-Arial not-italic font-normal text-red-500 text-Paragraph2 text-center
                        pt-[8px] mobile:text-Paragraph0 mobile:pt-[2px]"
                    >
                      {data.price}
                    </p>
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

                    {/* <div className="w-[48px] mx-auto mt-[8px] mb-[3px] flex items-center justify-around">
                      <button className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-black border border-solid border-primary"></button>
                      <button
                        className="w-[15px] h-[15px] rounded-[50%] cursor-pointer bg-white border border-solid border-primary"
                        onMouseEnter={() => setButtonHoverImage(index)}
                        onMouseLeave={() => setButtonHoverImage()}
                      ></button>
                    </div> */}
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

export default AllEarBuds;
