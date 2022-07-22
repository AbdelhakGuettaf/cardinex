import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { Course, ClassRoom } from "../../app/types";

interface ClassroomProps {
  course: Course;
  room: ClassRoom;
}
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  paddingTop: "3px",
}));
const Chair = styled("div")(({ theme }) => ({
  width: "20%",
  aspectRatio: "1",
  backgroundColor: theme.palette.success.main,
  borderRadius: "5px",
}));
const InactiveChair = styled("div")(({ theme }) => ({
  width: "20%",
  aspectRatio: "1",
  backgroundColor: theme.palette.action.disabled,
  borderRadius: "5px",
}));

export const Classroom: React.FC<ClassroomProps> = ({ course, room }) => {
  function percentage() {
    return (100 * course.students.length) / room.capacity;
  }
  console.log(percentage() / 8);
  return (
    <>
      <Box sx={{ width: "130px", height: "130px" }}>
        <Paper
          elevation={2}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Div>{room.name}</Div>
          <Box
            sx={{
              display: "flex",
              p: "16px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              {[...Array(12)].map((c, key, index) => {
                if (percentage() < 10) {
                  return <Chair key={key} />;
                }
                switch (index) {
                }
              })}

              {(() => {
                if (percentage() < 10) {
                  return [...Array(12)].map((c, key) => <Chair key={key} />);
                }
                return [...Array(12)].map((c, key) => {
                  if (key + 1 < percentage() / 8) {
                    return <Chair key={key} />;
                  }
                  return <InactiveChair key={key} />;
                });
              })()}
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
