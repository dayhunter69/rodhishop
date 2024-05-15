import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../SoundPage/Common-Page-Style.css";
import imgA from "../../../Components/images/earphone.png";
import imgB from "../../../Components/images/speaker2.png";
import imgC from "../../../Components/images/product-coming-soon.png";

export const productname = [
  {
    id: 1,
    product: "Speaker",
  },
];
export const category = [
  {
    id: 1,
    select: "Driver Type",
    option: [
      {
        id: 1,
        productype: "Single Driver",
        value: "Single Driver",
      },
      {
        id: 2,
        productype: "Dual Driver",
        value: "Dual Driver",
      },
      {
        id: 3,
        productype: "Hybrid",
        value: "Hybrid",
      },
    ],
  },
  {
    id: 2,
    select: "Jack Type",
    option: [
      {
        id: 1,
        productype: "3.5 mm",
        value: "3.5 mm",
      },
      {
        id: 2,
        productype: "Type c",
        value: "Type c",
      },
      {
        id: 3,
        productype: "Lightning",
        value: "Lightning",
      },
    ],
  },
  {
    id: 3,
    select: "Driver Size",
    option: [
      {
        id: 1,
        productype: "6 mm",
        value: "6 mm",
      },
      {
        id: 2,
        productype: "10 mm",
        value: "10 mm",
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
        value: "Less than 2000",
      },
      {
        id: 2,
        productype: "Less than 3000",
        value: "Less than 3000",
      },
      {
        id: 3,
        productype: "Less than 4000",
        value: "Less than 4000",
      },
      {
        id: 4,
        productype: "Less than 5000",
        value: "Less than 5000",
      },
    ],
  },
  {
    id: 5,
    select: "brand",
    option: [
      {
        id: 1,
        productype: "Tuddrom",
        value: "Tuddrom",
      },
      {
        id: 2,
        productype: "Acefast",
        value: "Acefast",
      },
    ],
  },
];
const SpeakerPage = ({ tabactive, handleBackClick, show }) => {
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
          {/* speaker icon part */}
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

                      {/* selection part */}
                      <div className="select">
                        <div
                          className={`${
                            clicked && active === index ? "Select2" : "Select1"
                          }`}
                        >
                          {/* <p>{data.select}</p> */}
                          {/* <p>{select}</p> */}
                          {select ? <p>{select}</p> : <p>{data.select}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Coming-soon-container">
            <div className="Coming-soon-img">
              <img src={imgC} alt="" width="217" height="219" />
            </div>
            <div className="Coming-soon-text">
              <div className="Product-Coming-soon-heading">
                <p>product coming soon.</p>
              </div>
              <div className="Product-Coming-soon-paragraph">
                <p>
                  Stay tuned for more information in the coming weeks. We will
                  be sure to keep you updated every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SpeakerPage;
