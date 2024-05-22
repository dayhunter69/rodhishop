import React from 'react';
import img1 from '../../images/help.png';
import img2 from '../../images/apply.png';
import img3 from '../../images/text.png';
import img4 from '../../images/chat.png';
import img5 from '../../images/Email.png';
import img6 from '../../images/call.png';

export const supportList = [
  {
    id: 1,
    icon: img1,
    text: 'FAQs',
  },
  {
    id: 2,
    icon: img2,
    text: 'Raise a Ticket',
  },
  {
    id: 3,
    icon: img3,
    text: 'Text',
  },
  {
    id: 4,
    icon: img4,
    text: 'Chat',
  },
  {
    id: 5,
    icon: img5,
    text: 'Email',
  },
  {
    id: 6,
    icon: img6,
    text: 'Call',
  },
];

const Support = () => {
  return (
    <>
      <div className="max-w-[950px] mb-[100px] mt-0 mx-auto mobile:mb-[30px]">
        <p
          className="font-Arial not-italic font-bold text-Heading text-center capitalize
           rodhiRed mobile:text-Subheading1"
        >
          support?
        </p>
        <div className="max-w-[509px] mx-auto mb-0 mt-[27px] mobile:max-w-[279px] mobile:mt-[10px]">
          <p
            className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize
            text-secondary-extraDarkOpacity mobile:text-Paragraph0"
          >
            Don’t worry, we are always here to save your day during our 10-5
            Working Hour
          </p>
        </div>
        <div className="max-w-[917px] flex items-center mx-auto mt-[40px] mobile:mt-[25px]">
          <div className="w-[890px] h-[153px] flex flex-wrap justify-between mx-auto my-0">
            {supportList.map((list, index) => {
              return (
                <div key={index}>
                  <div className="flex flex-col justify-around h-[123px] mobile:h-[75px] mobile:py-0 mobile:px-[21px]">
                    <div className="w-[61px] flex items-center justify-center mx-auto my-0 mobile:w-[35px] mobile:h-[35px]">
                      <img
                        src={list.icon}
                        alt=""
                        className="w-[53px] h-[53px] mobile:w-[34px] mobile:h-[34px]"
                      />
                    </div>
                    <div className=" w-[71px]">
                      <p
                        className=" font-Arial not-italic font-normal text-Paragraph3 text-center text-secondary-darkOpacity 
                       capitalize mobile:text-Paragraph0"
                      >
                        {list.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
