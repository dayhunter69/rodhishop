import React, { useState } from 'react';
// import "../../../Navbar/Style/Sound.css";
import AllEarBuds from './AllEarBuds/AllEarBuds';
import Headphone from './HeadPhone/HeadPhone';
import EarBud from './Earbud/Earbud';

// This was all subcategory section under StudioBox and BackDrop

// import img1 from '../../../images/earphone.png';
// import img2 from '../../../images/earphone2.png';
// import img3 from '../../../images/earbud.png';
// import img4 from '../../../images/earbud2.png';
// import img5 from '../../../images/headphone.png';
// import img6 from '../../../images/headphone2.png';
// import img7 from '../../../images/speaker.png';
// import img8 from '../../../images/speaker2.png';
import EmailBox from './EmailBox';

// export const soundCategory = [
//   {
//     id: 1,
//     name: 'earphone',
//     icon1: img1,
//     icon2: img2,
//   },
//   {
//     id: 2,
//     name: 'earbud',
//     icon1: img3,
//     icon2: img4,
//   },
//   {
//     id: 3,
//     name: 'headphone',
//     icon1: img5,
//     icon2: img6,
//   },
//   {
//     id: 4,
//     name: 'speaker',
//     icon1: img7,
//     icon2: img8,
//   },
// ];

const Sound = () => {
  const [activeTabMenu] = useState();

  // const handleTab = (index) => {
  //   setActiveTabMenu(index);
  // };
  return (
    <>
      {/* Sub Category for StudioBox */}
      {/* <div className="flex items-center max-w-[630px] h-[81px] mb-[35px] mx-auto mt-0 mobile:hidden">
        <div className="w-[600px] flex items-center justify-around mx-auto my-0">
          {soundCategory.map((data, index) => {
            return (
              <div key={index}>
                <div className="flex items-center flex-col">
                  <div
                    className={`${
                      activeTabMenu === index
                        ? "w-[60px] h-[60px] flex items-center justify-center bg-black rounded-[50%] cursor-pointer"
                        : "w-[60px] h-[60px] flex items-center justify-center bg-secondary-whitesmoke rounded-[50%] cursor-pointer"
                    }`}
                    onClick={() => handleTab(index)}
                    title={index === 0 || index === 3 ? "Out of stock" : ""}
                  >
                    <img
                      src={activeTabMenu === index ? data.icon2 : data.icon1}
                      className="w-[39px] h-[39px]"
                    />
                  </div>
                  <div
                    className="font-Arial not-italic font-normal text-[10px] text-center uppercase mt-[3px]
                   text-secondary-mediumOpacity"
                  >
                    {data.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div>
        {(() => {
          if (activeTabMenu === 0) return <EmailBox />;
          else if (activeTabMenu === 1) {
            return <EarBud />;
          } else if (activeTabMenu === 2) {
            return <Headphone />;
          } else if (activeTabMenu === 3) {
            return <EmailBox />;
          } else {
            return <AllEarBuds />;
          }
        })()}
      </div>
    </>
  );
};

export default Sound;
