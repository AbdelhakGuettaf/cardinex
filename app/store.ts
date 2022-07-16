import { configureStore } from "@reduxjs/toolkit";
import darkMode from "../features/theme/darkMode.slice";

export const store = configureStore({
  reducer: {
    mode: darkMode,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
