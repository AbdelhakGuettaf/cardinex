import { Typography } from "@mui/material";
import React from "react";

interface MainTitleProps {
  text: string;
  color: string;
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
}

export const MainTitle: React.FC<MainTitleProps> = ({ text, color, type }) => {
  return (
    <Typography variant={type} sx={{ color: color }} gutterBottom>
      {text}
    </Typography>
  );
};
