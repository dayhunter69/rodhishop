import React, { useState } from 'react';
import DescriptionTab from './DescriptionTab';
import TechSpec from './TechSpec';
import Compare from './Compare';
import Review from './Review';

export const ProductTabList = [
  {
    tabName: 'description',
  },
  {
    tabName: 'tech-spec',
  },
  {
    tabName: 'compare',
  },
  {
    tabName: 'review',
  },
];

const ProductTab = () => {
  const [tab, setTab] = useState(0);

  const handleClick = (index) => {
    setTab(index);
  };
  return (
    <>
      <div className="flex items-center justify-between max-w-[708px] mx-auto">
        {ProductTabList.map((info, index) => {
          return (
            <div
              className="flex items-center justify-center"
              key={index}
              onClick={() => handleClick(index)}
            >
              <p
                className={`${
                  tab === index
                    ? 'font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary cursor-pointer border-b-2 border-solid border-primary'
                    : 'font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary cursor-pointer border-b-2 border-solid border-transparent'
                }`}
              >
                {info.tabName}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mb-[820px] mt-[30px]">
        {(() => {
          if (tab === 0) {
            return <DescriptionTab />;
          } else if (tab === 1) {
            return <TechSpec />;
          } else if (tab === 2) {
            return <Compare />;
          } else if (tab === 3) {
            return <Review />;
          } else {
            return <DescriptionTab />;
          }
        })()}
      </div>
    </>
  );
};

export default ProductTab;
