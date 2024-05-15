import React from "react";
import "../../../Components/Navbar/Style/Billing.css";
import { Icon } from "@iconify/react";

export const billingList = [
  {
    id: 1,
    title: "Delivery Address",
    icon1: "material-symbols:edit-square-outline",
    name: "arbin khadka",
    email: "arbinkhadka@gmail.com",
    number: "9804360634",
    province: "Bagmati Province",
    city: "kathmandu",
    area: "kapan",
  },
  {
    id: 2,
    title: "billing address",
    icon1: "material-symbols:edit-square-outline",
    name: "arbin khadka",
    email: "arbinkhadka@gmail.com",
    number: "9804360634",
    province: "Bagmati Province",
    city: "kathmandu",
    area: "kapan",
  },
];
const Billing = () => {
  return (
    <>
      <div className="Billing-Wrapper">
        <div className="Billing-Container ">
          {billingList.map((info, index) => {
            return (
              <div key={index}>
                <div className="Billing-Box1">
                  <div className="Billing-Delivery-Address">
                    <div className="Billing-Paragraph">
                      <p>{info.title}</p>
                    </div>
                    <div className="Billing-Edit-Icon">
                      <Icon
                        icon="material-symbols:edit-square-outline"
                        width="25"
                        height="25"
                      />
                    </div>
                  </div>
                  <div className="Billing-Paragraph2">
                    <p>{info.name}</p>
                  </div>
                  <div className="Billing-Paragraph2">
                    <p>{info.email}</p>
                  </div>
                  <div className="Billing-Paragraph2">
                    <p>{info.number}</p>
                  </div>
                  <div className="Billing-Paragraph2">
                    <p>{info.province}</p>
                  </div>
                  <div className="Billing-Paragraph2">
                    <p>{info.city}</p>
                  </div>
                  <div className="Billing-Paragraph2">
                    <p>{info.area}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Billing;
