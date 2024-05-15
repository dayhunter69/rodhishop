import React, { useState } from "react";
import "../../../Components/Navbar/Style/PaymentMethod.css";
import img1 from "../../../Components/images/cash-on-delivery.png";
import img2 from "../../../Components/images/esewa.png";
import img3 from "../../../Components/images/khalti.png";
import img4 from "../../../Components/images/imepay.png";
import img5 from "../../../Components/images/Visa.png";
import img6 from "../../../Components/images/master-card.png";
import { Field, Form, Formik } from "formik";
import PaymentCard from "./PaymentCard";

export const paymentList = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  // {
  //   id: 5,
  //   img: img5,
  //   img: img6,
  // },
];

export const visaList = [
  {
    img1: img5,
    img2: img6,
  },
];

const PaymentSection = () => {
  const [show, setShow] = useState();
  const initialValues = {
    number: "",
    name: "",
  };
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="PaymentMethod-Container"
        // style={{ border: "1px solid red" }}
      >
        <p className="font-Arial not-italic font-bold text-Paragraph3 uppercase text-primary">
          Payment Method
        </p>
        <div
          className="flex gap-[34px]  w-[1120px] mt-[30px]"
          // style={{ border: "1px solid red" }}
        >
          {paymentList.map((info, index) => {
            return <PaymentCard info={info} key={index} />;
          })}
          <div className="flex flex-col justify-center bg-white w-[276px] h-[150px] shadow-custom1">
            <button
              onClick={handleClick}
              className="w-[13px] h-[13px] bg-white rounded-[50%] border border-solid border-primary 
              ml-[20px] mb-[20px]"
            ></button>
            <div className="flex mx-auto w-[203px] h-[77px]">
              <img src={img5} alt="" width="101" height="74" />
              <img src={img6} alt="" width="101" height="74" />
            </div>
          </div>
        </div>
        {show && (
          <div className="PaymentMethod-Card-Container">
            <p className="font-Arial not-italic font-bold text-Paragraph3 uppercase text-primary">
              Card Details
            </p>
            <div className="CardDetails-Top-Img">
              <div className="CardDetails-Img-Container">
                <img src={img5} alt="" className="CardDetails-Img" />
              </div>
              <div className="CardDetails-Img-Container">
                <img src={img6} alt="" className="CardDetails-Img" />
              </div>
            </div>
            <div className="CardDetails-Form-Container">
              <Formik initialValues={initialValues}>
                <Form>
                  <Field
                    type="text"
                    name="number"
                    placeholder="card number"
                    className="CardDetails-Text-Field"
                  />
                  <Field
                    type="text"
                    name="name"
                    placeholder="card holder name"
                    className="CardDetails-Text-Field"
                  />
                  <div className="CardDetails-expiry-date">
                    <p>expiry date</p>
                  </div>
                  <div className="CardDetails-Date-container">
                    <div className="CardDetails-Month">
                      <p>mm</p>
                    </div>
                    <div className="CardDetails-Year">
                      <p>yy</p>
                    </div>
                  </div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="security code"
                    className="CardDetails-Text-Field"
                  />
                  <button type="submit" className="CardDetails-Pay-Btn">
                    pay now
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PaymentSection;
