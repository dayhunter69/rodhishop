import React from "react";
import "../../Components/Navbar/Style/UserProfile.css";

const UploadProfileImg = ({ fileA }) => {
  const [profileimg, setProfileImg] = React.useState();

  const reader = new FileReader();
  reader.readAsDataURL(fileA);
  reader.onload = () => {
    setProfileImg(reader.result);
  };

  return (
    <>
      <img src={profileimg} alt="profilepic" className="UserProfile-Inner-Circle-Img" />
    </>
  );
};

export default UploadProfileImg;
