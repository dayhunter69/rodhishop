import React from "react";
import { Field, Form, Formik } from "formik";

const SecurityTab = () => {
  const initialValues = {
    email: "",
    number: "",
  };
  return (
    <>
      <div className="w-[500px] h-[600px] mt-[40px] mb-0 mx-auto">
        <div className="flex items-center h-[32px]">
          <p className="font-Arial font-bold not-italic text-Paragraph3 uppercase text-secondary-darkOpacity">
            user information
          </p>
        </div>
        <Formik initialValues={initialValues}>
          <Form novalidate>
            <div className="mt-[25px] flex items-center gap-[15px]">
              <Field
                type="email"
                name="email"
                placeholder="arbinkhadka007@gmail.com"
                className="w-[409px] h-[50px] pl-[20px] outline-0 font-Arial not-italic font-normal text-Paragraph3 text-secondary-darkOpacity border border-solid border-secondary-darkOpacity"
              />
              <button className="w-[68px] h-[28px]  font-Arial not-italic font-normal text-Paragraph3 text-primary capitalize">
                Change
              </button>
            </div>
            <div className="mt-[25px] flex items-center gap-[15px]">
              <Field
                type="text"
                name="number"
                placeholder="9804360634"
                className="w-[409px] h-[50px] pl-[20px] outline-0 font-Arial not-italic font-normal text-Paragraph3 text-secondary-darkOpacity border border-solid border-secondary-darkOpacity "
              />
              <button className="w-[68px] h-[28px] font-Arial not-italic font-normal text-Paragraph3 text-primary capitalize">
                Change
              </button>
            </div>
            <div className="w-[409px] mt-[25px] flex justify-center">
              <button
                className="w-[182px] h-[50px] bg-white border border-solid border-primary shadow-custom1 
                  font-Arial not-italic font-normal text-Paragraph3 capitalize text-primary"
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SecurityTab;
