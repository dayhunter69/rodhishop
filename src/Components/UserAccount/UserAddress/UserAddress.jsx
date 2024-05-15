import React from "react";
import { Field, Form, Formik } from "formik";
import "../../Navbar/Style/UserAddress.css";
import UserAddressProvince from "./UserAddressProvince";

const UserAddress = () => {
  const initialValues = {
    address: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="w-[944px] h-[100%] mx-auto my-0">
        <p className="font-Arial not-italic font-bold text-[32px] leading-[37px] capitalize text-center text-primary pt-[25px]">
          My Address
        </p>
        <div className="w-[432px] h-[570px] flex items-center justify-center bg-white mx-auto mt-[40px] mb-0 shadow-custom7">
          <div className="w-[383px]">
            <div className="w-[382px] flex items-center pl-[15px]">
              <p className="font-Arial not-italic font-bold text-Paragraph3 capitalize text-secondary-darkOpacity">
                Add Address
              </p>
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form noValidate>
                <UserAddressProvince />
                <Field
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-[382px] h-[50px] border border-solid border-secondary-darkOpacity mt-[20px] pl-[20px] outline-0"
                />
                <div className="flex items-center justify-center w-[382px] h-[51px] mt-[20px]">
                  <button
                    className="w-[382px] h-[50px] bg-white border border-solid border-secondary-darkOpacity 
                     font-Arial not-italic font-normal text-Paragraph2  capitalize text-secondary-darkOpacity"
                  >
                    add on map
                  </button>
                </div>
                <div className="w-[124px] gap-[10px] flex items-center mt-[34px]">
                  <input
                    type="checkbox"
                    value=""
                    className="UserAdress-Checkbox"
                  />
                  <p className="font-Arial not-italic font-normal text-Paragraph1 capitalize text-secondary-darkOpacity">
                    set a default
                  </p>
                </div>
                <div className="w-[185px] h-[55px] mt-[30px] mb-0 mx-auto">
                  <button
                    type="submit"
                    className="w-[182px] h-[50px] bg-white border border-solid border-secondary-darkOpacity shadow-custom7
                    font-Arial not-italic font-bold text-Paragraph2 capitalize text-secondary-darkOpacity"
                  >
                    save address
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
