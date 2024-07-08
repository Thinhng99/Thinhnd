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
    setmenusBox((prev) => [
      ...prev,
      {
        name: `Chiến dịch ${length + 1}`,
        status: true,
        ads: [{ name: "", quantity: 0 }],
      },
    ]);
    setActive(length);
  };

  const renderComp = (index: number) => {
    return (
      <Grid container>
        <Grid item xs={8}>
          <Controller
            name={`subCampaigns[${index}].name`}
            control={control}
            defaultValue={menusBox[index]?.name}
            render={({ field }) => (
              <TextFieldComp {...field} label={"Tên chiến dịch"} />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name={`subCampaigns[${index}].status`}
            control={control}
            defaultValue={menusBox[index]?.status}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="Đang hoạt động"
              />
            )}
          />
        </Grid>
      </Grid>
    );
  };

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
            onClick={() => setActive(index - 1)}
            key={index}
            style={{
              minWidth: 200,
              padding: "20px 10px",
              textAlign: "center",
              cursor: "pointer",
              border: "2px solid #ccc",
              borderColor: `${active === index ? "green" : "#fff"}`,
            }}
          >
            <span>{`Chiến dịch ${++index}`}</span>
            <CheckCircleIcon color={item?.status ? "success" : "error"} />
            <p>0</p>
          </Paper>
        ))}
      </Box>
      <>{renderComp(active)}</>
    </Box>
  );
};

export default CampainTab;
