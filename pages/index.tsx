import type { NextPage } from "next";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "../app/store";
import MiniDrawer from "../components/Drawer/Drawer";
import { Classroom } from "../components/Classroom/Classroom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Paper, Typography } from "@mui/material";
import { MainTitle } from "../components/Titles/MainTitle";

const App = () => {
  const Selector = useSelector((state: RootState) => state);
  const { mode } = Selector;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#3d5a80",
            dark: "#293241",
            light: "#98c1d9",
          },
          secondary: {
            main: "#9e2a2b",
          },
          background: {
            default: "#d9dcd6",
            paper: "#fff",
          },
        },
        typography: {
          fontFamily: "revert-layer",
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: "#293241",
                color: "white",
              },
            },
          },
        },
      }),
    [mode]
  );
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MiniDrawer>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "42px" }}>
          <Paper sx={{ p: "12px" }}>
            <MainTitle
              color={mode === "light" ? "#212121" : "white"}
              text="My School"
              type="h4"
            />
          </Paper>
          <Classroom
            capacity={15}
            name="Room #1"
            state
            status
            students={8}
            courseName="Arabic"
          />
        </Box>
      </MiniDrawer>
      <Offset />
    </ThemeProvider>
  );
};

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Home;
