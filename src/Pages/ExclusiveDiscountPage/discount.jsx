import React from 'react';

const ExclusiveDiscount = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-12 ">
      <p className="font-Arial not-italic font-bold text-Heading text-center uppercase pb-5 text-primary mobile:text-Subheading1 mobile:pb-0">
        Exclusive Discount for Rodhi Sources&#39;s Client
      </p>
      <div className="flex flex-row rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6  h-full text-center">
            <h2 className="text-2xl font-bold mb-4">Hear Out</h2>
            <p className="text-gray-700 text-xl">
              Enter your phone number while checking out to get 10% off on all
              products
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white p-6  h-full">
            <img
              src="https://via.placeholder.com/200"
              alt="Sample"
              className="w-full h-[200px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDiscount;
