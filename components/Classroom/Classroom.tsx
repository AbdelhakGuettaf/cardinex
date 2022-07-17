import { Box, Container } from "@mui/material";
import React from "react";
import { Course, ClassRoom } from "../../app/types";

interface ClassroomProps {
  course: Course;
  room: ClassRoom;
}

export const Classroom: React.FC<ClassroomProps> = ({ course, room }) => {
  return (
    <>
      <Container>
        <Box>
          <text>Name: {room.name}</text>
        </Box>
      </Container>
    </>
  );
};
