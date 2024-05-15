import React, { useState } from "react";
import "../../../Components/Navbar/Style/Delivery.css";
import { Formik, Form, Field } from "formik";
import DeliveryProvince from "../DeliveryProvince";
import YourCart from "../YourCart";

const Delivery = () => {
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(true);

  const initialValues = {
    fullname: "",
    email: "",
    number: "",
    checkbox: "",
  };
  const handleClickCheckBox = () => {
    setShow(!show);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className="CheckOut-Right-Div">
        <div className="Delivery-Container">
          <div className="Delivery-Title">
            <p>delivery address</p>
          </div>
          <div className="Delivery-Form-Container">
            <Formik initialValues={initialValues}>
              <Form>
                <Field
                  type="text"
                  name="fullname"
                  placeholder="your full name"
                  className="Delivery-Text-Field"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="your email address*"
                  className="Delivery-Text-Field"
                />
                <Field
                  type="text"
                  name="number"
                  placeholder="your phone number"
                  className="Delivery-Text-Field"
                />
                <DeliveryProvince />
                <div className="Delivery-Billing-Address">
                  <p>billing address</p>
                </div>
                <div className="Delivery-checkbox-Container">
                  <div
                    className="Delivery-checkbox-Div"
                    onClick={handleClickCheckBox}
                  >
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="Delivery-Check-Box"
                      checked={checked}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <p className="font-Arial not-italic font-normal text-Paragraph2 capitalize text-secondary-darkOpacity">
                    same as delivery address
                  </p>
                </div>
                {show && (
                  <div>
                    <Field
                      type="text"
                      name="fullname"
                      placeholder="your full name"
                      className="Delivery-Text-Field"
                    />
                    <Field
                      type="text"
                      name="number"
                      placeholder="your phone number"
                      className="Delivery-Text-Field"
                    />
                    <Field
                      type="email"
                      name="number"
                      placeholder="your email address*"
                      className="Delivery-Text-Field"
                    />
                    <Field
                      type="text"
                      name="number"
                      placeholder="your address"
                      className="Delivery-Text-Field"
                    />
                  </div>
                )}
              </Form>
            </Formik>
          </div>
        </div>
        <YourCart />
      </div>
    </>
  );
};
export default Delivery;
