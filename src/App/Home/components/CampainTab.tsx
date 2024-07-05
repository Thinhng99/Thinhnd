import { Box, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TextFieldComp from "../../../components/TextFieldComp";

const CampainTab: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "subCampaigns", // unique name for your Field Array
    }
  );

  const handleClickAddCampain = (index: any) => {
    append({
      name: `Chiến dịch ${++index}`,
      status: true,
      ads: [{ name: "", quantity: 0 }],
    });
    setActive(++index);
  };
  const [active, setActive] = React.useState(0);
  console.log(active, "active");

  const [menusBox, setmenusBox] = useState([
    {
      name: "Chiến dịch 1",
      status: true,
      ads: [{ name: "", quantity: 0 }],
    },
  ]);

  const handleMenuBox = (length: number) => {
    console.log(length, "length");
    setmenusBox((prev) => [
      ...prev,
      {
        name: `Chiến dịch ${++length}`,
        status: true,
        ads: [{ name: "", quantity: 0 }],
      },
    ]);
    setActive(length - 1);
  };

  console.log(active);

  return (
    <Box>
      <Box
        overflow={"auto"}
        display={"flex"}
        padding={3}
        width={"100%"}
        gap={5}
      >
        <AddCircleOutlineIcon
          fontSize="large"
          style={{ cursor: "pointer" }}
          onClick={() => handleMenuBox(menusBox.length)}
        />
        {menusBox?.map((item, index) => (
          <Paper
            onClick={() => setActive(index)}
            key={index}
            style={{
              minWidth: 200,
              padding: "20px 10px",
              textAlign: "center",
              border: "2px solid #ccc",
              borderColor: `${active === index ? "green" : "#fff"}`,
            }}
          >
            <span>{`Chiến dịch ${++index}`}</span>
            <CheckCircleIcon color="success" />
            <p>0</p>
          </Paper>
        ))}
      </Box>
      <Grid container>
        <Grid item xs={8}>
          <TextFieldComp name="name" label={"Tên chiến dịch"} />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            name="status"
            control={<Checkbox defaultChecked />}
            label="Đang hoạt động"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CampainTab;
