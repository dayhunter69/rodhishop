import React from "react";
import { Field, Form, Formik } from "formik";
import { Icon } from "@iconify/react";

const ContactPreference = () => {
  return (
    <>
      <div className="w-[600px] mt-[30px] mx-auto mb-0">
        <div className="w-[571px] my-0 mx-auto">
          <p className="font-Arial not-italic font-normal text-Paragraph3 text-center capitalize text-secondary-darkOpacity">
            how would you like to hear about our new update offers, and other
            cool stuff?
          </p>
        </div>
        <Formik>
          <Form>
            <div className="w-[401.5px] mt-[20px] mx-auto mb-0">
              <Field
                placeholder="arbinkhadka007@gmail.com"
                className="w-[400px] h-[50px] outline-0 border border-solid border-secondary-darkOpacity font-Arial not-italic 
                  font-normal text-Paragraph3 pl-[20px] text-secondary-darkOpacity"
              />
            </div>
            <div className="w-[120px] h-[44px] flex items-center gap-[10px] mt-[10px] mx-auto mb-0">
              <div className="flex items-center h-[30px] cursor-pointer">
                <Icon
                  icon="material-symbols:add-circle-outline-rounded"
                  color="#545454"
                  width="24"
                  height="24"
                />
              </div>
              <button className="h-[30px] font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                add new
              </button>
            </div>
            <div className="w-[401.5px] mt-[20px] mb-0 mx-auto">
              <Field
                placeholder="9804360634"
                className="w-[400px] h-[50px] outline-0 border border-solid border-secondary-darkOpacity font-Arial not-italic 
                font-normal text-Paragraph3 pl-[20px] text-secondary-darkOpacity"
              />
            </div>
            <div className="w-[120px] h-[44px] flex items-center gap-[10px] mt-[10px] mx-auto mb-0">
              <div className="flex items-center h-[30px] cursor-pointer">
                <Icon
                  icon="material-symbols:add-circle-outline-rounded"
                  color="#545454"
                  width="24"
                  height="24"
                />
              </div>
              <button className="h-[30px] font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-darkOpacity">
                add new
              </button>
            </div>
            <div className="w-[182px] mt-[20px] mb-0 mx-auto">
              <button
                className="w-[182px] h-[50px] border border-solid border-primary shadow-custom1 font-Arial not-italic 
                font-normal text-Paragraph3 text-primary"
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

export default ContactPreference;
