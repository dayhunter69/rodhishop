import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const WarrantyFAQInfo = ({ options, data }) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ margin: 0, minHeight: 0 }}
        >
          <Typography sx={{ fontSize: 18 }}>{data.select}</Typography>
        </AccordionSummary>
        <Box className="w-[520px] mx-auto">
          <Typography sx={{ fontSize: 17 }}>{data.state}</Typography>
        </Box>
        <AccordionDetails className="w-[520px] mx-auto">
          <ul className="text-[17px]">
            {options.map((option) => (
              <li>{option.choose}</li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default WarrantyFAQInfo;
