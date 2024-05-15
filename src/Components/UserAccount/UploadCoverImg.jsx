import React from "react";
import "../../Components/Navbar/Style/UserProfile.css";

const UploadCoverImg = ({ fileB }) => {
  const [coverimg, setCoverImg] = React.useState();

    const reader = new FileReader();
    reader.readAsDataURL(fileB);
    reader.onload = () => {
      setCoverImg(reader.result);
    };
  return (
    <>
      <img src={coverimg} alt="coverpic" className="UserProfile-Top-Pic" />
    </>
  );
};

export default UploadCoverImg;
