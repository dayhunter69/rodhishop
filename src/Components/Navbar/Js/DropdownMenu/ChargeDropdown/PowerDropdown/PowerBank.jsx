import React, { useState } from "react";
import "../CableDropdown/CableDropdown.css";
import { Icon } from "@iconify/react";
import { options } from "./Setup";
import { useLocation, useNavigate } from "react-router-dom";
import ChargeSideNav from "../ChargeSideNav";
import { Box, Stack, Typography } from "@mui/material";

const PowerBank = ({
  chargeType,
  handleShowClick,
  handleClick,
  handleClose,
}) => {
  const navigate = useNavigate();

  const [powerBankType, setPowerBankType] = useState({
    fastCharge: "",
    powerbankCapacity: "",
    portInput: "",
    portOutput: "",
    powerbankPrice: "",
  });

  const query = new URLSearchParams(useLocation().search);

  const handleSelect = (name, info) => {
    window.localStorage.isNavbarItemSelected = "yes";
    setPowerBankType((prev) => ({ ...prev, [name]: info.value }));
  };

  const handleClickEnter = () => {
    query.set("fastCharge", powerBankType.fastCharge);
    query.set("powerbankCapacity", powerBankType.powerbankCapacity);
    query.set("portInput", powerBankType.portInput);
    query.set("portOutput", powerBankType.portOutput);
    query.set("powerbankPrice", powerBankType.powerbankPrice);

    handleClose();
    navigate(`/powerbank?${query.toString()}`, { replace: true });
  };

  const isItemSelected = () => {
    return (
      powerBankType.powerbankPrice ||
      powerBankType.portOutput ||
      powerBankType.powerbankCapacity ||
      powerBankType.fastCharge ||
      powerBankType.portInput
    );
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "max-content auto",
          positon: "relative",
        }}
        className="earphone-container"
      >
        <Box
          className="Earphone-Cross-Icon"
          onClick={() => {
            if (!isItemSelected()) return;
            window.localStorage.isNavbarItemSelected = "";
            handleShowClick();
          }}
          sx={{
            opacity: !isItemSelected() ? 0 : 1,
            cursor: !isItemSelected() ? "none" : "pointer",
          }}
        >
          <Icon icon="system-uicons:cross-circle" width="39" height="39" />
        </Box>
        <Stack width="100%" direction="row">
          <ChargeSideNav chargeType={chargeType} handleClick={handleClick} />
          <Stack flex={1} direction="row" flexWrap="wrap" columnGap={8}>
            {options.map((opt) => (
              <div key={opt.state}>
                <Typography
                  sx={{
                    fontFamily: "Arial",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    mb: "10px",
                    textTransform: "uppercase",
                    color: "#000000",
                    px: 1,
                  }}
                >
                  {opt.title}
                </Typography>
                {opt.options.map((info) => (
                  <Typography
                    onClick={() => handleSelect(opt.state, info)}
                    sx={{
                      fontFamily: "Arial",
                      fontSize: "16px",
                      lineHeight: "38px",
                      textTransform: "uppercase",
                      color:
                        powerBankType?.[opt.state] !== info.value
                          ? "black"
                          : "rgba(0, 0, 0, 0.49)",
                      cursor: "pointer",
                      border:
                        powerBankType?.[opt.state] === info.value
                          ? "1px solid #000000"
                          : "1px solid transparent",
                      borderRadius: "2px",
                      margin: "1px 0px",
                      px: 1,
                    }}
                  >
                    {info.featureItem}
                  </Typography>
                ))}
              </div>
            ))}
          </Stack>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: 50,
            right: 50,
          }}
        >
          <button
            onClick={handleClickEnter}
            disabled={!isItemSelected()}
            className={`${
              isItemSelected() ? "earphoneActiveBtn" : "earphoneDeActiveBtn"
            }`}
          >
            enter
          </button>
        </Box>
      </Box>
    </>
  );
};

export default PowerBank;
