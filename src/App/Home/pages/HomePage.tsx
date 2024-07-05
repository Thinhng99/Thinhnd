import { Box, Button, Divider, Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CampainTab from "../components/CampainTab";
import InformationTab from "../components/InformationTab";
import { Campaign } from "../../../utils/home.type";

type menuItem = {
  key: number;
  label: string;
  component: JSX.Element;
};

const defaultValues: Campaign = {
  information: {
    name: "",
    describe: "",
  },
  subCampaigns: [
    {
      name: "",
      status: true,
      ads: [
        {
          name: "",
          quantity: 0,
        },
      ],
    },
  ],
};

const HomePage: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const tabsMenu: menuItem[] = [
    {
      key: 0,
      label: "Thông tin",
      component: <InformationTab />,
    },
    {
      key: 1,
      label: "Chiến dịch con",
      component: <CampainTab />,
    },
  ];
  //ChangeTabs
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //RenderTabs
  const renderContent = (value: number) => {
    return tabsMenu[value].component;
  };

  const methods = useForm({ defaultValues });
  const onSubmit: SubmitHandler<any> = (data: any) => console.log(data, 1213);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
    </FormProvider>
  );
};

export default HomePage;
