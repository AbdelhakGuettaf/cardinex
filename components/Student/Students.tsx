import { Box, Paper } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Student } from "./Student";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridColumns,
  GridRowId,
  GridRowParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteStudent } from "./Students.Slice";

interface StudentsProps {}

export const Students: React.FC<StudentsProps> = ({}) => {
  const Students = useSelector((state: RootState) => state.students);
  const Dispatch = useDispatch();
  const deleteUser = React.useCallback(
    (id: string) => () => {
      setTimeout(() => {
        Dispatch(deleteStudent(id));
      });
    },
    [Dispatch]
  );
  const rows: GridRowsProp = Students.map(
    ({ id, name, payment, status, studentCourses }) => ({
      id: id,
      col1: name,
      col2: studentCourses.map((c) => c.name),
      col3: payment.every((c) => c.status) ? true : false,
      col4: status,
    })
  );
  type Row = typeof rows[number];
  const columns: GridColDef = [
    { field: "col1", headerName: "Name", sortable: true, flex: 1 },
    { field: "col2", headerName: "Courses", sortable: true, flex: 1 },
    {
      field: "col3",
      headerName: "Payment",
      sortable: true,
      type: "boolean",
      flex: 0.5,
    },
    {
      field: "col4",
      headerName: "Status",
      sortable: true,
      type: "boolean",
      flex: 0.5,
    },
  ];
  return (
    <Paper>
      <Box sx={{ display: "flex" }}>
        <DataGrid rows={rows} columns={columns} autoHeight />
        {/*Students.map((student, key) => (
          <Student key={key} {...student} />
        ))*/}
      </Box>
    </Paper>
  );
};
