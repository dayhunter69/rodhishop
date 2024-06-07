import React from 'react';
// import img1 from "../../Components/images/Noise cancellation.png";
// import img2 from "../../Components/images/driverSize.png";
// import img3 from "../../Components/images/battery.png";
// import img4 from "../../Components/images/chargingCase.png";
// import img5 from "../../Components/images/Bluetooth.png";
// import img6 from "../../Components/images/water resistance.png";
// import img7 from "../../Components/images/charging time.png";
// import img8 from "../../Components/images/Touch Control.png";
// import img9 from "../../Components/images/time charging case.png";
// import img10 from "../../Components/images/true wireless.png";

// export const specList = [
//   {
//     id: 1,
//     img: img1,
//     specInfo: 'Active Noise cancellation',
//   },
//   {
//     id: 2,
//     img: img2,
//     specInfo: '12mm Driver size',
//   },
//   {
//     id: 3,
//     img: img3,
//     specInfo: 'Up to 6 hours of listening time on one charge',
//   },
//   {
//     id: 4,
//     img: img4,
//     specInfo: 'portable charging case',
//   },
//   {
//     id: 5,
//     img: img5,
//     specInfo: 'above 5.0 version upto 2km',
//   },
//   {
//     id: 6,
//     img: img6,
//     specInfo: '30dB of water resistance',
//   },
//   {
//     id: 7,
//     img: img7,
//     specInfo: '24 hrs of charging time',
//   },
//   {
//     id: 8,
//     img: img8,
//     specInfo: 'Hi-Fi Touch Control Gaming Earbud',
//   },
//   {
//     id: 9,
//     img: img9,
//     specInfo: '5 hours of listening time with charging case',
//   },
//   {
//     id: 10,
//     img: img10,
//     specInfo: 'true wireless',
//   },
// ];

import specImage from '../../description/Puluz40/ProductImage/puluzlightbox.png';
const TechSpec = () => {
  return (
    // <>
    //   <p className="font-Arial not-italic font-bold text-Heading uppercase text-primary text-center pb-0 pt-[40px]">
    //     specification
    //   </p>
    //   <div className="flex gap-x-[19px] gap-y-[45px] flex-wrap w-[1060px] mx-auto mt-[60px]">
    //     {specList.map((spec, index) => {
    //       return (
    //         <div
    //           key={index}
    //           className="flex gap-y-[15px] flex-col items-center  w-[250px]"
    //         >
    //           <div
    //             className="flex items-center justify-center w-[84px] h-[84px] rounded-[8px] border border-solid border-secondary-lightGrey"
    //             style={{
    //               filter:
    //                 'drop-shadow(0px 3.37297px 3.37297px rgba(0, 0, 0, 0.25))',
    //             }}
    //           >
    //             <img src={spec.img} alt="" className="w-[58.8px] h-[58.8px]" />
    //           </div>
    //           <p className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize px-[35px] text-primary">
    //             {spec.specInfo}
    //           </p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
    <>
      <img
        src={specImage}
        alt="Specification"
        className="px-20 mt-10 mx-auto"
      />
    </>
  );
};

export default TechSpec;
