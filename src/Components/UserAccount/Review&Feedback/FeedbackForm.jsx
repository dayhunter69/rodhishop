import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import FeedbackRating from "./FeedbackRating";

const FeedbackForm = () => {
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <>
      {!flag ? (
        <div className="w-[965px] h-[500px] flex items-center justify-evenly">
          <div className="w-[594px] h-[357px] flex items-center justify-center bg-white shadow-custom8">
            <div className="w-[499.50px]">
              <p className="font-Arial not-italic font-normal text-Paragraph1 capitalize text-primary">
                add feedback to yantram product
              </p>
              <Formik>
                <Form onvalidate>
                  <Field
                    placeholder="For which page/section you want to write feedback for?"
                    className="w-[498px] h-[43px] mt-[25.93px] pl-[17px] outline-0 border border-solid border-secondary-darkOpacity
                      font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity"
                  />
                  <Field
                    as="textarea"
                    placeholder="write a feedback "
                    className="w-[498px] h-[100px] border border-solid border-secondary-darkOpacity outline-0 mt-[25.93px] 
                      pl-[11px] pt-[10px] resize-none font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity"
                  />
                  <button
                    type="submit"
                    className="w-[498px] h-[43px] bg-black mt-[25.93px] text-white font-Arial not-italic font-normal text-Paragraph1 capitalize"
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
      {flag && <FeedbackRating />}
    </>
  );
};

export default FeedbackForm;
