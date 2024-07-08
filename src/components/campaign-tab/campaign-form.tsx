import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { SubCampaign } from "~/types";
import MyTextField from "~components/my-text-field";

interface CampaignFormProps {
  index: number;
  subCampaignData: SubCampaign[];
}

const CampaignForm = ({ index, subCampaignData }: CampaignFormProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log(subCampaignData[index]?.name); // log có ra data nhưng chưa thể set được vô form

  return (
    <Grid container>
      <Grid item xs={8}>
        <Controller
          name={`subCampaigns[${index}].name`}
          control={control}
          defaultValue={subCampaignData[index]?.name}
          render={({ field }) => (
            <MyTextField {...field} label="Tên chiến dịch" />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name={`subCampaigns[${index}].status`}
          control={control}
          defaultValue={subCampaignData[index]?.status}
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

export default CampaignForm;
