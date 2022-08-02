import { styled } from "@mui/material/styles";
import { Badge, Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { Course, ClassRoom, Student } from "../../app/types";
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
interface ClassroomProps {
  courseName?: string;
  badge?: boolean;
  students?: number;
  capacity: number;
  name: string;
  state: boolean;
  status: boolean;
}
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
}));
const CourseName = styled("div")(({ theme }) => ({
  ...theme.typography.subtitle1,
  height: "30px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  paddingLeft: "12px",
  paddingRight: "12px",
}));
const Chair = styled("div")(({ theme }) => ({
  width: "20%",
  aspectRatio: "1",
  backgroundColor: theme.palette.success.light,
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
    width: 20px;
    aspect-ratio: 1;
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
`;
export const Classroom: React.FC<ClassroomProps> = ({
  courseName,
  badge,
  students,
  capacity,
  name,
  state,
  status,
}) => {
  function percentage() {
    if (!courseName || !students) return 0;
    return (100 * students) / capacity;
  }

  if (!status)
    return (
      <StyledBadge color="success" badgeContent="" invisible={badge}>
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
              color: "",
              fontWeight: "bold",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              paddingLeft: "12px",
              paddingRight: "12px",
              backgroundColor: "transparent",
            }}
          >
            {name}
          </Div>
          <CourseName>Out of Service</CourseName>
          <Box
            sx={{
              display: "flex",
              paddingX: "12px",
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
                  return <InactiveChair key={key} />;
                });
              })()}
            </Box>
          </Box>
        </Paper>
      </StyledBadge>
    );
  return (
    <StyledBadge color="success" badgeContent="" invisible={!badge}>
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
            color: state ? "green" : "",
            fontWeight: state ? "bold" : "",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            paddingLeft: "12px",
            paddingRight: "12px",
            backgroundColor: "transparent",
          }}
        >
          {name}
        </Div>
        <CourseName>{state && courseName && courseName}</CourseName>
        <Box
          sx={{
            display: "flex",
            paddingX: "12px",
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
                if (!state) return <InactiveChair key={key} />;
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
