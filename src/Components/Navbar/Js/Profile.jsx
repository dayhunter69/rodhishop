import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Profile = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const navigate = useNavigate();

  const handleLoginPage = (type) => () => {
    query.set("type", type);

    navigate(`/login?${query.toString()}`);
  };

  return (
    <>
      <div className="w-[245px] h-[145px] flex flex-col items-center justify-center bg-black">
        <button
          className="w-[232px] h-[50px] bg-white text-primary flex items-center justify-center 
           font-Arial not-italic font-normal text-Paragraph2 uppercase hover:bg-black hover:text-white border  
           border-solid hover:border-white"
          onClick={handleLoginPage("login")}
        >
          login
        </button>
        <button
          className="w-[232px] h-[50px] mt-[21px] flex items-center justify-center border border-solid border-white 
          font-Arial not-italic font-normal text-Paragraph2 uppercase text-white hover:text-primary hover:bg-white"
          onClick={handleLoginPage("singup")}
        >
          signup and get 10% off
        </button>
      </div>
    </>
  );
};

export default Profile;
