import { styled } from "@mui/material/styles";
import { Badge, Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { Course, ClassRoom, Student } from "../../app/types";
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
interface ClassroomProps {
  course?: Course;
  room: ClassRoom;
}
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
}));
const CourseName = styled("div")(({ theme }) => ({
  ...theme.typography.subtitle1,
  height: "30px",
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
const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: rgb(75, 252, 98);
    background: radial-gradient(
      circle,
      rgba(75, 252, 98, 1) 0%,
      rgba(0, 175, 2, 1) 48%,
      rgba(51, 147, 1, 1) 100%
    );
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  & .${badgeUnstyledClasses.invisible} {
    opacity: 0;
    pointer-events: none;
  }
`; /*
const students: Student[] = [
  {
    id: "65UKER65",
    name: "Luffy Cracked",
    studentCourses: ["test", "tessttt"],
    status: true,
    payment: [
      { id: "test", status: true },
      { id: "tessttt", status: false },
    ],
  },
];*/

export const Classroom: React.FC<ClassroomProps> = ({ course, room }) => {
  function percentage() {
    if (!course) return 0;
    return (100 * course.students.length) / room.capacity;
  }
  function checkStudents() {
    /*
    return course?.students.every((studentId) => {
      const student = students.find((s) => s.id === studentId);
      if (!student) return false;
      return student.payment.find((p) => p.id === course.id)?.status;
    });*/
    return false;
  }
  return (
    <StyledBadge color="success" badgeContent=" " invisible={checkStudents()}>
      <Paper
        elevation={2}
        sx={{
          textAlign: "center",
          flexDirection: "column",
          width: "130px",
          height: "140px",
          p: "5px",
        }}
      >
        <Div
          sx={{
            color: room.state ? "green" : "",
            fontWeight: room.state ? "bold" : "",
          }}
        >
          {room.name}
        </Div>
        <CourseName>{room.state && course && course.name}</CourseName>
        <Box
          sx={{
            display: "flex",
            paddingX: "16px",
          }}
        >
          {" "}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            {(() => {
              return [...Array(12)].map((c, key) => {
                if (!room.state) return <InactiveChair key={key} />;
                if (key + 1 < percentage() / 8) {
                  return <Chair key={key} />;
                }
                return <InactiveChair key={key} />;
              });
            })()}
          </Box>
        </Box>
      </Paper>
    </StyledBadge>
  );
};
