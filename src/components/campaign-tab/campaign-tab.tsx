import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CampaignBox from "./campaign-box";
import CampaignForm from "./campaign-form";

const CampaignTab = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append } = useFieldArray({
    control,
    name: "subCampaigns",
  });

  const [active, setActive] = useState(0);

  const addNewBox = () => {
    append({
      name: `Chiến dịch con ${fields.length + 1}`,
      status: true,
      ads: [{ name: "", quantity: 0 }],
    });

    setActive(fields.length);
  };

  return (
    <>
      <Box
        overflow={"auto"}
        display={"flex"}
        width={"100%"}
        sx={{ alignItems: "start" }}
      >
        <IconButton color="secondary" size="large" onClick={addNewBox}>
          <AddIcon />
        </IconButton>

        {fields?.map((item, index) => (
          <CampaignBox
            key={item.id}
            subCampaign={item}
            index={index}
            onClick={() => setActive(index)}
            style={{ borderColor: `${active === index ? "#2196f3" : "#fff"}` }}
          />
        ))}
      </Box>
      <CampaignForm subCampaignData={fields} index={active} />
    </>
  );
};

export default CampaignTab;
