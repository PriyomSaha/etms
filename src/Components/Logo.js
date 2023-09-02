import React from "react";
import Paper from "@mui/material/Paper";
import TCS_Logo from "./TCS_Logo.avif";
import { Box } from "@mui/material";

const stickyImage = {
  position: "fixed",
  bottom: -10,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000, // Optional: Use zIndex to control the layering of the image
};

function Logo() {
  return (
    <Box sx={stickyImage}>
      <img src={TCS_Logo} alt="Sticky" style={{ maxWidth: "100%" }} />
    </Box>
  );
}

export default Logo;
