import React from "react";

const HomeChargerSection = () => {
  return (
    <>
      <div className="bg-LaptopCharger w-[100%] h-[600px] mb-[60px] bg-cover bg-no-repeat mobile:hidden"></div>
      <div className="bg-MobileCharger w-[100%] h-[553px] mb-[45px] bg-BgSize bg-no-repeat hidden mobile:block"></div>
    </>
  );
};

export default HomeChargerSection;
