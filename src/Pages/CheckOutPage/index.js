import React, { useState } from "react";
import "../../Components/Navbar/Style/CheckOut.css";
import YourCart from "./YourCart";
import Billing from "./Review/Billing";
import PaymentSection from "./PaymentSection/PaymentSection";
import CheckOutModal from "./CheckOutModal";
import { Modal } from "@mui/material";
import Delivery from "./DeliveryAddress/Delivery";

const steps = ["address details", "review", "payment method"];

const CheckOut = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({}); // Store form data

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert("Form submitted with data");
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <CheckOutModal />
      </Modal>
      <div className="CheckOut-Title">
        <p>CheckOut</p>
      </div>
      <div className="CheckOut-Wrapper">
        <div className="CheckOut-container">
          <div className="Checkout-Line"></div>
          {steps.map((step, index) => (
            <div className="CheckOut-item" key={index}>
              <div
                className={`CheckOut-circle ${
                  currentStep === index ? "circleActive" : "circleDeactive"
                }`}
              >
                {index + 1}
              </div>
              <p className="CheckOut-Paragraph">{step}</p>
              {index < steps.length - 1 && <div className="CheckOut-line" />}
            </div>
          ))}
        </div>
      </div>
      <div className="CheckOut-Last-Wrapper">
        <div className="CheckOut-Left-Div">
          {currentStep === 0 && (
            <Delivery
              handleNext={handleNext}
              currentStep={currentStep}
              steps={steps}
            />
          )}
          {currentStep === 1 && (
            <Billing
              handleNext={handleNext}
              currentStep={currentStep}
              steps={steps}
            />
          )}
          {currentStep === 2 && (
            <PaymentSection
              handleNext={handleNext}
              currentStep={currentStep}
              steps={steps}
            />
          )}
          <div className="CheckOut-Btn-Container">
            {currentStep === steps.length - 1 ? (
              <button className="Checkout-Btn" onClick={handleOpen}>
                Checkout
              </button>
            ) : (
              <button
                className="CheckOut-Save-Btn "
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
              >
                Save and continue
              </button>
            )}
          </div>
        </div>
        {/* <div className="CheckOut-Right-Div" style={{border:"1px solid green"}}>
          <YourCart />
        </div> */}
      </div>
    </>
  );
};

export default CheckOut;
