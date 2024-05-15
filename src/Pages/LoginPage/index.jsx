import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import { useLocation } from "react-router-dom";

export const tabMenuList = [
  {
    id: 1,
    name: "Login",
  },
  {
    id: 2,
    name: "Create account",
  },
];
const ProfilePage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const type = query.get("type");

  const [active, setActive] = useState(type === "singup" ? 1 : 0);

  const handleActive = (index) => {
    setActive(index);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-[60px] mb-[400px]">
        <div className="w-[450px] flex flex-col items-center bg-white shadow-custom1">
          <div className="flex items-center justify-between w-[313px] h-[24.16px] mt-[10px]">
            {tabMenuList.map((list, index) => {
              return (
                <div key={index}>
                  <div
                    className="h-[24.16px] cursor-pointer"
                    onClick={() => {
                      handleActive(index);
                    }}
                  >
                    <p
                      className={`${
                        active === index
                          ? "font-Arial not-italic font-average text-Paragraph2 uppercase text-primary border-b-2 border-solid border-primary"
                          : "font-Arial not-italic font-normal text-Paragraph2 uppercase text-primary"
                      }`}
                    >
                      {list.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {active === 0 ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
