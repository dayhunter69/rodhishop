import React from "react";
import "../ProductListMenu/ProductListMenu.css";
const ProductListMenu = ({ item }) => {
  return (
    <>
      <div className="ProductListMenu_Container">
        {item.map((list) => {
          return (
            <div className="Product_Menu_list">
              <li>{list.title}</li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListMenu;
