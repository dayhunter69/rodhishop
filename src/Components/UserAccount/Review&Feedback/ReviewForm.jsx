import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Icon } from "@iconify/react";
import ReviewRating from "./ReviewRating";

const ReviewForm = () => {
  const [flag, setFlag] = useState(false);

  const initialValues = {
    brand: "",
    model: "",
    rating: "",
    review: "",
    add: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      {!flag ? (
        <div className="w-[965px] flex items-center justify-evenly mt-[50px]">
          <div className="w-[594px] h-[589px] flex items-center justify-center bg-white shadow-custom1">
            <div className="w-[499.50px]">
              <p className="font-Arial not-italic font-normal text-Paragraph1 capitalize text-primary">
                add review to yantram product
              </p>
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form noValidate>
                  <Field
                    type="text"
                    name="brand"
                    placeholder="choose a brand"
                    className="w-[498px] h-[43px] mt-[25px] pl-[17px] outline-0 border border-solid border-secondary-darkOpacity
                      font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity"
                  />
                  <Field
                    type="text"
                    name="model"
                    placeholder="choose a model"
                    className="w-[498px] h-[43px] mt-[25px] pl-[17px] outline-0 border border-solid border-secondary-darkOpacity
                      font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity"
                  />
                  <Field
                    type="text"
                    as="textarea"
                    name="rating"
                    placeholder="Rating"
                    className="w-[498px] h-[91.97px] resize-none mt-[25px] pt-[10px] pl-[17px] outline-0 border border-solid border-secondary-darkOpacity
                    font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity"
                  />
                  <Field
                    type="text"
                    as="textarea"
                    name="review"
                    placeholder="write a review....."
                    className="w-[498px] h-[91.97px] resize-none mt-[25px] pt-[10px] pl-[17px] outline-0 border border-solid border-secondary-darkOpacity
                    font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity"
                  />
                  <div className="flex items-center gap-[15px] h-[40px] mt-[23px] border border-solid border-secondary-darkOpacity">
                    <div className="w-[28px] h-[23px] cursor-pointer flex items-center justify-center ml-[13px]">
                      <Icon
                        icon="material-symbols:add-circle-outline-rounded"
                        width="24"
                        height="24"
                        color="rgba(0, 0, 0, 0.71)"
                      />
                    </div>
                    <p className="font-Arial not-italic font-normal text-Paragraph1 text-secondary-darkOpacity capitalize cursor-pointer">
                      add image
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-[498px] h-[39.64px] bg-black text-white mt-[23px] font-Arial not-italic font-normal text-Paragraph1 capitalize"
                    onClick={handleClick}
                  >
                    save
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      ) : null}
      {flag && <ReviewRating />}
    </>
  );
};

export default ReviewForm;
