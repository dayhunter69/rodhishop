import React, { useState } from 'react';

const tabs = [
  {
    name: 'All',
    content: [
      'How to use diffuser cloth?',
      'How to shoot photo at table?',
      'How to set up puluz 40cm?',
      'How to set up puluz 30cm?',
    ],
  },
  {
    name: 'Studio Box',
    content: [
      'Studio Box Video 1',
      'Studio Box Video 2',
      'Studio Box Video 2',
      'Studio Box Video 2',
    ],
  },
  {
    name: 'Turntable',
    content: [
      'Turntable Video 1',
      'Turntable Video 2',
      'Studio Box Video 2',
      'Studio Box Video 2',
    ],
  },
  {
    name: 'Backdrop Stand',
    content: [
      'Backdrop Stand Video 1',
      'Backdrop Stand Video 2',
      'Studio Box Video 2',
      'Studio Box Video 2',
    ],
  },
];

const VideoAccordion = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-[858px] mx-auto my-0 mobile:w-[275px] mt-12">
        <p
          className="font-Arial not-italic font-bold text-Heading text-center 
           uppercase pb-[20px] text-primary mobile:text-Subheading1 mobile:pb-0 rodhiRed"
        >
          How To?
        </p>
        <p
          className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize
            text-secondary-extraDarkOpacity mobile:text-Paragraph0"
        >
          Unlock the full potential of our products with our step-by-step video
          guides. Let's make magic together.
        </p>
      </div>
      <div className="flex space-x-4 mb-8 mt-8 justify-center items-center">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`py-3 rounded min-w-[250px] mobile:min-w-[80px] ${
              activeTab === tab.name
                ? 'rodhiRedBg text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 mobile:grid-cols-1 gap-4">
        {tabs
          .find((tab) => tab.name === activeTab)
          .content.map((videoTitle, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
                <button className="text-4xl">▶</button>
              </div>
              <p className="mt-2">{videoTitle}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VideoAccordion;
