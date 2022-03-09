import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";

// import { Container } from './styles';

function FormCustomers() {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField fullWidth label="Nome / Razão social" variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <CreditCardIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField label="CPF / CNPJ" variant="standard" />
      </Box>
    </>
  );
}

export default FormCustomers;
