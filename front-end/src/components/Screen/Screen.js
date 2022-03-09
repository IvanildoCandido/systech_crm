import React from "react";
import {
  FullScreen,
  PageBar,
  TitleBar,
  PageClose,
  DataArea,
  ActionArea,
} from "./styles";
import { CgCloseO } from "react-icons/cg";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@material-ui/lab/TabPanel";
import FormCustomers from "../FormCustomers/FormCustomers";
function Screen() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <FullScreen>
      <PageBar>
        <TitleBar>Cadastro de Clientes</TitleBar>
        <PageClose>
          <CgCloseO />
        </PageClose>
      </PageBar>
      <TabContext value={value}>
        <ActionArea>
          <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Cadastro de clientes"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="DADOS PESSOAIS" value="1" />
            <Tab label="ENDEREÇOS" value="2" />
            <Tab label="CONTATOS" value="3" />
          </Tabs>
        </ActionArea>
        <DataArea>
          <TabPanel value="1">
            <FormCustomers />
          </TabPanel>
          <TabPanel value="2">Endereços</TabPanel>
          <TabPanel value="3">Contatos</TabPanel>
        </DataArea>
      </TabContext>
      <ActionArea>
        <Stack direction="row" spacing={4}>
          <Button variant="contained" startIcon={<SaveIcon />}>
            Salvar
          </Button>
          <Button variant="contained" startIcon={<ArrowBackIcon />}>
            Voltar
          </Button>
        </Stack>
      </ActionArea>
    </FullScreen>
  );
}

export default Screen;
