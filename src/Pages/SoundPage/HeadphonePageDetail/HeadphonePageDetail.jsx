import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../SoundPage/Common-Page-Style.css";
import imgA from "../../../Components/images/headphone.png";
import imgB from "../../../Components/images/headphone2.png";

export const productname = [
  {
    id: 1,
    product: "headphone",
  },
];
export const category = [
  {
    id: 1,
    select: "Battery life",
    option: [
      {
        id: 1,
        productype: "more than 4 hrs",
      },
      {
        id: 2,
        productype: "more than 7 hrs",
      },
    ],
  },
  {
    id: 2,
    select: "Bluetooth version",
    option: [
      {
        id: 1,
        productype: "more than 5.0v",
      },
      {
        id: 2,
        productype: "less than 5.0v",
      },
    ],
  },
  {
    id: 3,
    select: "noise cancellation",
    option: [
      {
        id: 1,
        productype: "anc",
      },
      {
        id: 2,
        productype: "enc",
      },
      {
        id: 3,
        productype: "none",
      },
    ],
  },
  {
    id: 4,
    select: "price",
    option: [
      {
        id: 1,
        productype: "Less than 2000",
      },
      {
        id: 2,
        productype: "Less than 3000",
      },
      {
        id: 3,
        productype: "Less than 4000",
      },
      {
        id: 4,
        productype: "Less than 5000",
      },
      {
        id: 5,
        productype: "Less than 6000",
      },
    ],
  },
];
const HeadphonePageDetail = ({ tabactive, handleBackClick, show }) => {
  const [select, setSelect] = useState("");
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState();
  const [hid, setHid] = useState(true);
  const [lea, setLea] = useState(true);

  const handleClick = (index) => {
    setClicked(!clicked);
    setActive(index);
  };
  const handleHideClick = () => {
    setHid(!clicked);
    setLea(!lea);
  };
  const handleSelectClick = (info) => {
    setSelect(info.value);
  };

  return (
    <>
      {hid && lea ? (
        <div className="CommonPage-Style-Select-Menu-Option">
          <div className="CommonPage-Style_icon_select">
            <div className="Product-Name-Container">
              {productname.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="Product-Name-Box2"
                      onClick={() => {
                        handleBackClick();
                        handleHideClick();
                      }}
                    >
                      <img src={imgB} alt="" className="Product_Icon_Style" />
                    </div>
                    <div className="Product-Name-Text">
                      <p>{item.product}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="CommonPage-Select-Box">
              {category.map((data, index) => {
                return (
                  <div key={index}>
                    <div
                      className="Custom-Select1"
                      onClick={() => handleClick(index)}
                    >
                      <div className="UpDown-Arrow">
                        {clicked && active == index ? (
                          <i
                            className="fa fa-angle-up"
                            aria-hidden="true"
                            style={{ color: "#ffffff" }}
                          ></i>
                        ) : (
                          <i
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        )}
                      </div>
                      <div
                        className={`${
                          clicked && active === index ? "Select2" : "Select1"
                        }`}
                      >
                        {/* <p>{data.select}</p> */}
                        {/* <p>{select}</p> */}
                        {select ? <p>{select}</p> : <p>{data.select}</p>}
                      </div>
                      {clicked && active === index ? (
                        <div className="Option-List-Container">
                          {data.option.map((info, index) => {
                            return (
                              <div key={index}>
                                <div
                                  className="Option-List"
                                  // onClick={(e) => setSelect(info.value)}
                                  onClick={() => {
                                    handleSelectClick(info);
                                  }}
                                >
                                  <p>{info.productype}</p>
                                </div>
                              </div>
                            );
                          })}
                          <div className="Learn-More-Container">
                            <div className="Learn-More">
                              <p>learn more about driver size</p>
                            </div>
                            <div className="Info-Container">
                              <Icon
                                icon="ph:info-thin"
                                width="19"
                                height="19"
                              />
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HeadphonePageDetail;
