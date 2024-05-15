import React from "react";
import EarphoneDropdown from "./EarphoneDropdown/EarphoneDropdown";
import EarbudDropdown from "./EarbudDropdown/EarbudDropdown";
import HeadphoneDropdown from "./HeadphoneDropdown/HeadphoneDropdown";

function SoundMenuUI({ soundType, handleShowClick, handleClick, handleClose }) {
  switch (soundType) {
    case "earphone":
      return (
        <EarphoneDropdown
          soundType={soundType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "earbud":
      return (
        <EarbudDropdown
          soundType={soundType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "headphone":
      return (
        <HeadphoneDropdown
          soundType={soundType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    default:
      return null;
  }
}

export default SoundMenuUI;
