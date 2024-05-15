import React, { useState } from "react";

export const categoryC = [
  {
    id: 1,
    Area: "Area",
    option: [
      {
        id: 1,
        areaType: "Maitidevi",
        areaValue: "Maitidevi",
      },
      {
        id: 2,
        areaType: "Anamnagar",
        areaValue: "Anamnagar",
      },
      {
        id: 3,
        areaType: "Gaushala",
        areaValue: "Gaushala",
      },
      {
        id: 4,
        areaType: "Sinamangal",
        areaValue: "Sinamangal",
      },
      {
        id: 5,
        areaType: "Ghattekulo",
        areaValue: "Ghattekulo",
      },
      {
        id: 6,
        areaType: "Mitrapark",
        areaValue: "Mitrapark",
      },
    ],
  },
];
const AreaDropdown = ({ cityselect }) => {
  const [areaclick, setAreaClick] = useState(false);
  const [areaselect, setAreaSelect] = useState("");

  const handleAreaClick = () => {
    setAreaClick(!areaclick);
  };
  const handleAreaSelect = (info) => {
    setAreaSelect(info.areaValue);
  };
  return (
    <>
      {cityselect ? (
        <div className="w-[331px] h-[40px] mt-[20px]">
          <div
            className="w-[255px] h-[40px] relative border border-solid border-secondary-darkOpacity"
            onClick={handleAreaClick}
          >
            <div className="flex absolute right-[8px] top-[13px] cursor-pointer">
              {areaclick ? (
                <i
                  className="fa fa-angle-up"
                  aria-hidden="true"
                  style={{ color: "#ffffff" }}
                ></i>
              ) : (
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              )}
            </div>
            {categoryC.map((list, index) => {
              return (
                <div key={index}>
                  <div
                    className={`${
                      areaclick
                        ? "w-[255px] h-[40px] pl-[22px] flex items-center bg-black text-white cursor-pointer capitalize text-center text-Paragraph1 font-normal not-italic font-Arial"
                        : "w-[255px] h-[40px] pl-[22px] flex items-center  text-secondary-darkOpacity cursor-pointer capitalize text-center text-Paragraph1 font-normal not-italic font-Arial"
                    }`}
                  >
                    {areaselect ? <p>{areaselect}</p> : <p>{list.Area}</p>}
                  </div>
                  {areaclick ? (
                    <div className="absolute w-[255px] top-[39px] left-[0px] bg-white z-[1] shadow-custom4">
                      {list.option.map((info, index) => {
                        return (
                          <div key={index}>
                            <div
                              className="flex items-center pl-[20px] w-[255px] h-[40px] font-Arial not-italic 
                                font-normal text-Paragraph1 text-center capitalize text-primary hover:text-white
                                hover:bg-secondary-greyOpacity cursor-pointer"
                              onClick={() => {
                                handleAreaSelect(info);
                              }}
                            >
                              <p>{info.areaType}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AreaDropdown;
