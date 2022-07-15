import type { NextPage } from "next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import NavBar from "../components/NavBar/NavBar";

const Home: NextPage = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#3d5a80",
          },
          secondary: {
            main: "#9e2a2b",
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <div
        style={{
          backgroundColor: theme.palette.background.default,
          width: "100%",
          height: "100%",
        }}
      >
        <h1>Hello there</h1>
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            width: "120px",
            height: "120px",
          }}
        >
          <button
            onClick={() => {
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            }}
          >
            {theme.palette.mode} mode
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
