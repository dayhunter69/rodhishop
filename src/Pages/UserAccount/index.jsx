import React, { useState } from "react";
import img1 from "../../Components/images/User_Account_Profile_Img.png";
import img2 from "../../Components/images/UserProfile-Inner-Circle-Img.png";
import { Icon } from "@iconify/react";
import CustomerCard from "./CustomerCard";
import UserProfile from "../../Components/UserAccount/UserProfile";
import UserAddress from "../../Components/UserAccount/UserAddress/UserAddress";
import UserPayment from "../../Components/UserAccount/UserPayment";
import WarrantySummary from "../../Components/UserAccount/WarrantySummary/WarrantySummary";
import ReviewFeedback from "../../Components/UserAccount/Review&Feedback/ReviewFeedback";
import AccountSetting from "../../Components/UserAccount/AccountSetting/AccountSetting";
import UserOrder from "../../Components/UserAccount/UserOrder/UserOrder";
import AlertBox from "../../Components/UserAccount/Logged Out/AlertBox";
import { Box, Modal } from "@mui/material";
import UploadProfileImg from "../../Components/UserAccount/UploadProfileImg";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export const SidebarMenuCategory = [
  {
    id: 1,
    Icon: "material-symbols:person-outline",
    title: "about me",
  },
  {
    id: 2,
    Icon: "ph:address-book-light",
    title: "address",
  },
  {
    id: 3,
    Icon: "mdi:account-payment-outline",
    title: "payment",
  },
  {
    id: 4,
    Icon: "ic:twotone-border-color",
    title: "order",
  },
  {
    id: 5,
    Icon: "ri:file-paper-2-line",
    title: "warranty request",
  },
  {
    id: 6,
    Icon: "mdi:voucher-outline",
    title: "voucher",
  },
  {
    id: 7,
    Icon: "material-symbols:reviews-outline",
    title: "review & feedback",
  },
  {
    id: 8,
    Icon: "ep:setting",
    title: "account setting",
  },
];
const UserAccountHome = () => {
  const navigate = useNavigate();
  const initialValues = {
    profile: "",
  };
  const [open, setOpen] = useState(false);
  const [sidebarmenutab, SetSidebarMenuTab] = useState();

  const handleClick = (index) => {
    SetSidebarMenuTab(index);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickHome = () => {
    navigate("/");
  };
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <AlertBox handleClose={handleClose} />
      </Modal>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "max-content auto",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="w-[372px] bg-[#fafafa]">
          <div className="w-[355px] h-[210px] flex mt-[18px] mb-0 mx-auto">
            <div className="flex items-center h-[29px] gap-[5px]">
              <div
                className="flex items-center justify-center w-[22px] h-[22px] cursor-pointer border border-solid border-primary"
                onClick={handleClickHome}
              >
                <Icon
                  icon="material-symbols:arrow-left"
                  width="22"
                  height="22"
                  color="rgba(0, 0, 0, 0.71)"
                />
              </div>
              <div
                className="flex items-center h-[24px] cursor-pointer"
                onClick={handleClickHome}
              >
                <p className="font-Arial not-italic font-normal text-Paragraph0 capitalize text-secondary-mediumOpacity">
                  Home
                </p>
              </div>
            </div>
            <div className="ml-[59px]">
              <Formik initialValues={initialValues}>
                {({ setFieldValue, values }) => (
                  <Form noValidate>
                    <div
                      className="flex items-center justify-center w-[156.31px] h-[156.4px] rounded-[50%] mb-[10px] mx-auto 
                        mt-0 border border-solid border-[gray]"
                    >
                      {values.profile ? (
                        <UploadProfileImg fileA={values.profile} />
                      ) : (
                        <img
                          src={img2}
                          alt=""
                          className="w-[156.31px] h-[156.4px] rounded-[50%]"
                        />
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
              <p className="font-Arial not-italic font-normal text-Subheading1 capitalize text-center text-primary">
                welcome,
                <span className="font-bold pl-[7px]">arbin</span>
              </p>
            </div>
          </div>
          <div className="w-[330px] mt-[30px] mb-0 mx-auto">
            {SidebarMenuCategory.map((list, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center h-[50px] gap-[15px]">
                    <div
                      className="flex items-center justify-center w-[25px] h-[25px] cursor-pointer"
                      onClick={() => {
                        handleClick(index);
                      }}
                    >
                      <Icon icon={list.Icon} width="20" height="20" />
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        handleClick(index);
                      }}
                    >
                      <p
                        className={`${
                          sidebarmenutab === index
                            ? "font-Arial not-italic font-semibold text-Paragraph2 text-center capitalize text-primary"
                            : "font-Arial not-italic font-normal text-Paragraph2 text-center capitalize text-primary"
                        }`}
                      >
                        {list.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[330px] h-[100px] mt-[25px] mb-0 mx-auto">
            <div className="flex items-center gap-[15px] h-[50px]">
              <div className="flex items-center justify-center w-[25px] h-[25px] cursor-pointer">
                <Icon
                  icon="mdi:information-variant-circle-outline"
                  width="20"
                  height="20"
                />
              </div>
              <p className="cursor-pointer font-Arial not-italic font-normal text-Paragraph2 text-center capitalize text-primary">
                need help?
              </p>
            </div>
            <div className="flex items-center gap-[15px] h-[50px]">
              <div
                className="flex items-center justify-center w-[25px] h-[25px] cursor-pointer"
                onClick={handleOpen}
              >
                <Icon icon="solar:logout-2-linear" width="20" height="20" />
              </div>
              <p
                onClick={handleOpen}
                className="cursor-pointer font-Arial not-italic font-normal text-Paragraph2 text-center capitalize text-primary"
              >
                log out
              </p>
            </div>
          </div>
        </div>
        {(() => {
          if (sidebarmenutab === 0) {
            return <UserProfile />;
          } else if (sidebarmenutab === 1) {
            return <UserAddress />;
          } else if (sidebarmenutab === 2) {
            return <UserPayment />;
          } else if (sidebarmenutab === 3) {
            return <UserOrder />;
          } else if (sidebarmenutab === 4) {
            return <WarrantySummary />;
          } else if (sidebarmenutab === 5) {
            return <p>voucher</p>;
          } else if (sidebarmenutab === 6) {
            return <ReviewFeedback />;
          } else if (sidebarmenutab === 7) {
            return <AccountSetting />;
          } else {
            return <CustomerCard />;
          }
        })()}
      </Box>
    </>
  );
};
export default UserAccountHome;
