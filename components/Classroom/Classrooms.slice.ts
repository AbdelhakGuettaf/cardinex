import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassRoom } from "../../app/types";

// Define the initial state using that type
interface ClassRoomInterface extends ClassRoom {
  students?: number;
  courseName?: string;
}
const initialState: ClassRoomInterface[] = [];

export const ClassroomSlice = createSlice({
  name: "classrooms",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addClassRoom: (state, action: PayloadAction<ClassRoomInterface>) => {
      let newState = state;
      if (state.every((classroom) => classroom.id !== action.payload.id))
        newState.push(action.payload);
      return newState;
    },
  },
});

export const { addClassRoom } = ClassroomSlice.actions;

export default ClassroomSlice.reducer;
