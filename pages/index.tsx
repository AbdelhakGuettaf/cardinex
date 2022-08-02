import type { NextPage } from "next";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Paper, Typography } from "@mui/material";
import { ClassroomParent } from "../components/Classroom/Classroom.parent";
import { Students } from "../components/Student/Students";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "42px" }}>
      <Paper sx={{ p: "12px" }}>
        <Typography
          color={({ palette }) => palette.primary.dark}
          fontFamily={"Product"}
          variant="h4"
        >
          My School
        </Typography>
      </Paper>
      <ClassroomParent />
      <Students />
    </Box>
  );
};

const Home: NextPage = () => {
  return <App />;
};

export default Home;
