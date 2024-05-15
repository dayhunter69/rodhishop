import React, { useState } from "react";
import "../CableDropdown/CableDropdown.css";
import { Icon } from "@iconify/react";
import { options } from "./Setup";
import { useLocation, useNavigate } from "react-router-dom";
import ChargeSideNav from "../ChargeSideNav";
import { Box, Stack, Typography } from "@mui/material";

const WallCharger = ({
  chargeType,
  handleShowClick,
  handleClick,
  handleClose,
}) => {
  const navigate = useNavigate();

  const [wallchargerType, setWallChargerType] = useState({
    wallchargerTypes: "",
    wallchargerPort: "",
    technology: "",
    plugType: "",
    fastCharging: "",
  });

  const query = new URLSearchParams(useLocation().search);

  const handleSelect = (name, info) => {
    window.localStorage.isNavbarItemSelected = "yes";
    setWallChargerType((prev) => ({ ...prev, [name]: info.value }));
  };

  const handleClickEnter = () => {
    query.set("wallchargerTypes", wallchargerType.wallchargerTypes);
    query.set("wallchargerPort", wallchargerType.wallchargerPort);
    query.set("technology", wallchargerType.technology);
    query.set("plugType", wallchargerType.plugType);
    query.set("fastCharging", wallchargerType.fastCharging);

    handleClose();
    navigate(`/wallcharger?${query.toString()}`, { replace: true });
  };

  const isItemSelected = () => {
    return (
      wallchargerType.technology ||
      wallchargerType.plugType ||
      wallchargerType.wallchargerPort ||
      wallchargerType.wallchargerTypes ||
      wallchargerType.fastCharging
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
          <Stack flex={1} direction="row" flexWrap="wrap" columnGap={11}>
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
                        wallchargerType?.[opt.state] !== info.value
                          ? "black"
                          : "rgba(0, 0, 0, 0.49)",
                      cursor: "pointer",
                      border:
                        wallchargerType?.[opt.state] === info.value
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

export default WallCharger;
