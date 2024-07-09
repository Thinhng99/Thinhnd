import { Box, Button, Divider, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Campaign } from "~/types";
import CampaignTab from "~components/campaign-tab";
import InformationTab from "~components/information-tab";

const tabItems = [
  {
    key: 0,
    label: "Thông tin",
    component: <InformationTab />,
  },
  {
    key: 1,
    label: "Chiến dịch con",
    component: <CampaignTab />,
  },
];

const defaultValues: Campaign = {
  information: {
    name: "",
    describe: "",
  },
  subCampaigns: [
    {
      name: "Chiến dịch con 1",
      status: true,
      ads: [{ name: "", quantity: 0 }],
    },
  ],
};

const CampaignPage = () => {
  const methods = useForm<Campaign>({ defaultValues, mode: "onChange" });

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue: number) => setValue(newValue);

  const onSubmit = (data: Campaign) => {
    console.log(data, 1213);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box px={2} py={1} textAlign={"end"} width={"100%"}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
        <Divider />
        <Box p={3}>
          <Paper>
            <Tabs value={value} onChange={handleChange}>
              {tabItems.map((item) => (
                <Tab key={item.key} value={item.key} label={item.label} />
              ))}
            </Tabs>
            <Divider />
            <Box p={3}>{tabItems[value].component}</Box>
          </Paper>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CampaignPage;
