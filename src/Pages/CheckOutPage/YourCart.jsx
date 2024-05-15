import React from "react";
import "../../Components/Navbar/Style/YourCart.css";
import img1 from "../../Components/images/headset-earbuds-transparent.jpg";
import { Icon } from "@iconify/react";

const YourCart = () => {
  return (
    <>
      <div className="YourCart-Container">
        <div className="YourCart-Box">
          <div className="YourCart-Title">
            <p>Your Cart</p>
          </div>
          <div className="YourCart-Parent-Div">
            <div className="YourCart-Chlid-Div-First">
              <div className="YourCart-Img">
                <img src={img1} alt="" className="Cart-img" />
              </div>
              <div className="YourCart-Details">
                <div className="YourCart-Product-Type">
                  <p>acefast t2 </p>
                </div>
                <div className="YourCart-Product-Name">
                  <p>earbud</p>
                </div>
                <div className="YourCart-Product-Button"></div>
                <div className="YourCart-Product-rupees">
                  <p>rs.749</p>
                </div>
              </div>
              <div className="YourCart-Edit-Icon">
                <Icon
                  icon="material-symbols:edit-square-outline"
                  width="30"
                  height="30"
                  color="#545454"
                />
              </div>
            </div>
            <div className="YourCart-Chlid-Div-Second">
              <div className="YourCart-Img">
                <img src={img1} alt="" className="Cart-img" />
              </div>
              <div className="YourCart-Details">
                <div className="YourCart-Product-Type">
                  <p>acefast t2 </p>
                </div>
                <div className="YourCart-Product-Name">
                  <p>earbud</p>
                </div>
                <div className="YourCart-Product-Button"></div>
                <div className="YourCart-Product-rupees">
                  <p>rs.749</p>
                </div>
              </div>
              <div className="YourCart-Edit-Icon">
                <Icon
                  icon="material-symbols:edit-square-outline"
                  width="30"
                  height="30"
                  color="#545454"
                />
              </div>
            </div>
          </div>
          <div className="YourCart-Order-Summery-Container">
            <div className="YourCart-Title">
              <p>order summery</p>
            </div>
            <div className="YourCart-Order-Summery-Box">
              <div className="YourCart-order-details">
                <div className="YourCart-order-paragraph1">
                  <p>total</p>
                </div>
                <div className="YourCart-order-paragraph2">
                  <p>rs 1498</p>
                </div>
              </div>
              <div className="YourCart-order-details">
                <div className="YourCart-order-paragraph1">
                  <p>shipping cost</p>
                </div>
                <div className="YourCart-order-paragraph3">
                  <p>in next step</p>
                </div>
              </div>
              <div className="YourCart-order-details">
                <div className="YourCart-order-paragraph1">
                  <p>promo discount</p>
                </div>
                <div className="YourCart-order-paragraph4">
                  <p>- rs 300</p>
                </div>
              </div>
              <div className="YourCart-order-details">
                <div className="YourCart-order-paragraph1">
                  <p>gift wraps</p>
                </div>
                <div className="YourCart-order-paragraph2">
                  <p>rs 0</p>
                </div>
              </div>
              <div className="YourCart-order-details">
                <div className="YourCart-order-paragraph1">
                  <p>grand total</p>
                </div>
                <div className="YourCart-order-paragraph2">
                  <p>rs 749</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCart;
