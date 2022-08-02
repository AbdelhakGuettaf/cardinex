import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../../app/types";

// Define the initial state using that type
const initialState: Student[] = [];

export const StudentsSlice = createSlice({
  name: "students",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addStudents: (state, action: PayloadAction<Student[]>) => {
      // This action should be used when fetching multiple students
      return (state = action.payload);
    },
    addStudent: (state, action: PayloadAction<Student>) => {
      // this action will be the future RTK Query
      let newState = state;
      if (state.every((student) => student.id !== action.payload.id))
        newState.push(action.payload);
      return newState;
    },
    deleteStudent: (state, action: PayloadAction<string>) => {
      return (state = state.filter((s) => s.id !== action.payload));
    },
  },
});

export const { addStudents, addStudent, deleteStudent } = StudentsSlice.actions;

export default StudentsSlice.reducer;
