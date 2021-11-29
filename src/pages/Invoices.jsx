import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useData } from "../hooks/useData";
import { useEffect } from "react";

export default function Invoices() {
  const [{ data }, dispatch] = useData();
  useEffect(() => {
    const invoicesData = data.customers
      .map((customer) => {
        const pckgs = data.packages.filter((pckg) => pckg.customerid === customer.id);
        if (pckgs.length === 0) {
          return null;
        }
        const invoice = pckgs.reduce(
          (invoiceData, pckg, index) => {
            return {
              ...invoiceData,
              totalPrice: invoiceData.totalPrice + parseInt(pckg.price),
              totalWeight: invoiceData.totalWeight + parseInt(pckg.weight),
              createdAt: new Date().toDateString(),
              invoiceNumber: Date.now(),
              index: index + 1,
            };
          },
          {
            id: customer.id,
            totalPrice: 0,
            totalWeight: 0,
            name: customer.name,
          }
        );
        return invoice;
      })
      .filter(Boolean);
    dispatch({ type: "ADD_INVOICES", payload: invoicesData });
  }, [data.customers, data.packages, dispatch]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Total Weight</TableCell>
            <TableCell>Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.invoices &&
            data.invoices.map((row) => {
              return (
                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.totalWeight} kg</TableCell>
                  <TableCell>{row.totalPrice}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
