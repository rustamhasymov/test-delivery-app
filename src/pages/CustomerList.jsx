import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useData } from "../hooks/useData";
import { useState } from "react";
import PersonalInvoice from "../components/PersonalInvoice/PersonalInvoice";
// import CreatedInvoice from "../components/CreatedInvoice";

export default function CustomerList() {
  const [{ data }, dispatch] = useData();
  const [open, setOpen] = useState(false);
  const [customerId, setCustomerId] = useState(null);
  function handleClick(id) {
    setOpen(true);
    setCustomerId(id);
  }

  return (
    <>
      {/* <CreatedInvoice open={open} setOpen={setOpen} id={customerId} /> */}
      {open && <PersonalInvoice setOpen={setOpen} id={customerId} />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.customers.map((row) => {
              return (
                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleClick(row.id)}>
                      Create Invoice
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => dispatch({ type: "DELETE_CUSTOMER", payload: row.id })}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
