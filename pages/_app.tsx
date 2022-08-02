import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../app/store";
import MiniDrawer from "../components/Drawer/Drawer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { getTheme } from "../app/theme";
import { addClassRoom } from "../components/Classroom/Classrooms.slice";
import { addStudent, addStudents } from "../components/Student/Students.Slice";

function MyApp({ Component, pageProps }: AppProps) {
  const Comps = () => {
    // Backend sim
    const Dispatch = useDispatch();
    Dispatch(
      addClassRoom({
        capacity: 15,
        id: "44DQS864",
        name: "Room#1",
        state: false,
        status: false,
      })
    );
    Dispatch(
      addClassRoom({
        capacity: 10,
        id: "44D01264",
        name: "Room#2 Sala Kbira",
        state: true,
        status: true,
        students: 8,
        courseName: "Englishssssssssssssss",
      })
    );
    Dispatch(
      addClassRoom({
        capacity: 13,
        id: "44ss264",
        name: "Room#3 A droit",
        state: true,
        status: true,
        students: 13,
        courseName: "Guitar",
      })
    );
    Dispatch(
      addStudents([
        {
          id: "12346",
          name: "Test Student",
          payment: [{ id: "123456", status: true }],
          status: true,
          studentCourses: [{ id: "123456", name: "English" }],
        },
        {
          id: "456789",
          name: "Jack Reay",
          payment: [
            { id: "4567895", status: false },
            { id: "4dqsd95", status: false },
          ],
          status: true,
          studentCourses: [
            { id: "4567895", name: "Arabic" },
            { id: "4dqsd95", name: "French" },
          ],
        },
      ])
    );
    // End Backend sim
    const Selector = useSelector((state: RootState) => state);
    const { mode } = Selector;
    const theme = React.useMemo(() => createTheme(getTheme(mode)), [mode]);
    const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MiniDrawer>
          <Component {...pageProps} />
        </MiniDrawer>
        <Offset />
      </ThemeProvider>
    );
  };
  return (
    <Provider store={store}>
      <Comps />
    </Provider>
  );
}

export default MyApp;
