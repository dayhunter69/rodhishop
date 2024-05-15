import React from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, Field } from "formik";
import ProvinceDropdown from "./ProvinceDropdown/ProvinceDropdown";
import "../../../Components/Navbar/Style/Register.css";

const RegisterForm = () => {
  const initialValues = {
    username: "",
    phonenumber: "",
    email: "",
    checkbox1: "",
  };
  const handleRegisterFormSubmit = (values, formikHelpers) => {
    console.log(values);
    formikHelpers.resetForm(); // Form is reset After Form is Submit.
  };
  return (
    <>
      <div className="w-[333px] mt-[10px] mb-[30px]">
        <div className="w-[333px]">
          <p
            className="font-Arial not-italic font-normal text-Paragraph0 text-center 
             capitalize text-secondary-darkOpacity"
          >
            welcome to the inner circle, newbie.join us and see what all the
            fuss is about
          </p>
          <Formik
            initialValues={initialValues}
            onSubmit={handleRegisterFormSubmit}
          >
            <Form noValidate>
              <Field
                name="username"
                type="text"
                placeholder="your full name"
                className="w-[331.25px] h-[40px] outline-0 mt-[20px] pl-[13.13px] font-Arial 
                  not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity 
                  border border-solid border-primary"
              />

              <Field
                name="phonenumber"
                type="text"
                placeholder="your phone number"
                className="w-[331.25px] h-[40px] outline-0 mt-[20px] pl-[13.13px] font-Arial 
                  not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity 
                  border border-solid border-primary"
              />
              <Field
                name="email"
                type="email"
                placeholder="your email"
                className="w-[331.25px] h-[40px] outline-0 mt-[20px] pl-[13.13px] font-Arial 
                  not-italic font-normal text-Paragraph0 capitalize text-secondary-darkOpacity 
                  border border-solid border-primary"
              />
              <ProvinceDropdown />
              <div className="h-[40px] mt-[19.82px]">
                <button
                  className="w-[331px] h-[40px] bg-black font-Arial not-italic 
                  font-normal text-Paragraph0 uppercase text-white"
                >
                  create account
                </button>
              </div>
              <div className="flex items-center justify-around w-[331px] mt-[10px]">
                <div className="flex items-center justify-center w-[20px] h-[20px]">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    className="Map-Checkbox-Field"
                    checked
                  />
                </div>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph0 uppercase
                     text-secondary-darkOpacity"
                >
                  signup to receive the latest newsletter
                </p>
              </div>
              <div
                className="w-[193px] h-[38px] gap-[2px] mt-[16px] mb-0 mx-auto relative 
                  flex items-center justify-center"
              >
                <div className="w-[60px] border border-solid border-secondary-lightOpacity"></div>
                <p
                  className="font-Arial not-italic font-normal text-Paragraph2 uppercase
                   text-secondary-lightOpacity"
                >
                  or
                </p>
                <div className="w-[60px] border border-solid border-secondary-lightOpacity"></div>
              </div>
              <div className="mt-[15px]">
                <p
                  className="font-Arial not-italic font-normal text-Paragraph0  
                  text-center capitalize text-secondary-darkOpacity"
                >
                  express sign up
                </p>
                <div
                  className="w-[330px] h-[44px] bg-white mt-[15px] flex items-center 
                    justify-center gap-[17.41px] cursor-pointer shadow-custom1"
                >
                  <div className="flex items-center justify-center w-[25px] h-[25px]">
                    <Icon
                      icon="logos:facebook"
                      width=" 20.89"
                      height=" 20.89"
                    />
                  </div>
                  <div className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
                    <a href="https://www.facebook.com/">
                      sign in with facebook
                    </a>
                  </div>
                </div>
                <div
                  className="w-[330px] h-[44px] bg-white mt-[15px] flex items-center 
                    justify-center gap-[17.41px] cursor-pointer shadow-custom1"
                >
                  <div className="flex items-center justify-center w-[25px] h-[25px]">
                    <Icon
                      icon="flat-color-icons:google"
                      width=" 20.89"
                      height=" 20.89"
                    />
                  </div>
                  <div className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
                    <a href="https://www.google.com/">sign in with google</a>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
