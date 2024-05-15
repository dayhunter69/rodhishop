import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../SoundPage/Common-Page-Style.css";
import imgA from "../../../Components/images/earphone.png";
import imgB from "../../../Components/images/charger2.png";

export const productname = [
  {
    id: 1,
    product: "wall charger",
  },
];
export const category = [
  {
    id: 1,
    select: "Types",
    option: [
      {
        id: 1,
        productype: "Single port",
        value: "Single port",
      },
      {
        id: 2,
        productype: "multi port",
        value: "multi port",
      },
    ],
  },
  {
    id: 2,
    select: "port",
    option: [
      {
        id: 1,
        productype: "micro",
        value: "micro",
      },
      {
        id: 2,
        productype: "Type c",
        value: "Type c",
      },
    ],
  },
  {
    id: 3,
    select: "plug type",
    option: [
      {
        id: 1,
        productype: "uk plug",
        value: "uk plug",
      },
      {
        id: 2,
        productype: "us plug",
        value: "us plug",
      },
      {
        id: 3,
        productype: "eu plug",
        value: "eu plug",
      },
    ],
  },
  {
    id: 4,
    select: "fast charging",
    option: [
      {
        id: 1,
        productype: "24 w",
        value: "24 w",
      },
      {
        id: 2,
        productype: "30 w",
        value: "30 w",
      },
      {
        id: 3,
        productype: "45 w",
        value: "45 w",
      },
      {
        id: 4,
        productype: "65 w",
        value: "65 w",
      },
      {
        id: 4,
        productype: "100 w",
        value: "100 w",
      },
    ],
  },
  {
    id: 5,
    select: "technology",
    option: [
      {
        id: 1,
        productype: "gan",
        value: "gan",
      },
    ],
  },
];
const WallChargerPageDetail = ({ tabactive, handleBackClick, show }) => {
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

export default WallChargerPageDetail;
