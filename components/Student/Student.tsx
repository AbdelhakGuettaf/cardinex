import React from "react";
import { Student as STUDENT_TYPE } from "../../app/types";

interface StudentProps extends STUDENT_TYPE {}

export const Student: React.FC<StudentProps> = ({
  id,
  name,
  payment,
  status,
  studentCourses,
}) => {
  return <>{name}</>;
};
