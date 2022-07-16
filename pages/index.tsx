import type { NextPage } from "next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "../app/store";
import MiniDrawer from "../components/Drawer/Drawer";

const App = () => {
  const Selector = useSelector((state: RootState) => state);
  const { mode } = Selector;
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#003049",
          },
          secondary: {
            main: "#9e2a2b",
          },
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: "#003049",
                color: "white",
              },
            },
          },
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MiniDrawer />
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
