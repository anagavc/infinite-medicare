import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import paymentData from "../../utilities/data.json";

import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#7A8890",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#7A8890",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#E7F4FC",
    color: "#7A8890",
    paddingTop: "2px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function PaymentsTable({ headers, data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const paymentsHeaders = [
    { name: "Date" },

    { name: "Invoice Number" },
    { name: "Category" },
    { name: "Student name" },
    { name: "Class" },
    { name: "Bill assigned" },
    { name: "Amount paid" },
    { name: "Balance" },
    { name: "Payment method" },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {paymentsHeaders.map((head, index) => (
              <StyledTableCell key={index}>
                <select>
                  <option defaultValue>{head.name}</option>
                </select>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {paymentData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StyledTableRow key={row.invoice_number}>
                <StyledTableCell component="th" scope="row">
                  {row.invoice_number}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.category}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.student_name}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.class}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.bill_assigned}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.amount_paid}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.balance}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.payment_method}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25]}
        component="div"
        count={paymentData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
