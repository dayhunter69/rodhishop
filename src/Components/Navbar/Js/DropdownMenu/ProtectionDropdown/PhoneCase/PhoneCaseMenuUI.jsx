import React from "react";
import AppleMenuList from "../AppleMenuList/AppleMenuList";
import SamsungMenuList from "../SamsungMenuList/SamsungMenuList";
import GoogleMenuList from "../GoogleMenuList/GoogleMenuList";
import HuaweiMenuList from "../HuaweiMenuList/HuaweiMenuList";

function PhoneCaseMenuUI({
  phonecaseType,
  handleShowClick,
  handleClick,
  handleClose,
}) {
  switch (phonecaseType) {
    case "apple":
      return (
        <AppleMenuList
          phonecaseType={phonecaseType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "samsung":
      return (
        <SamsungMenuList
          phonecaseType={phonecaseType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "huawei":
      return (
        <HuaweiMenuList
          phonecaseType={phonecaseType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "google":
      return (
        <GoogleMenuList
          phonecaseType={phonecaseType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    default:
      return null;
  }
}
export default PhoneCaseMenuUI;
