import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { format, startOfMonth, endOfMonth } from "date-fns";

function ProfileCard() {
  // Get the current date
  const currentDate = new Date();

  // Calculate the start and end of the current month
  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);

  // Format the dates as "1st Sept, 2023" and "30th Sept, 2023"
  const formattedStartDate = format(startDate, "do MMM, yyyy");
  const formattedEndDate = format(endDate, "do MMM, yyyy");

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
        elevation={4}
        sx={{
          width: "90%",
          p: 1,
        }}
      >
        <Box px={1}>
          {/* 1st row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", // To align the text at the start and end
              pt: 1,
            }}
          >
            <Typography fontSize={13} letterSpacing={0.7}>
              Name
            </Typography>
            <Typography fontSize={13} letterSpacing={0.7} textAlign="end">
              Employee ID
            </Typography>
          </Box>

          {/* 2nd row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", // To align the text at the start and end
              pt: 1,
            }}
          >
            <Typography variant="body2" fontSize={16}>
              Priyom Saha
            </Typography>
            <Typography fontSize={16} letterSpacing={0.7} textAlign="end">
              2569121
            </Typography>
          </Box>

          {/* 3rd row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", // To align the text at the start and end
              pt: 3,
            }}
          >
            <Typography fontSize={13} letterSpacing={0.7}>
              Bus Stop Name
            </Typography>
            <Typography fontSize={13} letterSpacing={0.7} textAlign="end">
              Route Type
            </Typography>
          </Box>

          {/* 4th row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", // To align the text at the start and end
              pt: 1,
            }}
          >
            <Typography variant="body2" fontSize={16}>
              Bally Halt
            </Typography>
            <Typography fontSize={16} letterSpacing={0.7} textAlign="end">
              Both
            </Typography>
          </Box>

          {/* 5th row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", // To align the text at the start and end
              pt: 3,
            }}
          >
            <Typography fontSize={13} letterSpacing={0.7}>
              Start Date
            </Typography>
            <Typography fontSize={13} letterSpacing={0.7} textAlign="end">
              End Date
            </Typography>
          </Box>

          {/* 6th row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between", // To align the text at the start and end
              pt: 1,
            }}
          >
            <Typography variant="body2" fontSize={16}>
              {formattedStartDate}
            </Typography>
            <Typography fontSize={16} letterSpacing={0.7} textAlign="end">
              {formattedEndDate}
            </Typography>
          </Box>
        </Box>
        <Box mt={2} py={3}>
          <Typography variant="body2" fontSize={15} textAlign={"center"}>
            Route : Dankuni Station To Gitanjali Park And <br /> Return
            Via-Airport 1No.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProfileCard;
