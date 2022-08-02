import { Box, Icon, Paper, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Classroom } from "./Classroom";
import AddIcon from "@mui/icons-material/Add";
import { alpha, darken } from "@mui/material";

interface ClassroomParentProps {}

const IconPaper = styled("div")(({ theme }) => ({
  scale: "1.2",
  width: "130px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  transition: "all 0.3s",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.background.paper,
    "& .addIcon": {
      fill: theme.palette.action.hoverOpacity,
      fontSize: "140px",
    },
  },
}));

export const ClassroomParent: React.FC<ClassroomParentProps> = ({}) => {
  const { classRooms } = useSelector((state: RootState) => state);
  return (
    <Box sx={{ display: "flex", gap: "18px" }}>
      {classRooms.map((props, key) => (
        <Classroom key={key} {...props} />
      ))}
      <IconPaper>
        <AddIcon
          className="addIcon"
          sx={{
            transition: "all 0.3s",
            fontSize: "130px",
            fill: ({ palette }) => darken(palette.background.default, 0.2),
          }}
        />
      </IconPaper>
    </Box>
  );
};
