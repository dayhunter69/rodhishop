import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../../Components/images/call.png";
import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";

const ContactUs = () => {
  return (
    <>
      <p
        className="font-Arial not-italic font-bold text-Heading 
        text-center uppercase text-primary pt-[45px] mobile:text-Paragraph3 mobile:pt-[19px]"
      >
        contact us
      </p>
      <div className="max-w-[926px] mb-0 mx-auto mt-5  mobile:mt-[2px]">
        <div className="mobile:w-[285px] mx-auto">
          <p
            className="font-Arial not-italic font-normal text-Paragraph3 
          text-center text-secondary-darkOpacity mobile:text-[10px] mobile:leading-[13px]"
          >
            Don't be a stranger, reach out! We're ready to wow you with our
            speed and expertise. Don't have any questions? We'll make some up
            for you.
          </p>
        </div>
        <div className="mobile:w-[131px] mx-auto mt-5 mobile:mt-[13px]">
          <p
            className="font-Arial not-italic font-bold text-Paragraph3 
           text-center capitalize text-primary mobile:text-[11px] mobile:leading-[15px]"
          >
            come check out our cool social media pages
          </p>
        </div>
        <div className="w-[625px] flex items-center justify-between mx-auto mt-4 mobile:w-[284.06px]">
          <div
            className="flex items-center justify-center w-[53px] h-[56px] 
            border border-solid border-primary cursor-pointer mobile:w-[24.01px] mobile:h-[25.37px]"
            // style={{ border: "1px solid red" }}
          >
            <Icon
              icon="basil:facebook-outline"
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
          <div
            className="flex items-center justify-center w-[53px] h-[56px] 
             border border-solid border-primary cursor-pointer mobile:w-[24.01px] mobile:h-[25.37px]"
          >
            <Icon
              icon="mdi:instagram"
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
          <div
            className="flex items-center justify-center w-[53px] h-[56px] 
             border border-solid border-primary cursor-pointer mobile:w-[24.01px] mobile:h-[25.37px]"
          >
            <Icon
              icon="uit:linkedin-alt"
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
          <div
            className="flex items-center justify-center w-[53px] h-[56px] 
             border border-solid border-primary cursor-pointer mobile:w-[24.01px] mobile:h-[25.37px]"
          >
            <Icon
              icon="ph:tiktok-logo-light"
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
          <div
            className="flex items-center justify-center w-[53px] h-[56px] 
             border border-solid border-primary cursor-pointer mobile:w-[24.01px] mobile:h-[25.37px]"
          >
            <Icon
              icon="arcticons:twitter"
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
          <div
            className="flex items-center justify-center w-[53px] h-[56px] 
             border border-solid border-primary cursor-pointer mobile:w-[24.01px] mobile:h-[25.37px]"
          >
            <Icon
              icon="ant-design:youtube-outlined"
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
          <div
            className="flex items-center justify-center w-[53px] h-[56px] 
             border border-solid border-primary cursor-pointer mobile:w-[24.01px] mobile:h-[25.37px]"
          >
            <Icon
              icon="basil:pinterest-outline"
              className="w-[32px] h-[32px] mobile:w-[20px] mobile:h-[20px]"
            />
          </div>
        </div>
        <p
          className="font-Arial not-italic font-normal text-Paragraph3
           capitalize text-center text-secondary-darkOpacity pt-14 mobile:text-[10px] mobile:leading-[8px] mobile:pt-[20px]"
        >
          got something to say? speak up! we’re all ears
        </p>
        <div className="w-[504px] h-[101px] mx-auto mb-0 mt-5 mobile:w-[315px] mobile:h-[93px]">
          <textarea
            placeholder="write message here"
            className="w-[502px] h-[100px] bg-white border border-solid border-secondary-darkOpacity 
               outline-none resize-none pt-2 pl-5 font-Arial not-italic 
               font-normal text-Paragraph1 capitalize text-secondary-darkOpacity mobile:w-[312px] mobile:h-[90px]"
          ></textarea>
        </div>
        <div className="w-[502px] flex items-center justify-between mx-auto mb-0 mt-5 mobile:w-[311.73px]">
          <input
            type="text"
            placeholder="your full name"
            className="w-[248px] h-[50px] border border-solid
             border-secondary-darkOpacity outline-none font-Arial not-italic
               font-normal text-Paragraph0 pl-5 capitalize text-secondary-darkOpacity mobile:w-[154px] mobile:h-[40px]"
          />
          <input
            type="text"
            placeholder="your phone number"
            className="w-[248px] h-[50px] border border-solid
            border-secondary-darkOpacity outline-none font-Arial not-italic
              font-normal text-Paragraph0 pl-5 capitalize text-secondary-darkOpacity mobile:w-[154px] mobile:h-[40px]"
          />
        </div>
        <div className="w-[148px] mx-auto mb-0 mt-3 mobile:w-[92px] mobile:h-[33px]">
          <button
            className="w-[146px] h-[50px] border border-solid border-secondary-darkOpacity 
             font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity mobile:w-[90.64px] mobile:h-[31.04px]
             mobile:text-Paragraph0"
          >
            submit
          </button>
        </div>
      </div>
      <div className="flex max-w-[1068px] mobile:flex-wrap  justify-between mx-auto mt-[56px] mb-[90px]">
        <div className="flex flex-col">
          <div className="w-[415px] mb-[25px]">
            <p className="font-Arial not-italic font-normal text-Heading capitalize text-center text-primary pb-[15px]">
              let's talk
            </p>
            <p className="font-Arial not-italic font-bold text-center text-Paragraph3 capitalize text-secondary-darkOpacity ">
              9-5 on business day
            </p>
          </div>
          <div className="flex w-[413px] mobile:flex-wrap mobile:justify-center justify-between">
            <div className="w-[207px]">
              <div className="w-[50px] mx-auto">
                <img src={img1} alt="" className="w-[49px] h-[49px]" />
              </div>
              <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-center pt-[10px] text-secondary-darkOpacity">
                phone
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph3 text-center pt-[10px]">
                9801234567
              </p>
              <p className="font-Arial not-italic font-normal text-Paragraph3 text-center pt-[10px]">
                +977 9801234567
              </p>
            </div>
            <div className="w-[207px]  mobile:mt-[20px]">
              <div className="w-[50px] mx-auto">
                <Icon
                  icon="line-md:email-opened"
                  className="w-[49px] h-[49px]"
                  color="rgba(0, 0, 0, 0.71)"
                />
              </div>
              <p
                className="font-Arial not-italic font-bold text-Paragraph3 capitalize 
                text-center text-secondary-darkOpacity pt-[10px]"
              >
                email
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph3  
                text-center  text-primary pt-[10px]"
              >
                arbin@yantramnepal.com
              </p>
              <p
                className="font-Arial not-italic font-normal text-Paragraph3  
                text-center  text-primary pt-[10px]"
              >
                rohit@yantramnepal.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mobile:mt-[30px] mobile:mx-auto">
          <div className="max-w-[415px] ">
            <p className="font-Arial not-italic font-normal text-Heading capitalize text-center text-primary">
              meet us at
            </p>
          </div>
          <div className="w-[415px] h-[220px] bg-white shadow-custom1 relative mobile:w-[380px] mt-[20px] ">
            <div className="absolute bottom-[12px] right-[12px]">
              <button
                className="w-[110px] h-[30px] bg-white shadow-custom1 border border-solid border-secondary-darkOpacity
                 font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity"
              >
                get direction
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="w-[1068px] h-[500px] mx-auto mt-14 mb-28 flex items-center justify-between flex-wrap
         mobile:w-[320px] mobile:h-[618px] mobile:justify-center mobile:mt-[12px] mobile:mb-[43px]"
        style={{ border: "1px solid red" }}
      >
        <div
          className="w-[207px] flex items-center flex-col mobile:w-[138px]"
          style={{ border: "1px solid blue" }}
        >
          <p
            className="font-Arial not-italic font-bold text-Paragraph3 text-center 
             capitalize text-secondary-darkOpacity mobile:text-Paragraph0"
          >
            9-5 on business day
          </p>
          <div className="mt-9 mobile:mt-[18px]">
            <div className="w-[50px] mx-auto">
              <img src={img1} alt="" className="w-[49px] h-[49px]" />
            </div>
            <p
              className="font-Arial not-italic font-bold text-Paragraph3 capitalize 
              text-center text-secondary-darkOpacity pt-3 mobile:text-Paragraph0 mobile:pt-[8px]"
            >
              phone
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph3 text-center pt-2 text-primary mobile:text-Paragraph0 mobile:pt-[0px]">
              9801234567
            </p>
            <p className="font-Arial not-italic font-normal text-Paragraph3 text-center pt-2 text-primary mobile:text-Paragraph0 mobile:pt-[0px]">
              +977 9801234567
            </p>
          </div>
          <div
            className="w-[207px] mt-10 mobile:mt-[18px] mobile:w-[138px]"
            style={{ border: "1px solid blue" }}
          >
            <div className="w-[50px] mx-auto">
              <Icon
                icon="line-md:email-opened"
                width="24"
                height="24"
                className="w-[49px] h-[49px]"
                color="rgba(0, 0, 0, 0.71)"
              />
            </div>
            <p
              className="font-Arial not-italic font-bold text-Paragraph3 capitalize 
             text-center text-secondary-darkOpacity pt-3 mobile:text-Paragraph0 mobile:pt-[2px]"
            >
              email
            </p>
            <p
              className="font-Arial not-italic font-normal text-Paragraph3  
             text-center pt-2 text-primary mobile:text-Paragraph0 mobile:pt-[0px]"
            >
              arbin@yantramnepal.com
            </p>
          </div>
        </div>
        <p
          className="font-Arial not-italic font-normal text-Heading text-center 
         capitalize text-primary pt-20 mobile:text-Paragraph3 mobile:pt-[30px] mobile:font-bold"
        >
          meet us at
        </p>
        <div
          className="w-[500px] h-[500px] bg-white shadow-custom1 relative mobile:w-[315px] mobile:h-[314px]"
          style={{ border: "1px solid red" }}
        >
          <div className="absolute bottom-[50px] right-[40px]">
            <button
              className="w-[181px] h-[47px]  bg-white shadow-custom1 border border-solid border-secondary-darkOpacity
           font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity"
            >
              get direction
            </button>
          </div>
        </div>
      </div> */}
      <NewsLetter />
    </>
  );
};

export default ContactUs;
