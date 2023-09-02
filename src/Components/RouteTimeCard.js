import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const RouteTimeCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 2,
        width: "100%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          background:
            "linear-gradient(100deg, #3366CC 10% ,#3b4df0 20%, #6536ca 100%)",
          width: "90%",
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography color={"white"} textAlign="center">
            Dankuni Station
          </Typography>
          <Typography fontSize={20} color={"white"} textAlign="center">
            ⇌
          </Typography>
          <Typography color={"white"} textAlign="center">
            Gitanjali Park
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", // To align the text at the start and end
              pt: 1,
            }}
          >
            <Typography color={"white"}>Office In - 09:30</Typography>
            <Typography color={"white"}>Office Out - 18:30</Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default RouteTimeCard;
