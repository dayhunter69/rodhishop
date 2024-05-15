import React, { useState } from "react";
import "../../Navbar/Style/ReviewFeedback.css";
import Feedback from "./Feedback";
import Review from "./Review";
import ReviewFilter from "./ReviewFilter";

// export const filterList = [
//   {
//     id: 1,
//     Review: "Review",
//     value: "Review",
//   },
//   {
//     id: 2,
//     Feedback: "Feedback",
//     value: "Feedback",
//   },
// ];
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
const ReviewFeedback = () => {
  const [select, setSelect] = useState(1);

  return (
    <>
      <div className="ReviewFeedback-Container">
        <p className="ReviewFeedback-Top-Title">your feedback and review</p>

        {(() => {
          if (select === 0) {
            return <Feedback select={select} setSelect={setSelect} />;
          }
          // else if (select === 1) {
          //   return <Feedback />;
          // }
          else {
            return <Review select={select} setSelect={setSelect} />;
          }
        })()}
      </div>
    </>
  );
};

export default ReviewFeedback;
