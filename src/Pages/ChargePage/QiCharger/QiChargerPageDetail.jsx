import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../SoundPage/Common-Page-Style.css";
import imgB from "../../../Components/images/qi charger2.png";

export const productname = [
  {
    id: 1,
    product: "qi charger",
  },
];
export const category = [
  {
    id: 1,
    select: "Types",
    option: [
      {
        id: 1,
        productype: "for single device",
        value: "for single device",
      },
      {
        id: 2,
        productype: "for multi device",
        value: "for multi device",
      },
    ],
  },
  {
    id: 2,
    select: "output",
    option: [
      {
        id: 1,
        productype: "5 w",
        value: "5 w",
      },
      {
        id: 2,
        productype: "7 w",
        value: "7 w",
      },
      {
        id: 3,
        productype: "10 w",
        value: "10 w",
      },
      {
        id: 4,
        productype: "15 w",
        value: "15 w",
      },
    ],
  },
  {
    id: 3,
    select: "compatible with",
    option: [
      {
        id: 1,
        productype: "magsafe",
        value: "magsafe",
      },
    ],
  },
];
const QiChargerPageDetail = ({ tabactive, handleBackClick, show }) => {
  const [select, setSelect] = useState("");
  const [clicked, setClicked] = useState(false);
  const [active, setActive] = useState();
  const [leav, setLeav] = useState(true);

  const handleClick = (index) => {
    setClicked(!clicked);
    setActive(index);
  };
  const handleHideClick = () => {
    setLeav(!leav);
  };
  const handleSelectClick = (info) => {
    setSelect(info.value);
  };
  return (
    <>
      {leav ? (
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

export default QiChargerPageDetail;
