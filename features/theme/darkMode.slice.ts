import { createSlice } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

// Define the initial state using that type
const initialState = "light" as PaletteMode;

export const ModeSlice = createSlice({
  name: "mode",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleMode: (state) => (state = state === "light" ? "dark" : "light"),
  },
});

export const { toggleMode } = ModeSlice.actions;

export default ModeSlice.reducer;
