import React, { useRef, useState } from "react";
import "../../Navbar/Style/NewsLetter.css";
import img1 from "../../images/nepal-flag.png";
import { Typography } from "@mui/material";
import { isValidNepalPhoneNumber } from "utils";

const init = {
  email: "",
  phoneNumber: "",
  emailCheckBox: false,
  phoneCheckbox: false,
  emailValidation: false,
  phoneNumberValidation: false,
};

const NewsLetter = () => {
  const [state, setState] = useState({ ...init });
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const emailValidationTextRef = useRef();
  const phoneNumberValidationTextRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      const emailValidation =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value.toLowerCase()
        );
      emailValidationTextRef.current.style.display = !emailValidation
        ? "block"
        : "none";

      setState((prev) => ({
        ...prev,
        [name]: value.toLowerCase(),
        emailValidation,
      }));
    } else {
      const phoneNumberValidation = isValidNepalPhoneNumber(value);
      phoneNumberValidationTextRef.current.style.display =
        !phoneNumberValidation ? "block" : "none";
      setState((prev) => ({ ...prev, [name]: value, phoneNumberValidation }));
    }
  };

  const handleClickSingUp = () => {
    const req = {
      email: state.email,
      phone: state.phoneNumber,
    };

    if (!state.emailValidation) delete req.email;
    if (!state.phoneNumberValidation) delete req.phone;

    alert("signuped successfully");
    setState({ ...init });
  };

  return (
    <>
      <div
        className="max-w-[1100px] mt-0 mb-[88px] mx-auto flex flex-wrap justify-between 
          mobile:mx-auto mobile:my-0"
      >
        <div className="w-[460px]">
          <div className="max-w-[454px]  my-0 mobile:w-[330px] mobile:mx-auto">
            <p
              className="font-Arial not-italic font-bold text-Heading capitalize
              text-primary mobile:text-Subheading1"
            >
              want to save some rupees? of course you do
            </p>
          </div>
          <div className="w-[436px] mt-[8px] mobile:w-[330px] mobile:mx-auto">
            <p
              className="font-Arial not-italic font-normal text-Paragraph3 capitalize
              text-primary mobile:text-Paragraph0 mobile:text-center mobile:mx-auto"
            >
              Signup for our newsletter and get update about our products and
              get 10% off on your first order
            </p>
          </div>
        </div>
        <div className="max-w-[405px] mobile:w-[313px] mobile:mx-auto mobile:mt-[20px] mobile:mb-0">
          <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-secondary-extraDarkOpacity">
            get updates by email OR phoneNumber
          </p>
          <div className="mobile:ml-0">
            <div className="flex items-center mx-0 my-[15px]">
              <div
                onClick={() => {
                  setState((prev) => ({
                    ...prev,
                    emailCheckBox: !prev.emailCheckBox,
                  }));
                }}
                className="flex"
              >
                <input
                  type="checkbox"
                  name="emailcheckbox"
                  className="Email-Checkbox"
                  checked={state.emailCheckBox}
                />
              </div>
              <div className="w-[68px] h-[22px] ml-[10px] flex items-center">
                <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-primary">
                  Email
                </p>
              </div>
            </div>
            {state.emailCheckBox && (
              <div className="mb-[13px]">
                <input
                  name="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="Email-Field"
                  required
                  value={state.email}
                  onChange={handleChange}
                  autoCapitalize={false}
                  type="email"
                  ref={emailRef}
                  autoFocus={true}
                  onFocus={() => {
                    if (!state.email)
                      emailValidationTextRef.current.style.display = "none";
                  }}
                  onBlur={() => {
                    if (!state.email)
                      emailValidationTextRef.current.style.display = "block";
                  }}
                />

                <Typography
                  ref={emailValidationTextRef}
                  color="error"
                  sx={{ fontSize: "14px", display: "none" }}
                >
                  {!state.email
                    ? "Phone number or email required. Don't be shy, enter one."
                    : "Warning: Invalid email may result in digital rejection."}
                </Typography>
              </div>
            )}
            <div className="flex items-center">
              <div
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    phoneCheckbox: !prev.phoneCheckbox,
                  }))
                }
                className="flex"
              >
                <input
                  type="checkbox"
                  name="phoneCheckbox"
                  className="Sms-Checkbox"
                  checked={state.phoneCheckbox}
                />
              </div>
              <div className="w-[68px] h-[22px] ml-[10px] flex items-center">
                <p className="font-Arial not-italic font-normal text-Paragraph3 capitalize text-primary">
                  Sms
                </p>
              </div>
            </div>
            {state.phoneCheckbox ? (
              <>
                <div className="flex mt-[12px]">
                  <div className="w-[60px] h-[40px] flex items-center justify-around border border-solid border-secondary-averageOpacity">
                    <div className="flex items-center justify-center w-[22px] h-[22px] mobile:w-[25px] mobile:h-[25px]">
                      <img src={img1} alt="" width="15" height="15" />
                    </div>
                    <p className="font-Arial not-italic font-normal text-primary text-Paragraph0 capitalize">
                      +977
                    </p>
                  </div>
                  <div className="flex items-center ml-[7px]">
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="YOUR PHONE NUMBER"
                      value={state.phoneNumber}
                      onChange={handleChange}
                      className="Sms-Field"
                      required
                      ref={phoneNumberRef}
                      onFocus={() => {
                        if (!state.phoneNumber)
                          phoneNumberValidationTextRef.current.style.display =
                            "none";
                      }}
                      onBlur={() => {
                        if (!state.phoneNumber)
                          phoneNumberValidationTextRef.current.style.display =
                            "block";
                      }}
                    />
                  </div>
                </div>
                <Typography
                  ref={phoneNumberValidationTextRef}
                  color="error"
                  sx={{ fontSize: "14px", display: "none" }}
                >
                  {!state.phoneNumber
                    ? "Phone number or email required. Don't be shy, enter one."
                    : "Warning: Invalid email may result in digital rejection."}
                </Typography>
              </>
            ) : null}
            <div className="mt-[18px]">
              <button
                className={
                  !state.emailValidation && !state.phoneNumberValidation
                    ? "w-[105px] h-[40px] rounded-[3px] text-secondary-gray85 font-Arial not-italic font-normal text-Paragraph3 capitalize  border border-solid border-secondary-gray85"
                    : "w-[105px] h-[40px] font-Arial not-italic font-normal text-Paragraph3 capitalize rounded-[3px] text-white bg-black"
                }
              >
                Sign up
              </button>
            </div>
            <p
              className="font-Arial not-italic font-normal text-Paragraph3 capitalize
               text-secondary-extraDarkOpacity mobile:text-Paragraph1 text-center pt-[13px]"
            >
              by signing up, you agree to our privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
