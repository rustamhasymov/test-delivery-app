import React, { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

import {
  TextField,
  Button,
  Box,
  Typography,
  Modal,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
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

function PckgModal({ open, setOpen }) {
  const [{ data }, dispatch] = useData();
  const [customerId, setCustomerId] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [valid, setValid] = useState(false);
  useEffect(() => {
    validForm();
  }, [customerId, weight, price]);
  function sortingByOrder(a, b) {
    return (a.shippingOrder - b.shippingOrder) * -1;
  }
  function validForm() {
    const customerValid = customerId && !!customerId;
    const priceValid = price && price > 0;
    const weightValid = weight && weight > 0;
    setValid(priceValid && weightValid && customerValid);
  }

  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const maxOrder = data.packages.sort(sortingByOrder).map((item) => item.shippingOrder)[0] + 1;
    const invoice = {
      id: `pak${maxOrder}`,
      customerid: customerId,
      weight: `${weight}kg`,
      price,
      shippingOrder: maxOrder,
    };
    dispatch({ type: "ADD_PACKAGE", payload: invoice });
    setCustomerId("");
    setWeight("");
    setPrice("");
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Invoice
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="demo-simple-select-label">Customers</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={customerId}
                label="Customers"
                onChange={(e) => setCustomerId(e.target.value)}
              >
                {data.customers.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Weight"
              sx={{ mt: 2 }}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Price"
              sx={{ mt: 2 }}
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Button fullWidth variant="contained" type="submit" disabled={!valid} sx={{ mt: 2 }}>
              Register an order
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
export default React.memo(PckgModal);
