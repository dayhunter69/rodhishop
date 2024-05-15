import React from "react";
import "../MenuItem/MenuItem.css";
import ProductListMenu from "../ProductListMenu/ProductListMenu";
import SubMenuItem from "../SubMenuItem/SubMenuItem";
const MenuItem = ({ clicked, active, item, handleClick, index }) => {
  return (
    <>
      <div>
        <div className="UpDown-Arrow">
          {clicked && active == index ? (
            <i
              className="fa fa-angle-up"
              aria-hidden="true"
              style={{ color: "#ffffff" }}
            ></i>
          ) : (
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </div>

        <div
          className={`${clicked && active === index ? "Select2" : "Select1"}`}
        >
          <p>{item.title}</p>
        </div>
        {clicked && active === index ? (
          <SubMenuItem item={item.submenu} index={index} active={active} />
        ) : null}
      </div>
    </>
  );
};

export default MenuItem;
