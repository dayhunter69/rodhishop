import React from "react";

const EmailBox = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white  mx-auto">
        <p className="font-Arial not-italic font-normal text-primary text-Paragraph1">
          Oops! No products available at the moment. Be the first to know when
          we restock by sharing your email with us. We'll keep you informed!
        </p>
        <input
          type="email"
          placeholder="your email address"
          className="w-[180px] h-[30px] border border-solid border-secondary-lightGrey capitalize 
             pl-[12px] outline-0 text-Paragraph0 mt-[15px]"
        />
      </div>
    </>
  );
};

export default EmailBox;
