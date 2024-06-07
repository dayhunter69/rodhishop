import React from 'react';

const ImageGallary = ({ info, handleClick, index, imgtab }) => {
  return (
    <>
      <div
        className={`${
          imgtab === index
            ? 'w-[82px] h-[82px] flex items-center justify-center cursor-pointer border border-solid border-secondary-darkOpacity rounded-[3px]'
            : 'w-[82px] h-[82px] flex items-center justify-center cursor-pointer'
        }`}
        // onClick={() => handleClick(index)}
        onMouseEnter={() => handleClick(index)}
      >
        <img
          src={info.img}
          alt=""
          className="w-[80px] h-[80px] border-solid border border-transparent"
        />
      </div>
    </>
  );
};

export default ImageGallary;
