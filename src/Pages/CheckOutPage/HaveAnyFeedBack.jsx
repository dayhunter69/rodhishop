import React from "react";
import "../../Components/Navbar/Style/FeedbackForm.css"
import { Field, Form, Formik } from "formik";

const HaveAnyFeedBack = () => {

  return (
    <>
     <div className="HaveAnyFeedBack-Top-Container-Style">
        <div className="FeedbackForm-Wrapper">
          <div className="FeedbackForm-Container">
            <div className="FeedbackForm-Title">
              <p>add feedback to yantram product</p>
            </div>
            <Formik>
              <Form onvalidate>
                <Field
                  placeholder="For which page/section you want to write feedback for?"
                  className="FeedbackForm-Text-field"
                />
                <Field
                  as="textarea"
                  placeholder=" write a feedback "
                  className="FeedbackForm-textarea-field"
                />
                <button
                  type="submit"
                  className="FeedbackForm-submit-btn"
                //   onClick={handleClick}
                >
                  save
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        </div>
    </>
  );
};

export default HaveAnyFeedBack;
