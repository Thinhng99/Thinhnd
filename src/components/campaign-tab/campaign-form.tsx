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
    setValue,
    getValues,
  } = useFormContext();

  console.log(getValues(`subCampaigns[${index}].status`)); // log có ra data nhưng chưa thể set được vô form

  return (
    <Grid container>
      <Grid item xs={8}>
        <Controller
          name={`subCampaigns[${index}].name`}
          control={control}
          render={({ field }) => (
            <MyTextField
              {...field}
              value={getValues(`subCampaigns[${index}].name`)}
              onChange={(e) => {
                setValue(`subCampaigns[${index}].name`, e.target.value);
              }}
              label="Tên chiến dịch"
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Controller
          name={`subCampaigns[${index}].status`}
          control={control}
          render={() => (
            <>
              <Checkbox
                checked={getValues(`subCampaigns[${index}].status`)}
                onChange={(e) => {
                  setValue(`subCampaigns[${index}].status`, e.target.checked);
                }}
              />
              <span style={{ fontSize: 16 }}>Đang hoạt động</span>
            </>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default CampaignForm;
