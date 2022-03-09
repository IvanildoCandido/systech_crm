import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ptBr from "date-fns/locale/pt-BR";
import CakeIcon from "@mui/icons-material/Cake";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WcIcon from "@mui/icons-material/Wc";

// import { Container } from './styles';

function FormCustomers() {
  const [value, setValue] = React.useState(null);
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <Box mb={2} sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField fullWidth label="Nome / Razão social" variant="standard" />
      </Box>
      <Box mb={3} sx={{ display: "flex", alignItems: "flex-end" }}>
        <CreditCardIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField label="CPF / CNPJ" variant="standard" />
      </Box>
      <Box mb={2} sx={{ display: "flex", alignItems: "center" }}>
        <CakeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBr}>
          <DatePicker
            label="Data de Nascimento"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Box mb={2} width={280} sx={{ display: "flex", alignItems: "center" }}>
        <WcIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <FormControl fullWidth>
          <InputLabel>Sexo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Sexo"
            onChange={handleChange}
          >
            <MenuItem value={"M"}>Masculino</MenuItem>
            <MenuItem value={"F"}>Feminino</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default FormCustomers;
