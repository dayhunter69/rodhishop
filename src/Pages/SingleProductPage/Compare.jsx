import React, { useState } from "react";
import SelectBrandCompare from "./SelectBrandCompare";

const Compare = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      {!show ? (
        <div className="w-[274px] h-[50px] mx-auto">
          <button
            onClick={handleClick}
            className="w-[274px] h-[50px] font-Arial not-italic font-normal text-Paragraph3 capitalize
         border border-solid border-secondary-darkOpacity text-secondary-darkOpacity"
          >
            compare with other brands
          </button>
        </div>
      ) : (
        <SelectBrandCompare />
      )}
    </>
  );
};

export default Compare;
