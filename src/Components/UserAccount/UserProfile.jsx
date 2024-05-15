import React, { useState } from "react";
import img1 from "../../Components/images/User_Account_Profile.png";
import img2 from "../../Components/images/UserProfile-Inner-Circle-Img.png";
import { Field, Form, Formik } from "formik";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import UploadProfileImg from "./UploadProfileImg";
import UploadCoverImg from "./UploadCoverImg";
import B from "./B";

export const categoryA = [
  {
    id: 1,
    Gender: "Gender",
    option: [
      {
        id: 1,
        GenderType: "Male",
        GenderValue: "Male",
      },
      {
        id: 2,
        GenderType: "Female",
        GenderValue: "Female",
      },
      {
        id: 3,
        GenderType: "Rather not to say",
        GenderValue: "Rather not to say",
      },
    ],
  },
];
export const categoryB = [
  {
    title: "Day",
    state: "day",
    option: [
      { DateType: "Sunday", value: "sunday" },
      { DateType: "Monday", value: "monday" },
      { DateType: "Tuesday", value: "tuesday" },
      { DateType: "Wednesday", value: "wednesday" },
      { DateType: "Thursday", value: "thursday" },
      { DateType: "Friday", value: "frisday" },
      { DateType: "Saturday", value: "Saturday" },
    ],
  },
  {
    title: "Month",
    state: "month",
    option: [
      { DateType: "January", value: "january" },
      { DateType: "March", value: "march" },
      { DateType: "April", value: "april" },
      { DateType: "May", value: "may" },
      { DateType: "June", value: "june" },
      { DateType: "July", value: "july" },
      { DateType: "Augest", value: "augest" },
    ],
  },
  {
    title: "Year",
    state: "year",
    option: [
      { DateType: "2017", value: "2017" },
      { DateType: "2018", value: "2018" },
      { DateType: "2019", value: "2019" },
      { DateType: "2020", value: "2020" },
      { DateType: "2021", value: "2021" },
      { DateType: "2022", value: "2022" },
      { DateType: "2023", value: "2023" },
    ],
  },
];
const UserProfile = () => {
  const profileRef = useRef(null);
  const coverRef = useRef(null);
  const [genderclick, setGenderClick] = useState(false);
  const [genderselect, setGenderSelect] = useState("");
  const [select, setSelect] = useState({});

  const initialValues = {
    fullname: "",
    email: "",
    phonenumber: "",
    gender: "",
    profile: "",
    cover: "",
  };
  const submitForm = (values) => {
    console.log("value is", values);
  };
  const handleGenderClick = () => {
    setGenderClick(!genderclick);
  };
  const handleGenderSelect = (info) => {
    setGenderSelect(info.GenderValue);
  };
  const handleClick = (state, info) => {
    setSelect((prev) => ({ ...prev, [state]: info.value }));
  };

  return (
    <>
      <div className="w-[944px] mx-auto my-0">
        <p className="font-Arial not-italic font-bold text-[32px] leading-[37px] capitalize text-center text-primary pt-[25px]">
          My Profile
        </p>
        <Formik onSubmit={submitForm} initialValues={initialValues}>
          {({ setFieldValue, values }) => (
            <Form noValidate>
              <div className="relative flex items-center justify-center mt-[20px]">
                <div className="w-[901px] h-[305px]">
                  {values.cover ? (
                    <UploadCoverImg fileB={values.cover} />
                  ) : (
                    <img src={img1} className="w-[899px] h-[304px]" />
                  )}
                </div>
                <input
                  ref={coverRef}
                  hidden
                  type="file"
                  name="cover"
                  onChange={(e) => {
                    setFieldValue("cover", e.target.files[0]);
                  }}
                />
                <div
                  className="flex items-center justify-center gap-[7px] absolute w-[30px] h-[30px] bottom-[15px] right-[30px] 
                  cursor-pointer rounded-[6px] bg-white"
                  onClick={() => {
                    coverRef.current.click();
                  }}
                >
                  <div className="flex items-center justify-center w-[22px] h-[22px]">
                    <Icon icon="tabler:camera-plus" width="22" height="22" />
                  </div>
                </div>
                <div className="w-[264px] h-[264px] absolute top-[128px] rounded-[50%] bg-white flex items-center justify-center">
                  <input
                    ref={profileRef}
                    hidden
                    type="file"
                    name="profile"
                    onChange={(e) => {
                      setFieldValue("profile", e.target.files[0]);
                    }}
                  />
                  <div
                    className="flex items-center justify-center absolute w-[22px] h-[22px] top-[19px] right-[55px] rounded-[50%]
                     bg-white cursor-pointer"
                    onClick={() => {
                      profileRef.current.click();
                    }}
                  >
                    <Icon icon="tabler:camera-plus" width="22" height="22" />
                  </div>
                  <div className="w-[247px] h-[247px] rounded-[50%] border border-solid border-[gray]">
                    {values.profile ? (
                      <UploadProfileImg fileA={values.profile} />
                    ) : (
                      <img
                        src={img2}
                        alt=""
                        className="w-[245.5px] h-[245.5px] rounded-[50%]"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[507px] h-[485px] mt-[90px] mx-auto">
                <Field
                  type="text"
                  name="fullname"
                  placeholder="full name"
                  className="w-[505px] h-[50px] outline-0 border border-solid border-secondary-darkOpacity mb-[20px] pl-[20px] 
                      font-Arial font-normal not-italic text-Paragraph2 capitalize text-secondary-darkOpacity"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-[505px] h-[50px] outline-0 border border-solid border-secondary-darkOpacity mb-[20px] pl-[20px] 
                      font-Arial font-normal not-italic text-Paragraph2 capitalize text-secondary-darkOpacity"
                />
                <Field
                  type="text"
                  name="phonenumber"
                  placeholder="phone number"
                  className="w-[505px] h-[50px] outline-0 border border-solid border-secondary-darkOpacity mb-[20px] pl-[20px] 
                      font-Arial font-normal not-italic text-Paragraph2 capitalize text-secondary-darkOpacity"
                />
                <div
                  className="relative w-[505px] h-[50px] cursor-pointer"
                  onClick={handleGenderClick}
                >
                  <div className="flex absolute top-[18px] right-[15px] cursor-pointer">
                    <i
                      className={
                        genderclick ? "fa fa-angle-up" : "fa fa-angle-down"
                      }
                    ></i>
                  </div>
                  <div
                    className="w-[505px] h-[50px] flex items-center font-Arial not-italic font-normal text-Paragraph2 capitalize
                     text-secondary-darkOpacity pl-[20px] cursor-pointer border border-solid border-secondary-darkOpacity"
                  >
                    {categoryA.map((list, index) => {
                      return (
                        <div key={index}>
                          {genderselect ? (
                            <p>{genderselect}</p>
                          ) : (
                            <p>{list.Gender}</p>
                          )}
                          {genderclick ? (
                            <div className="w-[505px] absolute top-[50px] left-0 z-[2] bg-white border border-t-0 border-solid border-secondary-textColor">
                              {list.option.map((info, index) => {
                                return (
                                  <div key={index}>
                                    <div
                                      className="w-[504px] h-[50px] pl-[20px] flex items-center font-Arial not-italic font-normal text-[15px] leading-[18px]
                                        text-secondary-darkOpacity capitalize cursor-pointer hover:text-white hover:bg-secondary-greyOpacity"
                                      onClick={() => {
                                        handleGenderSelect(info);
                                      }}
                                    >
                                      <p>{info.GenderType}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-[505px] h-[50px] mt-[20px] flex justify-between cursor-pointer">
                  {categoryB.map((date, index) => {
                    return (
                      <B
                        key={index}
                        value={select?.[date.state]}
                        option={date.option}
                        title={date.title}
                        handleClick={(info) => handleClick(date.state, info)}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-center w-[183px] h-[55px] mt-[20px] mx-auto mb-0">
                  <button
                    className="w-[180px] h-[50px] bg-white border border-solid border-primary font-Arial 
                      font-bold not-italic text-Paragraph2 capitalize text-primary"
                  >
                    save
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UserProfile;
