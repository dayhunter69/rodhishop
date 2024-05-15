import React, { useState } from "react";
import "../SubMenuItem/SubMenuItem.css";

const SubMenuItem = ({ item }) => {
  const [menuItem, setMenuItem] = useState(false);

  const handleListMenu = () => {
    setMenuItem(!menuItem);
  };
  return (
    <>
      <div className="SubMenuItem-Container">
        {item.map((menu, index) => {
          return (
            <div key={index} className="Menu_list" onClick={handleListMenu}>
              <li>{menu.title}</li>
              <li className="Right_Arrow">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </li>
            </div>
          );
        })}
        {menuItem ? (
          <div className="ProductListMenu_Container">
            {item.map((list) => {
              return (
                <div className="Product_Menu_list">
                  <li>{list.title}</li>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SubMenuItem;
