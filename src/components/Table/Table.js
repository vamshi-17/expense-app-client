import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { red, blue } from "@mui/material/colors";

const Table = ({ data, handleEdit, handleDelete, columns }) => {
  return (
    <div className="contain-table">
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
              S.No
            </TableCell>
            {columns.map((column, index) => (
              <TableCell
                sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
                key={index}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell
              sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
              align="center"
              colSpan={2}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((dataField, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                {columns.map((column, index) => (
                  <TableCell key={index}>{dataField[column.field]}</TableCell>
                ))}
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleEdit(dataField.id)}
                    sx={{ color: blue[200] }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="left">
                  <IconButton
                    sx={{ color: red[200] }}
                    onClick={() => handleDelete(dataField._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length + 3}>No data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </MuiTable>
    </div>
  );
};

export default Table;
