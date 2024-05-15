import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../../../Components/Navbar/Style/Login.css";
import { Button, TextField } from "@mui/material";

const LoginForm = () => {
  const [disable, setDisable] = useState(false);
  const phoneRegExp = /^[2-9]{2}[0-9]{8}/;
  const otpRegExp = /^(?=.*\d).{6,8}$/;

  const initialValues = {
    phoneNumber: "",
  };
  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Oh, look, an invalid number.")
      .required("Phone number required. Don't be shy, enter one."),
  });

  const handleLoginFormSubmit = (values) => {
    console.log(values);
  };
  const handleClick = () => {
    setDisable(true);
  };
  return (
    <>
      <div className="w-[333px] mt-[10px] mb-[30px]">
        <p
          className="font-Arial not-italic font-normal text-Paragraph0 capitalize 
            text-center text-secondary-mediumOpacity"
        >
          you’re back, HURRAY! we’ve been missing your brilliance
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLoginFormSubmit}
        >
          {({ errors, isValid, touched, dirty, isSubmitting }) => (
            <Form noValidate>
              <div className="w-[332px] mt-[20px]">
                <Field
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Your Valid Number or Email"
                  size="small"
                  as={TextField}
                  className="w-[331px] outline-0 font-Arial not-italic font-normal text-Paragraph0 pl-[13.13px] 
                     capitalize text-secondary-darkOpacity"
                  error={
                    Boolean(errors.phoneNumber) && Boolean(touched.phoneNumber)
                  }
                  helperText={
                    Boolean(touched.phoneNumber) && errors.phoneNumber
                  }
                  required
                />
              </div>
              {disable ? (
                <div className="w-[332px] mt-[20px]">
                  <Field
                    type="text"
                    name="otp"
                    placeholder="Enter Your OTP"
                    size="small"
                    as={TextField}
                    className="w-[331px] outline-0 font-Arial not-italic font-normal text-Paragraph0 pl-[13.13px] 
                        capitalize text-secondary-darkOpacity"
                    error={Boolean(errors.otp) && Boolean(touched.otp)}
                    helperText={Boolean(touched.otp) && errors.otp}
                    required
                  />
                </div>
              ) : null}
              <div className="w-[331px] h-[45px] mt-[15px] flex items-center justify-center">
                <Button
                  variant="contained"
                  type="submit"
                  className="w-[331px] h-[40px] bg-primary font-Arial not-italic font-normal text-Paragraph0 
                     uppercase text-white"
                  disabled={!isValid || !dirty}
                  onClick={handleClick}
                >
                  Next
                </Button>
              </div>
              <div className="mt-[15px]">
                <div
                  className="w-[330px] h-[44px] bg-white mt-[15px] flex items-center justify-center gap-[17.41px] 
                     shadow-custom1 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-[25px] h-[25px]">
                    <Icon icon="logos:facebook" width="20.89" height="20.89" />
                  </div>
                  <div className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
                    <a href="#">sign in with facebook</a>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center gap-[17.41px] w-[330px] h-[44px] bg-white mt-[15px] 
                   shadow-custom1 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-[25px] h-[25px">
                    <Icon
                      icon="flat-color-icons:google"
                      width="20.89"
                      height="20.89"
                    />
                  </div>
                  <div className="font-Arial not-italic font-normal text-Paragraph0 uppercase text-primary">
                    <a href="#">sign in with google</a>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
