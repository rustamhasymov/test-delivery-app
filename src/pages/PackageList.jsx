import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";

import AddIcon from "@mui/icons-material/Add";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useData } from "../hooks/useData";
import { useState } from "react";
import PckgModal from "../components/PckgModal";

export default function PackageList() {
  const [{ data }, dispatch] = useData();
  const [open, setOpen] = useState(false);
  function sortingByOrder(a, b) {
    return a.shippingOrder - b.shippingOrder;
  }

  return (
    <>
      <PckgModal open={open} setOpen={setOpen} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Price</TableCell>

              <TableCell>
                <IconButton
                  onClick={() => setOpen(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...data.packages].sort(sortingByOrder).map((row) => {
              return (
                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {data.customers.find((customer) => customer.id === row.customerid)?.name ||
                      "client was deleted from system"}
                  </TableCell>

                  <TableCell>{row.weight.split("kg").join(" kg")}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{ mr: 2 }}
                      onClick={() => dispatch({ type: "DELETE_PACKAGE", payload: row.id })}
                    >
                      Delete
                    </Button>
                    <IconButton
                      aria-label="up"
                      size="small"
                      onClick={() => dispatch({ type: "DECREMENT_ORDER_NUMBER", payload: row.id })}
                    >
                      <ArrowUpwardIcon />
                    </IconButton>
                    <IconButton
                      aria-label="down"
                      size="small"
                      onClick={() => dispatch({ type: "INCREMENT_ORDER_NUMBER", payload: row.id })}
                    >
                      <ArrowDownwardIcon />
                    </IconButton>
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
