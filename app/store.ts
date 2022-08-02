import { configureStore } from "@reduxjs/toolkit";
import ClassroomSlice from "../components/Classroom/Classrooms.slice";
import StudentsSlice from "../components/Student/Students.Slice";
import darkMode from "../features/theme/darkMode.slice";

export const store = configureStore({
  reducer: {
    mode: darkMode,
    classRooms: ClassroomSlice,
    students: StudentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
