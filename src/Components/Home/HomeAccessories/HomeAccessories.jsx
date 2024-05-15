import React from "react";

const HomeAccessories = () => {
  return (
    <>
      <div className="bg-LaptopAccessories w-[100%] h-[600px] mb-[75px] bg-cover bg-no-repeat mobile:hidden"></div>
      <div className="bg-MobileAccessories w-[100%] h-[553px] mb-[50px] bg-BgSize bg-no-repeat hidden mobile:block"></div>
    </>
  );
};

export default HomeAccessories;
