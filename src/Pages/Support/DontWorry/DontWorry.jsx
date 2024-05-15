import React from "react";
import img from "../../../Components/images/Ruko Jara.jpg";
const DontWorry = () => {
  return (
    <>
      <div className="w-[98.9vw] h-[100vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[600px] h-[350px] bg-white shadow-custom1 rounded-[5px]">
          <img src={img} alt="" width="355" height="237" />
          <p className="pt-[20px] font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
            Don’t worry. we will let you know.
          </p>
        </div>
      </div>
    </>
  );
};

export default DontWorry;
