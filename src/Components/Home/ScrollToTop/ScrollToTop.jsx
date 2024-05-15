import React from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  const ref = React.useRef();

  React.useEffect(() => {
    ref?.current && ref?.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box overflow="auto" ref={ref}>
      {children}
    </Box>
  );
}
