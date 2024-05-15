import React from "react";
import Cable from "./CableDropdown/Cable";
import WallCharger from "./WallChargerDropdown/WallCharger";
import PowerBank from "./PowerDropdown/PowerBank";
import QiCharger from "./QiChargerDropdown/QiCharger";

function ChargeMenuUI({
  chargeType,
  handleShowClick,
  handleClick,
  handleClose,
}) {
  switch (chargeType) {
    case "cable":
      return (
        <Cable
          chargeType={chargeType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "wallCharger":
      return (
        <WallCharger
          chargeType={chargeType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "powerBank":
      return (
        <PowerBank
          chargeType={chargeType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    case "qiCharger":
      return (
        <QiCharger
          chargeType={chargeType}
          handleShowClick={handleShowClick}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      );
    default:
      return null;
  }
}

export default ChargeMenuUI;
