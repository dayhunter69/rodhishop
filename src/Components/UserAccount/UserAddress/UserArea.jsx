import React, { useState } from "react";

export const categoryA = [
  {
    id: 1,
    Area: "Area",
    option: [
      {
        id: 1,
        AreaType: "Maitidevi",
        AreaValue: "Maitidevi",
      },
      {
        id: 2,
        AreaType: "Anamnagar",
        AreaValue: "Anamnagar",
      },
      {
        id: 3,
        AreaType: "Gaushala",
        AreaValue: "Gaushala",
      },
      {
        id: 4,
        AreaType: "Sinamangal",
        AreaValue: "Sinamangal",
      },
      {
        id: 5,
        AreaType: "Ghattekulo",
        AreaValue: "Ghattekulo",
      },
      {
        id: 6,
        AreaType: "Mitrapark",
        AreaValue: "Mitrapark",
      },
    ],
  },
];
const UserArea = () => {
  const [addressclick, setAddressClick] = useState();
  const [choose, setChoose] = useState("");
  const handleClick = () => {
    setAddressClick(!addressclick);
  };
  const handleSelect = (info) => {
    setChoose(info.AreaValue);
  };
  return (
    <>
      <div className="relative cursor-pointer mt-[20px]" onClick={handleClick}>
        <div className="flex absolute top-[18px] right-[15px]">
          <i
            className={addressclick ? "fa fa-angle-up" : "fa fa-angle-down"}
          ></i>
        </div>
        <div className="flex items-center w-[382px] h-[50px] border border-solid border-secondary-darkOpacity">
          {categoryA.map((list, index) => {
            return (
              <div key={index}>
                {choose ? (
                  <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px] text-secondary-darkOpacity">
                    {choose}
                  </p>
                ) : (
                  <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px] text-secondary-darkOpacity">
                    {list.Area}
                  </p>
                )}
                {addressclick ? (
                  <div className="UserAddress-Area-Option-Container">
                    {list.option.map((info, index) => {
                      return (
                        <div key={index}>
                          <div
                            className="flex items-center h-[50px] font-Arial not-italic font-normal text-Paragraph2 capitalize pl-[19.6px]
                            text-secondary-darkOpacity hover:text-white hover:bg-secondary-greyOpacity"
                            onClick={() => {
                              handleSelect(info);
                            }}
                          >
                            <p>{info.AreaType}</p>
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
    </>
  );
};

export default UserArea;
