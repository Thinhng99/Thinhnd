import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
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

  // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
  //   {
  //     control, control props comes from useForm (optional: if you are using FormContext)
  //     name: "subCampaigns", unique name for your Field Array
  //   }
  // );

  const [active, setActive] = React.useState(0);
  console.log(active, "active");

  const [menusBox, setmenusBox] = useState([
    {
      name: "Chiến dịch 1",
      status: true,
      ads: [{ name: "", quantity: 0 }],
      id: 0,
    },
  ]);

  const handleMenuBox = (length: number) => {
    setmenusBox((prev) => [
      ...prev,
      {
        name: `Chiến dịch ${length + 1}`,
        status: true,
        ads: [{ name: "", quantity: 0 }],
        id: length,
      },
    ]);
    setActive(length);
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
            onClick={() => setActive(item?.id)}
            key={item?.id}
            style={{
              minWidth: 200,
              padding: "20px 10px",
              textAlign: "center",
              cursor: "pointer",
              border: "2px solid #ccc",
              borderColor: `${active === item?.id ? "green" : "#fff"}`,
            }}
          >
            <span>{item?.name}</span>
            <CheckCircleIcon color={item?.status ? "success" : "error"} />
            <p>0</p>
          </Paper>
        ))}
      </Box>
      <Grid container>
        <Grid item xs={8}>
          <TextFieldComp
            value={menusBox[active]?.name}
            label={"Tên chiến dịch"}
            onChange={(e) => {
              setmenusBox((prev) => {
                return prev.map((item, index) => {
                  if (item?.id === active) {
                    console.log(123);
                    return { ...item, name: e.target.value };
                  }
                  return item;
                });
              });
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  setmenusBox((prev) => {
                    return prev.map((item) => {
                      if (item?.id === active) {
                        return { ...item, status: e.target.checked };
                      }
                      return item;
                    });
                  });
                }}
                checked={menusBox[active]?.status}
              />
            }
            label="Đang hoạt động"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CampainTab;
