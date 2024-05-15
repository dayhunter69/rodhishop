import React, { useState } from "react";
import "../../Navbar/Style/UserOrder.css";
// import Canceled from "./Canceled/Canceled";
import { AllProductsData } from "./Delivered/AllProductsData";
import Delivered from "./Delivered/Delivered";
// import Processing from "./Processing/Processing";
import Returned from "./Returned/Returned";

export const filterList = [
  {
    id: 1,
    All: "All",
  },
];

const filterByOptions = [
  {
    id: 1,
    menu: "Processing",
    value: "processing",
  },
  {
    id: 2,
    menu: "Delivered",
    value: "delivered",
  },
  {
    id: 3,
    menu: "Canceled",
    value: "canceled",
  },
  {
    id: 4,
    menu: "Returned",
    value: "returned",
  },
  {
    id: 4,
    menu: "All",
    value: "all",
  },
];

const UserOrder = () => {
  const [filterBy, setFilterBy] = useState("all");
  const [orderclick, setOrderClick] = useState();
  const [activebtn, setActiveBtn] = useState();
  const [hide, setHide] = useState();

  const handleClick = () => {
    setOrderClick(!orderclick);
    setActiveBtn(!activebtn);
    setHide(!hide);
  };

  const filteritems = (categitem) => {
    setFilterBy(categitem);
  };

  return (
    <>
      <div className="UserOrder-Container">
        <p className="UserOrder-Top-Title">My Order</p>
        <div className="UserOrder-Top-Filter-Container">
          <div className="UserOrder-Filter-Btn-Div">
            <div className="UserOrder-Para">
              <p>filter by:</p>
            </div>
            <div className="UserOrder-Main" onClick={handleClick}>
              <div className="UserOrder-Updown-Arrow">
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
              <div className="UserOrder-Btn-Container">
                <button
                  className={`${
                    activebtn ? "UserOrder-Active-Btn" : "UserOrder-Btn"
                  }`}
                >
                  {filterBy}
                </button>
              </div>
              {hide ? (
                <ul className="UserOrder-Dropdown-Button">
                  {filterByOptions.map((option) => {
                    if (filterBy === option.value) return null;
                    return (
                      <li
                        className="UserOrder-Dropdown-List"
                        onClick={() => filteritems(option.value)}
                      >
                        {option.menu}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
        <div className="UserOrder-Card-Container">
          <Delivered
            item={AllProductsData.filter((curElem) => {
              if (filterBy === "all") return true;
              return curElem.category === filterBy;
            })}
          />
          {/* <Processing /> */}
          {/* <Canceled /> */}
          {/* <Returned /> */}
        </div>
      </div>
    </>
  );
};

export default UserOrder;
