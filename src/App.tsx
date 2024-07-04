import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { Campaign } from "./utils/home.type";
import { SubmitHandler, useForm } from "react-hook-form";

const initialValue: Campaign = {
  information: {
    name: "",
    describe: "",
  },
  subCampaigns: [
    {
      ads: [{ name: "", quantity: 0 }],
      name: "",
      status: false,
    },
  ],
};
function App() {
  const [value, setValue] = useState<number>(0);
  const [input, setInput] = useState<Campaign>(initialValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data: any) => console.log(data);

  const tabsMenu = [
    {
      key: 0,
      label: "Thông tin",
      component: (
        <>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </>
      ),
    },
    {
      key: 1,
      label: "Chiến dịch con",
      component: <>alo</>,
    },
  ];

  const renderContent = (value: number) => {
    return tabsMenu[value].component;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <Box px={2} py={1} textAlign={"end"} width={"100%"}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
        <Divider />
        <Box p={3}>
          <Paper>
            <Tabs value={value} onChange={handleChange}>
              {tabsMenu.map((item) => (
                <Tab key={item.key} value={item.key} label={item.label} />
              ))}
            </Tabs>
            <Divider />
            <Box p={3}>{renderContent(value)}</Box>
          </Paper>
        </Box>
      </div>
    </form>
  );
}

export default App;
