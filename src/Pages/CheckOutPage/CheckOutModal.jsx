import React, { useState } from "react";
import "../../Components/Navbar/Style/CheckOutModal.css";
import img1 from "../../Components/images/rishidhamala-cangrajuletun.gif";
import HaveAnyFeedBack from "./HaveAnyFeedBack";
import { useNavigate } from "react-router-dom";

const CheckOutModal = ({ handleClose }) => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    // navigate("/");
    setFlag(!flag);
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      {!flag ? (
        <div className="CheckOutModal-Wrapper">
          <div className="CheckOutModal-Container">
            <div className="CheckOutModal-Box">
              <div className="CheckOutModal-Img">
                <img src={img1} alt="" className="Congratulation-Gif" />
              </div>
              <div className="CheckOutModal-paragraph">
                <p>
                  <span className="CheckOutModal-Congratulations">
                    Congratulations,
                  </span>
                  your order is on its way! We will take good care of it and
                  make sure it is delivered on time. You will receive an email
                  soon with all the details about your order. If you don't see
                  it right away, check your spam folder just in case. We want
                  you to have all the important information about your order.
                </p>
              </div>
              <div className="CheckOutModal-Button-Container">
                <div className="CheckOutModal-first-btn-Container">
                  <button
                    className="CheckOutModal-Continue-Shopping"
                    onClick={handleHomeClick}
                  >
                    continue shopping
                  </button>
                </div>
                <div className="CheckOutModal-second-btn-Container">
                  <button
                    className="CheckOutModal-Have-Any-Feedback"
                    onClick={handleClick}
                  >
                    have any feedback?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {flag && <HaveAnyFeedBack />}
    </>
  );
};

export default CheckOutModal;
