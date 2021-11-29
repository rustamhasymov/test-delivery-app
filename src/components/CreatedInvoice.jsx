import React, { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

import {
  Box,
  Typography,
  Modal,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Table,
  TableFooter,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CreatedInvoice({ open, setOpen, id }) {
  const [{ data }] = useData();
  const [customer, setCustomer] = useState({});
  const [invoices, setInvoices] = useState({});
  const [packages, setPackages] = useState({});
  useEffect(() => {
    if (data.customers && id) {
      setCustomer(data.customers.find((item) => item.id === id));
      setInvoices(data.invoices.find((item) => item.id === id) || {});
      setPackages(data.packages.filter((item) => item.customerid === id) || {});
    }
  }, [data, id]);
  useEffect(() => {}, [packages]);
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Invoice
          </Typography>
          <Typography id="modal-modal-title" align="center" variant="h6" component="h2">
            {customer && customer.name}
          </Typography>
          {!invoices.id ? (
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ border: "none" }} align="center">
                    didn`t found any invoices
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ) : (
            <>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ border: "none" }} align="center">
                      {invoices.createdAt}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="center"></TableCell>
                    <TableCell sx={{ border: "none" }} align="center">
                      Invoice
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ border: "none" }} align="center">
                      {customer && customer.name}
                    </TableCell>
                    <TableCell sx={{ border: "none" }} align="center"></TableCell>
                    <TableCell sx={{ border: "none" }} align="center">
                      {invoices.invoiceNumber}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" sx={{ border: "none", pt: 6 }}>
                      ID
                    </TableCell>
                    <TableCell align="center" sx={{ border: "none", pt: 6 }}>
                      Weight
                    </TableCell>
                    <TableCell align="center" sx={{ border: "none", pt: 6 }}>
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {packages.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" sx={{ border: "none" }} align="center">
                        {row.id}
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="center">
                        {row.weight}
                      </TableCell>
                      <TableCell sx={{ border: "none" }} align="center">
                        {row.price}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell sx={{ border: "none" }} align="center"></TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "none", pt: 6 }}
                    >{`Total Weight ${invoices.totalWeight}`}</TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "none", pt: 6 }}
                    >{`Total Price ${invoices.totalPrice}`}</TableCell>
                  </TableRow>
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan={3}
                      sx={{ width: "100%", border: "none", fontSize: "20px" }}
                    >{`You received ${
                      invoices.index === 1
                        ? `${invoices.index} package`
                        : `${invoices.index} packages`
                    }`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="center"
                      colSpan={3}
                      sx={{ width: "100%", border: "none", fontSize: "20px" }}
                    >
                      Thank you for using our services
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}
export default React.memo(CreatedInvoice);
