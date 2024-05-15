import React, { useState } from "react";
import imgA from "../../Components/images/Sound-Page-Top-Banner.jpg";
import img1 from "../../Components/images/phone case.png";
import img3 from "../../Components/images/screen protector.png";
import PhoneCasePage from "./PhoneCasePage/PhoneCasePage";
import ScreenProtectionPage from "./ScreenProtectorPage/ScreenProtectorPage";

export const protectionCategory = [
  {
    id: 1,
    name: "phone case",
    icon1: img1,
  },
  {
    id: 2,
    name: "screen protector",
    icon1: img3,
  },
];

const ProtectionPage = () => {
  const [tabactive, setTabActive] = useState(null);
  const [lay, setLay] = useState(true);

  const handleTabClick = (index) => {
    setTabActive(index);
    setLay(false);
  };
  const handleBackClick = () => {
    setLay(true);
    setTabActive(null);
  };

  return (
    <>
      <p className="font-Arial not-italic font-bold text-Heading uppercase text-center text-primary pt-[35px] pb-[50px]">
        Protection
      </p>
      <div className="flex items-center justify-center mb-[45px] w-[100%]">
        <img src={imgA} alt="" width="100%" />
      </div>
      {lay ? (
        <div className="flex items-center max-w-[630px] h-[81px] mb-[35px] mx-auto mt-0">
          <div className="w-[600px] flex items-center justify-around mx-auto my-0">
            {protectionCategory.map((data, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center flex-col">
                    <div
                      className="w-[60px] h-[60px] flex items-center justify-center bg-secondary-whitesmoke rounded-[50%] cursor-pointer"
                      onClick={() => {
                        handleTabClick(index);
                      }}
                    >
                      <img src={data.icon1} width="39" height="39" />
                    </div>
                    <p className="font-Arial not-italic font-normal text-[10px] text-center uppercase pt-[5px] text-secondary-mediumOpacity">
                      {data.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {tabactive === 0 ? (
        <PhoneCasePage
          tabactive={tabactive}
          handleBackClick={handleBackClick}
        />
      ) : tabactive === 1 ? (
        <ScreenProtectionPage
          tabactive={tabactive}
          handleBackClick={handleBackClick}
        />
      ) : null}
    </>
  );
};

export default ProtectionPage;
