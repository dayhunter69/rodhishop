import React from "react";

const Button = ({ index, item }) => {
  const pro = item;
  const [buttonhoverImage, setButtonHoverImage] = React.useState(null);

  return (
    <div
      key={index}
      className="max-w-[320px] h-[460px] flex flex-col items-center justify-between mx-auto my-0 mobile:h-auto mobile:w-[150px]"
    >
      <div className="max-w-[319px] h-[305px] relative mobile:flex mobile:items-center mobile:justify-center mobile:w-[150px] mobile:h-[150px]">
        {buttonhoverImage === 1 ? (
          <img
            src={pro.buttonhoverImg}
            className="w-[317px] h-[300px] mobile:w-[147px] mobile:h-[147px]"
          />
        ) : buttonhoverImage === 2 ? (
          <img
            src={pro.buttonhoverImg1}
            className="w-[317px] h-[300px] mobile:w-[147px] mobile:h-[147px]"
          />
        ) : (
          <img
            src={pro.Img}
            className="w-[317px] h-[300px] mobile:w-[147px] mobile:h-[147px]"
          />
        )}
      </div>
      <div className="max-w-[320px] max-h-[125px] mt-[15px] mobile:w-[146px] mobile:mt-[5px]">
        <p className="font-Arial not-italic font-bold text-Paragraph3 text-center uppercase text-primary mobile:text-Paragraph1">
          {pro.title}
        </p>
        <p
          className="font-Arial not-italic font-normal text-Paragraph2 text-center uppercase text-primary pt-[8px] 
              mobile:pt-[2px] mobile:text-Paragraph0"
        >
          {pro.productName}
        </p>
        <p className="font-Arial not-italic font-normal text-Paragraph2 text-center pt-[8px] mobile:text-Paragraph0 mobile:pt-[2px]">
          {pro.price}
        </p>
        <div className="w-[175px] flex justify-center mt-[8px] mx-auto mb-0 mobile:w-[145px]">
          {pro.bgColor.map((datas, index) => {
            return (
              <div key={index} className="my-0 mx-[2.5px]">
                <button
                  className="w-[15px] h-[15px] cursor-pointer rounded-[50%]"
                  style={{
                    backgroundColor: `${datas.background}`,
                    border: `1px solid ${datas.borderColor}`,
                  }}
                  onMouseEnter={() => setButtonHoverImage(index)}
                  onMouseLeave={() => setButtonHoverImage(null)}
                ></button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Button;
