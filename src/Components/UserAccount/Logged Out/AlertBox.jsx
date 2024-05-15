import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const AlertBox = ({ handleClose }) => {
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/");
    setFlag(!flag);
  };
  return (
    <>
      {!flag ? (
        <div
          className="absolute top-[50%] left-[50%] "
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="w-[445px] h-[250px] bg-white shadow-custom1">
            <div className="w-[423px] mx-auto my-0">
              <p className=" font-Arial not-italic font-normal text-center text-Paragraph3 capitalize text-primary pt-[20px]">
                Leaving already? But we're just getting to know each other! Stay
                a little longer, won't you?
              </p>
            </div>
            <div className="w-[242px] mt-[18px] mb-0 mx-auto">
              <button
                className="w-[240px] h-[51px] bg-white border border-solid border-secondary-darkOpacity shadow-custom1 
                  font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity"
                onClick={handleClose}
              >
                Yes, I'll stay a little longer
              </button>
            </div>
            <div className="w-[242px] mt-[18px] mb-0 mx-auto">
              <button
                className="w-[240px] h-[51px] bg-white border border-solid border-secondary-darkOpacity shadow-custom1 
                  font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity"
                onClick={handleClick}
              >
                No, I have to go
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {flag && <Logout handleClose={handleClose} />}
    </>
  );
};

export default AlertBox;
