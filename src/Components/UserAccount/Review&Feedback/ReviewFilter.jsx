import React, { useState } from "react";

export const filterList = [
  {
    id: 1,
    Review: "Review",
    option: [
      {
        id: 0,
        name: "Feedback",
        value: "Feedback",
      },
      {
        id: 1,
        name: "Review",
        value: "Review",
      },
    ],
  },
];

function ReviewFilter({ select, setSelect }) {
  const [activebtn, setActiveBtn] = useState();

  const [warrantyclick, setWarrantyClick] = useState();
  const [chooseone, setChooseOne] = useState();

  const handleClick = () => {
    setWarrantyClick(!warrantyclick);
    setActiveBtn(!activebtn);
  };
  const handleClickMe = (index) => {
    setSelect(index);
    setChooseOne(!chooseone);
    console.log("index is >>", index);
  };

  return (
    <div className="ReviewFeedback-Top-Filter-Container">
      <div className="ReviewFeedback-Filter-Btn-Div">
        <div className="ReviewFeedback-Para">
          <p>filter by:</p>
        </div>
        <div className="ReviewFeedback-Main z-[1]" onClick={handleClick}>
          <div className="ReviewFeedback-Updown-Arrow">
            {warrantyclick ? (
              <i
                className="fa fa-angle-up"
                aria-hidden="true"
                style={{ color: "#ffffff" }}
              ></i>
            ) : (
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            )}
          </div>
          <div className="ReviewFeedback-Btn-Container">
            {filterList.map((info, index) => {
              return (
                <div key={index}>
                  <button
                    className={`${
                      activebtn
                        ? "ReviewFeedback-Active-Btn"
                        : "ReviewFeedback-Btn"
                    }`}
                  >
                    {filterList[0].option.find((o) => o.id === select)?.name}
                  </button>
                  {warrantyclick ? (
                    <div className="ReviewFeedback-Option-list">
                      {info.option.map((list, index) => {
                        return (
                          <div key={index}>
                            <button
                              className="ReviewFeedback-Option-Btn"
                              onClick={() => handleClickMe(index)}
                            >
                              {list.name}
                            </button>
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
      </div>
    </div>
  );
}

export default ReviewFilter;
