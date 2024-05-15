import React, { useEffect, useState } from "react";
import img1 from "../../images/Fast & Free Delivery.png";
import img2 from "../../images/Secure Payment.png";
import img3 from "../../images/warranty on every product.png";
import img4 from "../../images/geniune product.png";
import img5 from "../../images/Fast & Free Delivery2.png";
import img6 from "../../images/Secure Payment2.png";
import img7 from "../../images/warranty on every product2.png";
import img8 from "../../images/geniune product2.png";
import { isMobile } from "../../../utils";
import "../Seamless-Shopping/Seamless-Shopping.css";

export const seamlessData = [
  {
    id: 1,
    heading: "fast and free delivery",
    img: img1,
    hoverimg: img5,
  },
  {
    id: 2,
    heading: "secure payment",
    img: img2,
    hoverimg: img6,
  },
  {
    id: 3,
    heading: "warranty on every product",
    img: img3,
    hoverimg: img7,
  },
  {
    id: 4,
    heading: "geniune product",
    img: img4,
    hoverimg: img8,
  },
];

const SeamlessShopping = () => {
  const [hoverimg, setHoverimg] = useState();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isMobile()) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        console.log(prev);
        if (prev === 3) return 0;
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-[93%] mx-auto mt-[90px]  mobile:w-[95%] mobile:mt-[55px]">
        <div className="mobile:max-w-[317px] mobile:mx-auto mobile:my-0">
          <p
            className="font-Arial not-italic font-bold text-Heading text-center uppercase
              text-primary mobile:text-Paragraph2"
          >
            seamless shopping through yantram
          </p>
        </div>
        <div className="seamless-half-carousel">
          {seamlessData.map((info, index) => {
            return (
              <div
                key={index}
                className="w-[182px] flex items-center flex-col justify-around 
                    mobile:w-[134px] mobile:h-[160px] mobile:items-start"
              >
                <div
                  className="flex items-center justify-center max-w-[160px] w-[100%] max-h-[150px] h-[100%]
                      mobile:w-[100px] mobile:h-[100px] mobile:mx-auto"
                  onMouseEnter={() => setHoverimg(index)}
                  onMouseLeave={() => setHoverimg(null)}
                >
                  {(!isMobile() && hoverimg === index) ||
                  (isMobile() && index === activeIndex) ? (
                    <img
                      src={info.hoverimg}
                      className="max-w-[150px] max-h-[150px] mobile:w-[100px] mobile:h-[100px]"
                    />
                  ) : (
                    <img
                      src={info.img}
                      className="max-w-[150px] max-h-[150px] mobile:w-[100px] mobile:h-[100px]"
                    />
                  )}
                </div>
                <div className="mobile:w-[116px]">
                  <p
                    className="font-Arial not-italic font-normal text-Subheading1 text-center uppercase
                       text-secondary-darkOpacity mobile:text-Paragraph1"
                  >
                    {info.heading}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SeamlessShopping;
