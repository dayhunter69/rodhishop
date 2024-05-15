import React, { useState } from "react";
import "../../Navbar/Style/WarrantySummary.css";
import { ProductData } from "./ProductData";
// import Canceled from "./Canceled/Canceled";
// import { AllProductsData } from "./Delivered/AllProductsData";
import RequestWarranty from "./RequestWarranty";
// import Processing from "./Processing/Processing";
// import Returned from "./Returned/Returned";

export const filterList = [
  {
    id: 1,
    All: "all",
    option: [
      {
        id: 1,
        menu: "request for warranty",
        Value: "request for warranty",
      },
      {
        id: 2,
        menu: "verified",
        Value: "verified",
      },
    ],
  },
];
const WarrantySummary = () => {
  const [item, setItem] = useState(ProductData);
  console.log("item is>>>", item);
  const [select, setSelect] = useState();

  const [orderclick, setOrderClick] = useState();
  const [activebtn, setActiveBtn] = useState();
  const [hide, setHide] = useState();

  const handleClick = () => {
    setOrderClick(!orderclick);
    setActiveBtn(!activebtn);
    setHide(!hide);
    setSelect(!select);
  };

  const filteritems = (categitem) => {
    const updateitems = ProductData.filter((curElem) => {
      return curElem.category === categitem;
    });
    setItem(updateitems);
  };
  return (
    <>
      <div className="WarrantySummary-Container">
        <p className="WarrantySummary-Top-Title">Warranty Summary</p>
        <div className="WarrantySummary-Top-Filter-Container">
          <div className="WarrantySummary-Filter-Btn-Div">
            <div className="WarrantySummary-Para">
              <p>filter by:</p>
            </div>
            <div className="WarrantySummary-Main" onClick={handleClick}>
              <div className="WarrantySummary-Updown-Arrow">
                {orderclick ? (
                  <i
                    className="fa fa-angle-up"
                    aria-hidden="true"
                    style={{ color: "#ffffff" }}
                  ></i>
                ) : (
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                )}
              </div>
              <div className="WarrantySummary-Btn-Container">
                <button
                  className={`${
                    activebtn
                      ? "WarrantySummary-Active-Btn"
                      : "WarrantySummary-Btn"
                  }`}
                >
                  {/* {select ? <p>{}</p> : " All"} */}
                  All
                </button>
              </div>
              {hide ? (
                <ul className="WarrantySummary-Dropdown-Button">
                  <li
                    className="WarrantySummary-Dropdown-List"
                    onClick={() => filteritems("warrantyrequest")}
                  >
                    request for warranty
                  </li>
                  <li
                    className="WarrantySummary-Dropdown-List"
                    onClick={() => filteritems("verified")}
                  >
                    verified
                  </li>

                  <li
                    className="WarrantySummary-Dropdown-List"
                    onClick={() => setItem(ProductData)}
                  >
                    All
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
        <div className="WarrantySummary-Card-Container">
          <RequestWarranty item={item} />
          {/* <Processing /> */}
          {/* <Canceled /> */}
          {/* <Returned /> */}
        </div>
      </div>
    </>
  );
};

export default WarrantySummary;
