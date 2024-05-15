import React from "react";
import img1 from "../../Components/images/Yantram-Credit-Card.png";
const CustomerCard = () => {
  return (
    <>
      <div className="w-[1068px] h-[100%] flex items-center justify-center">
        <div
          className="flex items-center justify-center w-[712.63px] h-[404.64px] rounded-[16.3823px] shadow-custom1"
          style={{
            background:
              "linear-gradient( 180deg, rgba(37, 32, 32, 0.58) 10.73%,rgba(217, 217, 217, 0.86) 60.21%, #ffffff 86.77%)",
          }}
        >
          <div className="flex w-[580px] h-[300px]">
            <div className="w-[299px] h-[300px] flex items-end">
              <div className="w-[288px]">
                <p className="font-Arial not-italic font-normal text-[39.3175px] text-center uppercase text-primary">
                  100 104 206324
                </p>
                <div className="w-[120px] flex items-center justify-between my-[5px] ml-auto">
                  <div className="w-[39.32px]">
                    <p className="font-Arial not-italic font-normal text-[13.1058px] leading-[15px] text-center uppercase text-primary">
                      valid upto
                    </p>
                  </div>
                  <div className="w-[72.08px]">
                    <p className="font-Arial not-italic font-normal text-[13.1058px] leading-[15px] text-center uppercase text-primary">
                      2023-09-10
                    </p>
                  </div>
                </div>
                <div className="w-[175.29px]">
                  <p className="font-Arial not-italic font-normal text-[22.9352px] leading-[26px] text-center uppercase text-primary">
                    arbin khadka
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[299px] h-[300px]">
              <div className="flex justify-end w-[289px]">
                <img src={img1} alt="" className="w-[195.79px] h-[61.68px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
