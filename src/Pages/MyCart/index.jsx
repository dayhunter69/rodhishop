import React, { useState } from "react";
import MyCart from "./MyCart";
import CheckOutCard from "./CheckOutCard";
import img1 from "../../Components/images/acefast-earbud.png";
import img2 from "../../Components/images/crystal-color-tws-earbuds-case.jpg";
import img3 from "../../Components/images/recommend-img.png";
import img4 from "../../Components/images/recommend-img2.png";
import RecommendProduct from "./RecommendProduct";
import { Icon } from "@iconify/react";

export const mycartList = [
  {
    img: img1,
    productName: "acefast t2",
    productType: "earbud",
    icon: "ic:baseline-delete-outline",
    price: "749",
  },
  {
    img: img2,
    productName: "acefast t8 ",
    productType: "earbud",
    icon: "ic:baseline-delete-outline",
    price: "1200",
  },
];
export const recommendProductList = [
  {
    img: img3,
    productName: "acefast t1 ",
    productType: "earbud",
    price: "749",
    btn: "add to cart",
  },
  {
    img: img4,
    productName: "acefast t8",
    productType: "earbud",
    price: "749",
    btn: "add to cart",
  },
];
export const ordersummaryList = [
  {
    total: "749",
  },
  {
    discount: "300",
  },
  {
    gift: "0",
  },
  {
    Grandtotal: "749",
  },
];
const MyCartContainer = () => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const handleClickMe = () => {
    setShows(!shows);
  };
  const handleClicked = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className="w-[1308px] mt-[45px] mb-[8px] mx-auto mobile:w-[333px] mobile:mt-[13px] mobile:mb-[2px]">
        <p className="font-Arial not-italic font-bold text-Heading uppercase text-primary mobile:text-Paragraph3">
          My cart
        </p>
      </div>
      <div className="flex w-[1308px] mx-auto justify-between mobile:w-[336px] mobile:flex-col">
        <div className="flex flex-col">
          <button
            className="h-[25px] ml-auto font-Arial not-italic font-normal text-Paragraph3 capitalize
           text-secondary-darkOpacity border-none mobile:text-Paragraph0 mobile:h-[17px] mb-[6px]"
          >
            continue shopping
          </button>
          <div className="Left">
            {mycartList.map((info, index) => {
              return <MyCart key={index} info={info} />;
            })}
          </div>
        </div>
        <div className="Right mobile:hidden">
          <CheckOutCard />
        </div>
        <div className="hidden mobile:block">
          <div className="flex items-center w-[333px] h-[51px] bg-white shadow-custom1 gap-[12px] mt-[12px]">
            <input
              type="checkbox"
              className="Promo-Checkbox ml-[12px]"
              onClick={handleClick}
            />
            <p className="font-Arial font-normal not-italic text-Paragraph0 text-primary uppercase">
              let’s make this gift
            </p>
          </div>
          {show && (
            <div className="flex items-center justify-center w-[333px] mt-[1px]">
              <textarea
                placeholder="add your message here"
                className="w-[328px] h-[89px] border border-solid border-secondary-lightGrey outline-0
                font-Arial not-italic font-normal text-[10px] leading-[11px] capitalize text-secondary-lightGrey pl-[10px] pt-[10px] resize-none"
              ></textarea>
            </div>
          )}
          <div className="flex items-center w-[333px] h-[51px] bg-white shadow-custom1 gap-[12px] mt-[12px]">
            <input
              type="checkbox"
              className="Promo-Checkbox ml-[12px]"
              onClick={handleClickMe}
            />
            <p className="font-Arial font-normal not-italic text-Paragraph0 text-primary uppercase">
              apply a promo code
            </p>
          </div>
          {shows && (
            <div className="w-[333px] flex items-center justify-center  mt-[1px] gap-[14px]">
              <input
                type="text"
                className="w-[270px] h-[40px] border border-solid border-secondary-lightGrey"
              />
              <button className="w-[40px] h-[40px] font-Arial font-normal not-italic uppercase text-Paragraph0">
                apply
              </button>
            </div>
          )}
          <div className="flex items-center justify-around w-[333px] h-[51px] bg-white shadow-custom1 mt-[12px]">
            <div className="flex items-center justify-center w-[20px] h-[20px]">
              <Icon icon="bi:cart-check" width="18" height="18" />
            </div>
            <p className="font-Arial font-normal not-italic text-Paragraph0 text-primary uppercase">
              order summary
            </p>
            <p className="font-Arial font-bold not-italic text-Paragraph2 uppercase text-primary">
              rs 749
            </p>
            <div
              onClick={handleClicked}
              className="w-[20px] h-[20px] flex items-center justify-center"
            >
              <i
                className={clicked ? "fa fa-angle-up" : "fa fa-angle-down"}
              ></i>
            </div>
          </div>
          {clicked && (
            <div className="w-[333px] h-[232px] flex flex-col items-center justify-center mt-[1px] bg-white ">
              <div
                className="flex justify-between mt-[15px] w-[190px] h-[117px]"
                style={{ border: "1px solid red" }}
              >
                {/* <div className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                  <p>total</p>
                </div>
                <div className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity">
                  <p>rs 749</p>
                </div> */}
                <table>
                  {ordersummaryList.map((info, index) => {
                    return (
                      <tr>
                        <th>Name:</th>
                        <td>Bill Gates</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              <div className="w-[195px] h-[40px] mx-auto mt-[25px]">
                <button
                  className="w-[195px] h-[40px] bg-white border border-solid border-secondary-darkOpacity 
                   uppercase text-secondary-darkOpacity font-Arial not-italic font-normal text-Paragraph0 "
                >
                  checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-[1308px] mx-auto mt-[42px] mb-[200px] mobile:w-[336px]">
        <div className="w-[748px] mb-[32px] mobile:w-[262.57px] mobile:mx-auto mobile:mb-[12px]">
          <p
            className="font-Arial not-italic font-normal text-Paragraph3 
             uppercase text-primary mobile:text-Paragraph0"
          >
            our algorithm thinks you’ll like this
          </p>
        </div>
        {recommendProductList.map((list, index) => {
          return <RecommendProduct key={index} list={list} />;
        })}
        <div className="w-[748px] ">
          <button className="font-Arial not-italic font-normal text-Paragraph3 text-secondary-darkOpacity mobile:text-Paragraph0">
            view more like this
          </button>
        </div>
      </div>
    </>
  );
};

export default MyCartContainer;
