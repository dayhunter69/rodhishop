import React, { useState } from "react";
import img1 from "../../images/review-earphone-img.png";
import { Icon } from "@iconify/react";
import ReviewForm from "./ReviewForm";
import ReviewFilter from "./ReviewFilter";

export const reviewList = [
  {
    id: 1,
    reviewHeading:
      " the product was really amazing and i love it. #thankyouYantramNepal",
    icon1: "ic:baseline-delete-outline",
    icon2: "material-symbols:share-outline",
  },
  {
    id: 2,
    reviewHeading: " not good as much as i expected.",
    icon1: "ic:baseline-delete-outline",
    icon2: "material-symbols:share-outline",
  },
  {
    id: 3,
    reviewHeading: " nice product. ",
    icon1: "ic:baseline-delete-outline",
    icon2: "material-symbols:share-outline",
  },
  // {
  //   id: 4,
  //   reviewHeading: " nice product. ",
  //   icon1: "ic:baseline-delete-outline",
  //   icon2: "material-symbols:share-outline",
  // },
];
const ReviewRating = () => {
  const [flag, setFlag] = useState(false);
  const [hide, setHide] = useState(false);

  const [select, setSelect] = useState(0);

  const handleClick = () => {
    setFlag(!flag);
  };
  const handleShareBtnClick = () => {
    setHide(!hide);
  };
  return (
    <>
      {!flag ? (
        <>
          <ReviewFilter select={select} setSelect={setSelect} />
          <div className="w-[962px] flex justify-center mt-[25px] mb-0 mx-auto">
            <div className="flex flex-col w-[665px] justify-between">
              <div className="flex justify-between">
                {reviewList.map((pro, index) => {
                  return (
                    <div key={index} className="relative flex">
                      <div className="flex flex-col items-center w-[210.61px] h-[311px] bg-white shadow-custom9">
                        <div className="w-[202.19px] h-[161.47px] mt-[5px]">
                          <img src={img1} alt="" width="202" height="161" />
                        </div>
                        <div className="w-[188.14px] mt-[10px]">
                          <div className="flex items-center justify-between w-[111.55px] h-[24px] mx-auto">
                            <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
                              <Icon
                                icon="material-symbols:star"
                                width="20"
                                height="20"
                              />
                            </div>
                            <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
                              <Icon
                                icon="material-symbols:star"
                                width="20"
                                height="20"
                              />
                            </div>
                            <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
                              <Icon
                                icon="material-symbols:star"
                                width="20"
                                height="20"
                              />
                            </div>
                            <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
                              <Icon
                                icon="material-symbols:star"
                                width="20"
                                height="20"
                              />
                            </div>
                            <div className="w-[20px] h-[20px] flex items-center justify-center cursor-pointer">
                              <Icon
                                icon="material-symbols:star"
                                width="20"
                                height="20"
                              />
                            </div>
                          </div>
                          <div className="h-[57px] mt-[8px] mb-0 mx-auto">
                            <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity text-center">
                              {pro.reviewHeading}
                            </p>
                          </div>
                          <div className="flex items-center justify-between w-[48px] h-[25px] mt-[13px] ml-auto">
                            <div className="flex items-center h-[20px] cursor-pointer">
                              <Icon
                                icon={pro.icon1}
                                width="20"
                                height="20"
                                color="rgba(0, 0, 0, 0.71)"
                              />
                            </div>
                            <div
                              className="flex items-center h-[20px] cursor-pointer"
                              onClick={handleShareBtnClick}
                            >
                              <Icon
                                icon={pro.icon2}
                                width="20"
                                height="20"
                                color="rgba(0, 0, 0, 0.71)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {hide && (
                        <div
                          className="absolute w-[180px] h-[180px] bg-white top-[285px] left-[205px] rounded-[2px] 
                         flex items-center justify-center z-[1]"
                          style={{
                            boxShadow:
                              "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
                          }}
                        >
                          <div className="flex flex-col justify-center w-[180px] h-[173px]">
                            <div className="flex items-center gap-[5px] h-[43px] cursor-pointer bg-white hover:bg-[#f1f3f4]">
                              <div className="flex items-center w-[21px] h-[21px] ml-[10px]">
                                <Icon
                                  icon="solar:link-circle-bold"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <p className="font-Arial not-italic font-normal text-[13px] text-primary">
                                Copy Link
                              </p>
                            </div>
                            <div className="flex items-center gap-[5px] h-[43px] cursor-pointer bg-white hover:bg-[#f1f3f4]">
                              <div className="flex items-center w-[21px] h-[21px] ml-[10px]">
                                <Icon
                                  icon="logos:whatsapp-icon"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <p className="font-Arial not-italic font-normal text-[13px] text-primary">
                                Share to Whatsapp
                              </p>
                            </div>
                            <div className="flex items-center gap-[5px] h-[43px] cursor-pointer bg-white hover:bg-[#f1f3f4]">
                              <div className="flex items-center w-[21px] h-[21px] ml-[10px]">
                                <Icon
                                  icon="logos:facebook"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <p className="font-Arial not-italic font-normal text-[13px] text-primary">
                                Share to Facebook
                              </p>
                            </div>
                            <div className="flex items-center gap-[5px] h-[43px] cursor-pointer bg-white hover:bg-[#f1f3f4]">
                              <div className="flex items-center w-[21px] h-[21px] ml-[10px]">
                                <Icon
                                  icon="skill-icons:twitter"
                                  width="20"
                                  height="20"
                                />
                              </div>
                              <p className="font-Arial not-italic font-normal text-[13px] text-primary">
                                Share to Twitter
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div
                className="w-[191px] h-[50px] flex items-center gap-[12px] mt-[40px] bg-white border border-solid border-secondary-darkOpacity"
                onClick={handleClick}
              >
                <div className="flex items-center justify-center w-[25px] h-[25px] ml-[9px] cursor-pointer">
                  <Icon icon="material-symbols:add" width="24" height="24" />
                </div>
                <div className="flex items-center justify-center h-[25px]">
                  <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity cursor-pointer">
                    add new review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {flag && <ReviewForm />}
    </>
  );
};

export default ReviewRating;
