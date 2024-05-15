import React, { useState } from "react";
import img1 from "../../Components/images/need-help1.jpg";
import img2 from "../../Components/images/need-help2.jpg";
import img3 from "../../Components/images/need-help3.jpg";
import img4 from "../../Components/images/need-help4.jpg";
import img5 from "../../Components/images/need-help5.jpg";
import img6 from "../../Components/images/need-help6.jpg";
import img7 from "../../Components/images/talk to us.png";
import img8 from "../../Components/images/talk to us.png";
import img9 from "../../Components/images/talk to us.png";
import { Icon } from "@iconify/react";
import KnowledgeHub from "./KnowledgeHub";
import IndividualTab from "./IndividualTab";

export const SupportCardList = [
  {
    infoA: "request for warranty",
    infoD: "get started",
    img: img1,
    icon: "bi:arrow-right",
    value: "warrantyrequest",
  },
  {
    infoA: "want to track your order?",
    infoB: "Track here",
    infoC:
      "you must have digital tracking number?didn’t get digital tracking number",
    img: img2,
    icon: "",
  },
  {
    infoA: "track your support ticket here",
    infoC: "want to raise a ticket for support?",
    icon: "bi:arrow-right",
    img: img3,
    value: "supportTicket",
  },
  {
    infoA: "want to cancel your order",
    icon: "bi:arrow-right",
    img: img4,
    value: "cancelOrder",
  },
  {
    infoA: "warranty FAQs",
    icon: "bi:arrow-right",
    img: img5,
    value: "warrantyFAQs",
  },
  {
    infoA: "how to order?",
    icon: "bi:arrow-right",
    img: img6,
  },
];
export const resultYetList = [
  {
    title: "live chat",
    img: img7,
  },
  {
    title: "message us",
    img: img8,
  },
  {
    title: "visit us",
    img: img9,
  },
];
const SupportPage = () => {
  return (
    <>
      <div className="mb-[83px] mt-14 mobile:mt-[26px]">
        <div className="w-[992px] h-[199px] bg-secondary-whitesmoke mx-auto mb-0 mobile:w-[280px] mobile:h-[134px]">
          <p
            className="font-Arial not-italic font-bold text-Paragraph3 text-center capitalize
         text-secondary-darkOpacity pt-14 mobile:text-Paragraph0 mobile:pt-[30px]"
          >
            help! need somebody
          </p>
          <p
            className="text-Paragraph2 pt-5 font-Arial not-italic font-normal 
              text-center capitalize text-secondary-darkOpacity mobile:text-Paragraph0 mobile:pt-[15px]"
          >
            don’t worry we are here to save your day
          </p>
        </div>
        <p
          className="font-Arial not-italic font-bold text-Heading capitalize 
           text-center text-primary pt-16 mobile:text-Paragraph3 mobile:pt-[25px]"
        >
          need help?
        </p>
        <p
          className="font-Arial not-italic font-normal text-Paragraph3 capitalize 
          text-center pt-4 text-secondary-darkOpacity mobile:text-Paragraph0 mobile:pt-[6px]"
        >
          look no further than our popular topic.
        </p>
        <div
          className="w-[1303px] flex items-center justify-between 
          flex-wrap mx-auto mb-0 mt-16 mobile:w-[330px] mobile:mt-[22px]"
        >
          {SupportCardList.map((list, index) => {
            return <IndividualTab key={index} list={list} />;
          })}
        </div>
        <p
          className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center pt-[25px] 
           mobile:text-Paragraph3 mobile:pt-[12px]"
        >
          no result yet?
        </p>
        <p
          className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity 
          text-center pt-[5px] mobile:text-[11px] mobile:pt-[0px]"
        >
          there’s always a way forward.try these option for solution
        </p>
        <div className="flex justify-between w-[730px] mx-auto mt-[30px] mobile:w-[300px] mobile:mt-[15px]">
          {resultYetList.map((info, index) => {
            return (
              <div
                className=" flex flex-col items-center justify-between h-[135px] mobile:h-[69px]"
                key={index}
              >
                <div className="w-[99px] h-[99px] rounded-[50%] bg-secondary-whitesmoke mobile:w-[55px] mobile:h-[55px]">
                  <img
                    src={info.img}
                    alt=""
                    width="99"
                    className="mobile:w-[55px]"
                  />
                </div>
                <p className="font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary mobile:text-Paragraph0">
                  {info.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="w-[450px]  mx-auto mt-[40px] mobile:w-[258px]">
          <p className="font-Arial not-italic font-bold text-Heading capitalize text-primary text-center mobile:text-Paragraph3">
            didn’t find your device?
          </p>
          <p
            className="font-Arial not-italic font-normal text-Paragraph3 text-secondary-darkOpacity capitalize text-center 
             mobile:text-[10px]"
          >
            our YouTube channel is here to save your day
          </p>
        </div>
        <div className="w-[1354px] flex items-center justify-center mx-auto mt-[50px] mobile:mt-[20px] mobile:mb-[20px] mobile:w-[330px]">
          <div className=" flex items-center w-[363px] h-[280px] mobile:w-[135px] mobile:h-[122px]">
            <p className="font-Arial not-italic font-normal text-[64px] leading-[100px] capitalize text-primary mobile:text-Subheading2">
              yantram knowledge hub
            </p>
          </div>
          <div className="w-[979px] h-[490px] mobile:h-[238px]">
            <KnowledgeHub />
          </div>
        </div>
        <p className="font-Arial not-italic font-bold text-center text-Heading capitalize mobile:text-Paragraph3">
          got feedback for us?
        </p>
        <div className="w-[397px] mx-auto mobile:w-[227px] mt-[26px] mobile:mt-[5px]">
          <p
            className="font-Arial not-italic font-normal text-center text-Paragraph3 capitalize text-secondary-darkOpacity
           mobile:text-[10px] mobile:leading-[15px]"
          >
            we’re listening: your thought helps us improve and better serve you.
          </p>
        </div>
        <div className="w-[225px] mx-auto mt-[30px] mobile:w-[131px] mobile:h-[41px] mobile:mt-[18px]">
          <button
            className="w-[222px] h-[50px] border border-solid border-secondary-darkOpacity
             font-Arial not-italic font-normal text-center text-Paragraph3 capitalize text-secondary-darkOpacity mobile:w-[130px] 
             mobile:h-[40px] mobile:text-[11px]"
          >
            your feedback
          </button>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
